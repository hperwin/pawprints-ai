import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";
import StyleShowcase from "@/components/sections/StyleShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturesBento from "@/components/sections/FeaturesBento";
import PricingSection from "@/components/sections/PricingSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <StyleShowcase />
      <HowItWorks />
      <FeaturesBento />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
