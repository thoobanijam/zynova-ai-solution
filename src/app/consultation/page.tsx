
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  Cpu,
  Database,
  Globe2,
  Lightbulb,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Building2,
  Layers3,
} from "lucide-react";

const consultationTopics = [
  {
    title: "AI Strategy & Innovation",
    category: "INTELLIGENT TECHNOLOGY",
    description:
      "Explore how artificial intelligence, machine learning and generative AI could support your organisation's objectives.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    icon: BrainCircuit,
    duration: "AI opportunity discussion",
  },
  {
    title: "Digital Product Planning",
    category: "PRODUCT DEVELOPMENT",
    description:
      "Discuss a new website, mobile application, customer portal or software product and identify its essential building blocks.",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=85",
    icon: MonitorSmartphone,
    duration: "Product discovery",
  },
  {
    title: "Business Process Automation",
    category: "SMART OPERATIONS",
    description:
      "Identify repetitive workflows, disconnected processes and opportunities for more efficient business operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    icon: Workflow,
    duration: "Workflow assessment",
  },
  {
    title: "Data & Business Intelligence",
    category: "DATA STRATEGY",
    description:
      "Explore dashboards, reporting, data management and ways to make business information more useful.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    icon: Database,
    duration: "Data strategy session",
  },
  {
    title: "Enterprise Technology",
    category: "CONNECTED SYSTEMS",
    description:
      "Discuss enterprise applications, system integrations, infrastructure and technology modernisation.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    icon: Building2,
    duration: "Technology planning",
  },
  {
    title: "Digital Growth & Transformation",
    category: "BUSINESS EVOLUTION",
    description:
      "Explore how technology can help your organisation adapt, connect its operations and prepare for future opportunities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    icon: Globe2,
    duration: "Transformation discussion",
  },
];

const discussionStages = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "Start with your organisation, customers, existing processes and the challenges you want to address.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Explore the Opportunity",
    description:
      "Discuss ideas, available technology options, potential constraints and possible directions.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Identify a Practical Approach",
    description:
      "Consider the required capabilities, priorities, integrations and a suitable implementation direction.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Define Next Steps",
    description:
      "Establish useful follow-up actions, further discovery requirements and potential project planning.",
    icon: Target,
  },
];

const faqs = [
  {
    question: "What is a technology consultation?",
    answer:
      "A technology consultation is an opportunity to discuss your business challenges, digital ideas and possible technical solutions. It can help you understand what to consider before starting a project.",
  },
  {
    question: "Do I need a completed project plan?",
    answer:
      "No. You can arrive with an early-stage idea, a business problem or an existing application that needs improvement. The discussion can help identify what information is needed next.",
  },
  {
    question: "Can I discuss an existing system?",
    answer:
      "Yes. Topics can include software improvements, application modernisation, integrations, automation, performance, reporting and broader technology planning.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "The expected duration depends on the subject and scope. You can indicate your preferred duration in the consultation request, and the format can be discussed when arranging the session.",
  },
  {
    question: "Does submitting a consultation request confirm a meeting?",
    answer:
      "No. Submitting this enquiry records your preferred details locally in this prototype. A connected booking or enquiry backend is required to receive requests and confirm actual meeting availability.",
  },
];

const consultationDurations = [
  "15 minutes",
  "30 minutes",
  "45 minutes",
  "60 minutes",
  "Not sure yet",
];

export default function ConsultationPage() {
  const [selectedTopic, setSelectedTopic] = useState(
    "AI Strategy & Innovation"
  );

  const [duration, setDuration] = useState("30 minutes");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    time: "",
    challenge: "",
  });

  const [success, setSuccess] = useState(false);

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <main className="overflow-hidden bg-[#fffefa] text-slate-900">

      {/* HERO - EDITORIAL SPLIT DESIGN */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-100/70 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
              <Sparkles size={15} />
              Strategy & Discovery
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Let's think
              <span className="block text-violet-700">
                beyond
              </span>
              technology.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              The right digital solution begins with understanding the
              right problem. Start a conversation with ZYNOVA AI Solutions
              and explore how intelligent technology could move your
              business forward.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#consultation-planner"
                className="inline-flex items-center gap-3 rounded-full bg-violet-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-700/20 transition hover:bg-slate-950"
              >
                Plan a Consultation
                <ArrowRight size={18} />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-violet-500 hover:text-violet-700"
              >
                Discover ZYNOVA
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <BrainCircuit size={22} className="text-violet-700" />
                <span className="text-sm font-semibold text-slate-700">
                  AI Possibilities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Network size={22} className="text-blue-700" />
                <span className="text-sm font-semibold text-slate-700">
                  Connected Systems
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb size={22} className="text-cyan-700" />
                <span className="text-sm font-semibold text-slate-700">
                  Practical Ideas
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-8 overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=90"
                  alt="Business professionals collaborating during a strategy discussion"
                  className="h-[340px] w-full object-cover sm:h-[430px]"
                />
              </div>

              <div className="col-span-4 flex flex-col gap-3">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=85"
                    alt="Technology team working together"
                    className="h-[165px] w-full object-cover sm:h-[210px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-[2rem] bg-gradient-to-br from-violet-700 to-blue-700 p-5 text-white sm:p-6">
                  <Sparkles size={28} />
                  <div>
                    <p className="text-3xl font-semibold">01</p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-white/80">
                      Understand before building.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Start a conversation</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Bring your questions
                  </p>
                </div>
              </div>

              <div className="col-span-7 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <Clock3 size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Focused discussions</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Built around your goals
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-5 -z-10 h-52 w-52 rounded-full border border-violet-200" />
          </div>
        </div>
      </section>

      {/* CONSULTATION INTRODUCTION */}
      <section className="border-y border-slate-100 bg-white px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              A Better Starting Point
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Before the solution, understand the challenge.
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-slate-600">
              Technology decisions can influence the way a business
              operates, serves customers and grows. A thoughtful
              consultation creates space to discuss those decisions before
              committing to a particular solution.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Whether you are exploring an AI opportunity, planning a new
              application, improving an existing system or rethinking
              business workflows, the conversation should begin with your
              objectives. Understanding the context helps identify which
              questions deserve attention and which possibilities are worth
              exploring.
            </p>
          </div>
        </div>
      </section>

      {/* TOPIC SELECTOR */}
      <section className="bg-[#f6f5ff] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                Choose Your Discussion
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What would you like
                <span className="text-violet-700"> to explore?</span>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Select the subject closest to your current business needs.
                You can provide more detail when completing the consultation
                planner.
              </p>
            </div>

            <a
              href="#consultation-planner"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-700 hover:text-white"
            >
              Continue to Planner
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultationTopics.map((topic) => {
              const Icon = topic.icon;
              const active = selectedTopic === topic.title;

              return (
                <button
                  type="button"
                  key={topic.title}
                  onClick={() => setSelectedTopic(topic.title)}
                  className={`group overflow-hidden rounded-3xl border bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    active
                      ? "border-violet-500 shadow-lg shadow-violet-900/10 ring-2 ring-violet-100"
                      : "border-slate-200"
                  }`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />

                    <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.15em] text-white">
                      {topic.category}
                    </span>

                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700 shadow-lg">
                      <Icon size={22} />
                    </div>

                    {active && (
                      <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white">
                        <Check size={17} />
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-950">
                      {topic.title}
                    </h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                      {topic.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        {topic.duration}
                      </span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                          active
                            ? "bg-violet-700 text-white"
                            : "bg-violet-50 text-violet-700 group-hover:bg-violet-700 group-hover:text-white"
                        }`}
                      >
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-7 text-center text-sm text-slate-500">
            Selected discussion:{" "}
            <span className="font-bold text-violet-700">
              {selectedTopic}
            </span>
          </p>
        </div>
      </section>

      {/* DISCUSSION FRAMEWORK */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                How We Approach It
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                A conversation with
                <span className="text-blue-700"> purpose.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                A useful consultation should move beyond a list of
                technologies. It should connect business goals with
                realistic opportunities and help create a clearer picture
                of what comes next.
              </p>

              <div className="mt-9 overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern workspace for collaborative planning"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-6">
                <p className="text-sm font-bold text-blue-950">
                  Our discussion philosophy
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-900/75">
                  Ask meaningful questions, understand the context and
                  consider practical solutions before deciding on a
                  direction.
                </p>
              </div>
            </div>

            <div className="space-y-0">
              {discussionStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={stage.number}
                    className="group relative grid grid-cols-[64px_1fr] gap-5 border-b border-slate-200 py-8 first:pt-0 last:border-b-0"
                  >
                    {index !== discussionStages.length - 1 && (
                      <div className="absolute bottom-0 left-8 top-20 border-l border-dashed border-blue-200" />
                    )}

                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f0f2ff] text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] text-violet-600">
                        PHASE {stage.number}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">
                        {stage.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION PLANNER */}
      <section
        id="consultation-planner"
        className="bg-[#eef2ff] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Consultation Request
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's arrange your
              <span className="text-violet-700"> discussion.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Share your contact details, preferred schedule and the
              questions you would like to discuss. Your selected topic is
              included automatically.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
                alt="Bright professional meeting space"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

              <div className="relative flex h-full min-h-[430px] flex-col justify-between p-8 text-white sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <CalendarDays size={28} />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Your Consultation Plan
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight">
                    Start with what matters most.
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/75">
                    A focused discussion can help clarify your priorities,
                    explore technical possibilities and identify useful next
                    steps.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-cyan-300" />
                      <span className="text-sm text-white/85">
                        Business context
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-cyan-300" />
                      <span className="text-sm text-white/85">
                        Technology opportunities
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-cyan-300" />
                      <span className="text-sm text-white/85">
                        Practical next steps
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-10">
              {success ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="mt-7 text-3xl font-semibold text-slate-950">
                    Request prepared!
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Your consultation request passed the local form
                    validation. Connect a backend or booking service to
                    receive the request and arrange an actual meeting.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccess(false);
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        date: "",
                        time: "",
                        challenge: "",
                      });
                      setSelectedTopic("AI Strategy & Innovation");
                      setDuration("30 minutes");
                    }}
                    className="mt-8 rounded-full bg-violet-700 px-7 py-3 text-sm font-bold text-white transition hover:bg-slate-950"
                  >
                    Create Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">
                        Consultation details
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        Tell us a little about yourself and your objectives.
                      </p>
                    </div>

                    <span className="rounded-full bg-violet-50 px-4 py-2 text-xs font-bold text-violet-700">
                      New Enquiry
                    </span>
                  </div>

                  <form
                    onSubmit={submitConsultation}
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Your Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) =>
                            updateForm("name", e.target.value)
                          }
                          placeholder="Full name"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            updateForm("email", e.target.value)
                          }
                          placeholder="name@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Company / Organisation
                        </label>
                        <input
                          value={form.company}
                          onChange={(e) =>
                            updateForm("company", e.target.value)
                          }
                          placeholder="Company name"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Discussion Topic *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={selectedTopic}
                            onChange={(e) =>
                              setSelectedTopic(e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 pr-10 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          >
                            {consultationTopics.map((topic) => (
                              <option key={topic.title} value={topic.title}>
                                {topic.title}
                              </option>
                            ))}
                            <option value="General Technology Consultation">
                              General Technology Consultation
                            </option>
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                      <h4 className="mb-5 text-sm font-bold text-slate-900">
                        Preferred Consultation Schedule
                      </h4>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            value={form.date}
                            onChange={(e) =>
                              updateForm("date", e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Preferred Time
                          </label>
                          <input
                            type="time"
                            value={form.time}
                            onChange={(e) =>
                              updateForm("time", e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Preferred Discussion Duration
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {consultationDurations.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setDuration(item)}
                              className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                                duration === item
                                  ? "border-violet-700 bg-violet-700 text-white"
                                  : "border-slate-200 bg-white text-slate-600 hover:border-violet-400"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        What would you like to discuss? *
                      </label>
                      <textarea
                        required
                        minLength={10}
                        rows={5}
                        value={form.challenge}
                        onChange={(e) =>
                          updateForm("challenge", e.target.value)
                        }
                        placeholder="Describe your business challenge, current situation, project idea or questions..."
                        className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm leading-7 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                      />
                    </div>

                    <div className="rounded-xl bg-violet-50 p-4">
                      <div className="flex gap-3">
                        <ShieldCheck
                          size={20}
                          className="shrink-0 text-violet-700"
                        />
                        <p className="text-xs leading-6 text-slate-600">
                          Do not include passwords, financial credentials or
                          sensitive confidential information. Your preferred
                          date and time are requests, not confirmed bookings.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-700 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Send Consultation Request
                      <Send size={18} />
                    </button>

                    <p className="text-center text-xs leading-6 text-slate-400">
                      This prototype currently provides local form
                      confirmation only. It does not create a real calendar
                      booking or send an email.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD BOOK */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Who Can Benefit?
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Bring your business questions to the table.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Technology planning is relevant at every stage of a
                business journey. The consultation can begin with a new
                idea, an operational challenge or an opportunity to improve
                an existing digital experience.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Startups exploring their first digital product.",
                  "Small businesses looking to simplify daily operations.",
                  "Growing organisations planning connected systems.",
                  "Enterprise teams considering technology modernisation.",
                  "Business leaders exploring practical AI opportunities.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
                  alt="Startup team collaborating"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="mt-12 overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85"
                  alt="Modern business office"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="-mt-8 overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85"
                  alt="Business strategy meeting"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="flex min-h-56 flex-col justify-between rounded-[2rem] bg-gradient-to-br from-blue-700 to-violet-700 p-6 text-white">
                <Users size={30} />
                <div>
                  <p className="text-2xl font-semibold">Your goals.</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    A conversation shaped around your business context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f8fc] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Helpful Information
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Before we
              <span className="text-violet-700"> connect.</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A few answers to help you prepare for a productive
              technology conversation.
            </p>

            <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Mail size={22} />
              </div>
              <h3 className="mt-5 font-bold text-slate-950">
                Have another question?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Visit our contact page for general enquiries.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-violet-700"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition open:border-violet-200 open:shadow-lg open:shadow-violet-900/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-slate-950 sm:text-base">
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-violet-700 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white px-5 py-24 text-center sm:px-8 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-96 -translate-x-1/2 rounded-full bg-violet-100/70 blur-[110px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-blue-600 text-white shadow-xl shadow-violet-700/20">
            <Cpu size={30} />
          </div>

          <span className="mt-8 block text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
            Think. Explore. Create.
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            The next step starts with
            <span className="block text-violet-700">
              a meaningful conversation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Bring your questions, ideas and business challenges. Let's
            explore the opportunities that intelligent technology could
            create.
          </p>

          <a
            href="#consultation-planner"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-violet-700 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-950"
          >
            Plan Your Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
