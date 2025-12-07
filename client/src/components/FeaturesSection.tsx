import { Card } from "@/components/ui/card";
import offlineIcon from "@assets/generated_images/offline_sync_feature_icon.png";
import lifetimeIcon from "@assets/generated_images/lifetime_purchase_feature_icon.png";
import stockIcon from "@assets/generated_images/stock_management_feature_icon.png";
import reportIcon from "@assets/generated_images/sales_report_analytics_icon.png";

const features = [
  {
    title: "Offline POS",
    description: "Complete transactions without internet. All your sales data is stored locally and syncs automatically when connection returns. Never miss a sale during outages.",
    image: offlineIcon,
  },
  {
    title: "One Lifetime Buy",
    description: "Pay once, use forever. No hidden fees, no recurring subscriptions. You own the software completely with lifetime updates and support included.",
    image: lifetimeIcon,
  },
  {
    title: "Manage Stock",
    description: "Real-time inventory tracking with low-stock alerts. Know exactly what you have, what's selling, and when to reorder. Keep your business running smoothly.",
    image: stockIcon,
  },
  {
    title: "Sales Report",
    description: "Comprehensive analytics dashboard with daily, weekly, and monthly reports. Export to PDF or Excel. Make data-driven decisions for your business.",
    image: reportIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-features-headline"
          >
            Everything You Need to{" "}
            <span className="text-primary">Run Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KASIRBANG comes packed with features designed specifically for Indonesian businesses.
            Simple to use, powerful when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 md:p-8 hover-elevate"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex flex-col gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
