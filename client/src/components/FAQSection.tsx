import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does offline mode work?",
    answer: "KASIRBANG stores all transaction data locally on your device. When you're offline, you can still process sales, manage stock, and view reports. Once your internet connection returns, the app automatically syncs all data to the cloud.",
  },
  {
    question: "What's included in the lifetime license?",
    answer: "Your one-time purchase includes the full POS system, stock management, sales reports, unlimited transactions, free lifetime updates, and customer support. There are no recurring fees or hidden costs.",
  },
  {
    question: "Can I use KASIRBANG on multiple devices?",
    answer: "Each license covers one device. If you need to use KASIRBANG on multiple devices or locations, you can purchase additional licenses at a discounted rate.",
  },
  {
    question: "What happens if I need help?",
    answer: "We provide customer support via WhatsApp and email. Our team is available during business hours to help you with setup, troubleshooting, or any questions about using KASIRBANG.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, all your data is encrypted and stored securely. When offline, data is stored locally with encryption. Cloud syncing uses secure HTTPS connections to protect your business information.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If KASIRBANG doesn't meet your needs, contact us within 30 days for a full refund, no questions asked.",
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
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
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
