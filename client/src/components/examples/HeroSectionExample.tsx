import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onBuyNow={() => console.log("Buy Now clicked")}
      onSeeDemo={() => console.log("See Demo clicked")}
    />
  );
}
