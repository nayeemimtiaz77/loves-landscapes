import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Leaf, Award, Smile, Wrench, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Loves Landscapes & Garden Services Northamptonshire" },
      { name: "description", content: "Local Northamptonshire landscaper with 12 years of experience in garden maintenance, lawn care and full garden transformations. Friendly, reliable, professional." },
      { property: "og:title", content: "About Loves Landscapes & Garden Services" },
      { property: "og:description", content: "12 years caring for gardens across Northamptonshire. Friendly, reliable, professional." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "Experienced", text: "Over a decade caring for gardens of every size and style." },
  { icon: ShieldCheck, title: "Reliable", text: "We turn up when we say we will — every time." },
  { icon: Wrench, title: "Professional", text: "Proper kit, proper finish. We take pride in our work." },
  { icon: Smile, title: "Friendly", text: "A local business that treats every customer like a neighbour." },
  { icon: Leaf, title: "Local", text: "Northamptonshire born and run. We know your gardens." },
  { icon: Sparkles, title: "Attention to Detail", text: "Crisp edges, clean lines and the little things that matter." },
  { icon: Heart, title: "Quality Results", text: "Premium finishes you'll be proud to show off." },
  { icon: Star, title: "Free Quotes", text: "No surprises, no pressure. Clear honest pricing." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Local. Reliable. Passionate about gardens."
        subtitle={`12 years of caring for outdoor spaces across ${SITE.area}.`}
        image="/services/landscaping.jpg"
        height="short"
      />

      <section className="container-prose py-24 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Story</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance leading-tight">A genuine love for outdoor spaces.</h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Loves Landscapes & Garden Services started with a simple idea: give every garden the care and attention it deserves. Twelve years on, we're still doing exactly that — for homes and properties right across Northamptonshire.</p>
            <p>From small front-garden tidy ups to full landscape transformations, every job gets the same approach: clear honest quote, reliable scheduling, premium finish. We're proud to be the team locals trust to keep their outdoor space looking its best.</p>
            <p>Whether you need regular maintenance, a one-off rescue, or a complete redesign — we'd love to help.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-3">
          <img src="/services/lawn-care.jpg" alt="Striped lawn" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover shadow-elegant" />
          <img src="/projects/p5-after.jpg" alt="Garden transformation" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover shadow-elegant translate-y-10" />
          <img src="/services/hedge-cutting.jpg" alt="Hedge cutting" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover shadow-elegant" />
          <img src="/projects/p2-after.jpg" alt="Lawn restoration" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover shadow-elegant translate-y-10" />
        </motion.div>
      </section>

      <section className="bg-card border-y border-border/60 py-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Why choose Loves Landscapes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="rounded-2xl bg-background border border-border/60 p-6 shadow-soft hover:shadow-elegant transition">
                <span className="grid place-items-center h-12 w-12 rounded-xl gradient-leaf text-white"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <GoogleReviewsWidget />
      <CtaBanner />
    </>
  );
}