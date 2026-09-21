import {
  Braces,
  Code2,
  Layers3,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  process: string[];
  tech: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "shopify-ecommerce",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    short:
      "High-converting storefronts, custom themes, integrations, and scalable commerce experiences.",
    intro:
      "We build commerce experiences that hold up under real traffic and real catalogues — from bespoke Shopify themes to multi-market storefronts with custom checkout and fulfilment integrations.",
    includes: [
      "Custom Shopify theme design and development",
      "Headless commerce front-ends where flexibility matters",
      "Payment, shipping, ERP, and CRM integrations",
      "Multi-currency and multi-language market setup",
      "Performance, SEO, and conversion optimisation",
    ],
    process: [
      "Discovery: catalogue, markets, and commercial goals",
      "Information architecture and interface design",
      "Theme or headless build with integration work",
      "QA across devices, markets, and payment flows",
      "Launch, monitoring, and iterative improvement",
    ],
    tech: ["Shopify", "Liquid", "React.js", "Next.js", "Node.js"],
    related: ["modern-retail", "home-living", "premium-goods", "global-catalogue"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    short:
      "Cross-platform React Native applications engineered for speed, usability, and growth.",
    intro:
      "One codebase, two platforms, no compromise on feel. We deliver React Native applications with native-grade navigation, offline resilience, and a release process your team can rely on.",
    includes: [
      "iOS and Android delivery from a single React Native codebase",
      "Authentication, notifications, and in-app messaging",
      "API and backend integration",
      "App Store and Play Store submission support",
      "Analytics and crash reporting instrumentation",
    ],
    process: [
      "Product definition and feature prioritisation",
      "Interface design and interaction prototyping",
      "Iterative development with test builds",
      "Device QA and store preparation",
      "Release and post-launch support",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "MongoDB"],
    related: ["fameo"],
  },
  {
    slug: "web-development",
    icon: MonitorSmartphone,
    title: "Web Development",
    short: "Responsive products built with React.js, Next.js, and Angular for modern business needs.",
    intro:
      "Marketing sites, portals, and product interfaces built to be fast, accessible, and easy to maintain — with layouts that behave correctly in both LTR and RTL markets.",
    includes: [
      "Responsive interface development",
      "Server-rendered and statically generated pages",
      "Accessibility and performance budgets",
      "CMS and third-party service integration",
      "Analytics and SEO foundations",
    ],
    process: [
      "Requirements and content structure",
      "Design system definition",
      "Component-driven build",
      "Cross-browser QA",
      "Deployment and handover",
    ],
    tech: ["React.js", "Next.js", "Angular", "Node.js"],
    related: ["commerce-operations", "global-catalogue"],
  },
  {
    slug: "full-stack-development",
    icon: Layers3,
    title: "Full-Stack Development",
    short:
      "End-to-end MEAN and MERN applications with cohesive architecture from interface to database.",
    intro:
      "When the interface and the data model need to be designed together, we take both. MEAN and MERN applications built as one coherent system rather than stitched-together parts.",
    includes: [
      "API design and implementation",
      "Database modelling and migrations",
      "Role-based access and admin tooling",
      "Background jobs and integrations",
      "Deployment pipelines and environments",
    ],
    process: [
      "Architecture and data modelling",
      "API-first backend delivery",
      "Interface build against live endpoints",
      "Load and security review",
      "Release and ongoing iteration",
    ],
    tech: ["React.js", "Angular", "Node.js", "MongoDB", "PostgreSQL"],
    related: ["commerce-operations", "fameo"],
  },
  {
    slug: "dotnet-development",
    icon: Code2,
    title: ".NET Development",
    short: "Robust business applications and backend systems built for performance and maintainability.",
    intro:
      "For organisations standardised on the Microsoft stack, we deliver .NET services and business applications designed for long service lives and predictable maintenance.",
    includes: [
      "ASP.NET Core web APIs and services",
      "Business application development",
      "Legacy system modernisation",
      "SQL data layer design",
      "Integration with existing enterprise systems",
    ],
    process: [
      "System and integration audit",
      "Service architecture definition",
      "Incremental delivery with test coverage",
      "Performance profiling",
      "Deployment and documentation",
    ],
    tech: [".NET", "C#", "PostgreSQL", "Angular"],
    related: ["commerce-operations"],
  },
  {
    slug: "crm-applications",
    icon: MessagesSquare,
    title: "CRM Applications",
    short:
      "Purpose-built platforms that organize customer operations, workflows, and business insight.",
    intro:
      "Off-the-shelf CRM rarely matches how a business actually works. We build customer platforms around your pipeline, your terminology, and your reporting needs.",
    includes: [
      "Pipeline, contact, and activity modelling",
      "Custom dashboards and reporting",
      "Role-based permissions",
      "Email and telephony integrations",
      "Data import and migration",
    ],
    process: [
      "Workflow mapping with your operations team",
      "Data model and permission design",
      "Phased module delivery",
      "User testing and training material",
      "Rollout and refinement",
    ],
    tech: ["React.js", "Node.js", ".NET", "PostgreSQL"],
    related: ["commerce-operations"],
  },
  {
    slug: "authentication-systems",
    icon: LockKeyhole,
    title: "Authentication Systems",
    short:
      "Secure authorization, account management, and role-based access for sensitive applications.",
    intro:
      "Access control done carefully: sessions, roles, and account recovery designed so that sensitive business logic stays protected as the product grows.",
    includes: [
      "Email, social, and single sign-on flows",
      "Multi-factor authentication",
      "Role and permission architecture",
      "Session and token handling",
      "Audit logging",
    ],
    process: [
      "Threat and access review",
      "Role matrix definition",
      "Implementation with server-side enforcement",
      "Security testing",
      "Documentation and handover",
    ],
    tech: ["Node.js", ".NET", "PostgreSQL", "React.js"],
    related: ["fameo", "commerce-operations"],
  },
  {
    slug: "custom-web-applications",
    icon: Braces,
    title: "Custom Web Applications",
    short: "Tailored digital tools that turn complex processes into clear, dependable experiences.",
    intro:
      "Internal tools, portals, and operational platforms built exactly around the process they serve — replacing spreadsheets and manual handoffs with something dependable.",
    includes: [
      "Process discovery and requirement shaping",
      "Bespoke interface and workflow design",
      "Reporting and export tooling",
      "Third-party API integration",
      "Ongoing maintenance and enhancement",
    ],
    process: [
      "Process mapping and scoping",
      "Prototype and validation",
      "Iterative build with stakeholder reviews",
      "QA and user acceptance testing",
      "Launch and support",
    ],
    tech: ["React.js", "Next.js", "Node.js", "MongoDB"],
    related: ["commerce-operations", "global-catalogue"],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  type: string;
  summary: string;
  status?: string;
  industry: string;
  visual: string;
  description: string[];
  tech: string[];
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fameo",
    index: "01",
    title: "Fameo",
    type: "React Native mobile app",
    summary: "A cross-platform mobile application preparing for its public launch.",
    status: "Launching soon",
    industry: "Consumer mobile",
    visual: "mobile",
    description: [
      "Fameo is a cross-platform mobile application built with React Native, delivering a single, consistent product experience across iOS and Android.",
      "The work covers the full application surface: onboarding and account creation, secure authentication, the core browsing and interaction flows, and the supporting backend services that keep content fast and reliable on variable mobile networks.",
      "The focus throughout has been on responsiveness and clarity — lightweight screens, predictable navigation, and an interface that stays comfortable on smaller devices. The application is currently in its pre-launch phase.",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    slug: "modern-retail",
    index: "02",
    title: "Modern Retail",
    type: "Shopify commerce experience",
    summary: "A custom Shopify storefront for a multi-category retail catalogue.",
    industry: "E-commerce",
    visual: "retail",
    description: [
      "Add details here — a fuller description of the storefront, the commercial goals behind it, and the problem it solved.",
      "Add details here — notes on catalogue structure, integrations, and measurable outcomes.",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
    draft: true,
  },
  {
    slug: "home-living",
    index: "03",
    title: "Home & Living",
    type: "E-commerce storefront",
    summary: "A lifestyle storefront focused on visual merchandising and browsing.",
    industry: "E-commerce",
    visual: "home",
    description: [
      "Add details here — what was built, the merchandising challenge, and how the storefront addressed it.",
      "Add details here — integrations, performance work, and results.",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
    draft: true,
  },
  {
    slug: "premium-goods",
    index: "04",
    title: "Premium Goods",
    type: "Direct-to-consumer platform",
    summary: "A direct-to-consumer commerce platform with a considered checkout journey.",
    industry: "E-commerce",
    visual: "premium",
    description: [
      "Add details here — the platform scope, the customer journey, and the problem solved.",
      "Add details here — payment and fulfilment integrations, plus outcomes.",
    ],
    tech: ["Shopify", "React.js", "Node.js"],
    draft: true,
  },
  {
    slug: "global-catalogue",
    index: "05",
    title: "Global Catalogue",
    type: "Multi-market Shopify build",
    summary: "A multi-market storefront serving several currencies and languages.",
    industry: "E-commerce",
    visual: "global",
    description: [
      "Add details here — market structure, localisation approach, and the problem it solved.",
      "Add details here — technical approach to currencies, languages, and RTL layouts.",
    ],
    tech: ["Shopify", "Next.js", "Node.js"],
    draft: true,
  },
  {
    slug: "commerce-operations",
    index: "06",
    title: "Commerce Operations",
    type: "Custom admin experience",
    summary: "An internal operations console for order and catalogue management.",
    industry: "Retail operations",
    visual: "ops",
    description: [
      "Add details here — the operational process, the tooling built, and the problem solved.",
      "Add details here — data model, roles and permissions, and reporting.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL"],
    draft: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
