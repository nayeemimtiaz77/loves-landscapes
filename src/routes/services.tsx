import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { FaqSection } from "@/components/FaqSection";
import { AreasWeCover } from "@/components/AreasWeCover";
import { SERVICES } from "@/lib/site";

const SERVICES_FAQS = [
  { q: "Can I book just one service or do I need a package?", a: "Either works. Book a single one-off service like a hedge cut or lawn restoration, or combine multiple into a regular maintenance plan — whatever suits your garden." },
  { q: "How is pricing worked out?", a: "Every garden is different, so we quote per job after seeing the space. No hidden fees, no hourly surprises — just a clear written price up front." },
  { q: "Do you bring your own equipment?", a: "Yes, always. We arrive with professional-grade mowers, strimmers, hedge cutters and everything needed to complete the job to a premium standard." },
  { q: "What happens with the garden waste?", a: "We take it all away. Green waste is removed, recycled and disposed of responsibly — you're left with a clean, tidy garden, nothing else." },
  { q: "Can you maintain my garden while I'm away?", a: "Absolutely. Many of our customers book regular visits while travelling. We'll keep everything looking immaculate and send updates if you'd like them." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Garden Services | Landscaping, Lawn Care & More | Northamptonshire" },
      { name: "description", content: "Full range of professional garden services across Northamptonshire — landscaping, garden maintenance, lawn care, hedge cutting, grounds maintenance, strimming, weeding and more." },
      { property: "og:title", content: "Our Services — Loves Landscapes" },
      { property: "og:description", content: "Landscaping, lawn care, hedge cutting, grounds maintenance and garden transformations across Northamptonshire." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const IMAGES: Record<string, string> = {
  landscaping: "/services/landscaping.jpg",
  "garden-maintenance": "/services/garden-maintenance.jpg",
  "lawn-care": "/services/lawn-care.jpg",
  "hedge-cutting": "/services/hedge-cutting.jpg",
  "grounds-maintenance": "/services/grounds-maintenance.jpg",
  strimming: "/services/strimming.jpg",
  weeding: "/services/weeding.jpg",
  "border-edging": "/services/border-edging.jpg",
  "garden-clearances": "/services/garden-clearances.jpg",
  "garden-transformations": "/services/garden-transformations.jpg",
};

const INCLUDES: Record<string, string[]> = {
  landscaping: ["Site assessment & plan", "Garden design", "Borders & planting", "Lawn install & restoration", "Stone, gravel & path work"],
  "garden-maintenance": ["Regular visits", "Grass cutting", "Weeding & edging", "Hedge trimming", "Seasonal tidy ups"],
  "lawn-care": ["Mowing & striping", "Edging & strimming", "Scarifying & aeration on request", "Feed & weed treatments", "Lawn restoration"],
  "hedge-cutting": ["Precision trimming", "Shaping & topiary", "All hedge heights", "Full clear up", "One-off or regular"],
  "grounds-maintenance": ["Large area management", "Property upkeep", "Tailored schedules", "Consistent quality", "Reliable team"],
  strimming: ["Edges & banks", "Overgrown areas", "Awkward access", "Tidy finish", "Full clear up"],
  weeding: ["Borders & beds", "Paths & patios", "Driveways", "Hand & treatment options", "Preventative care"],
  "border-edging": ["Crisp defined lines", "Reshape existing beds", "Mulch & finish", "Premium look", "Long-lasting result"],
  "garden-clearances": ["Overgrown gardens", "Full waste removal", "End of tenancy", "Ready for replant", "Quick turnaround"],
  "garden-transformations": ["Before-and-after focus", "Design input", "Full make-over", "Lawn & borders", "Premium finish"],
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Premium garden services, tailored to you."
        subtitle="From regular maintenance to full landscape transformations — one trusted local team for every job."
        image="/services/grounds-maintenance.jpg"
        height="short"
      />

      <section className="container-prose py-20">
        <div className="grid gap-12">
          {SERVICES.map((s, i) => (
            <motion.article
              id={s.slug}
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28 grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Service 0{i + 1}
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {INCLUDES[s.slug].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary/15 blur-2xl" />
                  <img src={IMAGES[s.slug]} alt={s.title} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <GoogleReviewsWidget />
      <FaqSection items={SERVICES_FAQS} title="Service questions, answered" />
      <AreasWeCover />
      <CtaBanner title="Need help with your garden?" subtitle="Tell us what you'd like done — we'll come back with a free, honest quote." />
    </>
  );
}