import type { PilotSubmission } from '../types';

export const STORAGE_KEY = 'commerceTrustPilotSubmissions';

export function getStoredSubmissions(): PilotSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Error reading submissions from localStorage:', err);
    return [];
  }
}

export function savePilotSubmission(data: {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}): PilotSubmission {
  // Required logic specified in guidelines:
  const existingSubmissions: PilotSubmission[] =
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') || [];

  const newSubmission: PilotSubmission = {
    fullName: data.fullName.trim(),
    phoneNumber: data.phoneNumber.trim(),
    emailAddress: data.emailAddress.trim(),
    organisationName: data.organisationName.trim(),
    submittedAt: new Date().toISOString(),
  };

  existingSubmissions.push(newSubmission);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(existingSubmissions)
  );

  return newSubmission;
}
