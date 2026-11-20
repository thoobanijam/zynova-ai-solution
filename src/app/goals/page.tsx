
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  BrainCircuit,
  Code2,
  Workflow,
  ShieldCheck,
  Users,
  TrendingUp,
  Lightbulb,
  Globe2,
  Rocket,
  Database,
  CheckCircle2,
  Compass,
  Layers3,
} from "lucide-react";

const goals = [
  {
    number: "01",
    category: "INNOVATION",
    title: "Advance Practical AI Innovation",
    description:
      "We aim to explore and apply artificial intelligence in ways that address genuine business challenges. Our goal is to develop intelligent applications and AI-powered experiences that support better decisions, improve productivity, simplify complex activities, and create new opportunities for organizations.",
    points: [
      "Explore useful AI applications",
      "Develop intelligent digital experiences",
      "Encourage responsible AI adoption",
    ],
    icon: BrainCircuit,
    accent: "blue",
  },
  {
    number: "02",
    category: "ENGINEERING",
    title: "Deliver Reliable Digital Solutions",
    description:
      "We strive to build dependable software that combines functionality, usability, performance, and maintainability. From web applications to custom business platforms, our goal is to create solutions that support current requirements while providing a flexible foundation for future improvements.",
    points: [
      "Build quality-driven applications",
      "Focus on user-friendly experiences",
      "Support maintainable architecture",
    ],
    icon: Code2,
    accent: "violet",
  },
  {
    number: "03",
    category: "AUTOMATION",
    title: "Make Business Processes Smarter",
    description:
      "We want to help organizations reduce unnecessary manual work through thoughtful automation and connected workflows. By identifying repetitive activities and opportunities for process improvement, we aim to help teams work more efficiently and focus on higher-value responsibilities.",
    points: [
      "Identify repetitive processes",
      "Connect business workflows",
      "Improve operational efficiency",
    ],
    icon: Workflow,
    accent: "cyan",
  },
  {
    number: "04",
    category: "TRUST",
    title: "Promote Secure and Responsible Technology",
    description:
      "We recognize that reliable digital solutions require careful attention to data, security, quality, and responsible development. Our goal is to encourage thoughtful engineering practices and build technology with an understanding of the trust that businesses and users place in digital systems.",
    points: [
      "Consider security from the beginning",
      "Respect data and user privacy",
      "Encourage responsible development",
    ],
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    number: "05",
    category: "COLLABORATION",
    title: "Build Stronger Technology Partnerships",
    description:
      "We aim to develop collaborative relationships by understanding each organization's objectives, listening to different perspectives, and communicating clearly throughout the development process. Our goal is to make technology initiatives more transparent, focused, and aligned with business priorities.",
    points: [
      "Understand customer requirements",
      "Encourage transparent communication",
      "Support collaborative problem-solving",
    ],
    icon: Users,
    accent: "orange",
  },
  {
    number: "06",
    category: "GROWTH",
    title: "Support Continuous Digital Growth",
    description:
      "We want to help businesses prepare for changing markets and emerging technologies. Our goal is to create adaptable digital foundations, encourage continuous improvement, and help organizations identify opportunities to strengthen their capabilities over time.",
    points: [
      "Design for changing requirements",
      "Encourage continuous improvement",
      "Explore emerging opportunities",
    ],
    icon: TrendingUp,
    accent: "pink",
  },
];

const focusAreas = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    text: "Explore new ideas and turn promising concepts into practical solutions.",
  },
  {
    icon: Database,
    title: "Data-Driven Decisions",
    text: "Help organizations make better use of information and digital insights.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Develop technology approaches that can serve diverse business environments.",
  },
  {
    icon: Layers3,
    title: "Scalable Foundations",
    text: "Encourage flexible architectures that can evolve with business needs.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Understand",
    text: "Study business challenges, customer expectations, and project objectives.",
  },
  {
    step: "02",
    title: "Plan",
    text: "Define priorities, select suitable technologies, and establish a clear direction.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Create practical digital solutions with attention to quality and usability.",
  },
  {
    step: "04",
    title: "Improve",
    text: "Review, refine, and adapt solutions as requirements and opportunities change.",
  },
];

export default function GoalsPage() {
  return (
    <main className="bg-[#fbfcff] text-slate-800 overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/50 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[2px] bg-blue-600" />
                <span className="uppercase tracking-[0.25em] text-sm font-bold text-blue-600">
                  Our Goals
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.12] text-slate-950">
                Clear goals.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  Meaningful progress.
                </span>
                Better possibilities.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-9 mt-8 max-w-2xl">
                At ZYNOVA AI Solutions, our goals provide direction for
                the work we do and the future we want to help create.
                We focus on meaningful innovation, dependable software,
                intelligent automation, and technology that helps
                businesses move forward with greater confidence.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="#strategic-goals"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-slate-950 text-white font-semibold hover:bg-blue-700 transition-all"
                >
                  Explore Our Goals
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-slate-300 bg-white text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  Work With Us
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* TARGET VISUAL */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-[36px] bg-white border border-slate-200 shadow-2xl shadow-blue-100 p-8 md:p-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                        Strategic Direction
                      </p>
                      <h2 className="text-2xl font-bold text-slate-900 mt-2">
                        Focus on Progress
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Target size={25} />
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center h-64 my-8">
                    <div className="absolute w-60 h-60 rounded-full border border-blue-100" />
                    <div className="absolute w-48 h-48 rounded-full border border-indigo-200" />
                    <div className="absolute w-36 h-36 rounded-full border border-violet-200" />
                    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 shadow-xl shadow-indigo-200 flex items-center justify-center text-white">
                      <Target size={43} />
                    </div>

                    <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-cyan-400" />
                    <div className="absolute bottom-8 left-12 w-3 h-3 rounded-full bg-violet-400" />
                    <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-blue-400" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">
                    <div>
                      <BrainCircuit className="text-blue-600" size={21} />
                      <p className="text-xs font-semibold text-slate-700 mt-2">
                        Innovation
                      </p>
                    </div>
                    <div>
                      <Workflow className="text-violet-600" size={21} />
                      <p className="text-xs font-semibold text-slate-700 mt-2">
                        Solutions
                      </p>
                    </div>
                    <div>
                      <Rocket className="text-cyan-600" size={21} />
                      <p className="text-xs font-semibold text-slate-700 mt-2">
                        Growth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-slate-100 shadow-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                      <Compass size={21} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Purposeful Direction
                      </p>
                      <p className="text-xs text-slate-500">
                        Focused on what matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white border-y border-slate-100 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.2em] text-sm font-bold text-violet-600">
              Our Direction
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 leading-tight mt-5">
              Goals that connect technology with business value.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              The digital world continues to change how organizations
              communicate, serve customers, manage information, and
              deliver products and services. Businesses need more
              than technology alone. They need clear objectives,
              thoughtful planning, and solutions that make a genuine
              difference to their operations.
            </p>

            <p>
              Our goals are centered on bringing these elements
              together. We want to encourage useful innovation,
              develop technology with purpose, and make digital
              transformation easier to approach. Whether the
              opportunity involves artificial intelligence, software
              development, cloud infrastructure, or automation,
              our focus remains on practical business outcomes.
            </p>

            <p>
              We also recognize that meaningful progress takes time.
              Our goals are not simply a list of activities to
              complete; they represent an ongoing commitment to
              learning, improving, collaborating, and adapting as
              technology and business needs evolve.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC GOALS */}
      <section
        id="strategic-goals"
        className="px-6 md:px-12 lg:px-20 py-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <span className="uppercase tracking-[0.2em] text-sm font-bold text-blue-600">
                Strategic Priorities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
                The goals behind our work.
              </h2>
            </div>

            <p className="text-slate-600 leading-7 max-w-sm">
              Six focus areas that shape how we approach innovation,
              engineering, partnerships, and long-term development.
            </p>
          </div>

          <div className="space-y-6">
            {goals.map((goal) => {
              const Icon = goal.icon;

              const accentStyles: Record<string, string> = {
                blue: "bg-blue-50 text-blue-600",
                violet: "bg-violet-50 text-violet-600",
                cyan: "bg-cyan-50 text-cyan-600",
                emerald: "bg-emerald-50 text-emerald-600",
                orange: "bg-orange-50 text-orange-600",
                pink: "bg-pink-50 text-pink-600",
              };

              return (
                <article
                  key={goal.number}
                  className="grid lg:grid-cols-12 gap-8 p-8 md:p-10 bg-white border border-slate-200 rounded-[30px] hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="lg:col-span-1">
                    <span className="text-3xl font-light text-slate-300">
                      {goal.number}
                    </span>
                  </div>

                  <div className="lg:col-span-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${accentStyles[goal.accent]}`}>
                      <Icon size={27} />
                    </div>

                    <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mt-7">
                      {goal.category}
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-3 leading-snug">
                      {goal.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-slate-600 leading-8 text-base md:text-lg">
                      {goal.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-8 pt-7 border-t border-slate-100">
                      {goal.points.map((point) => (
                        <div key={point} className="flex gap-2 items-start">
                          <CheckCircle2
                            size={18}
                            className="text-blue-600 shrink-0 mt-1"
                          />
                          <span className="text-sm font-medium text-slate-700 leading-6">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="bg-[#f1f5ff] px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="uppercase tracking-[0.2em] text-sm font-bold text-indigo-600">
              What Guides Our Priorities
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
              The thinking behind every goal.
            </h2>

            <p className="text-lg text-slate-600 leading-8 mt-6">
              Our goals are supported by a broader set of principles.
              They help us evaluate opportunities, make thoughtful
              technology decisions, and stay focused on creating
              meaningful results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="bg-white p-7 rounded-3xl border border-white shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl text-indigo-600 flex items-center justify-center">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-7">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 leading-7 text-sm mt-3">
                    {area.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXECUTION APPROACH */}
      <section className="px-6 md:px-12 lg:px-20 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="uppercase tracking-[0.2em] text-sm font-bold text-violet-600">
                Turning Goals Into Action
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
                A thoughtful path from idea to improvement.
              </h2>

              <p className="text-lg text-slate-600 leading-8 mt-7">
                Clear goals become valuable when supported by a
                practical approach. We believe successful technology
                development requires understanding the challenge,
                planning carefully, building responsibly, and
                remaining open to improvement.
              </p>

              <p className="text-lg text-slate-600 leading-8 mt-5">
                This approach helps keep projects focused on their
                intended purpose while allowing room for learning
                and changing requirements.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="relative space-y-5">
                {roadmap.map((item, index) => (
                  <div
                    key={item.step}
                    className="relative flex gap-6 p-7 rounded-3xl bg-[#f8faff] border border-slate-100"
                  >
                    <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-100">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-7 mt-2">
                        {item.text}
                      </p>
                    </div>

                    {index !== roadmap.length - 1 && (
                      <div className="hidden" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
              Moving Forward Together
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Every meaningful achievement begins with a clear goal.
            </h2>

            <p className="text-lg text-blue-100 leading-8 mt-6">
              Whether you are exploring AI, planning a new digital
              product, improving business operations, or beginning
              your digital transformation journey, we welcome the
              opportunity to understand your goals and explore
              what is possible.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-9 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold hover:bg-blue-50 transition-all"
            >
              Discuss Your Goals
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
