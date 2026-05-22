import { createFileRoute } from "@tanstack/react-router";
import { Star, Facebook } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ReviewsList } from "@/components/ReviewsList";
import { CtaBanner } from "@/components/CtaBanner";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Loves Landscapes & Garden Services Northamptonshire" },
      { name: "description", content: "5-star reviews from real customers across Northamptonshire. See what people are saying about Loves Landscapes & Garden Services on Facebook." },
      { property: "og:title", content: "Customer Reviews — Loves Landscapes" },
      { property: "og:description", content: "Real Facebook reviews from happy customers across Northamptonshire." },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by gardens across Northamptonshire."
        subtitle="Real feedback from real customers — straight from Facebook."
        image="/services/lawn-care.jpg"
        height="short"
      />

      <section className="container-prose py-16">
        <div className="text-center max-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-accent mb-3">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-6 w-6 fill-current" />)}
          </div>
          <p className="text-2xl font-display font-bold">Rated 5 / 5 on Facebook</p>
          <p className="text-sm text-muted-foreground mt-1">Based on customer reviews across Northamptonshire.</p>
          <a href={SITE.facebookReviews} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition">
            <Facebook className="h-4 w-4" /> View on Facebook
          </a>
        </div>
        <ReviewsList />
      </section>

      <GoogleReviewsWidget />
      <CtaBanner />
    </>
  );
}