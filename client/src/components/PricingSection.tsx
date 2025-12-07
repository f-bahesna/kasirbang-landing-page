import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Clock, Headphones } from "lucide-react";

interface PricingSectionProps {
  onBuyNow?: () => void;
}

const includedFeatures = [
  "Offline POS System",
  "Stock Management",
  "Sales Reports & Analytics",
  "Unlimited Transactions",
  "Lifetime Updates",
  "Customer Support",
];

export default function PricingSection({ onBuyNow }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-pricing-headline"
          >
            Simple, <span className="text-primary">One-Time</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No monthly fees. No hidden costs. Pay once, use forever.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="p-8 md:p-12 relative overflow-visible">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
              Best Value
            </Badge>

            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">Lifetime License</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-bold" data-testid="text-price">Rp 1.500.000</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
            </div>

            <div className="space-y-3 mb-8">
              {includedFeatures.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3"
                  data-testid={`feature-check-${feature.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full text-base" 
              size="lg"
              onClick={onBuyNow}
              data-testid="button-buy-now-pricing"
            >
              Buy KASIRBANG Now
            </Button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Compare: Competitors charge Rp 500.000/month = Rp 6.000.000/year
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Headphones className="w-4 h-4" />
                  <span>Priority Support</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
