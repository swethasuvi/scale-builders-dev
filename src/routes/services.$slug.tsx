import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter, SiteHeader, PageHero, TagList } from "@/components/site-chrome";
import { getService, getProject } from "@/content/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { title: service.title, short: service.short };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Technologics" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Technologics` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.title} — Technologics` },
        { property: "og:description", content: loaderData.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const related = service.related.map(getProject).filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Service" title={service.title} text={service.intro} />

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
            <div>
              <h2 className="text-xs font-semibold uppercase text-primary">What it includes</h2>
              <ul className="mt-6 border-t border-line">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line py-4 text-sm leading-6">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-xs font-semibold uppercase text-primary">Typical process</h2>
              <ol className="mt-6 grid gap-4">
                {service.process.map((step, index) => (
                  <li key={step} className="grid gap-3 border border-line bg-surface p-5 sm:grid-cols-[48px_1fr]">
                    <span className="font-display text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <h2 className="text-xs font-semibold uppercase text-primary">Technologies</h2>
              <div className="mt-6">
                <TagList items={service.tech} />
              </div>
              <div className="mt-10 border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold">Planning {service.title.toLowerCase()} work?</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Share your goals and timeline — we'll respond with a focused path forward.
                </p>
                <Button className="mt-6 w-full" asChild>
                  <Link to="/" hash="contact">
                    Enquire about this service <ArrowRight />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-rule bg-surface py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <h2 className="text-xs font-semibold uppercase text-primary">Related work</h2>
              <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                {related.map((project) => (
                  <Link
                    key={project!.slug}
                    to="/projects/$slug"
                    params={{ slug: project!.slug }}
                    className="group bg-background p-6 transition-colors hover:bg-surface-strong"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{project!.index}</span>
                      {project!.status && (
                        <span className="border border-primary/40 bg-brand-soft px-2 py-1 text-[10px] font-semibold uppercase text-primary">
                          {project!.status}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{project!.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project!.type}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View project <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4 text-primary" /> Back to Services
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
