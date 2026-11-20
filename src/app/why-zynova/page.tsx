"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Rocket,
  Check,
  Sparkles,
  HeartHandshake,
  Layers3,
  Compass,
  TrendingUp,
  Code2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation With a Purpose",
    description:
      "Technology should solve real problems, simplify complex processes, and create measurable value. We focus on meaningful innovation rather than technology for its own sake, helping businesses explore smarter ways to operate, connect, and grow.",
    color: "blue",
  },
  {
    number: "02",
    icon: Target,
    title: "Solutions Built Around Your Needs",
    description:
      "Every business has different goals, challenges, and priorities. We take a flexible approach to understanding your requirements and developing solutions that align with your business objectives, workflows, customers, and long-term plans.",
    color: "violet",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Modern Technology, Smarter Thinking",
    description:
      "We explore modern technologies including artificial intelligence, intelligent automation, cloud platforms, and advanced software development to create digital experiences that are practical, efficient, adaptable, and ready for changing business needs.",
    color: "cyan",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality in Every Detail",
    description:
      "From planning and architecture to development and delivery, quality guides our approach. We value maintainable code, thoughtful design, reliable functionality, usability, and the details that make digital solutions dependable.",
    color: "emerald",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Collaboration and Transparency",
    description:
      "We believe successful digital projects are built through communication, shared understanding, and collaboration. We value open discussions, clear expectations, constructive feedback, and keeping clients involved throughout the development journey.",
    color: "orange",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Ready for What's Next",
    description:
      "Businesses need solutions that can evolve. Our approach considers scalability, changing requirements, new opportunities, and future technologies so that digital foundations can continue supporting progress over time.",
    color: "pink",
  },
];

const strengths = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "We begin with your business objectives and challenges before exploring the technology that can support them.",
  },
  {
    icon: Layers3,
    title: "Connected Technology",
    description:
      "We bring software, AI, automation, cloud, and digital experiences together to create connected solutions.",
  },
  {
    icon: Workflow,
    title: "Flexible Approach",
    description:
      "We adapt our process, technology, and implementation approach to meet the unique requirements of each project.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Perspective",
    description:
      "We consider maintainability, scalability, future improvements, and sustainable digital growth from the beginning.",
  },
];

const commitments = [
  "Understand your business before recommending technology.",
  "Prioritize practical solutions over unnecessary complexity.",
  "Build with quality, usability, and reliability in mind.",
  "Keep communication clear throughout the process.",
  "Design digital solutions with future growth in mind.",
];

export default function WhyZynovaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffefa] text-slate-900">

      {/* HERO SECTION */}
      <section className="relative px-6 pb-24 pt-28 sm:px-10 lg:px-20 lg:pb-32 lg:pt-36">

        {/* Background effects */}
        <div className="pointer-events-none absolute right-0 top-0 h-[550px] w-[550px] rounded-full bg-blue-100/50 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-100/40 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles size={15} />
              The ZYNOVA Difference
            </div>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Why Choose
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                ZYNOVA?
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Technology is powerful when it moves your business forward.
              We combine intelligent thinking, modern engineering, and
              a practical approach to innovation to help businesses
              transform ideas into meaningful digital solutions.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
              Our focus is not simply building technology. It is
              understanding what matters to your business and creating
              solutions that make a difference.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Let's Work Together
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700"
              >
                Explore Our Expertise
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {[
                "Purpose-driven innovation",
                "Business-focused solutions",
                "Future-ready technology",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={13} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">

            <div className="absolute h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 blur-3xl sm:h-[430px] sm:w-[430px]" />

            <div className="relative aspect-square w-full max-w-[460px]">

              {/* Outer ring */}
              <div className="absolute inset-5 rounded-full border border-blue-200/80" />

              <div className="absolute inset-12 rounded-full border border-dashed border-violet-300" />

              <div className="absolute inset-[75px] rounded-full border border-cyan-200" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-[2.5rem] border border-white bg-white/80 shadow-2xl shadow-blue-100 backdrop-blur-xl sm:h-52 sm:w-52">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-violet-50" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-200">
                    <BrainCircuit size={34} />
                  </div>

                  <p className="relative mt-4 text-xl font-bold tracking-wide">
                    ZYNOVA
                  </p>

                  <p className="relative mt-1 text-xs tracking-[0.2em] text-slate-500">
                    INTELLIGENT INNOVATION
                  </p>
                </div>
              </div>

              {/* Floating AI */}
              <div className="absolute left-0 top-14 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-blue-100/70 backdrop-blur-md sm:left-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <BrainCircuit size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Artificial Intelligence
                    </p>
                    <p className="text-xs text-slate-500">
                      Smarter Possibilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating development */}
              <div className="absolute right-0 top-28 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-violet-100/70 backdrop-blur-md sm:right-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Code2 size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Software Development
                    </p>
                    <p className="text-xs text-slate-500">
                      Built for Your Business
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating automation */}
              <div className="absolute bottom-14 left-4 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-cyan-100/70 backdrop-blur-md sm:left-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Workflow size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Intelligent Automation
                    </p>
                    <p className="text-xs text-slate-500">
                      Simplifying Processes
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating growth */}
              <div className="absolute bottom-3 right-4 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-emerald-100/70 backdrop-blur-md sm:right-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <TrendingUp size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Digital Growth
                    </p>
                    <p className="text-xs text-slate-500">
                      Evolving with Technology
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section className="border-y border-slate-100 bg-white px-6 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Philosophy
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Technology should create
                <span className="text-blue-600"> real value.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-600">
                We believe technology is most effective when it connects
                innovation with everyday business needs. The right solution
                should do more than look impressive. It should help people
                work better, make processes easier, and create opportunities
                for progress.
              </p>

              <p className="text-base leading-8 text-slate-500">
                This belief shapes how we approach every idea, project,
                and challenge. We look beyond individual features to
                understand the bigger picture, identify opportunities,
                and create technology that supports meaningful outcomes.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                <span className="text-sm font-medium text-slate-700">
                  Innovation with intention
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SIX REASONS SECTION */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-16 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <Sparkles size={15} />
              What Sets Us Apart
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A different way to
              <span className="text-blue-600"> build the future.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our approach combines thoughtful innovation, technical
              capability, collaboration, and a commitment to building
              solutions that support the way businesses evolve.
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-5">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 sm:p-10"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-50/50 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative grid gap-6 md:grid-cols-[100px_1fr]">

                    {/* Number and icon */}
                    <div className="flex items-start gap-4 md:flex-col">
                      <span className="text-sm font-bold tracking-[0.2em] text-slate-300">
                        {reason.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={26} />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {reason.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                        {reason.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
                        <span>Driven by meaningful impact</span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* OUR STRENGTHS */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:px-10 lg:px-20">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Our Strengths
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Built on ideas.
                <span className="block text-violet-600">
                  Driven by purpose.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                We bring together different perspectives and
                technological capabilities to approach challenges
                thoughtfully. Our strength lies in connecting
                business understanding with technical execution
                and a mindset focused on continuous improvement.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
              >
                Learn More About Us
                <ArrowRight
                  size={17}
                  className="text-violet-600 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Strength list */}
            <div className="space-y-4">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;

                return (
                  <div
                    key={strength.title}
                    className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={23} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-300">
                          0{index + 1}
                        </span>

                        <h3 className="text-lg font-bold text-slate-900">
                          {strength.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

  {/* OUR COMMITMENT */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white sm:p-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <ShieldCheck size={28} />
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
                  Our commitment
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-blue-50">
                  Every interaction, idea, and solution is an
                  opportunity to build something meaningful.
                  We are committed to approaching technology
                  with responsibility, creativity, and a genuine
                  focus on business value.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-cyan-300" />
                  <span className="text-sm font-medium text-white/90">
                    Technology with purpose
                  </span>
                </div>

              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What You Can Expect
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A commitment to doing things thoughtfully.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We value the fundamentals that make technology
                projects successful. Our approach is shaped by
                clarity, collaboration, quality, and the belief
                that every solution should have a reason to exist.
              </p>

              <div className="mt-8 space-y-5">
                {commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Check size={14} />
                    </div>

                    <p className="text-sm leading-7 text-slate-700">
                      {commitment}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 px-8 py-16 text-center sm:px-16 sm:py-20">

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg shadow-blue-100">
              <Compass size={27} />
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let's build something
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                meaningful together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you have a clear vision, a business challenge,
              or simply an idea worth exploring, we are ready to
              start a conversation about what technology can make possible.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Start a Conversation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-700"
              >
                Explore Our Solutions
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}