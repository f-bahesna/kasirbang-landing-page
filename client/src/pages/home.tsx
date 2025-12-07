import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleGetStarted = () => {
    const pricingSection = document.querySelector("#pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBuyNow = () => {
    toast({
      title: "Opening checkout...",
      description: "You'll be redirected to complete your purchase.",
    });
  };

  const handleSeeDemo = () => {
    toast({
      title: "Demo requested",
      description: "We'll send you a demo link to your email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={handleGetStarted} />
      <main>
        <HeroSection onBuyNow={handleBuyNow} onSeeDemo={handleSeeDemo} />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection onBuyNow={handleBuyNow} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
