import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, WifiOff } from "lucide-react";
import KasirbangLogo from "@assets/kasirbang_logo.png";

interface NavigationProps {
  onGetStarted?: () => void;
}

export default function Navigation({ onGetStarted }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fitur", href: "#features" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            {/* <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
              <WifiOff className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold" data-testid="text-logo">KASIRBANG</span> */}
            <img className="h-10 w-70 shadow-md rounded-xl" src={KasirbangLogo}/>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={onGetStarted}
              data-testid="button-get-started-nav"
            >
              Mulai Sekarang
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full" 
                  onClick={onGetStarted}
                  data-testid="button-get-started-mobile"
                >
                  Mulai Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
