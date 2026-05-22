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
      <HeroSection />
      <AboutSection />
      <DifferenceSection />
      <WhoForSection />
      <ConfidenceSection />
      <ContactSection />

      <footer className="py-6 text-center text-primary text-sm border-t border-border space-y-2 bg-[hsl(0,0%,16%)]">
        <p className="text-white font-bold">For enquiries: <a href="mailto:LS-STREET-MMA@hotmail.com" className="underline text-primary hover:opacity-80 transition-opacity">LS-STREET-MMA@hotmail.com</a> / <a href="tel:+447407007748" className="underline text-primary hover:opacity-80 transition-opacity">+44 7407 007748</a></p>
        <p className="text-white font-bold">© 2026 LS Street MMA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
