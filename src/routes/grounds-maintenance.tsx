import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { FaqSection } from "@/components/FaqSection";

const GROUNDS_FAQS = [
  { q: "What size sites do you cover?", a: "Anything from a large private estate to small commercial grounds, holiday lets and rural properties. If it needs reliable, year-round upkeep — we'll quote for it." },
  { q: "Can you provide tailored schedules?", a: "Yes. We build a visit schedule around your site, peak seasons, and any events or inspections you need everything looking sharp for." },
  { q: "Do you handle commercial as well as residential?", a: "Both. Schools, holiday lets, business parks and private estates all benefit from the same attention to detail and reliable consistency." },
  { q: "Are you insured for larger sites?", a: "Fully — public liability insurance and professional equipment as standard, with risk assessments available on request for commercial sites." },
];

export const Route = createFileRoute("/grounds-maintenance")({
  head: () => ({
    meta: [
      { title: "Grounds Maintenance Northamptonshire | Property & Estate Care" },
      { name: "description", content: "Professional grounds maintenance across Northamptonshire — large gardens, properties and estates kept beautifully maintained year round." },
      { property: "og:title", content: "Grounds Maintenance Northamptonshire" },
      { property: "og:description", content: "Reliable upkeep of larger gardens, properties and grounds." },
      { property: "og:url", content: "/grounds-maintenance" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/grounds-maintenance" }],
  }),
  component: GroundsPage,
});

const POINTS = ["Grounds upkeep", "Property maintenance", "Garden management", "Large outdoor areas", "Consistent maintenance quality", "Tailored visit schedules"];

function GroundsPage() {
  return (
    <>
      <PageHero
        eyebrow="Grounds Maintenance"
        title="Larger grounds, consistently cared for."
        subtitle="Trusted upkeep of larger gardens, properties and grounds throughout Northamptonshire."
        image="/services/grounds-maintenance.jpg"
      />

      <section className="container-prose py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What we cover</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Premium quality at scale.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            We bring the same attention to detail to grounds maintenance as we do to a single back garden — with the reliability and consistency that larger properties demand.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {POINTS.map((p) => <li key={p} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5" /> {p}</li>)}
          </ul>
        </motion.div>
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} src="/services/grounds-maintenance.jpg" alt="Estate grounds maintenance" loading="lazy" className="rounded-3xl aspect-[4/3] object-cover shadow-elegant" />
      </section>

      <GoogleReviewsWidget />
      <FaqSection items={GROUNDS_FAQS} title="Grounds maintenance, answered" />
      <CtaBanner title="Looking after a larger property?" subtitle="We tailor schedules and pricing to suit. Get in touch for a free site visit and quote." />
    </>
  );
}