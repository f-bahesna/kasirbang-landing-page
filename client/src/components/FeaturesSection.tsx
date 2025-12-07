import { Card } from "@/components/ui/card";
import offlineIcon from "@assets/generated_images/offline_sync_feature_icon.png";
import lifetimeIcon from "@assets/generated_images/lifetime_purchase_feature_icon.png";
import stockIcon from "@assets/generated_images/stock_management_feature_icon.png";
import reportIcon from "@assets/generated_images/sales_report_analytics_icon.png";

const features = [
  {
    title: "POS Offline",
    description: "Proses transaksi tanpa internet. Semua data penjualan tersimpan lokal dan sinkron otomatis saat koneksi kembali. Tidak ada lagi penjualan yang hilang saat mati lampu atau gangguan jaringan.",
    image: offlineIcon,
  },
  {
    title: "Sekali Beli Selamanya",
    description: "Bayar sekali, pakai seumur hidup. Tidak ada biaya tersembunyi, tidak ada langganan bulanan. Anda memiliki software sepenuhnya termasuk update dan dukungan selamanya.",
    image: lifetimeIcon,
  },
  {
    title: "Kelola Stok",
    description: "Pantau inventaris secara real-time dengan notifikasi stok menipis. Ketahui persis barang apa yang tersedia, mana yang laris, dan kapan harus restock.",
    image: stockIcon,
  },
  {
    title: "Laporan Penjualan",
    description: "Dashboard analitik lengkap dengan laporan harian, mingguan, dan bulanan. Export ke PDF atau Excel. Buat keputusan bisnis berdasarkan data yang akurat.",
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
            Semua yang Anda Butuhkan untuk{" "}
            <span className="text-primary">Kelola Bisnis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KASIRBANG hadir dengan fitur lengkap yang dirancang khusus untuk bisnis Indonesia.
            Mudah digunakan, powerful saat dibutuhkan.
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
