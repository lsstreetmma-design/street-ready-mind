import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferenceSection from "@/components/DifferenceSection";
import WhoForSection from "@/components/WhoForSection";
import ContactSection from "@/components/ContactSection";
import ConfidenceSection from "@/components/ConfidenceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DifferenceSection />
      <WhoForSection />
      <ConfidenceSection />
      <ContactSection />

      <footer className="py-6 text-center text-primary text-sm border-t border-border space-y-2">
        <p>For enquiries: LS-STREET-MMA@hotmail.com / +44 7407 007748</p>
        <p>© 2026 LS Street MMA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
