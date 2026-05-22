import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BeforeAfter } from "@/components/BeforeAfter";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { FaqSection } from "@/components/FaqSection";
import { PROJECTS } from "@/lib/site";

const LANDSCAPING_FAQS = [
  { q: "Do you design as well as build?", a: "Yes — we offer simple design input as standard and can produce more detailed plans for larger projects. The aim is always a garden you'll love to use and look at." },
  { q: "How long does a landscaping project take?", a: "Small refreshes can be done in a day or two. Full transformations typically take 1–3 weeks depending on scope, planting and any hard landscaping involved." },
  { q: "Can you work with my existing plants and features?", a: "Absolutely. We'll always look at what can be saved, lifted or repositioned before suggesting anything new — it's better for the garden and for your budget." },
  { q: "Do you handle paving, fencing and patios?", a: "Yes — we deliver complete outdoor builds including patios, pathways, raised beds, fencing and decorative stonework as part of full landscaping projects." },
];

export const Route = createFileRoute("/landscaping")({
  head: () => ({
    meta: [
      { title: "Landscaping Northamptonshire | Garden Design & Transformations" },
      { name: "description", content: "Premium landscaping in Northamptonshire — garden transformations, lawn improvements, border edging and complete outdoor makeovers. Free quotes." },
      { property: "og:title", content: "Landscaping in Northamptonshire" },
      { property: "og:description", content: "Garden transformations, lawn improvements & full landscape makeovers." },
      { property: "og:url", content: "/landscaping" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/landscaping" }],
  }),
  component: LandscapingPage,
});

const POINTS = ["Garden transformations", "Lawn improvements", "Border edging", "Outdoor presentation", "Residential landscaping", "Garden makeovers"];

function LandscapingPage() {
  return (
    <>
      <PageHero
        eyebrow="Landscaping"
        title="Beautiful gardens, beautifully built."
        subtitle="Premium landscaping and full garden transformations across Northamptonshire."
        image="/services/landscaping.jpg"
      />

      <section className="container-prose py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What we do</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Outdoor spaces designed to last.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            We bring tired gardens back to life and build new outdoor spaces from scratch. From the first walk-around to the final tidy, every step is handled with care and precision.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5" /> {p}</li>
            ))}
          </ul>
        </motion.div>
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src="/services/landscaping.jpg" alt="Premium landscaped garden" loading="lazy" className="rounded-3xl aspect-[4/3] object-cover shadow-elegant" />
      </section>

      <section className="bg-card border-y border-border/60 py-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl">Recent transformations</h2>
            <p className="mt-3 text-muted-foreground">Drag the slider to reveal the after.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((p) => <BeforeAfter key={p.id} {...p} caption={p.caption} />)}
          </div>
        </div>
      </section>

      <GoogleReviewsWidget />
      <FaqSection items={LANDSCAPING_FAQS} title="Landscaping questions, answered" />
      <CtaBanner />
    </>
  );
}