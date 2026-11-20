
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Lightbulb,
  Target,
  Users,
  Workflow,
  ShieldCheck,
  Sparkles,
  Globe2,
  Compass,
  Rocket,
} from "lucide-react";

export default function MissionPage() {
  return (
    <main className="bg-[#fcfcff] text-slate-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[140px] rounded-full -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/50 blur-[140px] rounded-full -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-blue-600" />
            <span className="uppercase tracking-[0.25em] text-sm font-semibold text-blue-600">
              Our Mission
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Turning technology
                <br />
                into meaningful
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  business progress.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mt-8 leading-8">
                Our mission is to make intelligent technology practical,
                accessible, and valuable for businesses. We combine
                innovation, engineering, and thoughtful problem-solving
                to help organizations simplify complexity, improve
                operations, and confidently move toward a digital future.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-700 transition-all"
                >
                  Explore Our Expertise
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  Talk to Our Team
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* MISSION VISUAL */}
            <div className="lg:col-span-4">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-square rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1 shadow-2xl shadow-blue-200">
                  <div className="h-full w-full rounded-[38px] bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute w-64 h-64 rounded-full border border-white/20" />
                    <div className="absolute w-48 h-48 rounded-full border border-white/20" />
                    <div className="absolute w-32 h-32 rounded-full border border-white/30" />

                    <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/15 border border-white/30 flex items-center justify-center shadow-xl backdrop-blur-md">
                      <BrainCircuit size={46} />
                    </div>

                    <div className="mt-7 text-center relative z-10">
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-100">
                        Our Purpose
                      </p>
                      <h2 className="text-2xl font-bold mt-2">
                        Innovation
                        <br />
                        with Impact
                      </h2>
                    </div>

                    <Sparkles className="absolute top-10 right-10 text-blue-100" size={22} />
                    <Lightbulb className="absolute bottom-12 left-10 text-violet-200" size={25} />
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white shadow-xl border border-slate-100 rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Target size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Purpose Driven
                      </p>
                      <p className="text-xs text-slate-500">
                        Built around real needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION INTRODUCTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Why We Exist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-5 text-slate-900 leading-tight">
              Technology should create opportunities, not obstacles.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-600 text-lg leading-8">
            <p>
              Businesses today are expected to do more with less,
              respond faster to changing customer expectations, and
              operate in an increasingly digital environment. However,
              technology is only valuable when it solves a real problem
              and supports the people who use it.
            </p>

            <p>
              At ZYNOVA AI Solutions, our mission is to bridge the gap
              between technological possibilities and everyday business
              needs. We focus on developing practical digital solutions
              that help businesses work smarter, make informed decisions,
              reduce repetitive tasks, and build stronger foundations for
              sustainable growth.
            </p>

            <p>
              We believe progress does not always begin with the biggest
              transformation. Sometimes it starts with improving one
              process, creating one useful application, connecting
              disconnected systems, or making information easier to
              understand. Every meaningful improvement can create new
              opportunities for what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Mission in Action
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              What drives us forward
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Our mission is shaped by the way we think, the solutions
              we build, and the relationships we develop. These
              principles guide our work from the first idea to the
              final implementation.
            </p>
          </div>

          <div className="space-y-5">
            {/* 01 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-blue-600">01</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lightbulb size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Make Innovation Meaningful
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We explore modern technologies with a clear purpose.
                  Rather than adopting innovation simply because it is
                  new, we focus on where it can make a measurable
                  difference. Artificial intelligence, automation, and
                  digital engineering should help people solve problems
                  more effectively, unlock new possibilities, and create
                  practical value for businesses.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-violet-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-violet-600">02</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Target size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Solve Real Business Challenges
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  Every organization has different goals, workflows,
                  limitations, and opportunities. Our mission is to
                  understand these differences and develop technology
                  around real requirements. From custom software to
                  intelligent business systems, we aim to deliver
                  solutions that are relevant, reliable, and aligned
                  with the way each business operates.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-cyan-600">03</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Workflow size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Simplify the Way Businesses Work
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We believe digital systems should make work more
                  straightforward. By connecting processes, reducing
                  manual effort, improving access to information, and
                  introducing automation where it makes sense, we
                  strive to help teams spend less time on repetitive
                  activities and more time on meaningful work.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-emerald-600">04</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Empower People Through Technology
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  Technology achieves its greatest potential when
                  people can use it confidently. We aim to create
                  accessible, thoughtful, and user-friendly digital
                  experiences that support teams, improve collaboration,
                  and make complex tasks easier to understand and
                  complete. People remain at the center of every
                  successful digital transformation.
                </p>
              </div>
            </div>

            {/* 05 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-amber-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-amber-600">05</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <ShieldCheck size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Build With Responsibility and Trust
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  Our mission extends beyond delivering technology.
                  We value clarity, responsible development, thoughtful
                  decision-making, and long-term reliability. We aim to
                  approach every project with care, communicate openly,
                  and build solutions with an understanding of their
                  impact on businesses, users, data, and the wider
                  digital environment.
                </p>
              </div>
            </div>

            {/* 06 */}
            <div className="group grid md:grid-cols-12 gap-6 items-start p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:border-rose-300 hover:shadow-xl transition-all duration-300">
              <div className="md:col-span-1">
                <span className="text-2xl font-light text-rose-600">06</span>
              </div>

              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Rocket size={26} />
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-slate-900">
                  Create a Foundation for Future Growth
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We want to help businesses move forward with
                  confidence. Our focus is on building flexible
                  digital foundations that can adapt as needs change,
                  support new opportunities, and evolve over time.
                  Sustainable progress comes from solutions that
                  are designed not only for today's challenges but
                  also for tomorrow's possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION APPROACH */}
      <section className="py-24 bg-white px-6 md:px-12 lg:px-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Our Commitment
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900 leading-tight">
                Progress built on understanding.
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                We approach technology as a continuous journey of
                learning, improvement, and collaboration. Before
                building a solution, we seek to understand the
                challenge. As we develop, we consider functionality,
                usability, scalability, and reliability. As technology
                evolves, we remain open to better ways of delivering
                value.
              </p>

              <p className="mt-5 text-lg text-slate-600 leading-8">
                Our commitment is to keep the focus on what matters:
                helping people and businesses make technology work
                for them, creating useful digital experiences, and
                encouraging progress that is both purposeful and
                sustainable.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold hover:gap-4 transition-all"
              >
                Learn More About ZYNOVA
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* APPROACH PANEL */}
            <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Compass size={26} />
                </div>

                <h3 className="text-2xl font-bold mt-7">
                  How We Turn Our Mission Into Action
                </h3>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Listen & Understand",
                      description:
                        "Discover business goals, challenges, users, and opportunities.",
                    },
                    {
                      title: "Think & Design",
                      description:
                        "Explore ideas and plan practical, meaningful digital solutions.",
                    },
                    {
                      title: "Build & Deliver",
                      description:
                        "Develop technology with usability, quality, and reliability in mind.",
                    },
                    {
                      title: "Evolve & Improve",
                      description:
                        "Adapt solutions as business needs and technology continue to change.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 shrink-0 rounded-full bg-white/10 text-blue-200 flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-300 leading-6 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE VISION BANNER */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-10 md:p-16 text-white">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-blue-100 text-sm uppercase tracking-[0.2em]">
              <Globe2 size={18} />
              A Better Digital Future
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
              Technology that moves businesses forward.
            </h2>

            <p className="text-blue-50 text-lg leading-8 mt-6 max-w-2xl">
              We are committed to exploring new possibilities,
              creating intelligent digital solutions, and making
              innovation more useful in the real world. Every idea
              is an opportunity to improve. Every challenge is an
              opportunity to build something meaningful.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-9 px-7 py-4 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-all"
            >
              Let&apos;s Build What&apos;s Next
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
