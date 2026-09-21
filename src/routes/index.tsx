import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  MonitorSmartphone,
  Phone,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/technologics-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Technologics — Full-Stack Web & App Development Studio" },
      {
        name: "description",
        content:
          "Technologics builds scalable e-commerce, mobile, web, CRM, and secure full-stack applications for businesses across Europe and the Middle East.",
      },
      { property: "og:title", content: "Technologics — Digital Experiences That Scale" },
      {
        property: "og:description",
        content: "Full-stack web and app development for ambitious international businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: ShoppingBag, title: "Shopify & E-commerce", text: "High-converting storefronts, custom themes, integrations, and scalable commerce experiences." },
  { icon: Smartphone, title: "Mobile App Development", text: "Cross-platform React Native applications engineered for speed, usability, and growth." },
  { icon: MonitorSmartphone, title: "Web Development", text: "Responsive products built with React.js, Next.js, and Angular for modern business needs." },
  { icon: Layers3, title: "Full-Stack Development", text: "End-to-end MEAN and MERN applications with cohesive architecture from interface to database." },
  { icon: Code2, title: ".NET Development", text: "Robust business applications and backend systems built for performance and maintainability." },
  { icon: MessagesSquare, title: "CRM Applications", text: "Purpose-built platforms that organize customer operations, workflows, and business insight." },
  { icon: LockKeyhole, title: "Authentication Systems", text: "Secure authorization, account management, and role-based access for sensitive applications." },
  { icon: Braces, title: "Custom Web Applications", text: "Tailored digital tools that turn complex processes into clear, dependable experiences." },
];

const stack = [
  ["Frontend", "React.js", "Next.js", "Angular", "React Native"],
  ["Backend", "Node.js", ".NET"],
  ["Databases", "PostgreSQL", "MongoDB"],
  ["Platform", "Shopify"],
];

const projects = [
  { index: "01", title: "Fameo", type: "React Native mobile app", status: "Launching soon", visual: "mobile" },
  { index: "02", title: "Modern Retail", type: "Shopify commerce experience", visual: "retail" },
  { index: "03", title: "Home & Living", type: "E-commerce storefront", visual: "home" },
  { index: "04", title: "Premium Goods", type: "Direct-to-consumer platform", visual: "premium" },
  { index: "05", title: "Global Catalogue", type: "Multi-market Shopify build", visual: "global" },
  { index: "06", title: "Commerce Operations", type: "Custom admin experience", visual: "ops" },
];

const reasons = [
  ["01", "Reliable by design", "Clear communication, considered architecture, and dependable delivery from first conversation to release."],
  ["02", "Versatile technology", "The right stack for the work—not a one-size-fits-all approach."],
  ["03", "Cross-industry insight", "Practical experience across commerce, healthcare, CRM, and applied sciences."],
  ["04", "Discretion built in", "Professional handling of confidential business logic, workflows, and client data."],
  ["05", "International delivery", "Thoughtful collaboration across markets, cultures, and time zones."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Technologics home">
            <span className="grid size-9 place-items-center border border-primary bg-brand-soft font-display text-sm font-bold text-primary">T</span>
            <span className="font-display text-lg font-semibold">Technologics</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-foreground" href="#services">Services</a>
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild><a href="#contact">Start a project <ArrowRight /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-line bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-4 text-base">
              {[["Services", "#services"], ["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-1 text-muted-foreground">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative flex min-h-[760px] items-end overflow-hidden pt-20 md:min-h-[92vh]">
          <img src={heroImage} alt="Digital commerce and mobile application interfaces" width={1920} height={1088} className="absolute inset-0 size-full object-cover object-[66%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_96%,transparent)_35%,color-mix(in_oklab,var(--background)_35%,transparent)_72%,color-mix(in_oklab,var(--background)_50%,transparent)_100%)]" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
            <div className="animate-rise max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-primary"><span className="h-px w-10 bg-primary" /> Full-stack web & app development</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl">Building digital experiences that scale.</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">We design and develop high-performance commerce, mobile, and web applications for ambitious businesses across Europe and the Middle East.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button size="lg" asChild><a href="#contact">Discuss your project <ArrowRight /></a></Button>
                <a href="#work" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-foreground">Explore our work <ArrowDownRight className="size-4 text-primary" /></a>
              </div>
            </div>
            <div className="mt-16 flex max-w-xl items-center gap-8 border-t border-line pt-6 text-xs text-muted-foreground">
              <span>Chennai, India</span><span className="size-1 bg-primary" /><span>Delivering internationally</span>
            </div>
          </div>
        </section>

        <section id="services" className="section-rule scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading number="01" eyebrow="Capabilities" title="One studio. Complete digital delivery." text="From first architecture decisions to final production detail, we bring the full product stack together." />
            <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="group min-h-72 border-b border-r border-line bg-surface p-7 transition-colors hover:bg-surface-strong">
                  <div className="flex items-start justify-between"><Icon className="size-6 text-primary" /><span className="text-xs text-muted-foreground">0{index + 1}</span></div>
                  <h3 className="mt-14 text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rule bg-surface py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-9 flex items-center gap-3"><Sparkles className="size-4 text-primary" /><p className="text-xs font-semibold uppercase text-muted-foreground">Technology stack</p></div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map(([category, ...items]) => (
                <div key={category}><p className="mb-4 text-xs text-primary">{category}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="border border-line bg-background px-3 py-2 text-sm font-medium">{item}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-rule scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading number="02" eyebrow="Selected work" title="Built for real-world momentum." text="A selection of mobile and commerce work. Client identities remain private by design." />
            <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => <ProjectCard key={project.index} {...project} />)}
            </div>
            <div className="mt-10 grid items-center gap-8 border border-line bg-brand-soft p-7 md:grid-cols-[1fr_2fr] lg:p-10">
              <div><p className="text-xs font-semibold uppercase text-primary">Industry experience</p><h3 className="mt-3 text-2xl font-semibold">Domain depth, handled discreetly.</h3></div>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">Our broader delivery experience includes CRM systems, healthcare and medical applications, and applied sciences platforms. We apply that domain understanding without exposing confidential client or product details.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section-rule scroll-mt-20 bg-surface py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div><p className="text-xs font-semibold uppercase text-primary">03 / About us</p><Globe2 className="mt-10 size-16 stroke-1 text-muted-foreground" /></div>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Technical breadth.<br /><span className="text-muted-foreground">Business-minded execution.</span></h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">Technologics is a full-stack development studio creating dependable digital products across e-commerce, mobile applications, modern web platforms, CRM systems, and secure authentication. We combine thoughtful product decisions with deep implementation capability, giving clients one focused partner from concept through launch and continued growth.</p>
              <div className="mt-12 grid gap-5 border-t border-line pt-8 sm:grid-cols-3">
                <Metric value="Full-stack" label="End-to-end capability" /><Metric value="Cross-market" label="International delivery" /><Metric value="Security-first" label="Responsible engineering" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-rule py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading number="04" eyebrow="Why Technologics" title="A capable partner for complex work." />
            <div className="mt-14 border-t border-line">
              {reasons.map(([number, title, text]) => (
                <div key={number} className="grid gap-4 border-b border-line py-8 sm:grid-cols-[80px_1fr_1.5fr] sm:items-center">
                  <span className="text-xs text-primary">{number}</span><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-rule scroll-mt-20 bg-surface py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">05 / Contact</p>
              <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-tight sm:text-6xl">Let’s build what’s next.</h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">Tell us what you’re planning. We’ll respond with clear next steps and a focused path forward.</p>
              <div className="mt-12 grid gap-6 text-sm">
                <ContactLine icon={MapPin} label="Location" value="Chennai, India" />
                <ContactLine icon={Phone} label="Primary phone" value="Add your number" placeholder />
                <ContactLine icon={Phone} label="Alternate phone" value="Add alternate number" placeholder />
                <ContactLine icon={Mail} label="Email" value="technologics@gmail.com" placeholder />
              </div>
            </div>
            <form onSubmit={submitForm} className="border border-line bg-background p-6 sm:p-9">
              <div className="mb-8 flex items-center justify-between"><h3 className="text-xl font-semibold">Project enquiry</h3><span className="size-2 bg-primary" /></div>
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="name">Name</label>
              <Input id="name" name="name" required className="mb-6 mt-2 h-12 bg-surface" placeholder="Your name" />
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" required className="mb-6 mt-2 h-12 bg-surface" placeholder="you@company.com" />
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="message">Message</label>
              <Textarea id="message" name="message" required className="mt-2 min-h-36 resize-none bg-surface" placeholder="Tell us about your project, goals, and timeline." />
              <Button type="submit" size="lg" className="mt-6 w-full">Send enquiry <ArrowRight /></Button>
              {sent && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" /> Thank you. Your enquiry is ready for review.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="section-rule py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="font-display text-lg font-semibold">Technologics<span className="text-primary">.</span></div>
          <div className="flex gap-6 text-sm text-muted-foreground"><span>LinkedIn</span><span>Instagram</span><span>GitHub</span></div>
          <p className="text-xs text-muted-foreground">© 2026 Technologics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) {
  return <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]"><p className="text-xs font-semibold uppercase text-primary">{number} / {eyebrow}</p><div><h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>{text && <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{text}</p>}</div></div>;
}

function ProjectCard({ index, title, type, status, visual }: { index: string; title: string; type: string; status?: string; visual: string }) {
  return (
    <article className="group bg-background p-4">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong">
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div className="absolute inset-8 border border-line transition-transform duration-500 group-hover:-translate-y-1">
          <div className="absolute left-4 right-4 top-4 flex gap-2"><span className="h-2 w-2 bg-primary" /><span className="h-2 w-10 bg-muted-foreground/40" /></div>
          <div className="absolute inset-x-5 bottom-5 top-12 grid grid-cols-3 gap-2">
            <span className="col-span-2 bg-brand-soft" /><span className="bg-muted" /><span className="bg-muted" /><span className="col-span-2 bg-secondary" />
          </div>
        </div>
        {visual === "mobile" && <div className="absolute left-1/2 top-1/2 h-4/5 w-2/5 -translate-x-1/2 -translate-y-1/2 border-4 border-background bg-card p-2 shadow-2xl"><div className="h-full bg-brand-soft"><div className="mx-auto mt-3 h-1 w-8 bg-primary" /><div className="mx-3 mt-8 h-2/5 bg-primary/20" /></div></div>}
      </div>
      <div className="flex items-start justify-between gap-4 px-2 pb-3 pt-6"><div><div className="flex items-center gap-3"><span className="text-xs text-muted-foreground">{index}</span><h3 className="text-xl font-semibold">{title}</h3></div><p className="mt-2 text-sm text-muted-foreground">{type}</p></div>{status && <span className="shrink-0 border border-primary/40 bg-brand-soft px-2 py-1 text-[10px] font-semibold uppercase text-primary">{status}</span>}</div>
    </article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div><p className="font-display text-lg font-semibold text-primary">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>;
}

function ContactLine({ icon: Icon, label, value, placeholder }: { icon: typeof MapPin; label: string; value: string; placeholder?: boolean }) {
  return <div className="flex items-start gap-4"><Icon className="mt-0.5 size-5 text-primary" /><div><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-medium">{value}{placeholder && <span className="ml-2 text-[10px] uppercase text-muted-foreground">Placeholder</span>}</p></div></div>;
}
