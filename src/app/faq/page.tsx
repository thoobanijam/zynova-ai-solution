
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ChevronDown,
  MessageCircle,
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  CreditCard,
  Clock3,
  Lightbulb,
  Headphones,
  Sparkles,
  CircleHelp,
  CheckCircle2,
  Mail,
  Rocket,
  Workflow,
  Globe2,
} from "lucide-react";

const categories = [
  "All Questions",
  "General",
  "AI & Technology",
  "Development",
  "Projects",
  "Security",
  "Support",
];

const faqs = [
  {
    category: "General",
    question: "What does ZYNOVA AI Solutions do?",
    answer:
      "ZYNOVA AI Solutions focuses on helping businesses explore and implement modern digital technologies. Our service areas include artificial intelligence, custom software development, web and mobile applications, automation, cloud solutions, and business intelligence.",
  },
  {
    category: "General",
    question: "Which types of businesses can work with ZYNOVA?",
    answer:
      "Our solutions are designed for startups, small and medium-sized businesses, growing companies, and larger organisations. We consider each organisation's goals, existing systems, operational requirements, and available resources before suggesting a suitable direction.",
  },
  {
    category: "General",
    question: "Can I discuss an idea before starting a project?",
    answer:
      "Yes. You can contact us to discuss your idea, explain the challenge you are trying to solve, and explore possible technical approaches. An initial discussion can help clarify the scope and identify the next steps.",
  },
  {
    category: "AI & Technology",
    question: "What types of AI solutions can you develop?",
    answer:
      "Potential AI projects include intelligent chatbots, virtual assistants, document processing, machine learning applications, natural language processing, predictive analytics, and AI-powered workflow automation. The right approach depends on the problem, available data, and business objectives.",
  },
  {
    category: "AI & Technology",
    question: "Can AI be integrated into an existing business application?",
    answer:
      "AI capabilities can often be integrated into existing applications through APIs and other integration methods. We first consider the current architecture, data access, security requirements, and intended user experience to determine a practical integration strategy.",
  },
  {
    category: "AI & Technology",
    question: "Do I need a large amount of data to start an AI project?",
    answer:
      "Not necessarily. Some AI services can work with existing documents, knowledge sources, or third-party models. Other machine learning projects may require carefully prepared datasets. A feasibility assessment helps establish what information is available and what may be needed.",
  },
  {
    category: "Development",
    question: "Do you build custom websites and web applications?",
    answer:
      "Yes. Web development projects can include business websites, customer portals, dashboards, booking platforms, e-commerce experiences, and custom web applications. The design and technology choices should reflect the project's functionality, audience, and long-term requirements.",
  },
  {
    category: "Development",
    question: "Can you develop Android and iOS applications?",
    answer:
      "Mobile application projects can be planned for Android, iOS, or both platforms. The best development approach depends on the required features, device capabilities, performance expectations, and maintenance needs.",
  },
  {
    category: "Development",
    question: "Which technologies do you work with?",
    answer:
      "Technology choices may include React, Next.js, TypeScript, Node.js, databases, cloud platforms, APIs, and modern development frameworks. We select tools according to the application requirements rather than choosing technology simply because it is popular.",
  },
  {
    category: "Projects",
    question: "How does a typical project begin?",
    answer:
      "A typical project begins with a conversation about your goals and challenges. This is followed by requirement discovery, scope definition, solution planning, design, development, testing, and deployment. The exact process is adjusted to suit the project's complexity.",
  },
  {
    category: "Projects",
    question: "How long does a software project take?",
    answer:
      "Project timelines depend on functionality, integrations, design complexity, content, testing requirements, and the availability of project resources. A focused website may take considerably less time than a large enterprise application. A realistic timeline can be discussed after reviewing the requirements.",
  },
  {
    category: "Projects",
    question: "Can you improve or modernise an existing application?",
    answer:
      "Existing applications can be reviewed for usability, performance, maintainability, security, and integration opportunities. Depending on the findings, improvements may involve redesigning interfaces, updating frameworks, restructuring code, or adding new functionality.",
  },
  {
    category: "Security",
    question: "How do you approach application security?",
    answer:
      "Security should be considered throughout the development lifecycle. Depending on the project, this can include authentication, access controls, secure API design, input validation, data protection, dependency management, and testing.",
  },
  {
    category: "Security",
    question: "Can business applications include different user roles?",
    answer:
      "Yes. Applications can be designed with role-based permissions so that administrators, managers, employees, and other users can access the features and information appropriate to their responsibilities.",
  },
  {
    category: "Support",
    question: "Can I request changes after a project is launched?",
    answer:
      "Post-launch improvements may include new features, design refinements, bug fixes, integrations, performance improvements, and maintenance. The available support arrangements and scope can be discussed as part of your project agreement.",
  },
  {
    category: "Support",
    question: "How can I contact the team?",
    answer:
      "You can use the contact page to send an enquiry or the consultation page to explore a project discussion. Include a short description of your requirements so the team can better understand your request.",
  },
];

const highlights = [
  {
    number: "01",
    title: "Before your project",
    description:
      "Understand the available services, clarify your requirements, and explore possible solutions before making a commitment.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "During development",
    description:
      "Discover how planning, design, development, testing, and communication contribute to a well-organised project.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    icon: Workflow,
  },
  {
    number: "03",
    title: "After launch",
    description:
      "Explore ongoing improvements, application maintenance, technical assistance, and future development opportunities.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    icon: Rocket,
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="overflow-hidden bg-[#fcfcff] text-slate-800">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-[100px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/50 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <CircleHelp size={16} />
              Your questions, answered
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              A little clarity
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                goes a long way.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Explore answers to common questions about our services,
              technology, development process, and project collaboration.
              Whether you are starting with an idea or improving an existing
              solution, this is a useful place to begin.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#questions"
                className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore FAQs
                <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Ask a question
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-bold text-slate-950">16+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Helpful questions
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">07</p>
                <p className="mt-1 text-sm text-slate-500">
                  Topic categories
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">One</p>
                <p className="mt-1 text-sm text-slate-500">
                  Place to get started
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-violet-200" />
            <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-cyan-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(51,65,120,0.12)]">
              <div
                className="relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=90')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-blue-900/10" />

                <div className="absolute left-6 top-6 rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles size={17} />
                    Knowledge made simple
                  </div>
                </div>

                <div className="absolute bottom-8 left-7 right-7 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    ZYNOVA Help Centre
                  </p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                    Good questions create better solutions.
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                    Find useful information and take the next step with
                    confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-5 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <MessageCircle size={23} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Need more help?</p>
                  <p className="mt-1 text-xs text-slate-500">
                    We are one message away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC IMAGE CARDS */}
      <section className="border-y border-slate-100 bg-white px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Browse by experience
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Find the information you need.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              From the first conversation to ongoing improvements, explore
              answers based on where you are in your digital journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-[#fbfcff] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-800">
                      {item.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                    <a
                      href="#questions"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                    >
                      Browse answers
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SEARCH AND QUESTIONS */}
      <section
        id="questions"
        className="relative px-5 py-24 sm:px-8 lg:px-16"
      >
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-100/50 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT SIDEBAR */}
          <aside>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Frequently asked
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950">
                Let's clear things up.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Browse the topics or search for a particular question. Our
                answers are written to help you understand the possibilities,
                processes, and considerations behind digital solutions.
              </p>

              <div className="relative mt-8">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setOpenQuestion(null);
                  }}
                  placeholder="Search your question..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Browse topics
                </p>

                <div className="flex flex-wrap gap-2 lg:flex-col">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenQuestion(null);
                      }}
                      className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                        activeCategory === category
                          ? "bg-slate-950 text-white shadow-lg"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-4">
                        {category}
                        {activeCategory === category && (
                          <CheckCircle2 size={16} />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-9 rounded-3xl bg-gradient-to-br from-blue-700 to-violet-700 p-7 text-white">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <MessageCircle size={25} />
                </div>
                <h3 className="text-xl font-bold">
                  Still have a question?
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-50">
                  Tell us what you are looking for. We can help you identify
                  the right next step for your project.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Contact us
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT FAQ LIST */}
          <div>
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Questions and answers
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredFaqs.length} questions found
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
                {activeCategory}
              </span>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openQuestion === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-2xl border transition duration-300 ${
                        isOpen
                          ? "border-blue-200 bg-white shadow-lg shadow-blue-100/50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                        aria-expanded={isOpen}
                      >
                        <div>
                          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                            {faq.category}
                          </span>
                          <span className="text-base font-bold leading-7 text-slate-900 sm:text-lg">
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                            isOpen
                              ? "rotate-180 bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <ChevronDown size={19} />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-7 sm:px-7">
                          <div className="border-t border-slate-100 pt-5">
                            <p className="max-w-2xl text-sm leading-8 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <Search
                  size={35}
                  className="mx-auto text-slate-300"
                />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  No matching questions found
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
                  Try a different search phrase or select another category to
                  explore more answers.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Questions");
                    setOpenQuestion(0);
                  }}
                  className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Clear filters
                </button>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
                  <Clock3 size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Need more specific information?
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Some answers depend on your project requirements,
                    integrations, business processes, and technical
                    environment. Contact us to discuss your particular
                    situation.
                  </p>
                  <Link
                    href="/consultation"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-violet-700"
                  >
                    Explore a consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION STRIP */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
                Beyond the FAQs
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Every business has a different question.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                General information is a useful starting point, but the right
                digital solution depends on your organisation. Your goals,
                users, processes, technology environment, and future plans all
                influence how a solution should be designed.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Rather than assuming every business needs the same technology,
                we believe in understanding the challenge first and exploring
                an appropriate way forward.
              </p>
              <Link
                href="/approach"
                className="mt-7 inline-flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-4 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                Discover our approach
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#eef4ff] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <BrainCircuit size={25} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  Intelligent thinking
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explore practical ways AI and data-driven capabilities can
                  support business activities.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f4efff] p-7 sm:translate-y-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
                  <Code2 size={25} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  Purposeful development
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Build applications and digital experiences around real
                  requirements and user needs.
                </p>
              </div>

              <div className="rounded-3xl bg-[#eafafa] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                  <Globe2 size={25} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  Connected solutions
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Connect platforms, applications, and workflows to create
                  more useful digital ecosystems.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f5f5f8] p-7 sm:translate-y-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                  <ShieldCheck size={25} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  Responsible delivery
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Consider reliability, security, usability, and long-term
                  maintainability throughout development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-16 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Headphones size={16} />
                Let's talk about your idea
              </div>

              <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Your next question could be the start of something great.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                Tell us about your business challenge, application idea, or
                technology goals. Let's explore what can be built and how to
                move forward.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-50"
              >
                Contact our team
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
