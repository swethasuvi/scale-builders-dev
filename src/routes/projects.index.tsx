import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader, PageHero } from "@/components/site-chrome";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Technologics Portfolio" },
      {
        name: "description",
        content:
          "Selected mobile and e-commerce work from Technologics, including the Fameo React Native application and Shopify commerce builds.",
      },
      { property: "og:title", content: "Work — Technologics" },
      {
        property: "og:description",
        content: "Selected mobile and commerce projects. Client identities remain private by design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Selected work"
          title="Projects built for real-world momentum."
          text="Mobile and commerce work across international markets. Client identities remain private by design."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="group bg-background p-4 transition-colors hover:bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong">
                    <div className="grid-lines absolute inset-0 opacity-50" />
                    <div className="absolute inset-8 border border-line transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="absolute left-4 right-4 top-4 flex gap-2">
                        <span className="h-2 w-2 bg-primary" />
                        <span className="h-2 w-10 bg-muted-foreground/40" />
                      </div>
                      <div className="absolute inset-x-5 bottom-5 top-12 grid grid-cols-3 gap-2">
                        <span className="col-span-2 bg-brand-soft" />
                        <span className="bg-muted" />
                        <span className="bg-muted" />
                        <span className="col-span-2 bg-secondary" />
                      </div>
                    </div>
                    {project.visual === "mobile" && (
                      <div className="absolute left-1/2 top-1/2 h-4/5 w-2/5 -translate-x-1/2 -translate-y-1/2 border-4 border-background bg-card p-2 shadow-2xl">
                        <div className="h-full bg-brand-soft">
                          <div className="mx-auto mt-3 h-1 w-8 bg-primary" />
                          <div className="mx-3 mt-8 h-2/5 bg-primary/20" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-4 px-2 pb-3 pt-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{project.index}</span>
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{project.type}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        View project <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                    {project.status && (
                      <span className="shrink-0 border border-primary/40 bg-brand-soft px-2 py-1 text-[10px] font-semibold uppercase text-primary">
                        {project.status}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
