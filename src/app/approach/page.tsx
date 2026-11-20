
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Lightbulb,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  Target,
  Users,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover & Understand",
    subtitle: "Start with the right questions",
    description:
      "Every successful technology initiative begins with understanding the business behind it. We take time to explore your goals, current systems, customer expectations, operational challenges, and long-term priorities. This discovery stage helps us identify what needs to improve and where technology can create meaningful value.",
    points: [
      "Understand business objectives and requirements",
      "Identify challenges and improvement opportunities",
      "Review existing technology and workflows",
    ],
    icon: Search,
    color: "blue",
  },
  {
    number: "02",
    title: "Research & Strategize",
    subtitle: "Create a thoughtful direction",
    description:
      "Once we understand the challenge, we explore possible solutions and define a practical direction. We consider the right technologies, project scope, user needs, integration requirements, and future scalability. Our aim is to create a clear strategy that connects technical decisions with measurable business objectives.",
    points: [
      "Evaluate technologies and solution options",
      "Define project priorities and milestones",
      "Build a practical implementation strategy",
    ],
    icon: Lightbulb,
    color: "violet",
  },
  {
    number: "03",
    title: "Design & Experience",
    subtitle: "Make technology intuitive",
    description:
      "A solution should not only work well; it should also be easy to understand and use. We focus on user experience, information structure, interface design, and accessibility. Through thoughtful design decisions, we aim to create digital experiences that feel clear, consistent, and useful across different devices.",
    points: [
      "Plan user journeys and interface structure",
      "Create responsive and intuitive experiences",
      "Align design with business identity",
    ],
    icon: PenTool,
    color: "pink",
  },
  {
    number: "04",
    title: "Develop & Integrate",
    subtitle: "Turn ideas into working solutions",
    description:
      "With a clear strategy and design direction, development brings the solution to life. We focus on maintainable code, suitable architecture, reliable integrations, and performance. Whether the project involves web applications, AI capabilities, automation, or cloud-based systems, our development approach emphasizes practical functionality and long-term flexibility.",
    points: [
      "Build reliable and maintainable applications",
      "Integrate suitable APIs and business systems",
      "Develop with performance and scalability in mind",
    ],
    icon: Code2,
    color: "cyan",
  },
  {
    number: "05",
    title: "Test & Improve",
    subtitle: "Build confidence through quality",
    description:
      "Before a solution is ready for release, it needs careful evaluation. We consider functionality, usability, responsiveness, security, and performance. Testing helps uncover issues early and gives us opportunities to refine the experience. We believe quality should be considered throughout development rather than treated as a final checklist.",
    points: [
      "Validate functionality and user experience",
      "Review performance and security considerations",
      "Resolve issues and refine implementation",
    ],
    icon: ShieldCheck,
    color: "emerald",
  },
  {
    number: "06",
    title: "Launch & Evolve",
    subtitle: "Keep moving forward",
    description:
      "Launching a digital solution is an important milestone, but it is not the end of its journey. We consider deployment, operational readiness, documentation, and opportunities for future improvement. As business needs and technologies change, solutions should be able to adapt and grow with them.",
    points: [
      "Prepare deployment and launch activities",
      "Support a smooth transition into operation",
      "Identify future enhancements and improvements",
    ],
    icon: Rocket,
    color: "orange",
  },
];

const principles = [
  {
    icon: Target,
    title: "Purpose Before Technology",
    description:
      "We begin with the problem that needs solving, then select technology that supports the intended outcome.",
  },
  {
    icon: Users,
    title: "People at the Centre",
    description:
      "We consider the people who use, manage, and benefit from every digital solution.",
  },
  {
    icon: Workflow,
    title: "Connected Thinking",
    description:
      "We look beyond individual features to understand how systems, processes, and teams work together.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We value feedback, learning, and refinement as essential parts of building better technology.",
  },
];

const collaborationPoints = [
  "Clear communication throughout the project",
  "Shared understanding of objectives and priorities",
  "Practical planning and transparent decisions",
  "Feedback-driven design and development",
  "A focus on maintainability and future growth",
];

const colorStyles: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    glow: "bg-blue-400",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    glow: "bg-violet-400",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
    glow: "bg-pink-400",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
    glow: "bg-cyan-400",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    glow: "bg-emerald-400",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    glow: "bg-orange-400",
  },
};

export default function ApproachPage() {
  return (
    <main className="overflow-hidden bg-[#fcfcff] text-slate-800">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-24 sm:px-10 lg:px-20 lg:pb-32 lg:pt-32">
        <div className="absolute right-0 top-0 -z-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[130px]" />
        <div className="absolute bottom-0 left-0 -z-0 h-72 w-72 rounded-full bg-violet-100/50 blur-[110px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              How We Work
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              A thoughtful approach to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                meaningful innovation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              At ZYNOVA AI Solutions, we believe great technology begins with
              understanding. Our approach brings together business thinking,
              creative problem-solving, modern engineering, and continuous
              improvement to turn complex challenges into practical digital
              opportunities.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-500">
              We focus on building solutions with a clear purpose, a thoughtful
              user experience, and the flexibility to support changing business
              needs. Every stage is designed to move from an idea towards a
              useful and sustainable result.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore Our Expertise <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* APPROACH VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 opacity-70 blur-2xl" />

            <div className="relative rounded-[2.5rem] border border-white bg-white p-7 shadow-[0_25px_90px_rgba(30,64,175,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Our Framework
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    From idea to impact
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Workflow size={27} />
                </div>
              </div>

              <div className="relative mt-10 space-y-4">
                {[
                  { title: "Understand", icon: Search, color: "bg-blue-500" },
                  { title: "Strategize", icon: Lightbulb, color: "bg-violet-500" },
                  { title: "Create", icon: PenTool, color: "bg-pink-500" },
                  { title: "Develop", icon: Code2, color: "bg-cyan-500" },
                  { title: "Improve", icon: RefreshCw, color: "bg-emerald-500" },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${step.color}`}
                      >
                        <Icon size={21} />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-800">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Stage {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <CheckCircle2 size={19} className="text-emerald-500" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5 text-white">
                <p className="text-sm font-medium text-blue-100">
                  Our guiding principle
                </p>
                <p className="mt-2 text-xl font-bold">
                  Technology should create progress that matters.
                </p>
              </div>
            </div>

            <div className="absolute -right-5 top-20 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:block">
              <Sparkles className="text-violet-500" size={25} />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-cyan-100 bg-white p-4 shadow-xl sm:block">
              <Target className="text-cyan-600" size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-slate-100 bg-white px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Philosophy
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Better solutions begin with better thinking.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Technology projects can become complicated when decisions are
              made without a clear understanding of the underlying business
              challenge. That is why we place discovery, communication, and
              planning at the centre of our approach. We want every solution to
              have a reason to exist and a clear role in supporting the people
              and processes that depend on it.
            </p>
            <p>
              Our approach is not limited to writing code or implementing
              individual tools. We consider the complete experience, from the
              first conversation and solution design to development,
              integration, testing, and future improvement. This broader
              perspective helps us consider how technology fits into the
              everyday reality of a business.
            </p>
            <p>
              We also recognise that no two organisations have exactly the same
              priorities. Our process is structured enough to provide direction
              while remaining flexible enough to respond to different project
              requirements, changing circumstances, and new opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Process
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Six stages. One connected journey.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              We follow a practical process that connects business
              understanding with thoughtful design, reliable development, and
              ongoing evolution. Each stage builds on the previous one to
              create a more informed path towards the desired outcome.
            </p>
          </div>

          <div className="space-y-7">
            {processSteps.map((step) => {
              const Icon = step.icon;
              const style = colorStyles[step.color];

              return (
                <article
                  key={step.number}
                  className={`group relative overflow-hidden rounded-[2rem] border ${style.border} bg-white p-7 shadow-[0_8px_35px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-48 w-48 rounded-full ${style.glow} opacity-[0.06] blur-3xl transition group-hover:opacity-15`}
                  />

                  <div className="relative grid gap-8 lg:grid-cols-[120px_1fr_0.85fr] lg:items-start">
                    <div className="flex items-center gap-4 lg:block">
                      <span className="text-5xl font-black tracking-tighter text-slate-200">
                        {step.number}
                      </span>
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text} lg:mt-5`}
                      >
                        <Icon size={27} />
                      </div>
                    </div>

                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${style.text}`}
                      >
                        {step.subtitle}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
                        {step.description}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-6">
                      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Key Activities
                      </p>
                      <ul className="space-y-4">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <CheckCircle2
                              size={18}
                              className={`mt-0.5 shrink-0 ${style.text}`}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What Guides Us
            </p>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              Principles behind every decision.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Our process is supported by a set of practical principles. They
              help us make thoughtful decisions, maintain focus, and keep the
              needs of people and businesses in view throughout a project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="group rounded-3xl border border-slate-100 bg-[#fafbff] p-8 transition hover:border-blue-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={25} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-500">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-900 lg:grid-cols-2">
          <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />

            <div className="relative">
              <div className="inline-flex rounded-2xl bg-white/10 p-4 text-cyan-300">
                <MessageCircle size={30} />
              </div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Working Together
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Collaboration makes better ideas possible.
              </h2>
              <p className="mt-7 leading-8 text-slate-300">
                Successful digital projects depend on more than technology.
                They require shared understanding, open communication, and
                constructive feedback. We value collaboration because it helps
                bring different perspectives together and keeps decisions
                connected to real business needs.
              </p>
              <p className="mt-5 leading-8 text-slate-400">
                By working closely with stakeholders, we aim to maintain
                clarity throughout the project and create solutions that are
                easier to understand, use, and evolve.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Commitment
            </p>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              What you can expect from our approach
            </h3>

            <div className="mt-9 space-y-6">
              {collaborationPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-full bg-emerald-50 p-1.5 text-emerald-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <BarChart3 size={23} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Focused on meaningful progress
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Purposeful decisions at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-200/40 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg shadow-blue-100">
            <Sparkles size={30} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Let's Build Something Meaningful
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Your next idea deserves a thoughtful approach.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            Whether you are exploring AI, developing a digital product,
            improving business operations, or planning a larger technology
            initiative, start with a conversation about what you want to
            achieve.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start a Conversation <ArrowRight size={19} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              Explore Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
