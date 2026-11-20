
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  MessageSquare,
  Play,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

const automationServices = [
  {
    number: "01",
    title: "Business Process Automation",
    description:
      "Transform repetitive business activities into structured digital workflows. Automate routine tasks such as data entry, document handling, approvals, status updates, and internal notifications so teams can focus on more valuable work.",
    icon: Workflow,
    color: "blue",
  },
  {
    number: "02",
    title: "AI-Powered Automation",
    description:
      "Combine automation with artificial intelligence to support tasks involving language, documents, information extraction, classification, and intelligent assistance. Design workflows that use AI where it adds practical value.",
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "03",
    title: "Workflow & Approval Automation",
    description:
      "Create organised approval journeys for requests, invoices, employee activities, customer enquiries, and operational decisions. Route tasks to the appropriate people and maintain visibility into each stage.",
    icon: GitBranch,
    color: "cyan",
  },
  {
    number: "04",
    title: "Application & System Automation",
    description:
      "Connect your existing applications and automate the movement of information between them. Reduce duplicate data entry and create more consistent processes across your digital tools.",
    icon: Layers3,
    color: "blue",
  },
  {
    number: "05",
    title: "Customer Communication Automation",
    description:
      "Support timely customer communication through automated email updates, reminders, enquiry routing, service notifications, and other communication workflows.",
    icon: MessageSquare,
    color: "violet",
  },
  {
    number: "06",
    title: "Reporting & Data Automation",
    description:
      "Automate recurring data collection, report preparation, information synchronisation, and business updates. Help teams access organised information without repeating the same manual steps.",
    icon: Database,
    color: "cyan",
  },
];

const useCases = [
  {
    category: "Operations",
    title: "Make everyday operations flow more smoothly.",
    description:
      "Automate routine operational activities such as task assignments, internal requests, inventory notifications, document processing, and approval updates.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    points: ["Task routing", "Internal approvals", "Operational alerts"],
  },
  {
    category: "Customer Experience",
    title: "Create more responsive customer journeys.",
    description:
      "Support customer interactions with automated enquiry routing, follow-up messages, appointment reminders, and service updates.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85",
    points: ["Enquiry management", "Customer notifications", "Follow-up workflows"],
  },
  {
    category: "Finance & Administration",
    title: "Reduce repetitive administrative work.",
    description:
      "Structure processes for invoice handling, document collection, expense requests, approval notifications, and recurring reporting.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=85",
    points: ["Document workflows", "Invoice processing", "Report preparation"],
  },
  {
    category: "Digital Products",
    title: "Connect applications through intelligent workflows.",
    description:
      "Build automated interactions between websites, mobile applications, backend services, databases, and third-party platforms.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85",
    points: ["API-based workflows", "Data synchronisation", "System integration"],
  },
];

const stages = [
  {
    number: "01",
    title: "Trigger",
    description: "An event or request starts the workflow.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Process",
    description: "Rules and logic determine what happens next.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Execute",
    description: "The required task or system action is performed.",
    icon: Play,
  },
  {
    number: "04",
    title: "Notify",
    description: "Relevant people and systems receive updates.",
    icon: Mail,
  },
  {
    number: "05",
    title: "Monitor",
    description: "The workflow can be reviewed and improved.",
    icon: Activity,
  },
];

const principles = [
  {
    title: "Start with the real problem",
    description:
      "Automation should solve an identifiable business challenge. We begin by understanding the process, its users, and the outcome that matters.",
    icon: Target,
  },
  {
    title: "Keep people in control",
    description:
      "Not every decision should be automated. Important approvals, exceptions, and sensitive actions can retain appropriate human oversight.",
    icon: ShieldCheck,
  },
  {
    title: "Build for connected systems",
    description:
      "Automation becomes more useful when applications can exchange information through APIs, integrations, and clearly defined workflows.",
    icon: Layers3,
  },
  {
    title: "Improve continuously",
    description:
      "Business processes change. Workflows should be reviewed, tested, and refined as requirements, systems, and operational needs evolve.",
    icon: RefreshCw,
  },
];

const faqs = [
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software and defined workflows to perform recurring tasks with less manual intervention. Examples include approval routing, notifications, data transfers, document processing, and report generation.",
  },
  {
    question: "Can you automate our existing business processes?",
    answer:
      "Yes. Existing processes can be reviewed to identify suitable automation opportunities. The solution depends on how the current process works, which applications are involved, and whether those systems support integration.",
  },
  {
    question: "What is the difference between AI and traditional automation?",
    answer:
      "Traditional automation generally follows predefined rules and steps. AI-powered automation can additionally support tasks such as understanding text, classifying information, extracting content, and generating responses. The right choice depends on the task.",
  },
  {
    question: "Can automation connect different applications?",
    answer:
      "Yes. APIs, webhooks, and other integration methods can allow applications to exchange information and trigger workflows. This can help reduce duplicate data entry and disconnected processes.",
  },
  {
    question: "Will employees still be involved in automated workflows?",
    answer:
      "They can be. Many workflows are designed as human-in-the-loop processes, where software handles routine steps while people review exceptions, make decisions, or approve important actions.",
  },
];

export default function AutomationPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcff] text-slate-800">
      {/* HERO - SPLIT EDITORIAL DESIGN */}
      <section className="relative px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-violet-100/60 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Intelligent Automation Solutions
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[64px]">
              Less repetitive work.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                More meaningful progress.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Make your business processes work smarter with intelligent
              automation. ZYNOVA AI Solutions helps organisations simplify
              recurring tasks, connect digital applications, and create
              structured workflows that support everyday operations.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-500">
              From simple task automation to AI-assisted business workflows,
              we focus on practical solutions that fit your existing
              operations and can evolve with your organisation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Automate Your Workflow
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#automation-services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-700"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-7">
              <div>
                <Bot size={22} className="text-blue-600" />
                <p className="mt-3 text-sm font-bold text-slate-900">
                  AI-assisted
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Smarter workflows
                </p>
              </div>
              <div>
                <Workflow size={22} className="text-violet-600" />
                <p className="mt-3 text-sm font-bold text-slate-900">
                  Connected
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Integrated systems
                </p>
              </div>
              <div>
                <Zap size={22} className="text-cyan-600" />
                <p className="mt-3 text-sm font-bold text-slate-900">
                  Efficient
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Reduced repetition
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL WORKFLOW BUILDER */}
          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-200 via-violet-100 to-cyan-100 opacity-70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-5 shadow-[0_25px_80px_rgba(37,50,100,0.13)] sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                    Workflow designer
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-950">
                    New order automation
                  </h2>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active preview
                </span>
              </div>

              <div className="relative py-7">
                <div className="absolute bottom-10 left-[27px] top-10 w-px border-l-2 border-dashed border-blue-200" />

                <div className="relative space-y-5">
                  <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                      <Zap size={23} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                        Trigger
                      </p>
                      <h3 className="mt-1 font-bold text-slate-900">
                        New order received
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Order event detected
                      </p>
                    </div>
                    <CheckCircle2 size={19} className="text-emerald-500" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200">
                      <Settings2 size={23} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600">
                        Process
                      </p>
                      <h3 className="mt-1 font-bold text-slate-900">
                        Validate order details
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Check required information
                      </p>
                    </div>
                    <CheckCircle2 size={19} className="text-emerald-500" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-200">
                      <Database size={23} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-700">
                        Action
                      </p>
                      <h3 className="mt-1 font-bold text-slate-900">
                        Update business records
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Send data to connected system
                      </p>
                    </div>
                    <CheckCircle2 size={19} className="text-emerald-500" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-200">
                      <Mail size={23} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                        Notification
                      </p>
                      <h3 className="mt-1 font-bold text-slate-900">
                        Send confirmation
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Notify the relevant customer
                      </p>
                    </div>
                    <CheckCircle2 size={19} className="text-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-950 p-4 text-white">
                <div>
                  <p className="text-sm font-semibold">Workflow overview</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Illustrative automation sequence
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs text-cyan-200">
                  <Activity size={14} />
                  Event-based
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - EDITORIAL STRIP */}
      <section className="border-y border-slate-200 bg-white px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Rethink repetitive tasks
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Give your team more room to focus on what matters.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              Many business processes involve repeating the same actions:
              collecting information, updating records, sending messages,
              preparing reports, and waiting for approvals. When these tasks
              are handled manually, they can consume valuable time and create
              unnecessary complexity.
            </p>
            <p>
              Automation offers a way to structure these activities. By
              defining triggers, conditions, and actions, organisations can
              create workflows that perform routine steps consistently while
              keeping people involved where judgement and oversight are
              important.
            </p>
          </div>
        </div>
      </section>

      {/* AUTOMATION SERVICES - ASYMMETRIC GRID */}
      <section
        id="automation-services"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Automation designed around your business processes.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Every organisation has different workflows and technology
              requirements. Our automation services cover a range of
              opportunities, from connecting existing applications to
              developing more intelligent, AI-assisted processes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {automationServices.map((service) => {
              const Icon = service.icon;

              const iconStyle =
                service.color === "blue"
                  ? "bg-blue-100 text-blue-700"
                  : service.color === "violet"
                    ? "bg-violet-100 text-violet-700"
                    : "bg-cyan-100 text-cyan-700";

              return (
                <article
                  key={service.number}
                  className="group relative rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(60,70,130,0.09)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-slate-400">
                      / {service.number}
                    </span>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconStyle}`}
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[135px] text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Automation capability
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-blue-600 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZONTAL AUTOMATION LIFECYCLE */}
      <section className="overflow-hidden bg-[#11172e] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              How automation works
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              From a simple trigger to a complete workflow.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              An automated process follows a defined sequence. An event starts
              the workflow, business rules determine the next step, and
              connected applications carry out the required actions.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.number} className="relative">
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:border-cyan-300/50 hover:bg-white/[0.09]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-cyan-300">
                        {stage.number}
                      </span>
                      <Icon size={23} className="text-violet-300" />
                    </div>
                    <h3 className="mt-8 text-xl font-bold">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {stage.description}
                    </p>
                  </div>

                  {index !== stages.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-300 lg:block">
                      <ChevronRight size={22} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-400">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Event-driven workflows
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Defined business rules
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Human oversight
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Continuous monitoring
            </span>
          </div>
        </div>
      </section>

      {/* IMAGE-LED INDUSTRY APPLICATIONS */}
      <section className="bg-[#f3f5fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Where automation helps
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
                Practical automation across business functions.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              The best automation opportunities often begin with processes
              that are repeated frequently, involve several systems, or
              require predictable sequences of actions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {useCases.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-5 left-6">
                    <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <span className="absolute right-6 top-5 text-4xl font-black text-white/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI AUTOMATION FEATURE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-800 p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15" />
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/15" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <BrainCircuit size={32} className="text-cyan-200" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Intelligent workflows
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Add intelligence where traditional automation reaches its
                limits.
              </h2>

              <p className="mt-6 leading-8 text-blue-100">
                Some business activities involve more than predictable steps.
                They may require reading documents, interpreting messages,
                categorising information, or preparing responses. AI can
                support these tasks when integrated into a well-defined
                workflow.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: "Document understanding" },
                  { icon: MessageSquare, label: "Language processing" },
                  { icon: Sparkles, label: "Content assistance" },
                  { icon: Database, label: "Information extraction" },
                ].map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4"
                    >
                      <Icon size={21} className="text-cyan-200" />
                      <p className="mt-3 text-sm font-semibold text-white">
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Automation + artificial intelligence
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Combine structured processes with intelligent capabilities.
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              Traditional automation is effective when tasks follow clear
              rules. AI can extend these workflows by helping systems work
              with less structured information, such as customer messages,
              documents, and natural-language requests.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              For example, a workflow could receive a customer enquiry,
              classify its subject, extract relevant details, and direct it
              to the appropriate team. A human employee can then review
              sensitive or uncertain cases before a final action is taken.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Identify tasks suitable for AI assistance",
                "Combine AI outputs with defined business rules",
                "Validate results before important actions",
                "Keep appropriate human review and oversight",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-violet-600"
                  />
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES - EDITORIAL LIST */}
      <section className="border-y border-slate-200 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our automation philosophy
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Technology should make work simpler, not more complicated.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                Successful automation starts with a good process. We focus
                on understanding how your organisation works before
                introducing new tools or changing established workflows.
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="grid gap-4 py-7 sm:grid-cols-[60px_1fr] sm:gap-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={24} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-violet-500">
                          PRINCIPLE 0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="mt-3 leading-7 text-slate-500">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Project journey
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              How we bring automation to life.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              A structured process helps ensure that automation supports
              real business needs and works appropriately with existing
              applications and teams.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "Understand your current workflows, identify repetitive tasks, and discuss the outcomes you want to achieve.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Map the workflow, define triggers and conditions, plan integrations, and identify where human review is needed.",
                icon: Workflow,
              },
              {
                step: "03",
                title: "Develop",
                description:
                  "Build the automation logic, connect applications, configure actions, and validate how each workflow behaves.",
                icon: Code2,
              },
              {
                step: "04",
                title: "Improve",
                description:
                  "Deploy the solution, review its operation, address issues, and refine the workflow as requirements change.",
                icon: RefreshCw,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-slate-100">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f3f5fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Let's make automation easier to understand.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Learn more about business automation, AI-assisted workflows,
              application connections, and how an automation project can
              support your organisation.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5">
              <Clock3 size={24} className="text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">
                Have a process in mind?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us about a repetitive task or workflow you would like
                to improve.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
              >
                Talk to our team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-200"
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
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#11172e] px-8 py-16 text-center text-white sm:px-14 sm:py-20">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/30 blur-[110px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
              <Bot size={32} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Start working smarter
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Your next improvement could start with one automated workflow.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Let's explore how intelligent automation can simplify your
              operations, connect your applications, and create a more
              efficient digital working environment.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Discuss Your Automation Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
