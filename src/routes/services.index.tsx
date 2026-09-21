import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader, PageHero } from "@/components/site-chrome";
import { services } from "@/content/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Technologics Development Studio" },
      {
        name: "description",
        content:
          "Shopify and e-commerce, mobile apps, web and full-stack development, .NET, CRM platforms, authentication, and custom web applications.",
      },
      { property: "og:title", content: "Services — Technologics" },
      {
        property: "og:description",
        content: "Full-stack development services for commerce, mobile, web, and business platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Capabilities"
          title="Services built around the whole product."
          text="Eight focused capabilities, delivered by one studio. Open any service for scope, process, technologies, and related work."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid border-l border-t border-line md:grid-cols-2">
              {services.map(({ slug, icon: Icon, title, short, tech }, index) => (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className="group border-b border-r border-line bg-surface p-7 transition-colors hover:bg-surface-strong lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-6 text-primary" />
                    <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h2 className="mt-10 text-2xl font-semibold">{title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{short}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech.slice(0, 4).map((item) => (
                      <span key={item} className="border border-line px-2 py-1 text-xs text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start gap-5 border border-line bg-brand-soft p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
              <div>
                <h3 className="text-2xl font-semibold">Not sure which one you need?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us the outcome you're after and we'll map it to the right approach.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/" hash="contact">
                  Start a conversation <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
