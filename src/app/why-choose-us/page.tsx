
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe2,
  Lightbulb,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  Cloud,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI-Powered Innovation",
    description:
      "We integrate artificial intelligence and machine learning into business solutions to simplify operations, improve workflows, and support smarter decision-making.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Every business has different requirements. We develop tailored software applications designed around your processes, goals, and future growth.",
    color: "from-violet-500 to-purple-400",
  },
  {
    number: "03",
    icon: Zap,
    title: "Intelligent Automation",
    description:
      "Reduce repetitive manual work through smart automation solutions that help teams save time, improve consistency, and focus on important tasks.",
    color: "from-amber-500 to-orange-400",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Scalable Cloud Solutions",
    description:
      "Build flexible digital infrastructure with modern cloud technologies that support application performance, accessibility, and business expansion.",
    color: "from-cyan-500 to-blue-400",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Security-Focused Development",
    description:
      "We consider security, data protection, and maintainability throughout the development process to help create dependable digital products.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "06",
    icon: Users,
    title: "Client-Centered Approach",
    description:
      "We value collaboration, clear communication, and understanding your business needs before recommending and developing technology solutions.",
    color: "from-pink-500 to-rose-400",
  },
];

const benefits = [
  "Solutions aligned with your business objectives",
  "Modern and scalable technology architecture",
  "Responsive and user-friendly digital experiences",
  "AI integration and intelligent automation",
  "Maintainable and quality-focused development",
  "Transparent communication and collaboration",
  "Flexible solutions for evolving requirements",
  "Continuous improvement and technical support",
];

const technologies = [
  { name: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Next.js & React", icon: Code2 },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Database Systems", icon: Database },
  { name: "Workflow Automation", icon: Workflow },
  { name: "Machine Learning", icon: Cpu },
];

const process = [
  {
    step: "01",
    title: "Understand Your Goals",
    description:
      "We begin by understanding your business, challenges, target audience, and desired outcomes.",
    icon: Target,
  },
  {
    step: "02",
    title: "Plan the Right Solution",
    description:
      "We identify suitable technologies, define the project scope, and create a practical development roadmap.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Design & Develop",
    description:
      "We transform ideas into functional digital products through thoughtful design and modern development practices.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Test & Improve",
    description:
      "We evaluate functionality, usability, performance, and security before preparing the solution for delivery.",
    icon: Gauge,
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We help deploy your solution and support future improvements as your business requirements evolve.",
    icon: Rocket,
  },
];

const industries = [
  "Retail & E-commerce",
  "Healthcare",
  "Education",
  "Finance & Banking",
  "Manufacturing",
  "Logistics",
  "Professional Services",
  "Startups & Enterprises",
];

export default function WhyChooseUsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative isolate bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 px-6 pb-24 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              The ZYNOVA Advantage
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                ZYNOVA AI Solutions?
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Technology should do more than solve today's problems. It should
              create opportunities for tomorrow. We combine intelligent
              technology, creative thinking, and practical development to help
              businesses build a smarter digital future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Innovation Focused
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Business Oriented
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Future Ready
              </span>
            </div>
          </div>

          {/* TECHNOLOGY VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-300/40 to-violet-300/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Intelligent Technology
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Innovation Ecosystem
                  </h2>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <BrainCircuit size={27} />
                </div>
              </div>

              <div className="flex justify-center py-10">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-100 shadow-inner">
                  <div className="absolute inset-4 rounded-full border border-dashed border-blue-300" />
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/30">
                    <BrainCircuit size={49} />
                  </div>
                  <span className="absolute -right-3 top-7 rounded-xl bg-white p-3 text-cyan-600 shadow-lg">
                    <Cpu size={23} />
                  </span>
                  <span className="absolute -bottom-2 left-3 rounded-xl bg-white p-3 text-violet-600 shadow-lg">
                    <Database size={23} />
                  </span>
                  <span className="absolute -left-3 top-8 rounded-xl bg-white p-3 text-blue-600 shadow-lg">
                    <Cloud size={23} />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {technologies.map((technology) => {
                  const Icon = technology.icon;
                  return (
                    <div
                      key={technology.name}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <Icon size={19} className="shrink-0 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            What Makes Us Different
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More Than Technology.
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              A Partner in Your Digital Growth.
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            At ZYNOVA AI Solutions, we believe successful digital
            transformation begins with understanding people and businesses.
            Our focus is on building practical, reliable, and intelligent
            solutions that connect technology with real business needs.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            From the first idea to deployment and ongoing improvement, we
            approach every project with curiosity, collaboration, and a
            commitment to quality.
          </p>
        </div>
      </section>

      {/* SIX REASONS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why ZYNOVA
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Six Reasons to Build With Us
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We bring together technical expertise, innovative thinking, and
              a business-first mindset to create meaningful digital solutions.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.color} text-white shadow-lg`}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-100 transition group-hover:text-blue-100">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {reason.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Discover the difference
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Commitment
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Technology That Works for Your Business
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We focus on solutions that are useful, adaptable, and designed
              with your business objectives in mind. Our approach balances
              innovation with functionality, usability, and long-term
              maintainability.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100 to-violet-100 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <HeartHandshake size={32} />
              </div>

              <h3 className="mt-8 text-2xl font-extrabold text-slate-900">
                Built Around Your Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Your business goals guide our technology decisions. We listen,
                collaborate, and develop solutions that address your actual
                needs rather than adding complexity without purpose.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-700">
                    <span>Business Understanding</span>
                    <Lightbulb size={18} className="text-blue-600" />
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-700">
                    <span>Technology Innovation</span>
                    <BrainCircuit size={18} className="text-violet-600" />
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-5/6 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-700">
                    <span>Quality & Reliability</span>
                    <ShieldCheck size={18} className="text-emerald-600" />
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-11/12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs text-slate-400">
                Our working principles, not measured performance scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From Your Idea to a Digital Solution
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A structured and collaborative process helps us turn business
              requirements into useful digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-100">
                      {item.step}
                    </span>
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Industries We Support
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Technology for Different Business Needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We aim to help organizations across industries explore new
              opportunities through software, AI, automation, and digital
              innovation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <Globe2
                  size={21}
                  className="shrink-0 text-blue-600 transition group-hover:scale-110"
                />
                <span className="text-sm font-semibold text-slate-700">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TRUST */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Quality by Design
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Built With Security, Quality, and Reliability in Mind
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Digital products need more than attractive interfaces. We
              consider the complete experience, including application
              architecture, data handling, performance, usability, and
              maintainability.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:bg-cyan-100"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: LockKeyhole,
                title: "Security Awareness",
                text: "Thoughtful data protection and secure development practices.",
              },
              {
                icon: Gauge,
                title: "Performance Focus",
                text: "Efficient applications designed with responsiveness in mind.",
              },
              {
                icon: Database,
                title: "Data Management",
                text: "Structured data solutions and reliable application architecture.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                text: "Testing and refinement to improve product reliability.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <Icon size={30} className="text-cyan-400" />
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
            <Rocket size={32} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight sm:text-5xl">
            Ready to Build Your Digital Future?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Let's explore how AI, modern software, and intelligent automation
            can help move your business forward. Your next digital idea starts
            with a conversation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Get in Touch
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
      </section>
    </main>
  );
}
