
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Code2,
  Cloud,
  Database,
  Sparkles,
  CalendarDays,
  Clock3,
  Lightbulb,
  Newspaper,
  Rocket,
  ShieldCheck,
  Workflow,
  Globe2,
  Search,
  ChevronRight,
  TrendingUp,
  Layers3,
} from "lucide-react";

const featuredUpdate = {
  category: "Artificial Intelligence",
  date: "Technology Insight",
  title: "How Artificial Intelligence Is Reshaping the Future of Business",
  description:
    "Explore how AI-powered applications, intelligent automation, and data-driven technologies are creating new possibilities for organizations across industries.",
  readTime: "8 min read",
  icon: BrainCircuit,
};

const articles = [
  {
    number: "01",
    category: "AI & Innovation",
    title: "The Growing Role of AI in Modern Business Operations",
    description:
      "Discover how organizations can explore artificial intelligence to simplify processes, support decisions, and improve everyday business workflows.",
    date: "Technology Insights",
    readTime: "6 min read",
    icon: BrainCircuit,
    accent: "bg-blue-100 text-blue-700",
    border: "hover:border-blue-300",
  },
  {
    number: "02",
    category: "Web Development",
    title: "Why Modern Web Applications Matter for Growing Businesses",
    description:
      "Learn how responsive interfaces, scalable architecture, and modern web technologies contribute to better digital experiences.",
    date: "Development",
    readTime: "5 min read",
    icon: Code2,
    accent: "bg-violet-100 text-violet-700",
    border: "hover:border-violet-300",
  },
  {
    number: "03",
    category: "Automation",
    title: "Reducing Repetitive Work Through Intelligent Automation",
    description:
      "Understand how workflow automation can connect business processes and help teams spend more time on meaningful activities.",
    date: "Business Technology",
    readTime: "7 min read",
    icon: Workflow,
    accent: "bg-cyan-100 text-cyan-700",
    border: "hover:border-cyan-300",
  },
  {
    number: "04",
    category: "Cloud Computing",
    title: "Building Flexible and Scalable Cloud-Based Applications",
    description:
      "Explore the role of cloud infrastructure in application availability, flexibility, deployment, and business growth.",
    date: "Cloud Technology",
    readTime: "6 min read",
    icon: Cloud,
    accent: "bg-sky-100 text-sky-700",
    border: "hover:border-sky-300",
  },
  {
    number: "05",
    category: "Data & Analytics",
    title: "Turning Business Data Into More Meaningful Insights",
    description:
      "See how structured data, analytics dashboards, and reporting applications can help businesses understand their operations.",
    date: "Data Intelligence",
    readTime: "5 min read",
    icon: Database,
    accent: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-300",
  },
  {
    number: "06",
    category: "Digital Transformation",
    title: "Preparing Your Organization for a Digital-First Future",
    description:
      "Explore practical considerations for adopting digital platforms, improving processes, and building adaptable business systems.",
    date: "Digital Strategy",
    readTime: "8 min read",
    icon: Rocket,
    accent: "bg-orange-100 text-orange-700",
    border: "hover:border-orange-300",
  },
];

const categories = [
  { name: "All Insights", count: "06", icon: Newspaper },
  { name: "Artificial Intelligence", count: "01", icon: BrainCircuit },
  { name: "Web Development", count: "01", icon: Code2 },
  { name: "Automation", count: "01", icon: Workflow },
  { name: "Cloud Technology", count: "01", icon: Cloud },
  { name: "Data & Analytics", count: "01", icon: Database },
];

const trends = [
  {
    number: "01",
    title: "Generative AI",
    description:
      "AI systems that can assist with content creation, information processing, and new digital experiences.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Intelligent Automation",
    description:
      "Connected workflows that reduce manual processes and improve operational consistency.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Cloud-Native Applications",
    description:
      "Flexible application architectures designed for modern deployment and changing business needs.",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Data-Driven Decisions",
    description:
      "Analytics and reporting tools that help organizations understand business information.",
    icon: TrendingUp,
  },
];

export default function UpdatesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO - EDITORIAL STYLE */}
      <section className="relative border-b border-slate-100 bg-[#f8fafc] px-6 pb-16 pt-32 sm:pt-36">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
            <ChevronRight size={15} />
            <span className="text-blue-600">Latest Updates</span>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                <Sparkles size={15} />
                ZYNOVA Knowledge Hub
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Ideas, Insights &
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Technology Updates.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Explore ideas, technology insights, and emerging trends
                shaping the digital world. Discover perspectives on artificial
                intelligence, software development, automation, and digital
                transformation.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Newspaper size={25} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Explore Our Insights
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Technology · Innovation · Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-9 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Editor's Selection
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Featured Insight
              </h2>
            </div>

            <span className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500 sm:block">
              Featured Topic
            </span>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">

            {/* FEATURED VISUAL */}
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100 p-10">
              <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/80 bg-white/40 shadow-xl backdrop-blur-sm">
                <div className="absolute inset-6 rounded-full border border-dashed border-blue-300" />
                <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-2xl shadow-blue-500/30">
                  <BrainCircuit size={68} />
                </div>

                <div className="absolute -right-4 top-8 rounded-2xl bg-white p-4 text-blue-600 shadow-lg">
                  <Cpu size={27} />
                </div>

                <div className="absolute -bottom-3 left-3 rounded-2xl bg-white p-4 text-violet-600 shadow-lg">
                  <Database size={27} />
                </div>

                <div className="absolute -left-4 top-12 rounded-2xl bg-white p-4 text-cyan-600 shadow-lg">
                  <Workflow size={27} />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">
                Innovation Starts Here
              </div>
            </div>

            {/* FEATURED CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
                  {featuredUpdate.category}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {featuredUpdate.date}
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                {featuredUpdate.title}
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {featuredUpdate.description}
              </p>

              <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {featuredUpdate.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <Lightbulb size={16} />
                  Featured Insight
                </span>
              </div>

              <Link
                href="/#contact"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss This Topic
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT AND SIDEBAR */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Explore The Knowledge Hub
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Latest Technology Insights
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore useful perspectives on the technologies and ideas
              influencing modern businesses.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_290px]">

            {/* ARTICLE GRID */}
            <div className="grid gap-6 sm:grid-cols-2">
              {articles.map((article) => {
                const Icon = article.icon;

                return (
                  <article
                    key={article.number}
                    className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${article.border}`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${article.accent}`}
                      >
                        <Icon size={24} />
                      </div>

                      <span className="text-2xl font-extrabold text-slate-100">
                        {article.number}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {article.category}
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-700">
                      {article.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <div>
                        <p className="text-xs font-semibold text-slate-700">
                          {article.date}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {article.readTime}
                        </p>
                      </div>

                      <Link
                        href="/#contact"
                        aria-label={`Discuss ${article.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white"
                      >
                        <ArrowUpRight size={19} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-7 lg:sticky lg:top-28">

              {/* CATEGORIES */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Explore Categories
                </h3>

                <div className="mt-5 space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <div
                        key={category.name}
                        className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-blue-50"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={17} className="text-blue-600" />
                          <span className="text-xs font-medium text-slate-600">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          {category.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA SIDEBAR */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-7 text-white">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <Lightbulb size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    Have a Technology Idea?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-blue-100">
                    Let's explore how intelligent technology can support your
                    business objectives.
                  </p>

                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    Let's Talk
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY TRENDS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Emerging Technologies
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Technologies Shaping Tomorrow
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Technology continues to evolve. Understanding emerging
                capabilities helps organizations identify opportunities,
                adapt their strategies, and prepare for changing customer
                expectations.
              </p>

              <Link
                href="/#services"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-3"
              >
                Explore Our Technology Services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trends.map((trend) => {
                const Icon = trend.icon;

                return (
                  <div
                    key={trend.number}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={25} />
                      </div>

                      <span className="text-xl font-extrabold text-slate-100">
                        {trend.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {trend.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {trend.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PERSPECTIVE */}
      <section className="border-y border-slate-100 bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                <Globe2 size={18} />
                Our Perspective
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Innovation Is More Than Following Trends.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                At ZYNOVA AI Solutions, we believe technology should solve
                meaningful problems. Our focus is on understanding new
                technologies and applying them thoughtfully to real business
                requirements.
              </p>
            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-100 bg-white text-blue-600 shadow-sm">
              <Layers3 size={44} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-16 text-center text-white sm:px-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Rocket size={32} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Let's Create Something Innovative Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Have a project idea, technology question, or digital
              transformation goal? Connect with ZYNOVA AI Solutions and let's
              explore what's possible.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact Our Team
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Home
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
