import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { PROJECTS, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Premium Garden Photography Northamptonshire | Loves Landscapes" },
      { name: "description", content: "A curated gallery of finished garden work across Northamptonshire — lawns, borders, hedges and landscapes by Loves Landscapes." },
      { property: "og:title", content: "Gallery — Loves Landscapes" },
      { property: "og:description", content: "Curated photography of finished garden work across Northamptonshire." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

// All "after" / finished work photography
const GALLERY = [
  ...PROJECTS.map((p) => ({ src: p.after, caption: p.caption })),
  { src: "/services/landscaping.jpg", caption: "Modern stone patio landscape design" },
  { src: "/services/lawn-care.jpg", caption: "Striped emerald lawn finish" },
  { src: "/services/hedge-cutting.jpg", caption: "Precision hedge architecture" },
  { src: "/services/border-edging.jpg", caption: "Crisp half-moon border edge" },
  { src: "/services/weeding.jpg", caption: "Freshly mulched borders" },
  { src: "/services/garden-transformations.jpg", caption: "Complete back garden transformation" },
  { src: "/services/grounds-maintenance.jpg", caption: "Estate grounds, perfectly kept" },
  { src: "/services/garden-maintenance.jpg", caption: "English country garden upkeep" },
  { src: "/services/strimming.jpg", caption: "Crisp edges along stone path" },
];

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "lawns", label: "Lawns" },
  { id: "borders", label: "Borders & Edging" },
  { id: "hedges", label: "Hedges" },
  { id: "landscapes", label: "Landscapes" },
];

function categoryOf(src: string) {
  if (src.includes("lawn") || src.includes("p2") || src.includes("p6") || src.includes("p7")) return "lawns";
  if (src.includes("border") || src.includes("weed") || src.includes("p4")) return "borders";
  if (src.includes("hedge") || src.includes("p8")) return "hedges";
  if (src.includes("landscap") || src.includes("transform") || src.includes("grounds") || src.includes("p5") || src.includes("p3")) return "landscapes";
  return "all";
}

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const [cat, setCat] = useState<string>("all");

  const filtered = GALLERY.filter((g) => cat === "all" || categoryOf(g.src) === cat);
  const go = (dir: 1 | -1) => {
    if (active === null) return;
    const next = (active + dir + filtered.length) % filtered.length;
    setActive(next);
  };

  return (
    <>
      <PageHero
        eyebrow="The Gallery"
        title="A garden in every photograph."
        subtitle="Finished work, captured with care. Click any image to view it full size."
        image="/services/garden-transformations.jpg"
        height="short"
      />

      {/* Intro bar */}
      <section className="border-b border-border/60 bg-card/60">
        <div className="container-prose flex flex-col md:flex-row md:items-center justify-between gap-6 py-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-full gradient-leaf text-white shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Curated Portfolio</p>
              <p className="font-display text-lg leading-tight">{GALLERY.length} finished works across Northamptonshire</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${cat === c.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-background border border-border text-foreground/80 hover:bg-muted"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 gradient-mesh opacity-60" />
        <div className="container-prose">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <motion.button
                layout
                key={img.src + i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.03 }}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted shadow-soft hover:shadow-elegant transition"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Loves Landscapes</p>
                  <p className="mt-1 text-sm font-display leading-snug">{img.caption}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service tiles */}
      <section className="container-prose py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">From the Studio</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Some of what we do best</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SERVICES.slice(0, 8).map((s) => (
            <a key={s.slug} href={`/services#${s.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition">
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-display text-base leading-tight">{s.title}</p>
            </a>
          ))}
        </div>
      </section>

      <GoogleReviewsWidget />
      <CtaBanner />

      <AnimatePresence>
        {active !== null && filtered[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm grid place-items-center p-4"
          >
            <button onClick={() => setActive(null)} className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white hover:bg-white/25">
              <X />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-5 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25">
              <ChevronLeft />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-5 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/25">
              <ChevronRight />
            </button>
            <motion.figure
              key={filtered[active].src}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full"
            >
              <img src={filtered[active].src} alt={filtered[active].caption} className="max-h-[82vh] mx-auto w-auto rounded-2xl shadow-elegant" />
              <figcaption className="mt-4 text-center text-sm text-white/85">{filtered[active].caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}