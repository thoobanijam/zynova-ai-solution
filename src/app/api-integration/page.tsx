
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Blocks,
  Braces,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Database,
  Globe2,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Plug,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const integrationTypes = [
  {
    number: "01",
    title: "REST API Integration",
    description:
      "Connect applications and services through structured HTTP requests. We design REST integrations that make it easier for different systems to exchange information, trigger actions, and support business workflows.",
    icon: Braces,
    tags: ["HTTP methods", "JSON", "Endpoints"],
  },
  {
    number: "02",
    title: "Third-Party API Integration",
    description:
      "Bring the tools your business already uses into one connected environment. Integrate payment providers, CRM platforms, communication services, analytics tools, and external business applications.",
    icon: Plug,
    tags: ["External services", "Webhooks", "Data exchange"],
  },
  {
    number: "03",
    title: "Custom API Development",
    description:
      "Create purpose-built APIs that allow your own applications, partners, and platforms to communicate through clearly defined interfaces and consistent data structures.",
    icon: Code2,
    tags: ["Custom endpoints", "Documentation", "Scalability"],
  },
  {
    number: "04",
    title: "Payment Gateway Integration",
    description:
      "Connect secure payment services to your digital platforms. Support payment initiation, transaction responses, payment status updates, and other essential checkout workflows.",
    icon: LockKeyhole,
    tags: ["Checkout", "Transactions", "Payment status"],
  },
  {
    number: "05",
    title: "Webhook & Event Integration",
    description:
      "Enable systems to respond to events as they happen. Webhooks can help applications react to orders, payments, account updates, notifications, and other business activities.",
    icon: GitBranch,
    tags: ["Event-driven", "Notifications", "Automation"],
  },
  {
    number: "06",
    title: "Database & Cloud Integration",
    description:
      "Connect applications with databases, cloud platforms, and backend services to support reliable data access, synchronisation, and application communication.",
    icon: Database,
    tags: ["Cloud services", "Data sync", "Backend"],
  },
];

const benefits = [
  {
    title: "Connected Applications",
    description:
      "Bring separate tools and platforms together so information can move between systems without unnecessary manual effort.",
    icon: Network,
  },
  {
    title: "Improved Workflows",
    description:
      "Use API connections to support automated processes, reduce repetitive tasks, and make everyday operations more consistent.",
    icon: Workflow,
  },
  {
    title: "Flexible Architecture",
    description:
      "Build integration foundations that can adapt as your organisation introduces new applications, services, and business requirements.",
    icon: Layers3,
  },
  {
    title: "Better Data Flow",
    description:
      "Create structured communication between applications and help teams work with more connected information.",
    icon: Activity,
  },
];

const industries = [
  {
    title: "Retail & E-commerce",
    description:
      "Connect online stores with inventory systems, payment gateways, order management platforms, and delivery services.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Finance & Payments",
    description:
      "Integrate payment services, transaction systems, financial reporting tools, and business applications.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Support communication between appointment platforms, patient-facing applications, and authorised information systems.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Education & Learning",
    description:
      "Connect learning platforms, student portals, communication tools, and administrative applications.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  },
];

const process = [
  {
    step: "01",
    title: "Understand the Systems",
    description:
      "We begin by identifying the applications involved, their responsibilities, available APIs, data formats, and the business outcome the integration should support.",
  },
  {
    step: "02",
    title: "Plan the Architecture",
    description:
      "We define how systems will communicate, what information needs to move, how authentication works, and how errors and unexpected responses should be handled.",
  },
  {
    step: "03",
    title: "Develop the Connection",
    description:
      "We build the required API endpoints, service connections, data transformations, and event-handling logic around the agreed integration requirements.",
  },
  {
    step: "04",
    title: "Test & Validate",
    description:
      "We test successful responses, invalid requests, access permissions, failure scenarios, and data consistency before the integration is released.",
  },
  {
    step: "05",
    title: "Deploy & Monitor",
    description:
      "We support deployment and establish appropriate logging, monitoring, and error visibility to help maintain the integration over time.",
  },
];

const faqs = [
  {
    question: "What is API integration?",
    answer:
      "API integration connects two or more software systems through defined interfaces. It allows applications to exchange information or request services without requiring every system to be built as one application.",
  },
  {
    question: "Can you connect existing business software?",
    answer:
      "Yes. Existing software can often be connected when it provides a suitable API, webhook, or another supported integration method. The available documentation and access permissions help determine the best approach.",
  },
  {
    question: "Can APIs connect a website to a mobile application?",
    answer:
      "Yes. A shared backend API can provide data and services to both web and mobile applications, helping them use consistent business logic and information.",
  },
  {
    question: "How do you protect API connections?",
    answer:
      "Security measures may include authentication, authorisation, HTTPS, input validation, access restrictions, secure secret management, and appropriate monitoring. The exact controls depend on the systems and data involved.",
  },
  {
    question: "Can an API integration be expanded later?",
    answer:
      "A well-planned integration can be designed with future changes in mind. New endpoints, applications, and workflows can be introduced as business requirements evolve.",
  },
];

export default function ApiIntegrationPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcff] text-slate-800">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-violet-100/60 blur-[110px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <Plug size={16} />
              API Integration Services
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[64px]">
              Make every system work{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                better together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Your business applications should communicate, share information,
              and support connected workflows. ZYNOVA AI Solutions helps
              businesses integrate APIs, platforms, and digital services into
              a more connected technology environment.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-500">
              From connecting payment gateways and third-party applications to
              building custom APIs, we focus on creating integrations that
              support practical business needs and future development.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss an Integration
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#integration-services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-700"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Connected systems
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Secure communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Scalable solutions
              </span>
            </div>
          </div>

          {/* VISUAL API CONNECTION DIAGRAM */}
          <div className="relative mx-auto w-full max-w-[570px]">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 opacity-70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-5 shadow-[0_25px_80px_rgba(37,50,100,0.12)] sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                    Connected ecosystem
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    API Network
                  </h2>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Connected
                </div>
              </div>

              <div className="relative my-8 grid grid-cols-[1fr_90px_1fr] items-center gap-2">
                <div className="space-y-5">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <Globe2 className="mb-3 text-blue-600" size={25} />
                    <p className="text-sm font-bold text-slate-800">
                      Web App
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Frontend</p>
                  </div>
                  <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                    <Cloud className="mb-3 text-violet-600" size={25} />
                    <p className="text-sm font-bold text-slate-800">
                      Cloud App
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Services</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="h-px w-full bg-gradient-to-r from-blue-300 to-violet-400" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-200">
                    <Network size={29} />
                  </div>
                  <span className="text-center text-[10px] font-bold uppercase tracking-wider text-violet-700">
                    API Layer
                  </span>
                  <div className="h-px w-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </div>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                    <Database className="mb-3 text-cyan-700" size={25} />
                    <p className="text-sm font-bold text-slate-800">
                      Database
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Data layer</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                    <Server className="mb-3 text-emerald-700" size={25} />
                    <p className="text-sm font-bold text-slate-800">
                      Backend
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Application</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">Data exchange</span>
                  <Zap size={18} className="text-cyan-300" />
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-3 text-emerald-300">
                    <Check size={14} />
                    Request received
                  </div>
                  <div className="flex items-center gap-3 text-cyan-300">
                    <Check size={14} />
                    Data processed
                  </div>
                  <div className="flex items-center gap-3 text-violet-300">
                    <Check size={14} />
                    Response delivered
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                Illustrative API architecture diagram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="border-y border-slate-200 bg-white px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              A connected digital world
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
              Your software should not work in isolation.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              Modern organisations often depend on multiple software
              applications. A website may manage customer interactions, a
              separate platform may process payments, and another system may
              maintain inventory or business records.
            </p>
            <p>
              Without suitable integration, teams may need to enter the same
              information in different places, switch between disconnected
              tools, or depend on manual processes. API integration creates a
              communication layer that helps these systems work together.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES - NUMBERED EDITORIAL CARDS */}
      <section
        id="integration-services"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                What we integrate
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Integration services for connected businesses.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              Different applications require different integration methods.
              We consider your systems, technical requirements, and intended
              workflows before choosing an approach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {integrationTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(60,70,130,0.09)]"
                >
                  <div className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition group-hover:text-violet-100">
                    {item.number}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-violet-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[120px] text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Integration capability
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-violet-600 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DARK ARCHITECTURE SECTION */}
      <section className="relative overflow-hidden bg-[#10152b] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-48 -left-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Integration architecture
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              A smarter connection between your digital systems.
            </h2>
            <p className="mt-7 leading-8 text-slate-300">
              An effective integration involves more than simply connecting
              two endpoints. It requires an understanding of how information
              is structured, how systems authenticate requests, and what
              should happen when a service is unavailable or returns an
              unexpected response.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              Our approach considers the full communication lifecycle,
              including request handling, response validation, data
              transformation, error management, and operational visibility.
              This helps create integrations that are easier to maintain and
              extend.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Clear API contracts and data structures",
                "Authentication and access control",
                "Error handling and response validation",
                "Logging and integration monitoring",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span className="text-sm leading-6 text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    System architecture
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    Integration flow
                  </h3>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <Workflow size={24} className="text-cyan-300" />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Client Application",
                    detail: "Website, mobile app or business portal",
                    icon: Globe2,
                  },
                  {
                    title: "API Gateway",
                    detail: "Request routing and access management",
                    icon: Network,
                  },
                  {
                    title: "Integration Services",
                    detail: "Business logic and data transformation",
                    icon: Blocks,
                  },
                  {
                    title: "External Platforms",
                    detail: "Third-party tools and services",
                    icon: Cloud,
                  },
                  {
                    title: "Data Layer",
                    detail: "Database and persistent information",
                    icon: Database,
                  },
                ].map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <div key={layer.title}>
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
                          <Icon size={22} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-white">
                            {layer.title}
                          </h4>
                          <p className="mt-1 text-xs text-slate-400">
                            {layer.detail}
                          </p>
                        </div>
                        <CircleDot
                          size={15}
                          className="shrink-0 text-emerald-300"
                        />
                      </div>
                      {index !== 4 && (
                        <div className="ml-9 h-3 border-l border-dashed border-cyan-400/50" />
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">
                Example architecture — implementation varies by project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Business value
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              More than a technical connection.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              The purpose of integration is to make technology more useful
              across your organisation. Properly planned connections can
              improve how applications share information and support everyday
              operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="relative rounded-3xl bg-[#f7f8ff] p-7"
                >
                  <span className="text-sm font-bold text-violet-400">
                    0{index + 1}
                  </span>
                  <div className="my-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE-LED INDUSTRY CARDS */}
      <section className="bg-[#f3f5fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Industry applications
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
                Connecting technology across industries.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              Integration requirements differ across industries. We consider
              the systems, information flows, and operational needs relevant
              to each business environment.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${industry.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <span className="absolute bottom-5 left-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    Industry {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-500">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Explore integration possibilities
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS - TIMELINE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                From disconnected systems to connected experiences.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                Every integration project begins with a clear understanding
                of the systems involved. We follow a structured process to
                plan, develop, validate, and support the connection.
              </p>

              <div className="mt-9 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-violet-700 p-7 text-white">
                <RefreshCw size={30} />
                <h3 className="mt-5 text-xl font-bold">
                  Built to evolve
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Integration needs can change as your business grows. We
                  consider maintainability and future requirements when
                  planning the technical solution.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[25px] top-8 w-px bg-gradient-to-b from-blue-300 via-violet-300 to-cyan-300" />

              <div className="space-y-8">
                {process.map((item) => (
                  <div key={item.step} className="relative flex gap-6">
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border-4 border-[#fbfcff] bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-md">
                      {item.step}
                    </div>
                    <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY BAND */}
      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Technology ecosystem
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Working with modern integration technologies.
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                The technology choices depend on your existing environment,
                integration requirements, and operational priorities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "REST APIs",
                "JSON",
                "Webhooks",
                "Node.js",
                "Cloud Services",
                "OAuth",
                "Databases",
                "HTTP",
                "API Gateways",
              ].map((technology) => (
                <div
                  key={technology}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm font-semibold text-slate-700"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
              <ShieldCheck size={29} />
            </div>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Security & reliability
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Integration designed with security in mind.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              API connections can expose important business functions and
              information. Security must therefore be considered from the
              beginning of the integration process rather than added as an
              afterthought.
            </p>
            <p className="mt-4 leading-8 text-slate-500">
              Depending on the project, appropriate measures may include
              authenticated requests, role-based permissions, encrypted
              communication, request validation, rate limiting, secure
              credential handling, and useful monitoring.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Authentication",
                description:
                  "Verify the identity of applications and authorised users.",
                icon: LockKeyhole,
              },
              {
                title: "Access Control",
                description:
                  "Limit access to the resources and actions each system requires.",
                icon: ShieldCheck,
              },
              {
                title: "Data Validation",
                description:
                  "Check incoming information before it is processed.",
                icon: CheckCircle2,
              },
              {
                title: "Monitoring",
                description:
                  "Improve visibility into requests, failures, and service behaviour.",
                icon: Activity,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Understand API integration.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Explore common questions about connecting applications,
              integrating external platforms, and building reliable API
              solutions.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-violet-700"
            >
              Ask us a question
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#fbfcff] p-6 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span className="flex items-start gap-4">
                    <span className="text-sm font-bold text-violet-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={19}
                    className="shrink-0 text-slate-400 transition group-open:rotate-90 group-open:text-blue-600"
                  />
                </summary>
                <p className="mt-5 pl-9 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#11172e] px-8 py-16 text-center text-white sm:px-14 sm:py-20">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[90px]" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/30 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
              <Network size={31} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Connect your technology
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Ready to bring your applications together?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Whether you need to connect an existing platform, integrate
              external services, or develop a custom API, let's explore a
              solution that supports your business goals.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Start Your Integration Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
