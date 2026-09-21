import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", to: "/services" as const },
  { label: "Work", to: "/projects" as const },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Technologics home">
          <span className="grid size-9 place-items-center border border-primary bg-brand-soft font-display text-sm font-bold text-primary">
            T
          </span>
          <span className="font-display text-lg font-semibold">Technologics</span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/" hash="about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/" hash="contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="border-t border-line bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/" hash="about" onClick={() => setMenuOpen(false)} className="py-1 text-muted-foreground">
              About
            </Link>
            <Link to="/" hash="contact" onClick={() => setMenuOpen(false)} className="py-1 text-muted-foreground">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-rule py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="font-display text-lg font-semibold">
          Technologics<span className="text-primary">.</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>GitHub</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Technologics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
          <span className="h-px w-10 bg-primary" /> {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{text}</p>}
      </div>
    </section>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-line bg-background px-3 py-2 text-sm font-medium">
          {item}
        </span>
      ))}
    </div>
  );
}
