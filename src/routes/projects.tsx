import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Garden Transformations Northamptonshire | Loves Landscapes" },
      { name: "description", content: "Browse our portfolio of garden transformations across Northamptonshire — every project shown side-by-side, before and after." },
      { property: "og:title", content: "Projects — Loves Landscapes" },
      { property: "og:description", content: "Real garden transformations across Northamptonshire — side by side before and afters." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active ? PROJECTS.find((p) => p.id === active) : null;

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Real gardens. Genuine transformations."
        subtitle="Every project below was finished by our own team across Northamptonshire. Drag any slider to reveal the difference."
        image="/projects/p5-after.jpg"
        height="short"
      />

      {/* Stat strip */}
      <section className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="container-prose grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60 py-6">
          {[
            { v: "500+", l: "Gardens transformed" },
            { v: "12 yrs", l: "Building reputation" },
            { v: "100%", l: "In-house team" },
            { v: "5.0★", l: "Customer rating" },
          ].map((s) => (
            <div key={s.l} className="px-4 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured large project */}
      <section className="container-prose py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center"
        >
          <BeforeAfter before={PROJECTS[4].before} after={PROJECTS[4].after} caption={undefined} />
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-4 w-4" /> Featured Project
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              {PROJECTS[4].caption}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Tired, overgrown gardens reborn with precision edging, fresh stripes and crisp borders. Every transformation is approached the same way — with patience, craftsmanship and an obsession for the finish.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {["Edging", "Lawn restoration", "Borders"].map((t) => (
                <span key={t} className="text-center text-xs font-semibold uppercase tracking-wider rounded-full bg-card border border-primary/30 text-primary px-3 py-2">
                  {t}
                </span>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Get a quote for yours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* All projects grid */}
      <section className="relative py-24 gradient-leaf-soft">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Portfolio</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Every project. Side by side.</h2>
            <p className="mt-4 text-muted-foreground">Drag the slider on any card to reveal the transformation. Tap a card to expand.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group rounded-3xl bg-card border border-border/60 p-3 shadow-soft hover:shadow-elegant transition"
              >
                <BeforeAfter before={p.before} after={p.after} caption={undefined} />
                <div className="flex items-start justify-between gap-3 px-3 py-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Project #{String(p.id).padStart(2, "0")}</p>
                    <p className="mt-1 font-display text-base leading-snug">{p.caption}</p>
                  </div>
                  <button
                    onClick={() => setActive(p.id)}
                    aria-label="Expand project"
                    className="shrink-0 grid place-items-center h-10 w-10 rounded-full bg-card border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <ArrowRight className="h-4 w-4 -rotate-45" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsWidget />
      <CtaBanner title="Ready for your transformation?" subtitle="Tell us about your garden and we'll come back with a free, honest quote." />

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm grid place-items-center p-4"
          >
            <button onClick={() => setActive(null)} className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white hover:bg-white/25">
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-card rounded-3xl overflow-hidden shadow-elegant"
            >
              <div className="p-4 md:p-6">
                <BeforeAfter before={selected.before} after={selected.after} />
              </div>
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Project #{String(selected.id).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{selected.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}