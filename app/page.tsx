import Navbar           from "@/components/ui/Navbar";
import HeroSection      from "@/components/sections/HeroSection";
import ProblemSection   from "@/components/sections/ProblemSection";
import ServicesSection  from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import AboutSection     from "@/components/sections/AboutSection";
import ContactSection   from "@/components/sections/ContactSection";
import Footer           from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
