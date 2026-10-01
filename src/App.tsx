import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudienceStrip } from './components/AudienceStrip';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { PilotRequestSection } from './components/PilotRequestSection';
import { PilotRequestModal } from './components/PilotRequestModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  const handleOpenPilotModal = () => {
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onRequestPilot={handleOpenPilotModal} />

      <main className="flex-grow">
        {/* 1. Home Section */}
        <Hero onRequestPilot={handleOpenPilotModal} />
        <AudienceStrip />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Platform Section */}
        <PlatformSection />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Market Pricing Section */}
        <PricingSection onRequestPilot={handleOpenPilotModal} />

        {/* Request a Pilot In-Page Section (Embedded for direct access & anchor) */}
        <PilotRequestSection />

        {/* 6. FAQ Section */}
        <FAQSection />
      </main>

      {/* 7. Footer */}
      <Footer onRequestPilot={handleOpenPilotModal} />

      {/* Pilot Request Modal (Connected to all CTA triggers) */}
      <PilotRequestModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
      />
    </div>
  );
}

export default App;
