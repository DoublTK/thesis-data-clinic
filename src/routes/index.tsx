import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Terminal,
  Zap,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThesisHub Baltics | Baltic Data & Thesis Support" },
      { name: "description", content: "Pre-cleaned Baltic datasets and emergency R, Stata, and Python debugging for empirical BSc theses." },
      { property: "og:title", content: "ThesisHub Baltics | Baltic Data & Thesis Support" },
      { property: "og:description", content: "Clean Baltic datasets and live thesis debugging, built for the spring bottleneck." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const datasets = [
  { title: "Baltic Listed Equities (2015–2025)", description: "Daily closing prices, volume, and market cap for all Nasdaq Baltic main list equities.", price: "€40", tags: [".CSV", ".DTA"] },
  { title: "Baltic ESG Panel (2018–2025)", description: "Firm-level environmental, social, and governance indicators with standardized identifiers.", price: "€45", tags: [".CSV", ".RDS"] },
  { title: "Baltic Macro Indicators (2004–2025)", description: "Quarterly GDP, inflation, employment, trade, and policy rate data across the Baltics.", price: "€35", tags: [".CSV", ".DTA"] },
  { title: "Private Firms Financials (2014–2024)", description: "Anonymized balance sheet and profitability panel for Baltic private companies.", price: "€55", tags: [".CSV", ".DTA"] },
];

const tiers = [
  { name: "Dataset Only", price: "€40", suffix: "one-time", features: ["1 pre-cleaned panel", "Codebook included", "Instant download"], cta: "Browse Data", href: "#vault" },
  { name: "Emergency R-Clinic", price: "€35", suffix: "/hr", features: ["Live 1-on-1 Zoom debugging", "Screen sharing", "R/Stata/Python support", "Same-day booking"], cta: "Book Session", href: "mailto:clinic@thesishub.lv", featured: true },
  { name: "The Panic Bundle", price: "€99", suffix: "one-time", features: ["1 Premium Dataset", "2 Hours of live debugging", "Priority scheduling"], cta: "Get the Bundle", href: "mailto:clinic@thesishub.lv?subject=Panic%20Bundle" },
];

function Logo() {
  return <a href="#top" className="shrink-0 font-mono text-base font-bold text-foreground sm:text-lg">ThesisHub<span className="text-primary">_</span><span className="cursor-blink ml-0.5 inline-block h-4 w-0.5 bg-primary align-middle" /></a>;
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8" aria-label="Main navigation">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            {[['Data Vault', '#vault'], ['The R-Clinic', '#clinic'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </div>
          <Button asChild variant="hero" className="justify-self-end px-3 sm:px-4"><a href="mailto:clinic@thesishub.lv"><Zap /> <span className="hidden sm:inline">Book Emergency Clinic</span><span className="sm:hidden">Book Clinic</span></a></Button>
        </nav>
      </header>

      <section className="relative border-b border-border/70 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary sm:text-sm"><Zap className="size-3.5 shrink-0 fill-current" /><span>Built by SSE Riga Alumni for the Spring Bottleneck</span></div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">Don't let dirty data <span className="text-primary">delay your graduation.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Pre-cleaned Baltic datasets and emergency 1-on-1 R/Stata debugging tailored exclusively for empirical BSc theses.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="hero"><a href="#vault">Browse the Data Vault <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="electricOutline"><a href="#clinic"><Terminal /> Book an R-Clinic</a></Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/60 via-border to-success/30 blur-sm" />
            <div className="glass-panel relative overflow-hidden rounded-lg shadow-2xl shadow-primary/10">
              <div className="flex h-11 items-center border-b border-border bg-code px-4">
                <div className="flex gap-2" aria-hidden="true"><span className="size-3 rounded-full bg-destructive" /><span className="size-3 rounded-full bg-chart-4" /><span className="size-3 rounded-full bg-success" /></div>
                <span className="mx-auto -translate-x-5 font-mono text-[11px] text-code-muted">analysis.R</span>
              </div>
              <div className="overflow-x-auto bg-code/70 p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
                <div><span className="text-code-muted">01</span> <span className="ml-4 text-primary">library</span><span className="text-foreground">(tidyverse)</span></div>
                <div><span className="text-code-muted">02</span> <span className="ml-4 text-muted-foreground"># Baltic equities panel</span></div>
                <div><span className="text-code-muted">03</span> <span className="ml-4 text-foreground">panel </span><span className="text-primary">&lt;-</span><span className="text-foreground"> read_csv(</span><span className="text-success">&quot;baltics_clean.csv&quot;</span><span className="text-foreground">)</span></div>
                <div><span className="text-code-muted">04</span></div>
                <div><span className="text-code-muted">05</span> <span className="ml-4 text-foreground">model </span><span className="text-primary">&lt;-</span><span className="text-foreground"> lm(roe ~ esg + size,</span></div>
                <div><span className="text-code-muted">06</span> <span className="ml-14 text-foreground">data = panel)</span></div>
                <div><span className="text-code-muted">07</span> <span className="ml-4 text-primary">summary</span><span className="text-foreground">(model)</span></div>
                <div className="mt-5 border-t border-border pt-4 text-success"><CheckCircle2 className="mr-2 inline size-4" />Data cleaned. Regression complete. p &lt; 0.01.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card/30 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-10">
          <span className="font-mono text-xs uppercase text-code-muted">Data formatted from:</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-mono text-sm font-semibold text-muted-foreground sm:gap-x-10">{["Lursoft", "Nasdaq Baltic", "CSB", "Orbis", "Eurostat"].map((source) => <span key={source}>{source}</span>)}</div>
        </div>
      </section>

      <section id="clinic" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">// Your shortest path to analysis</p>
          <h2 className="max-w-3xl text-3xl font-bold sm:text-5xl">Skip the scraping. Start the science.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [Database, "1. The Vault", "Download 10-year Baltic panels, ESG scores, and macro data, instantly formatted for your software."],
              [Terminal, "2. The R-Clinic", "Stuck on an error? Book a live debugging session. We fix heteroskedasticity, loops, and broken data frames."],
              [CheckCircle2, "3. The Thesis", "Stop fighting CSV files and spend your time actually writing your analysis and securing your grade."],
            ].map(([Icon, title, text]) => (
              <Card key={title as string} className="card-glow glass-panel rounded-lg shadow-none">
                <CardHeader><div className="mb-6 grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary"><Icon className="size-5" /></div><CardTitle className="font-mono text-lg">{title as string}</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{text as string}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="border-y border-border/70 bg-card/25 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 font-mono text-xs font-semibold uppercase text-success">// Clean inputs</p><h2 className="text-3xl font-bold sm:text-5xl">Ready-to-Run Baltic Datasets</h2></div><span className="font-mono text-xs text-code-muted">UPDATED: SPRING 2026</span></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {datasets.map((dataset) => (
              <Card key={dataset.title} className="card-glow glass-panel rounded-lg shadow-none">
                <CardHeader>
                  <div className="mb-5 flex gap-2">{dataset.tags.map((tag) => <span key={tag} className="rounded border border-border bg-code px-2 py-1 font-mono text-[10px] text-success">[{tag}]</span>)}</div>
                  <CardTitle className="text-xl">{dataset.title}</CardTitle>
                </CardHeader>
                <CardContent className="min-h-16 text-sm leading-6 text-muted-foreground">{dataset.description}</CardContent>
                <CardFooter className="justify-between border-t border-border/70 pt-5"><span className="font-mono text-2xl font-semibold">{dataset.price}</span><Button asChild size="icon" variant="glass" aria-label={`Download ${dataset.title}`}><a href={`mailto:data@thesishub.lv?subject=${encodeURIComponent(dataset.title)}`}><Download /></a></Button></CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">// Transparent pricing</p><h2 className="text-3xl font-bold sm:text-5xl">Choose your fastest way forward.</h2>
          <div className="mt-12 grid items-stretch gap-4 text-left lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`relative flex flex-col rounded-lg shadow-none ${tier.featured ? "border-primary bg-primary/5 shadow-[0_0_50px_var(--primary-glow)]" : "glass-panel"}`}>
                {tier.featured && <span className="absolute right-4 top-4 rounded border border-primary/40 bg-primary/15 px-2 py-1 font-mono text-[10px] uppercase text-primary">Most urgent</span>}
                <CardHeader><CardTitle className="pr-20 font-mono text-sm text-muted-foreground">{tier.name}</CardTitle><div className="pt-5"><span className="font-mono text-4xl font-bold">{tier.price}</span><span className="ml-2 font-mono text-xs text-code-muted">{tier.suffix}</span></div></CardHeader>
                <CardContent className="flex-1"><ul className="space-y-3">{tier.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-success" />{feature}</li>)}</ul></CardContent>
                <CardFooter><Button asChild size="lg" variant={tier.featured ? "hero" : "glass"} className="w-full"><a href={tier.href}>{tier.cta} <ArrowRight /></a></Button></CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-border/70 bg-card/25 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">// FAQ</p><h2 className="text-3xl font-bold sm:text-4xl">Clear answers.<br />No fine print.</h2></div>
          <Accordion type="single" collapsible className="border-t border-border">
            <AccordionItem value="ghostwriting" className="border-border"><AccordionTrigger className="py-6 text-base hover:no-underline">Is this ghostwriting?</AccordionTrigger><AccordionContent className="pr-8 leading-7 text-muted-foreground">Absolutely not. We do not write your thesis, interpret your results, or formulate your hypothesis. We provide structured public data and fix your code errors so you can run your own analysis.</AccordionContent></AccordionItem>
            <AccordionItem value="software" className="border-border"><AccordionTrigger className="py-6 text-base hover:no-underline">What software do you support?</AccordionTrigger><AccordionContent className="pr-8 leading-7 text-muted-foreground">We specialize in R, Stata, and Python—the standard stack for economics and finance theses.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-[auto_1fr] sm:items-start"><Logo /><div className="sm:text-right"><p className="font-mono text-xs text-muted-foreground">© 2026 ThesisHub Baltics</p><p className="mt-3 text-xs leading-5 text-code-muted">ThesisHub is an independent data preparation service and is not affiliated with the Stockholm School of Economics in Riga.</p></div></div></footer>
    </main>
  );
}