
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Blocks,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
  BrainCircuit,
  Settings,
  Lightbulb,
  Layers3,
  Monitor,
  Smartphone,
  ShoppingCart,
  Building2,
  HeartPulse,
  GraduationCap,
  Factory,
  BriefcaseBusiness,
  CheckCircle2,
  Rocket,
  Search,
  Gauge,
  Network,
  LockKeyhole,
  RefreshCw,
  BarChart3,
  Boxes,
  FileCode2,
  Sparkles,
  Server,
  Puzzle,
  ClipboardCheck,
  MessageSquare,
  Laptop,
  Target,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Every organization has processes and challenges that may not be addressed by ready-made software. We approach custom software development by understanding how your business operates, identifying the functionality you need, and planning a solution around those requirements. The result is a software platform designed to support your workflows rather than forcing your team into an unsuitable system.",
    points: [
      "Business-specific software solutions",
      "Custom application functionality",
      "Scalable application architecture",
      "Integration with existing systems",
    ],
    color: "blue",
  },
  {
    number: "02",
    icon: Blocks,
    title: "Enterprise Software Solutions",
    description:
      "Growing organizations often need connected systems to manage information, teams, operations, and business activities. Enterprise software can bring selected processes into a more organized environment. We consider user roles, workflows, information access, and integration requirements when planning these solutions.",
    points: [
      "Enterprise management platforms",
      "Administrative dashboards",
      "Role-based application interfaces",
      "Business process management",
    ],
    color: "violet",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Repetitive manual tasks can consume time and create unnecessary complexity. Software automation can help organize recurring activities, connect information between systems, and reduce avoidable manual steps. We identify suitable opportunities for automation and design workflows around practical business requirements.",
    points: [
      "Automated business workflows",
      "Data processing and synchronization",
      "Task and approval management",
      "System-to-system integrations",
    ],
    color: "cyan",
  },
  {
    number: "04",
    icon: Database,
    title: "Database & Backend Development",
    description:
      "Reliable software depends on well-planned data structures and backend functionality. We can develop the server-side services, APIs, and database foundations that support application features. The architecture is considered in relation to the type of information being managed, how users access it, and how the application may evolve.",
    points: [
      "Database design and organization",
      "Backend application development",
      "API development and integration",
      "Data management workflows",
    ],
    color: "emerald",
  },
  {
    number: "05",
    icon: Monitor,
    title: "Web-Based Software Applications",
    description:
      "Web-based software gives users access to application functionality through a browser. These platforms can support customer services, internal operations, reporting, and information management. We focus on creating interfaces that make complex functionality easier to navigate and use.",
    points: [
      "Browser-based applications",
      "Customer and employee portals",
      "Interactive web dashboards",
      "Responsive application interfaces",
    ],
    color: "orange",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Software Modernization & Maintenance",
    description:
      "Existing software may need improvements as business requirements, technologies, and user expectations change. Modernization can involve improving application structure, updating interfaces, connecting new services, or introducing additional functionality. We consider the existing system before recommending a practical improvement path.",
    points: [
      "Legacy application improvements",
      "Feature upgrades and enhancements",
      "Performance and usability reviews",
      "Ongoing maintenance planning",
    ],
    color: "pink",
  },
];

const technologies = [
  {
    icon: Code2,
    title: "Application Development",
    stack: "React, Next.js, TypeScript",
    description:
      "Build structured application interfaces with reusable components, clear navigation, and maintainable frontend architecture.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    stack: "Node.js, Express, REST APIs",
    description:
      "Develop server-side functionality, application logic, and API services that connect software components.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    stack: "PostgreSQL, MongoDB, Firebase",
    description:
      "Organize application data and design suitable database structures for information management and retrieval.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    stack: "Cloud Hosting, Vercel, CI/CD",
    description:
      "Plan hosting and deployment workflows that make software accessible and easier to update.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    stack: "AI APIs, Machine Learning, Automation",
    description:
      "Explore suitable AI capabilities for information processing, intelligent assistance, and selected business workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Quality",
    stack: "Authentication, Testing, Validation",
    description:
      "Consider application security, access control, validation, and testing throughout the development lifecycle.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by understanding your business, users, current processes, and the challenges the software should address. Requirements are organized into a clear project direction so that the proposed solution is connected to real needs.",
    activities: [
      "Understand business objectives",
      "Identify users and workflows",
      "Document key requirements",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning & Architecture",
    description:
      "The requirements are translated into a technical plan. We consider application structure, technology choices, data requirements, integrations, and the relationships between different software components.",
    activities: [
      "Plan application architecture",
      "Evaluate technology options",
      "Define features and priorities",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "UI/UX & Solution Design",
    description:
      "We plan how users will interact with the software. Page layouts, dashboards, navigation, and workflows are designed to make important information and actions easier to understand.",
    activities: [
      "Create interface concepts",
      "Plan user journeys",
      "Organize screens and workflows",
    ],
  },
  {
    number: "04",
    icon: FileCode2,
    title: "Development & Integration",
    description:
      "The planned solution is developed into working software. This may include frontend interfaces, backend services, database structures, APIs, authentication, and integrations with other systems.",
    activities: [
      "Develop application features",
      "Connect databases and APIs",
      "Integrate required services",
    ],
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Testing & Quality Review",
    description:
      "The software is reviewed against its requirements. Testing helps identify functional issues, unexpected behavior, interface problems, and areas that need refinement before deployment.",
    activities: [
      "Test key application workflows",
      "Review usability and performance",
      "Resolve identified issues",
    ],
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Evolution",
    description:
      "After the required checks, the software can be prepared for deployment. Future development may include additional features, integrations, performance improvements, and maintenance based on changing business needs.",
    activities: [
      "Prepare production deployment",
      "Plan release and handover",
      "Identify future improvements",
    ],
  },
];

const capabilities = [
  {
    icon: UsersIcon,
    title: "User & Role Management",
    description:
      "Organize application access around suitable user roles, responsibilities, and permissions.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Present useful business information through structured reports, dashboards, and visual summaries.",
  },
  {
    icon: Network,
    title: "API & System Integration",
    description:
      "Connect applications with external services and existing business systems through suitable integrations.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Access",
    description:
      "Support secure sign-in, account management, and access-control requirements.",
  },
  {
    icon: Workflow,
    title: "Workflow Management",
    description:
      "Organize tasks, approvals, notifications, and recurring business activities.",
  },
  {
    icon: Database,
    title: "Information Management",
    description:
      "Create structured ways to store, retrieve, update, and manage application information.",
  },
  {
    icon: Sparkles,
    title: "AI-Enabled Functionality",
    description:
      "Explore suitable AI features such as intelligent assistance, document processing, and content analysis.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Review application responsiveness, resource usage, and technical areas that may affect performance.",
  },
];

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Inventory systems, product management, order workflows, sales platforms, and retail operations software.",
  },
  {
    icon: Building2,
    title: "Corporate & Enterprise",
    description:
      "Business management platforms, employee portals, administration systems, and operational dashboards.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Healthcare administration tools, appointment workflows, information portals, and service management applications.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Learning management platforms, student portals, course administration, and educational applications.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production information systems, process tracking, operational dashboards, and workflow applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Client portals, project management tools, booking platforms, and service delivery applications.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Designed Around Your Business",
    description:
      "Software can be planned around your actual processes, users, and requirements instead of relying on a generic feature set.",
  },
  {
    number: "02",
    title: "More Organized Workflows",
    description:
      "Connected applications can help teams manage information, coordinate activities, and follow consistent processes.",
  },
  {
    number: "03",
    title: "Better Information Access",
    description:
      "Well-designed dashboards and data structures can make relevant business information easier to find and understand.",
  },
  {
    number: "04",
    title: "Flexible Future Development",
    description:
      "A considered architecture can provide a foundation for new features, integrations, and changing requirements.",
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development is the process of planning and building software around specific business requirements. It may involve web applications, enterprise platforms, dashboards, backend systems, integrations, and automation workflows.",
  },
  {
    question: "What types of software can ZYNOVA develop?",
    answer:
      "Software projects can include business management systems, inventory platforms, customer portals, administrative dashboards, workflow applications, web-based systems, and custom solutions. The scope depends on the problem and requirements.",
  },
  {
    question: "Can software connect to an existing database?",
    answer:
      "Yes. Applications can be designed to work with suitable existing databases and services. The integration approach depends on the current system, its data structure, access methods, and technical constraints.",
  },
  {
    question: "Can you automate our business processes?",
    answer:
      "Selected business workflows can be automated using application logic, APIs, scheduled processes, and integrations. The first step is to understand the current workflow and identify which activities are suitable for automation.",
  },
  {
    question: "Can AI be included in custom software?",
    answer:
      "AI capabilities may be integrated where they serve a clear purpose. Examples include document analysis, intelligent search, conversational assistance, classification, and selected data-processing workflows. The appropriate approach depends on the data, use case, and required safeguards.",
  },
  {
    question: "Can existing software be upgraded?",
    answer:
      "Yes. Existing software can be assessed for interface improvements, technical modernization, additional features, integrations, and maintenance needs. The recommended approach depends on the current architecture and business priorities.",
  },
];

const colorStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
  },
};

function UsersIcon() {
  return <Puzzle size={23} />;
}

export default function SoftwareDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#fcfcff] text-slate-800">
      {/* HERO */}
      <section className="relative bg-white px-5 pb-20 pt-24 sm:px-8 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[110px]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-100/70 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Code2 size={17} />
              Digital Solutions / Software Development
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.13] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Software built around the way your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                business works.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              The right software can transform the way an organization manages
              information, coordinates activities, and delivers services. At
              ZYNOVA AI Solutions, we approach software development as a
              practical combination of business understanding, thoughtful
              engineering, and useful digital experiences.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-500">
              From custom business applications to enterprise platforms and
              intelligent workflow systems, we explore solutions that address
              real requirements and provide a foundation for future growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your Software Idea
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore Our Expertise
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-7">
              {[
                "Custom Solutions",
                "Modern Engineering",
                "Business-Focused Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 size={17} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SOFTWARE DASHBOARD VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-100/70 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <Blocks size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Business Suite
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Software workspace concept
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
                  DIGITAL WORKSPACE
                </div>
              </div>

              <div className="grid grid-cols-[75px_1fr] gap-4 py-5">
                <div className="space-y-4 rounded-2xl bg-slate-50 p-3">
                  {[Monitor, Database, Workflow, Settings].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className={`flex h-10 items-center justify-center rounded-xl ${
                          index === 0
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-400"
                        }`}
                      >
                        <Icon size={19} />
                      </div>
                    )
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Overview Dashboard
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        A connected view of your operations
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                      <BarChart3 size={17} />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {[
                      { label: "Operations", value: "Connected", color: "bg-blue-50" },
                      { label: "Workflows", value: "Organized", color: "bg-violet-50" },
                      { label: "Information", value: "Structured", color: "bg-cyan-50" },
                      { label: "Systems", value: "Integrated", color: "bg-emerald-50" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl ${item.color} p-3`}
                      >
                        <p className="text-[9px] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-2 text-xs font-bold text-slate-800">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-xl border border-slate-100 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-slate-700">
                        Application Architecture
                      </p>
                      <Layers3 size={15} className="text-violet-500" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 rounded-full bg-blue-100">
                        <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                      </div>
                      <div className="h-2 rounded-full bg-violet-100">
                        <div className="h-2 w-3/5 rounded-full bg-violet-500" />
                      </div>
                      <div className="h-2 rounded-full bg-cyan-100">
                        <div className="h-2 w-2/3 rounded-full bg-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                {[
                  { icon: Code2, label: "Development" },
                  { icon: Database, label: "Data Systems" },
                  { icon: Cloud, label: "Cloud Services" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2 rounded-xl bg-slate-50 p-3 text-center"
                    >
                      <Icon size={19} className="text-blue-600" />
                      <span className="text-[9px] font-semibold text-slate-600">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute -left-7 top-1/3 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:block">
              <Laptop className="text-blue-600" size={25} />
              <p className="mt-2 text-xs font-bold text-slate-700">
                Smart Systems
              </p>
            </div>

            <div className="absolute -right-5 bottom-12 hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-xl sm:block">
              <Puzzle className="text-violet-600" size={25} />
              <p className="mt-2 text-xs font-bold text-slate-700">
                Connected Tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Software Philosophy
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Solve the problem first. Choose the technology second.
            </h2>
            <div className="mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Software should have a clear purpose. It should help people
              complete tasks, make information accessible, and support the
              activities that matter to an organization. Before considering
              programming languages or frameworks, it is important to
              understand the business problem and the people who will use the
              solution.
            </p>
            <p>
              Some organizations need a custom platform because their
              workflows are too specific for generic tools. Others may need
              to connect separate systems, improve information management, or
              replace repetitive manual activities with structured digital
              processes. Each situation requires a different approach.
            </p>
            <p>
              Our software development philosophy focuses on connecting
              requirements with practical technical decisions. We consider
              application architecture, user experience, data organization,
              security, integrations, and future maintenance as related parts
              of the same solution.
            </p>
            <p>
              We also recognize that software is not static. As a business
              grows, its processes and expectations can change. A thoughtful
              development approach considers how an application can be
              maintained, extended, and improved as new requirements emerge.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="px-5 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(6,182,212,0.3),transparent_40%)]" />

          <div className="relative grid items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Connected Digital Systems
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Bring your business tools and information together.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                Software can connect different parts of an organization.
                Applications, databases, APIs, and automation workflows can
                work together to create a more consistent digital environment.
                The right architecture depends on the systems you already use
                and the outcomes you want to achieve.
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                We consider the wider technology environment when planning a
                software solution, helping ensure that individual features
                contribute to a connected platform.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Explore a Software Solution
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="font-semibold text-white">
                    Connected Architecture
                  </span>
                  <Network size={21} className="text-cyan-300" />
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: Monitor, title: "Application Interface" },
                    { icon: Server, title: "Backend Services" },
                    { icon: Database, title: "Database Layer" },
                    { icon: Cloud, title: "External Integrations" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title}>
                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                          <div className="rounded-xl bg-white/10 p-2.5 text-cyan-300">
                            <Icon size={21} />
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {item.title}
                          </span>
                        </div>
                        {index !== 3 && (
                          <div className="ml-8 h-3 w-px bg-cyan-300/50" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Develop
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Software development services for modern organizations.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              From focused applications to connected enterprise platforms,
              software projects require a clear understanding of business
              priorities. Explore the areas where custom software can help
              organize processes and support digital services.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const style = colorStyles[service.color];

              return (
                <article
                  key={service.number}
                  className="group rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className={`mt-0.5 shrink-0 ${style.text}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-7 h-1 w-12 rounded-full ${style.bg} transition-all duration-300 group-hover:w-full`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Software Capabilities
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Build the functionality your business actually needs.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                A software platform is made up of different capabilities that
                work together. Depending on the project, this may include
                user management, reporting, integrations, automated
                workflows, data management, and intelligent features.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                We consider how each capability supports the intended
                application experience. This helps keep the solution focused
                on practical requirements and avoids unnecessary complexity.
              </p>

              <div className="mt-8 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-violet-600" size={26} />
                  <h3 className="font-bold text-slate-900">
                    Intelligent Software Possibilities
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  AI and automation can be explored as part of a wider software
                  solution when they offer a useful way to process information,
                  assist users, or improve selected workflows.
                </p>
                <Link
                  href="/ai-development"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700"
                >
                  Explore AI Development
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 transition hover:border-violet-200 hover:bg-violet-50/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-5 font-bold text-slate-900">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technology Stack
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Modern technologies. Practical engineering.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Software architecture and technology choices should support the
              purpose of the application. We consider the required features,
              data, integrations, security, and maintenance needs when
              evaluating an appropriate technology stack.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {technology.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold text-blue-600">
                    {technology.stack}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {technology.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Development Process
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              A clear path from business challenge to working software.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Good software development requires more than writing code. It
              involves understanding requirements, planning the architecture,
              designing the experience, developing functionality, and
              validating the result. Our process organizes these activities
              into connected stages.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-blue-300 via-violet-300 to-cyan-300 md:block" />

            <div className="space-y-6">
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative grid gap-6 rounded-[26px] border border-slate-200 bg-[#fcfcff] p-6 transition hover:bg-white hover:shadow-lg md:grid-cols-[80px_1fr_1fr] md:items-start md:p-8"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-100">
                      <Icon size={25} />
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-widest text-blue-600">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Key activities
                      </p>
                      <ul className="space-y-3">
                        {step.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-blue-600"
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gradient-to-b from-[#f4f6ff] to-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Industries & Business Areas
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Software solutions for different business environments.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Every industry has its own workflows, information needs, and
              operational priorities. Custom software can help address these
              differences through applications designed around specific
              activities and users.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-[24px] border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                    Explore possibilities
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Business Value
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Make technology a practical part of business growth.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Well-planned software can help an organization manage its
              activities more consistently, make information easier to access,
              and create better ways for people to interact with business
              services.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The benefits depend on the quality of the solution and how well
              it addresses the intended problem. We believe the strongest
              starting point is a clear understanding of what the software
              needs to accomplish.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
            >
              Discuss Your Business Requirements
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-[24px] border border-slate-200 bg-white p-7"
              >
                <span className="text-3xl font-bold text-blue-100">
                  {benefit.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Frequently Asked Questions
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Questions about custom software development?
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Choosing a software solution involves understanding your
              requirements, users, technical environment, and future plans.
              These common questions can help you start thinking about your
              project.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <MessageSquare size={23} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">
                Have a different question?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell us about your software idea and the business challenge
                you want to solve.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
              >
                Contact our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900">
                  <span>
                    <span className="mr-3 text-sm font-bold text-blue-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-slate-200/70 pt-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 px-7 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <Boxes size={31} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Let's Build Something Meaningful
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Have a software challenge? Let's solve it together.
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Whether you need a custom business application, a connected
              enterprise platform, an automation solution, or an improvement
              to existing software, ZYNOVA AI Solutions can help you explore
              a practical development direction. Share your requirements and
              let's discuss the possibilities.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-cyan-100"
              >
                Start Your Software Project
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Home
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
