import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-semibold">Home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: SITE.name,
  image: "/logo/logo.jpg",
  telephone: SITE.phone,
  email: SITE.email,
  url: "/",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "GB",
  },
  areaServed: SITE.area,
  sameAs: [SITE.facebook, SITE.instagram],
  priceRange: "££",
  slogan: SITE.tagline,
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#2d5a3d" },
      { title: "Loves Landscapes & Garden Services | Northamptonshire" },
      { name: "description", content: "Professional landscaping, garden maintenance, lawn care, hedge cutting & grounds maintenance across Northamptonshire. 12 years experience. Free quotes." },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo/logo.jpg" },
      { property: "og:image:alt", content: "Loves Landscapes & Garden Services logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo/logo.jpg" },
      { name: "twitter:image:alt", content: "Loves Landscapes & Garden Services logo" },
      { property: "og:title", content: "Loves Landscapes & Garden Services | Northamptonshire" },
      { name: "twitter:title", content: "Loves Landscapes & Garden Services | Northamptonshire" },
      { property: "og:description", content: "Professional landscaping, garden maintenance, lawn care, hedge cutting & grounds maintenance across Northamptonshire. 12 years experience. Free quotes." },
      { name: "twitter:description", content: "Professional landscaping, garden maintenance, lawn care, hedge cutting & grounds maintenance across Northamptonshire. 12 years experience. Free quotes." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo/logo.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo/logo.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </QueryClientProvider>
  );
}