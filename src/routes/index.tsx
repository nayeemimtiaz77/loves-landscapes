import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ReviewsList } from "@/components/ReviewsList";
import { CtaBanner } from "@/components/CtaBanner";
import { InstagramFeed } from "@/components/InstagramFeed";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { AreasWeCover } from "@/components/AreasWeCover";
import { StatsBar } from "@/components/StatsBar";
import { FaqSection } from "@/components/FaqSection";
import { PROJECTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loves Landscapes & Garden Services | Premium Landscaping Northamptonshire" },
      { name: "description", content: "Award-quality landscaping, lawn care, hedge cutting, grounds maintenance & garden transformations across Northamptonshire. 12 years experience. Free quotes — friendly local service." },
      { property: "og:title", content: "Loves Landscapes & Garden Services — Northamptonshire" },
      { property: "og:description", content: "Where your garden gets the Love it deserves. Premium landscaping & garden services across Northamptonshire." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HOME_FAQS = [
  { q: "What areas do you cover?", a: "We cover the whole of Northamptonshire — Northampton, Wellingborough, Kettering, Daventry, Towcester, Corby and all surrounding villages. Not sure if you're in our patch? Just ask." },
  { q: "Do you offer free quotes?", a: "Yes — every quote is free and no-obligation. We'll visit your garden, listen to what you want, and put together a clear written quote with honest pricing." },
  { q: "Are you insured?", a: "Absolutely. We carry full public liability insurance and use professional-grade equipment, so you're completely covered on every visit." },
  { q: "Do you do one-off jobs or only regular maintenance?", a: "Both. Plenty of customers book a one-off tidy-up or transformation, others go onto fortnightly or monthly maintenance plans. Whatever works for your garden." },
  { q: "How quickly can you start?", a: "For most jobs we can book you in within 1–2 weeks. Emergency tidies and pre-event work — get in touch and we'll do our best to fit you in fast." },
  { q: "Do you take the green waste away?", a: "Yes — all green waste is removed, recycled and disposed of responsibly. You won't be left with a pile of clippings to deal with." },
];

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Northamptonshire's Premium Garden Specialists"
        title={<>Gardens, crafted with <em className="font-serif not-italic text-accent" style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif', fontStyle: "italic" }}>care</em>.</>}
        subtitle="Landscaping, lawn care and garden maintenance — delivered by a trusted local team with twelve years of experience and an obsession for the finish."
        image="/hero/hero-main.jpg"
        height="full"
      />

      <StatsBar />

      {/* Intro / About teaser - premium green */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-10 gradient-mesh" />
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
            <div className="grid grid-cols-2 gap-3">
              <img src="/services/lawn-care.jpg" alt="Manicured striped lawn" loading="lazy" className="aspect-[3/4] rounded-2xl object-cover shadow-elegant" />
              <img src="/services/landscaping.jpg" alt="Premium landscaping" loading="lazy" className="aspect-[3/4] rounded-2xl object-cover shadow-elegant translate-y-8" />
            </div>
            <div className="absolute -bottom-6 -right-2 md:right-6 rounded-2xl bg-card border border-border/60 shadow-elegant p-4 max-w-[220px]">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-2 text-xs font-semibold">Rated 5.0 from 500+ happy customers across Northants</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" /> Dedicated to your garden
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] text-balance">
              Where your garden gets the <span className="italic text-primary">Love</span> it deserves.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're a local Northamptonshire team transforming gardens for over a decade. From a one-off tidy to a complete landscape design, we treat every garden — large or small — with the same care, craftsmanship and attention to detail.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Friendly local service", "Crisp, detailed finish", "Reliable & on time", "12+ years experience", "Fully insured", "Free written quotes"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 backdrop-blur px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition">
                Get a free quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="container-prose py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Expert Services</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Everything your garden needs</h2>
          <p className="mt-4 text-muted-foreground">From a quick tidy-up to a complete landscape transformation — we cover it all, beautifully.</p>
        </div>
        <ServicesGrid />
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-card border-y border-border/60 py-24 mt-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Real Transformations</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Before & After</h2>
            <p className="mt-4 text-muted-foreground">Drag the slider to see the difference our team makes. Real Northamptonshire gardens, real results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 6).map((p) => (
              <BeforeAfter key={p.id} before={p.before} after={p.after} caption={p.caption} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              See full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ProcessSection />

      {/* Gallery preview */}
      <section className="container-prose py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Landscaping Gallery</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Recent work we're proud of</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition self-start md:self-end">
            View Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PROJECTS.slice(0, 8).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-soft hover:shadow-elegant transition"
            >
              <img src={p.after} alt={p.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </section>

      <AreasWeCover />

      <GoogleReviewsWidget />

      {/* Facebook reviews */}
      <section className="container-prose py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-accent mb-3">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">Loved by gardens across Northamptonshire</h2>
          <p className="mt-4 text-muted-foreground">More real reviews from real customers on Facebook.</p>
        </div>
        <ReviewsList />
      </section>

      <InstagramFeed />

      <FaqSection
        items={HOME_FAQS}
        subtitle="Quick answers to the questions we get most often. Anything else — just ask."
      />

      <CtaBanner />

      <noscript>
        <p className="sr-only">{SITE.name} — call {SITE.phone}</p>
      </noscript>
    </>
  );
}