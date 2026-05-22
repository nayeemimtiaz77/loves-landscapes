import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BeforeAfter } from "@/components/BeforeAfter";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { FaqSection } from "@/components/FaqSection";
import { PROJECTS } from "@/lib/site";

const MAINT_FAQS = [
  { q: "How often will you visit?", a: "Most customers pick fortnightly or monthly visits depending on the season and the size of their garden. We'll recommend a frequency that keeps it looking great year-round." },
  { q: "Can I be at home or do I need to be in?", a: "Either is fine. Many customers leave us a key or side gate access — we let ourselves in, do the work, and lock up when we leave." },
  { q: "Will the same person come every time?", a: "Yes — Grant or a regular team member you'll come to recognise. Continuity matters, both for quality and for knowing your garden inside out." },
  { q: "What happens in winter?", a: "Maintenance carries on, just at a lighter pace — leaf clearance, tidying, pruning and prep work that pays off when spring arrives." },
];

export const Route = createFileRoute("/garden-maintenance")({
  head: () => ({
    meta: [
      { title: "Garden Maintenance Northamptonshire | Regular Garden Care" },
      { name: "description", content: "Reliable garden maintenance across Northamptonshire — grass cutting, weeding, hedge trimming, seasonal tidy ups. Friendly local team. Free quotes." },
      { property: "og:title", content: "Garden Maintenance Northamptonshire" },
      { property: "og:description", content: "Regular professional garden care across Northamptonshire." },
      { property: "og:url", content: "/garden-maintenance" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/garden-maintenance" }],
  }),
  component: GardenMaintenancePage,
});

const FOCUS = ["Grass cutting", "Lawn care", "Weeding", "Hedge trimming", "Seasonal tidy ups", "General garden maintenance"];

function GardenMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Garden Maintenance"
        title="A garden that always looks its best."
        subtitle="Reliable, friendly garden maintenance across Northamptonshire — weekly, fortnightly or monthly."
        image="/projects/p1-after.jpg"
      />

      <section className="container-prose py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src="/services/lawn-care.jpg" alt="Maintained lawn" loading="lazy" className="rounded-3xl aspect-[4/3] object-cover shadow-elegant order-2 lg:order-1" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What's included</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Clean. Tidy. Cared for.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            One reliable local team handling all the regular jobs — so your garden stays in beautiful shape all year round, without you ever having to chase.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {FOCUS.map((p) => <li key={p} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5" /> {p}</li>)}
          </ul>
        </motion.div>
      </section>

      <section className="bg-card border-y border-border/60 py-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl">Real maintenance jobs</h2>
            <p className="mt-3 text-muted-foreground">From overgrown to immaculate.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.slice(4, 8).map((p) => <BeforeAfter key={p.id} {...p} caption={p.caption} />)}
          </div>
        </div>
      </section>

      <GoogleReviewsWidget />
      <FaqSection items={MAINT_FAQS} title="Maintenance questions, answered" />
      <CtaBanner />
    </>
  );
}