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
      title: "Membuka checkout...",
      description: "Anda akan diarahkan untuk menyelesaikan pembelian.",
    });
  };

  const handleSeeDemo = () => {
    toast({
      title: "Demo diminta",
      description: "Kami akan mengirimkan link demo ke email Anda segera.",
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
