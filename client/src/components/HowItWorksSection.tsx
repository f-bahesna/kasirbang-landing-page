import { Package, Phone, UserCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Pilih Paket",
    description: "Pilih paket KASIRBANG yang sesuai dengan kebutuhan bisnis Anda.",
    icon: Package,
  },
  {
    number: 2,
    title: "Hubungi Admin",
    description: "Hubungi admin kami via WhatsApp atau telepon untuk konfirmasi pemesanan.",
    icon: Phone,
  },
  {
    number: 3,
    title: "Konsultan IT Datang",
    description: "Tim konsultan IT kami akan datang ke lokasi Anda untuk instalasi dan pelatihan.",
    icon: UserCheck,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-how-it-works-headline"
          >
            Mulai dalam <span className="text-primary">3 Langkah Mudah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari pemesanan hingga siap pakai, kami yang urus semuanya untuk Anda.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="flex flex-col items-center text-center"
                data-testid={`step-${step.number}`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
