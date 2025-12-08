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
      title: "Membuka whatsapp...",
      description: "Anda akan diarahkan ke Whatsapp untuk bertanya ke Admin.",
    });

    setTimeout(openWindowWhatsappLink, 2000)
  };

  const openWindowWhatsappLink = () => {
    const whatsappLink = 'https://api.whatsapp.com/send/?phone=6282133280057&text=Halo+Min+%EF%BF%BD%2C+saya+tertarik+aplikasi+kasirbang+dan+mau+konsultasi+dulu.+Bisa+dibantu+ya%3F+%EF%BF%BD&type=phone_number&app_absent=0'
    
    window.open(whatsappLink, '_blank');
  }

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
