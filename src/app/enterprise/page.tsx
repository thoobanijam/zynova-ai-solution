
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  Puzzle,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
  BarChart3,
  Server,
  Users,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Enterprise Software",
    description:
      "Purpose-built software platforms designed around complex business requirements, operational processes, and organisational workflows.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Enterprise Applications",
    description:
      "Connected web-based applications that help departments manage information, coordinate activities, and work through structured digital processes.",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Connect business applications, databases, and third-party platforms through suitable APIs and integration architectures.",
    icon: Network,
  },
  {
    number: "04",
    title: "Cloud Infrastructure",
    description:
      "Design cloud-oriented application environments that support deployment, availability, scalability, and operational management.",
    icon: Cloud,
  },
  {
    number: "05",
    title: "Enterprise Automation",
    description:
      "Improve repetitive business activities through workflow automation, system connectivity, and intelligent process design.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Business Intelligence",
    description:
      "Bring business information into useful dashboards and reports to help teams understand operational and organisational performance.",
    icon: BarChart3,
  },
];

const industries = [
  {
    title: "Retail & Commerce",
    description:
      "Support product management, inventory visibility, purchasing workflows, sales operations, and connected retail systems.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
  },
  {
    title: "Financial Services",
    description:
      "Develop structured applications for information management, reporting, internal operations, and authorised business workflows.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    icon: BarChart3,
  },
  {
    title: "Healthcare Organisations",
    description:
      "Support administrative applications, information workflows, operational coordination, and carefully managed data environments.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    icon: ShieldCheck,
  },
  {
    title: "Education & Training",
    description:
      "Create connected platforms for learning administration, student services, digital resources, and institutional workflows.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
    icon: Users,
  },
];

const principles = [
  {
    title: "Designed Around Your Organisation",
    description:
      "We begin with your business structure, processes, user requirements, and operational challenges rather than forcing your organisation into a generic software template.",
    icon: Building2,
  },
  {
    title: "Connected Technology",
    description:
      "Enterprise environments often involve multiple applications and data sources. We consider how systems communicate and how information moves between them.",
    icon: Network,
  },
  {
    title: "Security-Conscious Engineering",
    description:
      "Access control, secure data handling, application validation, and appropriate system permissions are considered throughout the development lifecycle.",
    icon: Fingerprint,
  },
  {
    title: "Built for Continuous Evolution",
    description:
      "Business requirements change. We consider maintainability, modular architecture, and future enhancements when planning enterprise applications.",
    icon: RefreshCw,
  },
];

const process = [
  {
    number: "01",
    title: "Business Discovery",
    text: "Understand organisational goals, existing systems, departments, user roles, and operational challenges.",
  },
  {
    number: "02",
    title: "Architecture Planning",
    text: "Define application structure, technology choices, integrations, data flows, and security considerations.",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Build the required applications, interfaces, backend services, and connected business capabilities.",
  },
  {
    number: "04",
    title: "Testing & Integration",
    text: "Validate application behaviour, user workflows, system communication, and important operational scenarios.",
  },
  {
    number: "05",
    title: "Deployment & Evolution",
    text: "Prepare the deployment environment and plan ongoing improvements, maintenance, and future development.",
  },
];

const faqs = [
  {
    question: "What are enterprise software solutions?",
    answer:
      "Enterprise software solutions are applications and connected technology systems designed to support the operations of organisations. They can include business management platforms, internal applications, workflow systems, reporting tools, integrations, and cloud-based services.",
  },
  {
    question: "Can you develop software for our existing business processes?",
    answer:
      "Yes. Enterprise projects can begin with reviewing your existing workflows and requirements. The solution can then be designed around suitable business processes, user roles, information structures, and system integrations.",
  },
  {
    question: "Can enterprise applications connect to existing systems?",
    answer:
      "Where suitable APIs, database access, or supported integration methods are available, enterprise applications can connect with existing platforms. Integration feasibility depends on the systems, permissions, and technical restrictions involved.",
  },
  {
    question: "Can enterprise software be expanded later?",
    answer:
      "Yes. Modular architecture and maintainable development practices can make it easier to introduce additional modules, integrations, users, and capabilities as organisational requirements evolve.",
  },
  {
    question: "Do you support cloud-based enterprise applications?",
    answer:
      "We can design and develop cloud-oriented applications and consider deployment, infrastructure, security, and operational requirements based on the project's technical needs.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO - FULL-WIDTH EDITORIAL DESIGN */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#101a30]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101a30] via-[#101a30]/95 to-[#101a30]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101a30] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <Building2 size={17} />
              Enterprise Technology Solutions
            </div>

            <h1 className="mt-9 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              Technology that connects your{" "}
              <span className="text-cyan-300">
                entire business.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
              Modern organisations need technology that works together.
              ZYNOVA AI Solutions develops enterprise-focused applications,
              connected platforms, and intelligent digital systems designed
              to support complex business operations.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-400">
              From custom enterprise software to cloud infrastructure,
              integration, automation, and analytics, we help businesses
              approach digital transformation with a clear technical
              foundation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white"
              >
                Discuss Enterprise Solutions
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="#enterprise-capabilities"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Capabilities
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid max-w-4xl gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
            {[
              ["Connected Systems", "Bring applications together"],
              ["Business Applications", "Support daily operations"],
              ["Future-Ready Architecture", "Plan for changing needs"],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL CAPABILITY STRIP */}

      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Enterprise technology landscape
          </span>
          {[
            "Applications",
            "Infrastructure",
            "Integration",
            "Automation",
            "Intelligence",
          ].map((item) => (
            <span
              key={item}
              className="text-sm font-semibold text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* INTRODUCTION - ASYMMETRIC IMAGE LAYOUT */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Beyond individual applications
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Build an enterprise ecosystem, not just another software tool.
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Enterprise technology is about more than introducing new
              applications. It involves understanding how departments
              operate, how information moves, and how different systems
              contribute to the wider organisation.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              A disconnected technology environment can create repeated
              work, inconsistent information, and complicated processes.
              A carefully planned digital ecosystem can help simplify
              those connections and provide a more consistent experience
              for employees and stakeholders.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              Our approach combines software engineering, system
              integration, automation, cloud technologies, and data
              capabilities to address the requirements of each enterprise
              project.
            </p>

            <div className="mt-9 flex flex-wrap gap-5">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="font-bold text-slate-900">
                  Business-first
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Technology guided by real requirements
                </p>
              </div>
              <div className="border-l-2 border-violet-600 pl-4">
                <p className="font-bold text-slate-900">
                  System-oriented
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Connected applications and workflows
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-12 pl-8">
            <div className="absolute left-0 top-10 h-[75%] w-[75%] rounded-[30px] bg-blue-100" />

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                alt="Modern enterprise office environment"
                className="h-[440px] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 max-w-[290px] rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Network size={25} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">
                Connected by design
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                A coordinated approach to applications, information,
                infrastructure, and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CAPABILITIES */}

      <section
        id="enterprise-capabilities"
        className="bg-[#f4f7fc] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                What we deliver
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Enterprise capabilities for modern operations.
              </h2>
            </div>
            <p className="max-w-md leading-8 text-slate-500">
              Explore the technology areas that can help create a more
              connected, organised, and adaptable enterprise environment.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-[24px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-600">
                      {item.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-700">
                    Explore capability
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SHOWCASE */}

      <section className="overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                Enterprise architecture
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Every layer has a role. Every connection has a purpose.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                An enterprise application environment can include user
                interfaces, business logic, databases, integrations,
                infrastructure, and security controls. These elements
                should be planned as parts of a coordinated system.
              </p>
              <p className="mt-5 leading-8 text-slate-500">
                We consider how each technical layer supports the
                organisation's requirements, how information is exchanged,
                and how the solution can be maintained as business needs
                evolve.
              </p>

              <Link
                href="/software-development"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-violet-700"
              >
                Explore Software Development
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#f8faff] p-5 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    System blueprint
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    Enterprise solution layers
                  </h3>
                </div>
                <Settings2 size={25} className="text-violet-600" />
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Experience Layer",
                    subtitle: "Web applications · Portals · Interfaces",
                    icon: PanelsTopLeft,
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    title: "Application Layer",
                    subtitle: "Business logic · APIs · Workflows",
                    icon: Code2,
                    color: "bg-violet-100 text-violet-700",
                  },
                  {
                    title: "Integration Layer",
                    subtitle: "System connections · Data exchange",
                    icon: Network,
                    color: "bg-cyan-100 text-cyan-700",
                  },
                  {
                    title: "Data Layer",
                    subtitle: "Databases · Records · Analytics",
                    icon: Database,
                    color: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    title: "Infrastructure Layer",
                    subtitle: "Cloud · Deployment · Monitoring",
                    icon: Server,
                    color: "bg-orange-100 text-orange-700",
                  },
                ].map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <div
                      key={layer.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${layer.color}`}
                      >
                        <Icon size={23} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-900">
                          {layer.title}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {layer.subtitle}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-950 p-4 text-sm text-white">
                <LockKeyhole size={19} className="text-cyan-300" />
                Security and governance across the architecture
              </div>
              <p className="mt-4 text-center text-[10px] text-slate-400">
                Conceptual architecture illustration, not a fixed technical
                specification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY IMAGE CARDS */}

      <section className="bg-[#f5f7fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Enterprise applications across industries
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              Different industries. Different operational challenges.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              Enterprise technology must reflect the way an organisation
              operates. We consider industry workflows, users, information
              requirements, and existing technology when shaping a solution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={`${industry.title} enterprise environment`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Sector 0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-950">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {industry.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                    >
                      Discuss your requirements
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTERPRISE PRINCIPLES */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                How we think
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Enterprise technology should create clarity, not complexity.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                Good engineering considers the people who use the system,
                the business processes it supports, and the technical
                environment in which it operates.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=85"
                  alt="Team collaborating on enterprise technology planning"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-5">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="grid gap-5 rounded-[25px] border border-slate-200 bg-white p-7 sm:grid-cols-[70px_1fr] sm:p-9"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={26} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-bold text-slate-950">
                          {principle.title}
                        </h3>
                        <span className="text-sm font-bold text-slate-300">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-4 leading-8 text-slate-500">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS - VERTICAL TIMELINE */}

      <section className="bg-[#101a30] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Enterprise project lifecycle
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              From business requirements to a connected solution.
            </h2>
            <p className="mt-7 leading-8 text-slate-300">
              Enterprise projects require careful planning and coordination.
              Our process provides a structured way to understand your
              organisation, design the technical solution, develop the
              required capabilities, and prepare for ongoing evolution.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              Project scope, delivery milestones, integrations, testing,
              and deployment requirements are considered according to the
              complexity and needs of each engagement.
            </p>

            <Link
              href="/approach"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-white"
            >
              Explore Our Approach
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500" />

            <div className="space-y-9">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[40px_1fr] gap-5"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/50 bg-[#101a30] text-xs font-bold text-cyan-300">
                    {step.number}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE BENEFITS */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  The business value
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                  A stronger digital foundation for business growth.
                </h2>
                <p className="mt-6 leading-8 text-slate-600">
                  Well-planned enterprise technology can help organisations
                  improve visibility, coordinate work, and build a more
                  adaptable operating environment.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "More organised workflows",
                  "Improved information visibility",
                  "Connected business applications",
                  "Consistent operational processes",
                  "Better reporting capabilities",
                  "Adaptable technology foundations",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-5"
                  >
                    <Check
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#f5f7fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              Enterprise solutions FAQ
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              Learn more about enterprise software, integrations, cloud
              environments, and the development process.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-blue-600">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-slate-400 transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-5 pl-9 text-sm leading-8 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-[#283d91] to-violet-800 px-8 py-16 text-white sm:px-14 lg:py-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
                <Zap size={15} />
                Build a connected enterprise
              </div>

              <h2 className="mt-7 text-3xl font-bold leading-tight sm:text-5xl">
                Let's design technology around the way your business works.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-blue-100">
                Whether you need a custom enterprise application, connected
                systems, intelligent automation, or a modern cloud platform,
                start with a conversation about your requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-800 transition hover:bg-cyan-100"
            >
              Contact ZYNOVA
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
