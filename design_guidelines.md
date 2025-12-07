# KASIRBANG POS Landing Page - Design Guidelines

## Design Approach

**Selected Approach:** Design System (Material Design) + SaaS Landing Page Patterns
**Justification:** Business software product requiring credibility, clarity, and conversion optimization. Drawing inspiration from successful fintech/POS landing pages like Square, Stripe, and Toast POS.

**Core Principles:**
- Professional credibility through clean, structured layouts
- Clear value proposition with feature-benefit hierarchy
- Trust-building through systematic information presentation
- Conversion-focused design with strategic CTAs

## Typography System

**Font Families:**
- Primary: Inter (headers, UI elements)
- Secondary: System-ui fallback for body text

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Feature Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- CTAs: text-base md:text-lg, font-semibold

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content padding: px-4 md:px-6 lg:px-8
- Vertical section spacing: py-16 md:py-20 lg:py-24

## Page Structure & Components

### 1. Navigation Header
**Layout:** Fixed top navigation with backdrop blur
**Components:**
- Logo (left): KASIRBANG branding with icon
- Navigation links (center): Features, Pricing, About
- CTA button (right): "Get Started" or "Buy Now"
- Trust indicator: Small badge showing "Trusted by 1,000+ businesses"

### 2. Hero Section (80-90vh)
**Layout:** Two-column split (60/40) on desktop, stacked on mobile
**Left Column:**
- Main headline emphasizing offline capability: "Indonesia's First Offline POS System"
- Subheadline highlighting key differentiation: "Never lose a sale again. KASIRBANG works even without internet connection."
- Two CTA buttons: Primary "Buy Lifetime License" + Secondary "See Demo"
- Trust badges row: "100% Offline Capable" | "One-Time Payment" | "No Monthly Fees"

**Right Column:**
- Hero image showing KASIRBANG dashboard interface on tablet/device with merchant using it in real retail environment

### 3. Problem Statement Section
**Layout:** Centered single column, max-w-4xl
**Content:**
- Bold headline: "Tired of POS Systems That Stop Working?"
- Three-column pain points grid with icons:
  - Lost sales during internet outages
  - Expensive monthly subscriptions
  - Complicated stock management

### 4. Features Showcase Section
**Layout:** 2x2 grid on desktop (grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12)
**Each Feature Card:**
- Large icon (96x96px) using Heroicons
- Feature title (text-2xl font-bold)
- Detailed description (3-4 lines explaining benefit)
- Visual micro-illustration or screenshot demonstrating feature

**Features:**
1. **Offline POS:** "Complete transactions without internet. All data syncs automatically when connection returns."
2. **One Lifetime Buy:** "Pay once, use forever. No hidden fees, no subscriptions, complete ownership."
3. **Manage Stock:** "Real-time inventory tracking with low-stock alerts and automated reordering suggestions."
4. **Sales Report:** "Comprehensive analytics dashboard with daily, weekly, monthly reports and export capabilities."

### 5. How It Works Section
**Layout:** Horizontal timeline/process flow (3 steps)
**Components:**
- Step numbers in circles with connecting lines
- Step 1: "Purchase License" → Step 2: "Install & Setup" → Step 3: "Start Selling"
- Each step includes icon, title, and brief description

### 6. Benefits Deep Dive Section
**Layout:** Alternating two-column layouts with images
**Structure:**
- Benefit 1 (Image left, text right): Offline reliability
- Benefit 2 (Text left, image right): Cost savings vs. subscription models
- Benefit 3 (Image left, text right): Ease of use and setup

### 7. Pricing/CTA Section
**Layout:** Centered card design, max-w-2xl
**Components:**
- Large pricing display with lifetime cost
- Feature checklist (all 4 main features with checkmarks)
- Comparison note: "vs. Rp 500,000/month with competitors = Rp 6,000,000/year"
- Primary CTA: "Buy KASIRBANG Now - Lifetime Access"
- Trust elements: Money-back guarantee badge, secure payment icons

### 8. FAQ Section
**Layout:** Two-column accordion on desktop, single column mobile
**Content:** 6-8 common questions about offline functionality, updates, support

### 9. Footer
**Layout:** Four-column grid (company info, product, support, legal)
**Components:**
- KASIRBANG logo and tagline
- Product links (features, pricing, download)
- Support links (documentation, contact, WhatsApp)
- Social media icons
- Payment method icons
- Copyright and legal links

## Images Strategy

**Hero Image:** High-quality photo showing merchant using tablet with KASIRBANG interface in authentic Indonesian retail environment (toko, warung, or cafe setting). Image should show both the device and happy merchant/customer interaction.

**Feature Screenshots:** Clean, modern UI screenshots of actual KASIRBANG dashboard for each feature section. Use device mockups (tablet frames) for professional presentation.

**Benefit Section Images:** Contextual photos showing real business scenarios - busy cashier during peak hours, merchant checking stock, reviewing reports on phone.

## Component Library

**Buttons:**
- Primary: Large rounded buttons with backdrop blur when over images
- Secondary: Outlined style with transparent background
- Sizes: px-6 py-3 md:px-8 md:py-4 for main CTAs

**Cards:**
- Feature cards: Rounded-lg with subtle border, p-6 md:p-8
- Pricing card: Rounded-xl with prominent border, p-8 md:p-12

**Icons:**
- Use Heroicons throughout for consistency
- Feature icons: 24x24px base, 32x32px on larger screens
- Trust badges: 16x16px inline icons

**Spacing Consistency:**
- Card padding: p-6 or p-8
- Section gaps: gap-8 or gap-12
- Grid gaps: gap-6 md:gap-8 lg:gap-12

## Responsive Behavior

- Navigation: Hamburger menu below md breakpoint
- Hero: Stack image below text on mobile
- Feature grid: 1 column mobile, 2 columns desktop
- All sections maintain proper padding and readable line lengths on mobile