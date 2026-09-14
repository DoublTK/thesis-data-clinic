# ThesisHub Toolkit

Act as a world-class UI/UX designer and frontend developer. Build a premium, high-converting, fully responsive landing page for a SaaS/Service hybrid called "ThesisHub Baltics."

1. Global Design System & Vibe:

Audience: Stressed 3rd-year finance and economics university students who are under tight deadlines.

Theme: Strict Dark Mode. Use a deep slate background (e.g., Tailwind bg-slate-950).

Accents: Use Electric Blue (blue-500) as the primary brand color and Neon Mint (emerald-400) for success states or highlights.

Typography: Use a clean, modern sans-serif (like Inter or Geist) for all headings and body text. Use a monospace font (like Fira Code or Roboto Mono) for all numbers, prices, badges, and technical terms to give it a developer-tool feel.

UI Elements: heavily utilize shadcn/ui components. Apply glassmorphism (translucent backgrounds with backdrop-blur), thin subtle borders (border-slate-800), and soft glowing hover effects on cards.

Imagery: NO stock photos of people. Use clean geometric patterns, code snippet graphics, and lucide-react icons.

2. Page Structure & Exact Copy (Top to Bottom):

Section 1: Sticky Navigation Bar

Logo (Left): "ThesisHub_" (monospace font, bold, white text with a blinking blue cursor effect).

Links (Center): Data Vault, The R-Clinic, Pricing, FAQ. (Text color: slate-300, hover: white).

CTA (Right): "Book Emergency Clinic" (Solid blue button, slightly rounded).

Section 2: Hero Section (Split Layout)

Left Column (Copy):

Badge above headline: "⚡ Built by SSE Riga Alumni for the Spring Bottleneck"

Headline (Huge, bold, white): "Don't let dirty data delay your graduation."

Subheadline (slate-400 text): "Pre-cleaned Baltic datasets and emergency 1-on-1 R/Stata debugging tailored exclusively for empirical BSc theses."

Buttons: "Browse the Data Vault" (Solid Blue) next to "Book an R-Clinic" (Outline with blue text).

Right Column (Visual): Create a mock code-editor window with a dark header (red, yellow, green macOS dots). Inside, display a snippet of R code running a regression, with a green success message: "Data cleaned. Regression complete. p < 0.01."

Section 3: Trusted Sources Marquee

Subdued, grayscale text/icons in a horizontal row: "Data formatted from: Lursoft | Nasdaq Baltic | CSB | Orbis | Eurostat"

Section 4: How It Works (3-Column Grid)

Section Title: "Skip the scraping. Start the science."

Card 1: Icon: Database. Title: "1. The Vault". Text: "Download 10-year Baltic panels, ESG scores, and macro data, instantly formatted for your software."

Card 2: Icon: Terminal. Title: "2. The R-Clinic". Text: "Stuck on an error? Book a live debugging session. We fix heteroskedasticity, loops, and broken data frames."

Card 3: Icon: CheckCircle. Title: "3. The Thesis". Text: "Stop fighting CSV files and spend your time actually writing your analysis and securing your grade."

Section 5: The Data Vault (Interactive Catalog Preview)

Section Title: "Ready-to-Run Baltic Datasets"

Create a 2x2 grid of dataset cards. Each card must look like a technical file container.

Card Layout:

Top left: Monospace tags [.CSV] [.DTA].

Title: e.g., "Baltic Listed Equities (2015-2025)"

Description: "Daily closing prices, volume, and market cap for all Nasdaq Baltic main list equities."

Bottom: Price "€40" and a "Download" icon button.

Section 6: Pricing Tier (3-Column Grid)

Tier 1: "Dataset Only" (€40). Features: 1 pre-cleaned panel, Codebook included, Instant download. Button: "Browse Data".

Tier 2 (Highlight this card with a glowing border): "Emergency R-Clinic" (€35/hr). Features: Live 1-on-1 Zoom debugging, Screen sharing, R/Stata/Python support, Same-day booking. Button: "Book Session".

Tier 3: "The Panic Bundle" (€99). Features: 1 Premium Dataset + 2 Hours of live debugging + Priority scheduling. Button: "Get the Bundle".

Section 7: FAQ (Accordion Style)

Include an accordion component.

Q1: "Is this ghostwriting?" -> A: "Absolutely not. We do not write your thesis, interpret your results, or formulate your hypothesis. We provide structured public data and fix your code errors so you can run your own analysis."

Q2: "What software do you support?" -> A: "We specialize in R, Stata, and Python—the standard stack for economics and finance theses."

Section 8: Minimal Footer

Logo, copyright "2026 ThesisHub Baltics", and a strict disclaimer in small gray text: "ThesisHub is an independent data preparation service and is not affiliated with the Stockholm School of Economics in Riga."

Technical Requirements: Ensure the layout is flawlessly responsive. Use smooth transitions for hover states. The design must look like a high-end Silicon Valley developer tool (think Vercel, Linear, or Stripe dark mode).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://thesis-data-clinic.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/23723ef2-1a72-4753-8cc1-852947460029).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
