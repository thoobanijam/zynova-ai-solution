
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Globe2,
  Lightbulb,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Send,
  ShieldCheck,
  Sparkles,
  Wallet,
  Workflow,
  Zap,
  Building2,
  BrainCircuit,
  CalendarDays,
  Layers3,
  Target,
} from "lucide-react";

const projectTypes = [
  {
    title: "AI & Intelligent Solutions",
    description:
      "Explore AI applications, intelligent assistants, machine learning and automation opportunities for your business.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    icon: BrainCircuit,
    tag: "Artificial Intelligence",
  },
  {
    title: "Web Application Development",
    description:
      "Create modern websites, customer portals, business platforms and scalable web experiences.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    icon: Code2,
    tag: "Web Engineering",
  },
  {
    title: "Mobile App Development",
    description:
      "Plan mobile applications that help customers and teams connect with your services from anywhere.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=900&q=85",
    icon: MonitorSmartphone,
    tag: "Mobile Experiences",
  },
  {
    title: "Business Automation",
    description:
      "Identify repetitive activities and explore connected workflows that can improve operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    icon: Workflow,
    tag: "Smart Operations",
  },
  {
    title: "Enterprise Software",
    description:
      "Discuss custom platforms, internal business systems, integrations and enterprise applications.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    icon: Building2,
    tag: "Business Technology",
  },
  {
    title: "Digital Transformation",
    description:
      "Explore how connected systems, cloud technologies and data can support your business evolution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    icon: Globe2,
    tag: "Digital Strategy",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description:
      "Share your business goals, project requirements, preferred technologies and the challenges you want to solve.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Requirement Evaluation",
    description:
      "We review the information you provide and identify the important functional, technical and operational requirements.",
    icon: Target,
  },
  {
    number: "03",
    title: "Proposal & Estimate",
    description:
      "We prepare a project discussion covering the proposed scope, possible approach, estimated effort and next steps.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Plan the Next Step",
    description:
      "Discuss the proposal, clarify questions and decide how you would like to move forward.",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: "Is requesting a project quotation free?",
    answer:
      "You can submit an initial project enquiry through this page without payment. Any paid discovery, consulting or implementation work will be discussed separately before proceeding.",
  },
  {
    question: "What information should I include?",
    answer:
      "Describe what you want to build, the problem you are trying to solve, the main features you need and your preferred timeline. You can also share your estimated budget.",
  },
  {
    question: "Can I request a quotation for an existing application?",
    answer:
      "Yes. You can enquire about application improvements, redesigns, integrations, maintenance, modernization and additional functionality.",
  },
  {
    question: "How is the project cost calculated?",
    answer:
      "Project estimates depend on scope, functionality, design requirements, integrations, technology choices, complexity, delivery timeline and ongoing support requirements.",
  },
  {
    question: "Do you work with international businesses?",
    answer:
      "ZYNOVA AI Solutions is presented as a technology partner for businesses exploring digital solutions across different markets. Share your location and project requirements so the engagement can be discussed.",
  },
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not decided yet",
];

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#fffefa] text-slate-900">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/70 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.19em] text-blue-700 shadow-sm">
              <Sparkles size={15} />
              Start Your Project
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Let's turn your
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                next big idea
              </span>
              into reality.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Every meaningful digital product starts with a conversation.
              Tell us what you are planning, what your business needs and
              where you want to go. Let's explore the right technology
              solution together.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Request a Quote
                <ArrowRight size={18} />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
              >
                Explore Services
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-slate-200 pt-7">
              <div>
                <BrainCircuit className="mb-3 text-blue-600" size={23} />
                <p className="text-sm font-bold text-slate-900">AI Driven</p>
                <p className="mt-1 text-xs text-slate-500">
                  Intelligent ideas
                </p>
              </div>
              <div>
                <ShieldCheck className="mb-3 text-violet-600" size={23} />
                <p className="text-sm font-bold text-slate-900">
                  Thoughtful
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Clear planning
                </p>
              </div>
              <div>
                <Zap className="mb-3 text-cyan-600" size={23} />
                <p className="text-sm font-bold text-slate-900">
                  Scalable
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Future focused
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-blue-200" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-violet-100/80 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-blue-900/10">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
                alt="Technology team discussing a digital project"
                className="h-[510px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                  Your vision. Our conversation.
                </span>
                <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                  Good projects begin with the right questions.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                  Share your goals and discover possible ways to bring your
                  next digital solution to life.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-left-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Lightbulb size={25} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">
                  Have an idea?
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Let's discuss the possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section
        id="quote-form"
        className="relative bg-[#f3f6ff] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Project Enquiry
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Tell us what
              <span className="block text-blue-700">you have in mind.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A useful quotation starts with understanding your requirements.
              Provide a few details about your project so the scope and
              potential approach can be discussed.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                  <MessageSquare size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Clear communication
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Share your ideas and requirements in your own words.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                  <Target size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Scope-focused planning
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Understand the features, priorities and complexity
                    involved.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                  <CalendarDays size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Timeline discussion
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Discuss your preferred delivery schedule and priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6">
              <p className="text-sm font-bold text-slate-900">
                Prefer a direct conversation?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Visit our contact page to explore other ways to reach us.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-violet-700"
              >
                Contact ZYNOVA
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={42} />
                </div>
                <h2 className="mt-7 text-3xl font-semibold text-slate-950">
                  Thank you for your enquiry!
                </h2>
                <p className="mt-4 max-w-md leading-7 text-slate-600">
                  Your form has passed the client-side submission step.
                  Connect this form to your email service or backend to
                  receive and store actual project enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      service: "",
                      budget: "",
                      timeline: "",
                      details: "",
                    });
                  }}
                  className="mt-8 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-9 border-b border-slate-100 pb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Let's Get Started
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    Request your project quote
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Complete the details below. Fields marked with * are
                    required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <h3 className="mb-5 text-sm font-bold text-slate-900">
                      01. Your Information
                    </h3>

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
                          placeholder="Enter your full name"
                          className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                            updateField("email", e.target.value)
                          }
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Company / Organisation
                        </label>
                        <input
                          value={form.company}
                          onChange={(e) =>
                            updateField("company", e.target.value)
                          }
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            updateField("phone", e.target.value)
                          }
                          placeholder="+Country code and number"
                          className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-7">
                    <h3 className="mb-5 text-sm font-bold text-slate-900">
                      02. Project Requirements
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Service Required *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.service}
                            onChange={(e) =>
                              updateField("service", e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">Select a service</option>
                            <option>AI Development</option>
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>Custom Software Development</option>
                            <option>UI/UX Design</option>
                            <option>Cloud Solutions</option>
                            <option>DevOps & Automation</option>
                            <option>Business Intelligence</option>
                            <option>E-commerce Solutions</option>
                            <option>Enterprise Solutions</option>
                            <option>Retail Solutions</option>
                            <option>Digital Transformation</option>
                            <option>Other / Multiple Services</option>
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Estimated Budget (USD)
                        </label>
                        <div className="relative">
                          <select
                            value={form.budget}
                            onChange={(e) =>
                              updateField("budget", e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">Select a budget</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Preferred Project Timeline
                        </label>
                        <div className="relative">
                          <select
                            value={form.timeline}
                            onChange={(e) =>
                              updateField("timeline", e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          >
                            <option value="">Choose your preferred timeline</option>
                            <option>As soon as possible</option>
                            <option>Within 1 month</option>
                            <option>1 – 3 months</option>
                            <option>3 – 6 months</option>
                            <option>6+ months</option>
                            <option>Flexible / Not decided</option>
                          </select>
                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-7">
                    <h3 className="mb-5 text-sm font-bold text-slate-900">
                      03. Tell Us About Your Idea
                    </h3>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Project Description *
                    </label>
                    <textarea
                      required
                      minLength={10}
                      rows={6}
                      value={form.details}
                      onChange={(e) =>
                        updateField("details", e.target.value)
                      }
                      placeholder="Describe your project, its main features, your target audience and the business problem you want to solve..."
                      className="w-full resize-y rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="flex gap-3">
                      <ShieldCheck
                        size={20}
                        className="shrink-0 text-blue-700"
                      />
                      <p className="text-xs leading-6 text-slate-600">
                        Please avoid including passwords, payment details or
                        other confidential credentials in this form. Your
                        project requirements should be sufficient for an
                        initial discussion.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-violet-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Submit Project Enquiry
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs leading-6 text-slate-400">
                    Submitting this form currently displays a local
                    confirmation only. A backend or form service is required
                    to deliver your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* BUDGET GUIDE */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                Planning Your Investment
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Every project has a different
                <span className="text-violet-700"> scope.</span>
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                The cost of a digital solution depends on what needs to be
                created. A simple website, a connected business platform and
                an AI-powered application involve different levels of
                planning, design, development and testing.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Your budget is a planning reference rather than a fixed
                price. A detailed estimate should follow an understanding
                of the actual requirements.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-violet-700"
              >
                Discuss your project
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#101c42] via-[#172b62] to-[#37317a] p-7 text-white shadow-xl sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Project Planning
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">
                    What shapes your estimate?
                  </h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Wallet size={27} className="text-cyan-200" />
                </div>
              </div>

              <div className="mt-9 space-y-6">
                {[
                  {
                    title: "Project Scope",
                    desc: "Number of features, pages and workflows.",
                    width: "90%",
                  },
                  {
                    title: "Technical Complexity",
                    desc: "Integrations, architecture and system requirements.",
                    width: "75%",
                  },
                  {
                    title: "Design Requirements",
                    desc: "User experience, branding and interface details.",
                    width: "68%",
                  },
                  {
                    title: "Delivery Timeline",
                    desc: "Planning, resources and delivery expectations.",
                    width: "82%",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-xs text-blue-200">
                        Planning factor
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
                        style={{ width: item.width }}
                      />
                    </div>
                    <p className="mt-2 text-xs leading-5 text-blue-100/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 border-t border-white/15 pt-6">
                <p className="text-sm leading-7 text-blue-100/80">
                  These visual indicators are illustrative planning
                  categories, not calculated project prices or measured
                  percentages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TYPE IMAGE CARDS */}
      <section className="bg-[#f7f8fc] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Areas of Expertise
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What would you like to
                <span className="text-blue-700"> create?</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">
              From an initial concept to a complex digital ecosystem,
              explore the project areas you can discuss with our team.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {project.tag}
                    </span>
                    <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-lg">
                      <Icon size={22} />
                    </span>
                  </div>

                  <div className="p-7">
                    <span className="text-xs font-bold text-blue-600">
                      PROJECT AREA 0{index + 1}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>
                    <a
                      href="#quote-form"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-blue-700"
                    >
                      Enquire about this
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTATION PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Process
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              From your first idea to a
              <span className="text-violet-700"> project proposal.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A structured discussion helps establish a shared understanding
              of your goals, expectations and potential solution.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-blue-200 lg:block" />

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-lg shadow-blue-900/5">
                    <Icon size={27} />
                  </div>
                  <span className="mt-7 block text-xs font-bold tracking-[0.2em] text-violet-600">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT IMAGE BANNER */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=90"
            alt="Business team planning a digital project"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101b3e]/95 via-[#172c5d]/85 to-violet-900/55" />

          <div className="relative grid gap-10 px-8 py-16 text-white sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                Your Next Chapter Starts Here
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Have a challenge worth solving?
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-blue-100/80">
                Let's explore how thoughtful design, intelligent technology
                and custom software can support your next business milestone.
              </p>
            </div>

            <a
              href="#quote-form"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-800 transition hover:bg-cyan-100"
            >
              Start an Enquiry
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f8fc] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Frequently Asked Questions
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Questions before
              <span className="text-blue-700"> getting started?</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Here are some helpful answers about project enquiries,
              quotation planning and the information needed to begin a
              conversation.
            </p>

            <div className="mt-9 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">
                  Need more information?
                </p>
                <Link
                  href="/contact"
                  className="mt-1 text-sm font-semibold text-blue-700 hover:text-violet-700"
                >
                  Visit our contact page
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-200 open:shadow-lg open:shadow-blue-900/5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-slate-900">
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white px-5 py-24 text-center sm:px-8 lg:px-16">
        <div className="absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-700/20">
            <Sparkles size={30} />
          </div>

          <h2 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your next great project
            <span className="block text-blue-700">starts with a conversation.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Whether you have a detailed project plan or just the beginning
            of an idea, take the first step and tell us what you are
            imagining.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Request a Project Quote
              <ArrowRight size={18} />
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
            >
              Back to Home
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
