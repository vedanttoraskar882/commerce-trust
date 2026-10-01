export interface PilotSubmission {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
}

export interface StoredSubmissionsState {
  submissions: PilotSubmission[];
}
