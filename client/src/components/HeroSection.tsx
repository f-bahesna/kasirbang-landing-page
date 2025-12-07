import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WifiOff, CreditCard, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/kasirbang_pos_tablet_interface.png";

interface HeroSectionProps {
  onBuyNow?: () => void;
  onSeeDemo?: () => void;
}

export default function HeroSection({ onBuyNow, onSeeDemo }: HeroSectionProps) {
  const trustBadges = [
    { icon: WifiOff, label: "100% Offline Capable" },
    { icon: CreditCard, label: "One-Time Payment" },
    { icon: Clock, label: "No Monthly Fees" },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Indonesia's First Offline POS
              </Badge>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                data-testid="text-hero-headline"
              >
                Never Lose a Sale{" "}
                <span className="text-primary">Again</span>
              </h1>
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
                data-testid="text-hero-subheadline"
              >
                KASIRBANG works even without internet connection. Complete transactions, 
                manage stock, and generate reports - all offline. Data syncs automatically 
                when you're back online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onBuyNow}
                className="text-base"
                data-testid="button-buy-lifetime"
              >
                Buy Lifetime License
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={onSeeDemo}
                className="text-base"
                data-testid="button-see-demo"
              >
                See Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  data-testid={`badge-trust-${badge.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
              <img
                src={heroImage}
                alt="KASIRBANG POS System Interface"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
