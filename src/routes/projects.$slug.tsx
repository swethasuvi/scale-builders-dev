import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { SiteFooter, SiteHeader, PageHero, TagList } from "@/components/site-chrome";
import { getProject } from "@/content/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { title: project.title, summary: project.summary };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Technologics" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Technologics Work` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — Technologics` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero eyebrow={`Project ${project.index}`} title={project.title} text={project.summary} />

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
            <div>
              {project.draft && (
                <p className="mb-8 border border-primary/40 bg-brand-soft px-4 py-3 text-xs font-semibold uppercase text-primary">
                  Add details here — content for this project is not finalised
                </p>
              )}
              <h2 className="text-xs font-semibold uppercase text-primary">Overview</h2>
              <div className="mt-6 grid gap-5">
                {project.description.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="mt-14 text-xs font-semibold uppercase text-primary">Visuals</h2>
              <div className="mt-6 grid gap-px bg-line sm:grid-cols-2">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative grid aspect-[4/3] place-items-center bg-surface-strong text-center"
                  >
                    <div className="grid-lines absolute inset-0 opacity-40" />
                    <div className="relative grid gap-2 text-muted-foreground">
                      <ImageIcon className="mx-auto size-6 text-primary" />
                      <span className="text-xs">Screenshot placeholder</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="grid content-start gap-10">
              <div>
                <h2 className="text-xs font-semibold uppercase text-primary">Status</h2>
                <p className="mt-4 font-medium">{project.status ?? "Delivered"}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase text-primary">Client industry</h2>
                <p className="mt-4 font-medium">{project.industry}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Client identity kept confidential by agreement.
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase text-primary">Tech stack</h2>
                <div className="mt-4">
                  <TagList items={project.tech} />
                </div>
              </div>
              <div className="border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold">Planning something similar?</h3>
                <Button className="mt-5 w-full" asChild>
                  <Link to="/" hash="contact">
                    Discuss your project <ArrowRight />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4 text-primary" /> Back to Projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
