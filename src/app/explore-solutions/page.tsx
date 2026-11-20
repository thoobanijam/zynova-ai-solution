
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Cloud,
  Workflow,
  Database,
  ShieldCheck,
  Sparkles,
  Search,
  CheckCircle2,
  Lightbulb,
  Building2,
  Globe2,
  Layers3,
  Rocket,
  Zap,
  Monitor,
  ChevronRight,
  Network,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    category: "Artificial Intelligence",
    shortCategory: "AI",
    title: "Artificial Intelligence Solutions",
    description:
      "Bring intelligence into everyday business activities with AI-powered applications, conversational experiences, and data-driven capabilities.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    icon: BrainCircuit,
    color: "blue",
    features: ["AI assistants", "Machine learning", "Document intelligence"],
    href: "/ai-development",
  },
  {
    id: 2,
    category: "Software Engineering",
    shortCategory: "Software",
    title: "Custom Software Development",
    description:
      "Create software that reflects the way your organisation works, from internal management platforms to connected enterprise applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    icon: Code2,
    color: "violet",
    features: ["Business applications", "Backend systems", "API development"],
    href: "/software-development",
  },
  {
    id: 3,
    category: "Web & Mobile",
    shortCategory: "Applications",
    title: "Web & Mobile Experiences",
    description:
      "Build intuitive digital experiences that help customers and employees interact with your business across modern devices.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    icon: Smartphone,
    color: "cyan",
    features: ["Responsive websites", "Mobile applications", "Customer portals"],
    href: "/web-development",
  },
  {
    id: 4,
    category: "Business Intelligence",
    shortCategory: "Analytics",
    title: "Business Intelligence & Analytics",
    description:
      "Turn business information into understandable reports, dashboards, insights, and more informed operational decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    icon: BarChart3,
    color: "blue",
    features: ["Interactive dashboards", "Data reporting", "Business insights"],
    href: "/business-intelligence",
  },
  {
    id: 5,
    category: "Cloud & Infrastructure",
    shortCategory: "Cloud",
    title: "Cloud & DevOps Solutions",
    description:
      "Develop dependable digital foundations with cloud architecture, deployment workflows, infrastructure practices, and monitoring.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    icon: Cloud,
    color: "cyan",
    features: ["Cloud infrastructure", "CI/CD pipelines", "System monitoring"],
    href: "/cloud",
  },
  {
    id: 6,
    category: "Retail & E-commerce",
    shortCategory: "Retail",
    title: "Retail & E-commerce Platforms",
    description:
      "Connect digital storefronts, inventory, customer experiences, order workflows, and business operations through integrated solutions.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    icon: ShoppingCart,
    color: "violet",
    features: ["Online stores", "Retail management", "Order workflows"],
    href: "/retail",
  },
  {
    id: 7,
    category: "Intelligent Automation",
    shortCategory: "Automation",
    title: "Workflow & Process Automation",
    description:
      "Reduce repetitive manual activities and create connected workflows that help teams manage tasks more consistently.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    icon: Workflow,
    color: "blue",
    features: ["Process automation", "System integration", "Task workflows"],
    href: "/automation",
  },
  {
    id: 8,
    category: "Digital Transformation",
    shortCategory: "Transformation",
    title: "Digital Transformation Strategy",
    description:
      "Modernise business processes, connect existing technology, and create a practical roadmap for long-term digital development.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    icon: Network,
    color: "cyan",
    features: ["Digital strategy", "Process modernisation", "System integration"],
    href: "/digital-transformation",
  },
];

const filters = [
  "All Solutions",
  "Artificial Intelligence",
  "Software Engineering",
  "Web & Mobile",
  "Business Intelligence",
  "Cloud & Infrastructure",
  "Retail & E-commerce",
  "Intelligent Automation",
  "Digital Transformation",
];

const challenges = [
  {
    number: "01",
    title: "Too many disconnected systems?",
    description:
      "Explore connected applications, API integrations, and shared data environments that help different business tools work together.",
    icon: Network,
  },
  {
    number: "02",
    title: "Repetitive manual operations?",
    description:
      "Identify opportunities to simplify everyday activities through intelligent automation and structured workflows.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Limited business visibility?",
    description:
      "Make information easier to understand with reporting systems, analytics dashboards, and useful business insights.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Outdated digital experiences?",
    description:
      "Consider modern web platforms, mobile applications, and redesigned digital journeys built around user needs.",
    icon: Monitor,
  },
];

const technologies = [
  { name: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Application Engineering", icon: Code2 },
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "Data & Analytics", icon: Database },
  { name: "Automation Systems", icon: Workflow },
  { name: "Security Practices", icon: ShieldCheck },
];

export default function ExploreSolutionsPage() {
  const [activeFilter, setActiveFilter] = useState("All Solutions");
  const [search, setSearch] = useState("");

  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      const matchesFilter =
        activeFilter === "All Solutions" ||
        solution.category === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        solution.title.toLowerCase().includes(searchText) ||
        solution.description.toLowerCase().includes(searchText) ||
        solution.features.some((feature) =>
          feature.toLowerCase().includes(searchText)
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="overflow-hidden bg-[#fbfcff] text-slate-800">

      {/* HERO - ASYMMETRIC EDITORIAL LAYOUT */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Discover what is possible
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              ZYNOVA / SOLUTIONS
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Technology for
                <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  what comes next.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Every business has its own challenges, opportunities, and
                ambitions. Discover digital solutions that bring together
                intelligent technology, thoughtful engineering, and
                practical business thinking.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#solution-library"
                  className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore solutions
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Discuss an idea
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-5 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-3xl font-bold text-slate-950">AI</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Intelligent technology
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-950">Digital</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Connected experiences
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-950">Future</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Scalable foundations
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE COLLAGE */}
            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-0 h-[360px] w-[72%] overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90"
                  alt="Digital technology network"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/60 via-transparent to-cyan-400/10" />
                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Connected technology
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    Ideas into possibilities.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[290px] w-[57%] overflow-hidden rounded-[2rem] border-[7px] border-[#fbfcff] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt="Technology collaboration"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-16 right-0 max-w-[190px] rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BrainCircuit size={24} />
                </div>
                <p className="font-bold text-slate-950">
                  Intelligent by design
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Technology aligned with meaningful business goals.
                </p>
              </div>

              <div className="absolute left-8 top-14 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white text-violet-600 shadow-lg">
                <Zap size={27} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="border-y border-slate-100 bg-white px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our solution philosophy
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Start with the challenge. Build around the opportunity.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <p className="leading-8 text-slate-600">
              Technology should solve a purpose. A new application, AI
              capability, or business platform should make a meaningful
              contribution to how an organisation operates and serves its
              customers.
            </p>
            <p className="leading-8 text-slate-600">
              Our approach brings together business understanding, technical
              planning, user experience, and modern development practices to
              explore solutions that can evolve as requirements change.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION LIBRARY */}
      <section
        id="solution-library"
        className="px-5 py-24 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Explore the possibilities
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                A solution for every kind of ambition.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Explore our technology areas, discover useful capabilities,
                and find the direction that best matches your business
                requirements.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search solutions..."
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-slate-950 text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* IMAGE-LED SOLUTION CARDS */}
          <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.id}
                  className="group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,75,140,0.12)]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800">
                      {solution.category}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-blue-700 shadow-lg">
                      <Icon size={24} />
                    </div>

                    <span className="absolute bottom-6 right-5 text-sm font-bold text-white/80">
                      0{solution.id}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold leading-snug text-slate-950">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {solution.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={solution.href}
                      className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-700 transition group-hover:text-violet-700"
                    >
                      Explore this solution
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center">
              <Search size={36} className="mx-auto text-slate-300" />
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No matching solutions found
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All Solutions");
                }}
                className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BUSINESS CHALLENGES - ALTERNATING ROWS */}
      <section className="bg-[#f0f5ff] px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Solutions start with understanding
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                What is holding your business back?
              </h2>
            </div>
            <p className="leading-8 text-slate-600">
              You do not always need to begin with a specific technology.
              Sometimes the best starting point is identifying the challenge
              and exploring what a better way of working could look like.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.number}
                  className="group flex gap-5 rounded-3xl border border-white bg-white p-7 shadow-sm transition hover:shadow-xl sm:p-9"
                >
                  <div className="shrink-0">
                    <span className="block text-xs font-bold tracking-widest text-blue-500">
                      {challenge.number}
                    </span>
                    <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {challenge.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {challenge.description}
                    </p>
                    <Link
                      href="/consultation"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                    >
                      Discuss your challenge
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90"
                alt="Technology team collaborating"
                className="h-[480px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-5 max-w-[260px] rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <Layers3 size={23} />
                </div>
                <div>
                  <p className="font-bold text-slate-950">
                    Connected ecosystem
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Multiple capabilities. One direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
              Technology working together
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              More than individual tools. A connected digital foundation.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Business technology is most useful when its different
              components work together. Applications need dependable
              infrastructure. Data needs meaningful interpretation.
              Automation needs reliable processes. AI needs appropriate
              information and responsible implementation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our technology areas can be considered individually or as
              connected parts of a broader digital ecosystem, depending on
              the scope and priorities of each project.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#fbfcff] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {technology.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/expertise"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Explore our expertise
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION JOURNEY */}
      <section className="px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              From idea to implementation
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
              A clear path towards better technology.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A structured process helps turn business requirements into
              considered digital solutions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand your business, users, current systems, and the challenge you want to address.",
                icon: Search,
              },
              {
                number: "02",
                title: "Plan",
                description:
                  "Define the requirements, evaluate suitable technologies, and establish a practical direction.",
                icon: Lightbulb,
              },
              {
                number: "03",
                title: "Develop",
                description:
                  "Create the solution through engineering, integration, testing, and refinement.",
                icon: Code2,
              },
              {
                number: "04",
                title: "Evolve",
                description:
                  "Review performance, identify improvements, and support future development needs.",
                icon: Rocket,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-600">
                      {step.number}
                    </span>
                    <Icon size={26} className="text-violet-500" />
                  </div>

                  <div className="mt-9 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {index !== 3 && (
                    <div className="absolute -right-4 top-10 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 md:flex">
                      <ChevronRight size={17} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-16 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/30 blur-[110px]" />
          <div className="absolute -bottom-40 left-1/3 h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Sparkles size={16} />
                Let's explore what is possible
              </div>

              <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Have a challenge worth solving?
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Share your idea, business requirements, or technology goals.
                Let's explore a solution that makes sense for your
                organisation and your next stage of growth.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-50"
              >
                Start a conversation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Request a project quote
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
