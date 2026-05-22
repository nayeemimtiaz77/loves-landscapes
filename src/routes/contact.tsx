import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Check, Loader2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Free Garden Quote | Loves Landscapes Northamptonshire" },
      { name: "description", content: "Get a free no-obligation quote for landscaping or garden services across Northamptonshire. Call, WhatsApp or email Loves Landscapes & Garden Services." },
      { property: "og:title", content: "Get a Free Quote — Loves Landscapes" },
      { property: "og:description", content: "Free quotes for landscaping & garden services in Northamptonshire." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = ["Landscaping", "Garden Maintenance", "Lawn Care", "Hedge Cutting", "Grounds Maintenance", "Garden Transformation", "Other"];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(SITE.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get Your Free Quote Today"
        subtitle="Professional landscaping and garden services across Northamptonshire."
        image="/hero/hero-main.jpg"
        height="short"
        showCtas={false}
      />

      <section className="container-prose py-20 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        {/* Contact info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
          <h2 className="font-display text-3xl">Get in touch</h2>
          <p className="text-muted-foreground">Prefer to call or message? Use any of the options below — we usually reply the same day.</p>

          <a href={SITE.phoneHref} className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant transition">
            <span className="grid place-items-center h-11 w-11 rounded-xl gradient-leaf text-white shrink-0"><Phone className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div><div className="font-semibold">{SITE.phone}</div></div>
          </a>
          <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant transition">
            <span className="grid place-items-center h-11 w-11 rounded-xl bg-[#25D366] text-white shrink-0"><MessageCircle className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div><div className="font-semibold">{SITE.phone}</div></div>
          </a>
          <a href={SITE.emailHref} className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-soft hover:shadow-elegant transition">
            <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-ink shrink-0"><Mail className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div><div className="font-semibold break-all">{SITE.email}</div></div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 shadow-soft">
            <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground shrink-0"><MapPin className="h-5 w-5" /></span>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Service area</div><div className="font-semibold">{SITE.area}</div></div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={onSubmit} className="rounded-3xl bg-card border border-border/60 shadow-elegant p-7 md:p-10 space-y-5">
          <h2 className="font-display text-2xl md:text-3xl">Request a free quote</h2>

          {status === "success" ? (
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 text-center">
              <Check className="h-10 w-10 mx-auto text-primary" />
              <p className="mt-3 font-semibold">Thanks! We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="block text-sm font-medium mb-1.5">Service Required <span className="text-destructive">*</span></label>
                <select name="service" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message <span className="text-destructive">*</span></label>
                <textarea name="message" required rows={5} placeholder="Tell us about your garden and what you'd like done..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">Something went wrong. Please try again or call us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition disabled:opacity-60"
              >
                {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : "Send Enquiry"}
              </button>
              <p className="text-xs text-muted-foreground text-center">We typically reply within a few hours during the working day.</p>
            </>
          )}
        </motion.form>
      </section>

      {/* Map */}
      <section className="container-prose pb-24">
        <div className="overflow-hidden rounded-3xl shadow-elegant border border-border/60 bg-card">
          <iframe
            title="Map of Northamptonshire"
            src="https://www.google.com/maps?q=Northampton%2C%20Northamptonshire%2C%20UK&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label} {required && <span className="text-destructive">*</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}