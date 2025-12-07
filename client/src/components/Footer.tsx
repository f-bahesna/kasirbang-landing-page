import { WifiOff } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  support: [
    { label: "Documentation", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "WhatsApp Support", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#") && href !== "#") {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
                <WifiOff className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">KASIRBANG</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Indonesia's first offline POS system. Built for businesses that never stop.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-md bg-muted hover-elevate"
                data-testid="link-social-whatsapp"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-md bg-muted hover-elevate"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-md bg-muted hover-elevate"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} KASIRBANG. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with care in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
