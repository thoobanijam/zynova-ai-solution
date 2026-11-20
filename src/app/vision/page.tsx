
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Telescope,
  Globe2,
  BrainCircuit,
  Network,
  Lightbulb,
  Building2,
  ChartNoAxesCombined,
  ShieldCheck,
  Sparkles,
  Compass,
  Rocket,
  Cpu,
  Workflow,
  Users,
} from "lucide-react";

const futureAreas = [
  {
    number: "01",
    title: "An Intelligent Digital World",
    description:
      "We envision a future where artificial intelligence and intelligent software become practical tools that help people solve problems, discover opportunities, and make better-informed decisions. Our aspiration is to contribute to this future through solutions that combine human understanding with technological capability.",
    icon: BrainCircuit,
    color: "blue",
  },
  {
    number: "02",
    title: "Connected Business Ecosystems",
    description:
      "We see businesses operating through connected digital environments where information, applications, and workflows work together. By encouraging better integration and communication between systems, we aim to help organizations reduce complexity and create more coordinated operations.",
    icon: Network,
    color: "violet",
  },
  {
    number: "03",
    title: "Technology for Everyone",
    description:
      "We believe the benefits of digital innovation should not be limited to large organizations. Our vision includes making useful technology more accessible to startups, small businesses, growing enterprises, and communities with different levels of digital maturity.",
    icon: Globe2,
    color: "cyan",
  },
  {
    number: "04",
    title: "Sustainable Digital Growth",
    description:
      "We aspire to help organizations build flexible technology foundations that can grow alongside their ambitions. Digital systems should be adaptable, maintainable, and designed with long-term business needs in mind rather than solving only today's requirements.",
    icon: ChartNoAxesCombined,
    color: "emerald",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "Imagine",
    subtitle: "See new possibilities",
    description:
      "Explore emerging technologies, understand changing needs, and identify opportunities where digital innovation can create meaningful value.",
    icon: Telescope,
  },
  {
    phase: "02",
    title: "Create",
    subtitle: "Turn ideas into solutions",
    description:
      "Transform promising ideas into practical applications, connected systems, and intelligent experiences that address real challenges.",
    icon: Lightbulb,
  },
  {
    phase: "03",
    title: "Connect",
    subtitle: "Build stronger ecosystems",
    description:
      "Bring people, information, applications, and processes together to support more connected and efficient business environments.",
    icon: Workflow,
  },
  {
    phase: "04",
    title: "Evolve",
    subtitle: "Keep moving forward",
    description:
      "Continuously learn, improve, and adapt solutions as technology advances and organizations discover new opportunities.",
    icon: Rocket,
  },
];

export default function VisionPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcff] text-slate-800">

      {/* HERO - FUTURE FOCUSED */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.09),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(14,165,233,0.08),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-indigo-600" />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-indigo-600">
              Our Vision
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.12] text-slate-950">
                Imagining a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  smarter future.
                </span>
                Building it today.
              </h1>

              <p className="mt-8 text-lg md:text-xl leading-9 text-slate-600 max-w-2xl">
                Our vision is to contribute to a future where intelligent
                technology makes businesses more capable, digital
                experiences more meaningful, and innovation more
                accessible. We aspire to be a trusted technology partner
                helping organizations turn possibilities into practical
                progress.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-7 py-4 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Discover Our Capabilities
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all"
                >
                  Connect With Us
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* FUTURE VISUAL */}
            <div className="lg:col-span-5">
              <div className="relative max-w-lg mx-auto">
                <div className="aspect-[4/5] rounded-[42px] bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-indigo-200">
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:35px_35px]" />

                  <div className="absolute w-72 h-72 rounded-full border border-blue-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute w-56 h-56 rounded-full border border-violet-300/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute w-40 h-40 rounded-full border border-cyan-300/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                  <div className="absolute top-8 left-8 text-blue-200">
                    <Sparkles size={25} />
                  </div>

                  <div className="absolute top-8 right-8 text-cyan-200">
                    <Cpu size={24} />
                  </div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl">
                      <Telescope size={54} strokeWidth={1.3} />
                    </div>

                    <p className="text-xs uppercase tracking-[0.35em] text-blue-200 mt-10">
                      Beyond Today
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
                      The Future
                      <br />
                      Starts With Ideas
                    </h2>

                    <p className="text-sm text-blue-100/80 mt-5 max-w-xs leading-7">
                      Discover possibilities. Embrace intelligence.
                      Create meaningful progress.
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-widest text-blue-200">
                    <span>Explore</span>
                    <span>Innovate</span>
                    <span>Evolve</span>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Compass size={21} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        Future Focused
                      </p>
                      <p className="text-xs text-slate-500">
                        Innovation with purpose
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION STATEMENT */}
      <section className="bg-white border-y border-slate-100 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
                The Bigger Picture
              </span>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                A world where technology creates possibilities.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-9 font-medium">
                We imagine a world in which technology is not simply
                something businesses use, but a powerful foundation
                for how they think, collaborate, serve customers, and
                discover new opportunities.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-8 text-slate-600 leading-8">
                <p>
                  As artificial intelligence, cloud platforms,
                  connected applications, and automation continue
                  to evolve, organizations have new opportunities
                  to rethink how they operate. We envision these
                  technologies working together to make digital
                  environments more responsive, connected, and
                  useful.
                </p>

                <p>
                  Our aspiration is to contribute to this progress
                  through thoughtful engineering and practical
                  innovation. We want to help businesses approach
                  the future with clarity, confidence, and the
                  flexibility to adapt as new possibilities emerge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE AREAS - EDITORIAL LAYOUT */}
      <section className="px-6 md:px-12 lg:px-20 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              The Future We See
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-slate-950">
              Four possibilities shaping our vision.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Our vision is not limited to a single technology or
              industry. It is about creating a broader digital
              environment where innovation, accessibility,
              connectivity, and sustainable progress work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureAreas.map((area) => {
              const Icon = area.icon;

              const colorStyles: Record<string, string> = {
                blue: "bg-blue-50 text-blue-600",
                violet: "bg-violet-50 text-violet-600",
                cyan: "bg-cyan-50 text-cyan-600",
                emerald: "bg-emerald-50 text-emerald-600",
              };

              return (
                <article
                  key={area.number}
                  className="relative bg-white border border-slate-200 rounded-[30px] p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-slate-400">
                      {area.number}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorStyles[area.color]}`}
                    >
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    {area.description}
                  </p>

                  <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROADMAP - DARK SECTION */}
      <section className="bg-[#10152b] text-white py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-300">
              Our Forward Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              From possibility to progress.
            </h2>

            <p className="text-lg text-slate-300 mt-6 leading-8">
              A meaningful digital future is built through continuous
              exploration and improvement. These four stages represent
              the mindset that guides our approach to future-focused
              technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.phase}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 hover:bg-white/[0.08] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-cyan-300">
                      PHASE {item.phase}
                    </span>
                    <Icon size={25} className="text-indigo-300" />
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-cyan-200 text-sm mt-2">
                      {item.subtitle}
                    </p>
                    <p className="text-slate-300 text-sm leading-7 mt-5">
                      {item.description}
                    </p>
                  </div>

                  {index !== roadmap.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-20 text-cyan-300">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR ASPIRATION */}
      <section className="px-6 md:px-12 lg:px-20 py-28 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
              What We Aspire To Be
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
              A partner in progress, not just a technology provider.
            </h2>

            <p className="text-lg text-slate-600 leading-8 mt-7">
              We aspire to build meaningful relationships with
              organizations that want to explore new ideas and
              improve the way they work. Our role is to understand
              their ambitions, share practical technology
              perspectives, and help turn suitable opportunities
              into useful digital solutions.
            </p>

            <p className="text-lg text-slate-600 leading-8 mt-5">
              We want every engagement to be guided by curiosity,
              clear communication, responsible thinking, and a
              genuine commitment to improvement. By staying open
              to learning and adapting, we can continue to develop
              alongside the businesses and people we serve.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Building2,
                title: "Business-Oriented Innovation",
                description:
                  "Technology choices connected to real organizational goals.",
              },
              {
                icon: ShieldCheck,
                title: "Responsible Engineering",
                description:
                  "Thoughtful development with quality, reliability, and trust in mind.",
              },
              {
                icon: Users,
                title: "Human-Centered Experiences",
                description:
                  "Digital solutions designed around the people who use them.",
              },
              {
                icon: Rocket,
                title: "Continuous Evolution",
                description:
                  "Flexible thinking that welcomes learning and future improvements.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-7 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-3xl">
            <span className="uppercase text-sm tracking-[0.25em] font-semibold text-blue-100">
              The Future Is an Opportunity
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Let&apos;s create something meaningful for tomorrow.
            </h2>

            <p className="text-lg text-blue-50 leading-8 mt-6">
              Every great digital journey begins with a conversation
              and an idea. If your business is ready to explore new
              possibilities, we would be glad to connect and discover
              what technology can help you achieve.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-9 rounded-full bg-white text-indigo-700 px-8 py-4 font-bold hover:bg-blue-50 transition-all"
            >
              Start a Conversation
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
