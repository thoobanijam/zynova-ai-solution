
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Headphones,
    CalendarDays,
  MessageCircle,
  Mail,
  Phone,
  LifeBuoy,
  Monitor,
  Code2,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Settings,
  Database,
  Bug,
  FileText,
  Clock3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Send,
  Sparkles,
  BookOpen,
  Wrench,
  CircleHelp,
  Zap,
  Globe2,
  Ticket,
  Activity,
  Users,
  LockKeyhole,
  Laptop,
  RefreshCw,
  ClipboardCheck,
} from "lucide-react";

const supportCategories = [
  {
    title: "Technical Support",
    description:
      "Get assistance with application errors, website issues, software behaviour, performance and technical troubleshooting.",
    icon: Monitor,
    color: "bg-blue-50 text-blue-700",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85",
    tags: ["Application issues", "Website errors", "Performance"],
  },
  {
    title: "AI & Automation Support",
    description:
      "Discuss AI functionality, automation workflows, intelligent integrations and unexpected system responses.",
    icon: BrainCircuit,
    color: "bg-violet-50 text-violet-700",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
    tags: ["AI functionality", "Workflow errors", "Integrations"],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Explore deployment problems, hosting configuration, cloud connectivity, infrastructure and environment issues.",
    icon: Cloud,
    color: "bg-cyan-50 text-cyan-700",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85",
    tags: ["Cloud deployment", "Hosting", "Connectivity"],
  },
  {
    title: "Data & Database Assistance",
    description:
      "Get help understanding database connectivity, data synchronisation, reporting issues and application data flows.",
    icon: Database,
    color: "bg-emerald-50 text-emerald-700",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    tags: ["Database", "Data issues", "Reporting"],
  },
  {
    title: "Security & Access",
    description:
      "Discuss authentication, access permissions, account configuration and general application security concerns.",
    icon: ShieldCheck,
    color: "bg-orange-50 text-orange-700",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85",
    tags: ["Authentication", "Permissions", "Security"],
  },
  {
    title: "Maintenance & Improvements",
    description:
      "Request help with software updates, feature adjustments, interface improvements and ongoing maintenance.",
    icon: Wrench,
    color: "bg-pink-50 text-pink-700",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85",
    tags: ["Maintenance", "Updates", "Enhancements"],
  },
];

const helpArticles = [
  {
    category: "Web Development",
    title: "Understanding common website loading problems",
    description:
      "Learn about browser caching, network connectivity, server responses and common reasons a website may not load correctly.",
    readTime: "5 min read",
    icon: Globe2,
  },
  {
    category: "Application Support",
    title: "What information to provide when reporting an error",
    description:
      "A useful troubleshooting report includes the affected page, the action performed, the visible error and the browser environment.",
    readTime: "4 min read",
    icon: Bug,
  },
  {
    category: "Cloud & Deployment",
    title: "Preparing for a software deployment",
    description:
      "Review configuration, environment variables, build output and deployment settings before releasing an application.",
    readTime: "6 min read",
    icon: Cloud,
  },
  {
    category: "Security",
    title: "Good practices for protecting application access",
    description:
      "Understand authentication, access permissions, secure credentials and basic account protection principles.",
    readTime: "5 min read",
    icon: LockKeyhole,
  },
  {
    category: "Database",
    title: "Understanding database connection issues",
    description:
      "Explore connection strings, permissions, network access and application configuration when a database connection fails.",
    readTime: "7 min read",
    icon: Database,
  },
  {
    category: "Maintenance",
    title: "Planning updates for an existing application",
    description:
      "Learn why backups, testing, dependency reviews and staged releases matter when maintaining software.",
    readTime: "5 min read",
    icon: RefreshCw,
  },
];

const faqs = [
  {
    question: "How can I request technical support?",
    answer:
      "Use the support request form on this page and describe the issue, the affected service and the steps that led to the problem. You can also use the contact page for general enquiries.",
  },
  {
    question: "What should I include in a support request?",
    answer:
      "Include a clear description of the issue, the affected application or page, when it occurred, the steps to reproduce it and any visible error message. Avoid sending passwords or private credentials.",
  },
  {
    question: "Can I request changes to an existing application?",
    answer:
      "Yes. You can enquire about maintenance, feature improvements, interface updates, integrations, performance and application modernisation.",
  },
  {
    question: "Can I get help with deployment problems?",
    answer:
      "You can describe issues involving build failures, hosting configuration, environment variables, application availability and deployment workflows.",
  },
  {
    question: "Does submitting this form create a support ticket?",
    answer:
      "The current page demonstrates a local form confirmation only. A connected backend or ticketing platform is needed to store requests, generate ticket references and send notifications.",
  },
];

const quickLinks = [
  {
    title: "Project Enquiries",
    description: "Discuss a new website, application or software project.",
    href: "/quote",
    icon: FileText,
  },
  {
    title: "Book a Consultation",
    description: "Arrange a discussion about your technology requirements.",
    href: "/consultation",
    icon: CalendarDays,
  },
  {
    title: "Explore Services",
    description: "Discover the digital solutions and services available.",
    href: "/services",
    icon: LayersIcon,
  },
  {
    title: "Contact Our Team",
    description: "Find the general contact enquiry page.",
    href: "/contact",
    icon: MessageCircle,
  },
];

// Use a small wrapper so this array does not depend on an unavailable icon.
function LayersIcon() {
  return <ClipboardCheck size={23} />;
}

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    issueType: "",
    priority: "Normal",
    subject: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const categories = [
    "All",
    "Web Development",
    "Application Support",
    "Cloud & Deployment",
    "Security",
    "Database",
    "Maintenance",
  ];

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return helpArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const matchesSearch =
        !query ||
        `${article.title} ${article.description} ${article.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#fffefa] text-slate-900">

      {/* SUPPORT HERO */}
      <section className="relative px-5 pb-16 pt-14 sm:px-8 lg:px-16 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/70 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800 shadow-sm">
                <LifeBuoy size={15} />
                ZYNOVA Support Centre
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                We're here to
                <span className="block text-blue-700">
                  help you
                </span>
                move forward.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Find guidance, explore helpful resources and tell us about
                the technical challenges you are facing. Our support
                experience is designed to make it easier to identify the
                next step.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#support-request"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-slate-950"
                >
                  Submit a Support Request
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#help-centre"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
                >
                  Browse Help Centre
                  <Search size={17} />
                </a>
              </div>

              <div className="mt-11 flex flex-wrap gap-x-8 gap-y-5 border-t border-slate-200 pt-7">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-600" size={21} />
                  <span className="text-sm font-semibold text-slate-700">
                    Responsible Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-blue-700" size={21} />
                  <span className="text-sm font-semibold text-slate-700">
                    Clear Communication
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
                  alt="Support and technology professionals working together"
                  className="h-[450px] w-full object-cover sm:h-[530px]"
                />
              </div>

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-auto sm:w-80">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-950">
                      Support starts here
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Tell us what you need help with.
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Find the right support category for your enquiry.
                </p>
              </div>

              <div className="absolute -right-4 -top-5 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-lg sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Sparkles size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SEARCH */}
      <section className="relative z-10 px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-10">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Knowledge & Resources
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              What can we help you find?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Search support topics, troubleshooting guides and useful
              information.
            </p>
          </div>

          <div className="relative mx-auto mt-7 max-w-3xl">
            <Search
              size={21}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                document
                  .getElementById("help-centre")
                  ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              placeholder="Search website issues, applications, deployment, databases..."
              className="w-full rounded-2xl border border-slate-200 bg-[#f9fbff] py-5 pl-14 pr-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Support Areas
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Find the right
              <span className="text-blue-700"> kind of assistance.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Different technology challenges need different approaches.
              Explore the categories below and select the area that best
              matches your support requirement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                      SUPPORT AREA 0{index + 1}
                    </span>
                  </div>

                  <div className="p-7">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}
                    >
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#support-request"
                      onClick={() =>
                        setForm((previous) => ({
                          ...previous,
                          service: category.title,
                        }))
                      }
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-violet-700"
                    >
                      Request Assistance
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HELP CENTRE - FILTERABLE ARTICLES */}
      <section
        id="help-centre"
        className="bg-[#f4f7fc] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Help Centre
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Helpful information,
                <span className="text-blue-700"> all in one place.</span>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Explore practical guides for common software, web,
                infrastructure and application support topics.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3">
              <BookOpen size={20} className="text-blue-700" />
              <span className="text-sm font-semibold text-slate-700">
                {filteredArticles.length} resource
                {filteredArticles.length === 1 ? "" : "s"} found
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                  activeCategory === category
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold leading-7 text-slate-950">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock3 size={14} />
                      {article.readTime}
                    </span>
                    <a
                      href="#support-request"
                      className="flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-violet-700"
                    >
                      Ask about this
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="mt-9 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search size={32} className="mx-auto text-slate-400" />
              <h3 className="mt-4 text-xl font-bold text-slate-950">
                No matching resources found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try a different keyword or select another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white hover:bg-slate-950"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TROUBLESHOOTING STEPS */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=90"
                alt="Technical professional examining equipment"
                className="h-[440px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Before Submitting a Request
                </span>
                <h3 className="mt-3 text-3xl font-semibold">
                  A few details can make troubleshooting easier.
                </h3>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Quick Troubleshooting
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Help us understand the issue clearly.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Before reporting a problem, collect the details that help
                describe what happened. A clear report makes it easier to
                understand the issue and determine what should be
                investigated.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Identify the affected area",
                    description:
                      "Mention the application, page, feature or service where the issue occurs.",
                  },
                  {
                    number: "02",
                    title: "Describe the steps",
                    description:
                      "Explain what you were doing immediately before the issue appeared.",
                  },
                  {
                    number: "03",
                    title: "Record the error",
                    description:
                      "Copy the visible error message or describe the unexpected behaviour.",
                  },
                  {
                    number: "04",
                    title: "Include your environment",
                    description:
                      "Where relevant, mention the browser, device or operating environment.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs leading-6 text-amber-900">
                  Never send passwords, private keys, authentication tokens
                  or confidential customer records in a support request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT REQUEST FORM */}
      <section
        id="support-request"
        className="bg-[#eef3ff] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Submit a Request
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what
              <span className="text-blue-700"> needs attention.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Provide the details below to describe your technical
              question, support requirement or application issue.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#10234b] via-[#173b75] to-[#245d96] p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <Ticket size={28} />
              </div>

              <h3 className="mt-8 text-3xl font-semibold">
                Support that starts with understanding.
              </h3>

              <p className="mt-5 text-sm leading-7 text-blue-100/80">
                Tell us what you are experiencing, which service is
                affected and what you would like to achieve. Clear
                information helps establish the context of your request.
              </p>

              <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-blue-50">
                    Explain the problem clearly.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-blue-50">
                    Identify the affected service.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-blue-50">
                    Share useful troubleshooting details.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-bold">General enquiry instead?</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
                >
                  Go to Contact
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-10">
              {submitted ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold text-slate-950">
                    Request prepared!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                    Your support form passed local validation. A connected
                    backend or ticketing system is required to save this
                    request, generate a ticket number and notify your team.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        service: "",
                        issueType: "",
                        priority: "Normal",
                        subject: "",
                        description: "",
                      });
                    }}
                    className="mt-8 rounded-full bg-blue-700 px-7 py-3 text-sm font-bold text-white hover:bg-slate-950"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 border-b border-slate-100 pb-6">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      Support request form
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Complete the required information to describe your
                      support need.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Full Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) =>
                            updateField("name", e.target.value)
                          }
                          placeholder="Your name"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            updateField("email", e.target.value)
                          }
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Affected Service *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.service}
                            onChange={(e) =>
                              updateField("service", e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">Select a service</option>
                            {supportCategories.map((category) => (
                              <option
                                key={category.title}
                                value={category.title}
                              >
                                {category.title}
                              </option>
                            ))}
                            <option value="General Enquiry">
                              General Enquiry
                            </option>
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Issue Type *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.issueType}
                            onChange={(e) =>
                              updateField("issueType", e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">Choose issue type</option>
                            <option>Technical Error</option>
                            <option>Application Not Working</option>
                            <option>Performance Issue</option>
                            <option>Deployment Problem</option>
                            <option>Data / Database Issue</option>
                            <option>Account / Access Issue</option>
                            <option>Maintenance Request</option>
                            <option>Feature Improvement</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Request Subject *
                        </label>
                        <input
                          required
                          value={form.subject}
                          onChange={(e) =>
                            updateField("subject", e.target.value)
                          }
                          placeholder="Briefly describe your issue"
                          className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Priority *
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Low", "Normal", "High"].map((priority) => (
                            <button
                              key={priority}
                              type="button"
                              onClick={() =>
                                updateField("priority", priority)
                              }
                              className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                                form.priority === priority
                                  ? priority === "High"
                                    ? "border-red-500 bg-red-50 text-red-700"
                                    : priority === "Normal"
                                      ? "border-blue-600 bg-blue-50 text-blue-700"
                                      : "border-emerald-500 bg-emerald-50 text-emerald-700"
                                  : "border-slate-200 bg-white text-slate-500 hover:border-blue-300"
                              }`}
                            >
                              {priority}
                            </button>
                          ))}
                        </div>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          Priority is your requested classification, not a
                          guaranteed response or resolution time.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Describe the Issue *
                      </label>
                      <textarea
                        required
                        minLength={10}
                        rows={6}
                        value={form.description}
                        onChange={(e) =>
                          updateField("description", e.target.value)
                        }
                        placeholder="Explain what happened, which page or feature is affected, what you expected to happen and any error message you noticed..."
                        className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm leading-7 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <p className="text-xs leading-6 text-amber-900">
                        For security, do not include passwords, API keys,
                        private tokens, payment information or sensitive
                        personal records in this form.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-slate-950"
                    >
                      Submit Support Request
                      <Send size={18} />
                    </button>

                    <p className="text-center text-xs leading-6 text-slate-400">
                      This form currently shows a local confirmation only.
                      Connect a backend to create and track actual support
                      tickets.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              More Ways to Connect
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Looking for something else?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Explore other areas of ZYNOVA AI Solutions to find the
              information or service you need.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {link.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {link.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f7fc] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Support Questions
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Need a little
              <span className="text-blue-700"> more clarity?</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Find answers to common questions about technical assistance,
              reporting issues and requesting improvements.
            </p>

            <div className="mt-9 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <CircleHelp size={24} />
              </div>
              <h3 className="mt-5 font-bold text-slate-950">
                Still need assistance?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Our contact page is available for other enquiries.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-violet-700"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition open:border-blue-200 open:shadow-lg open:shadow-blue-900/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-slate-950 sm:text-base">
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-blue-700 transition group-open:rotate-180"
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

      {/* FINAL SUPPORT BANNER */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10234b] via-[#174b85] to-[#4265bb] px-8 py-16 text-center text-white sm:px-14 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-44 -left-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
              <Headphones size={30} />
            </div>

            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              ZYNOVA AI Solutions
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Let's find a way forward together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100/80">
              Whether you need help with an existing solution or want to
              explore a new technology opportunity, start the conversation
              with us.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#support-request"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-800 transition hover:bg-cyan-100"
              >
                Get Support
                <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
