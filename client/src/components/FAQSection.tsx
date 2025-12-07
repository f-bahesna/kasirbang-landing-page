import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara kerja mode offline?",
    answer: "KASIRBANG menyimpan semua data transaksi secara lokal di perangkat Anda. Saat offline, Anda tetap bisa memproses penjualan, mengelola stok, dan melihat laporan. Begitu koneksi internet kembali, aplikasi otomatis menyinkronkan semua data ke cloud.",
  },
  {
    question: "Apa saja yang termasuk dalam lisensi selamanya?",
    answer: "Pembelian sekali Anda mencakup sistem POS lengkap, manajemen stok, laporan penjualan, transaksi unlimited, update selamanya gratis, dan dukungan pelanggan. Tidak ada biaya berulang atau biaya tersembunyi.",
  },
  {
    question: "Bisakah saya menggunakan KASIRBANG di beberapa perangkat?",
    answer: "Setiap lisensi mencakup satu perangkat. Jika Anda perlu menggunakan KASIRBANG di beberapa perangkat atau lokasi, Anda bisa membeli lisensi tambahan dengan harga diskon.",
  },
  {
    question: "Bagaimana jika saya butuh bantuan?",
    answer: "Kami menyediakan dukungan pelanggan via WhatsApp dan email. Tim kami tersedia di jam kerja untuk membantu Anda dengan setup, troubleshooting, atau pertanyaan apapun tentang penggunaan KASIRBANG.",
  },
  {
    question: "Apakah data saya aman?",
    answer: "Ya, semua data Anda terenkripsi dan tersimpan dengan aman. Saat offline, data disimpan secara lokal dengan enkripsi. Sinkronisasi cloud menggunakan koneksi HTTPS yang aman untuk melindungi informasi bisnis Anda.",
  },
  {
    question: "Apakah ada garansi uang kembali?",
    answer: "Ya! Kami menawarkan garansi uang kembali 30 hari. Jika KASIRBANG tidak memenuhi kebutuhan Anda, hubungi kami dalam 30 hari untuk pengembalian dana penuh, tanpa pertanyaan.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-faq-headline"
          >
            Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan? Kami punya jawabannya. Jika tidak menemukan yang Anda cari, hubungi tim support kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
