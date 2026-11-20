
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cloud,
  Cpu,
  Database,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
  CheckCircle2,
} from "lucide-react";

// FEATURE CARDS
const highlights = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Build intelligent solutions that help businesses automate tasks, analyze information, and make smarter decisions.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Develop modern, scalable software applications designed around your business goals and workflows.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description:
      "Simplify repetitive business operations with intelligent workflows and automation technologies.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Use modern cloud technologies to build flexible, reliable, and scalable digital infrastructure.",
    color: "from-sky-500 to-cyan-600",
  },
];

// TECHNOLOGIES
const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Next.js",
  "React",
  "Node.js",
  "Cloud Computing",
  "Database Systems",
  "Automation",
];

// BENEFITS
const benefits = [
  "Business-focused technology solutions",
  "Modern and scalable application development",
  "Intelligent automation and AI integration",
  "Responsive and user-friendly experiences",
  "Continuous improvement and innovation",
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-28"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* INTRODUCTION */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-sm">
            <Sparkles size={17} className="text-blue-600" />

            <span className="text-sm font-semibold text-blue-700">
              Welcome to ZYNOVA AI Solutions
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building a Smarter

            <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Future
            </span>

            Through Innovation
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            ZYNOVA AI Solutions helps businesses embrace the power of
            artificial intelligence, modern software development, intelligent
            automation, and cloud technologies to create meaningful digital
            experiences and business opportunities.
          </p>

          {/* HERO BUTTONS */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/#services"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Our Services

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
            >
              Discover Zynova

              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-blue-100/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={27} />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Discover More

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}

        </div>

        {/* ABOUT ZYNOVA */}
        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Lightbulb size={17} />
              Who We Are
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Turning Innovative Ideas Into

              <span className="text-blue-600">
                {" "}Intelligent Solutions
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              At ZYNOVA AI Solutions, we believe technology should make
              business simpler, smarter, and more efficient. We focus on
              combining modern digital technologies with practical business
              requirements.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              From intelligent applications and custom software to digital
              automation and cloud-based systems, our goal is to help
              organizations build solutions that support their growth.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 space-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

            <Link
              href="/#about"
              className="mt-9 inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-violet-600"
            >
              Learn More About Us

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-cyan-100/40 to-violet-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-100/60 sm:p-10">

              {/* VISUAL HEADER */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    ZYNOVA DIGITAL INNOVATION
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                    Technology Ecosystem
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <BrainCircuit size={27} />
                </div>

              </div>

              {/* CENTER AI ICON */}
              <div className="relative flex items-center justify-center py-12">

                <div className="absolute h-64 w-64 rounded-full border border-blue-100" />

                <div className="absolute h-48 w-48 rounded-full border border-dashed border-cyan-300" />

                <div className="absolute h-36 w-36 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 blur-xl" />

                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-2xl shadow-blue-300/50">
                  <BrainCircuit size={54} />
                </div>

                {/* FLOATING ICONS */}
                <div className="absolute left-2 top-10 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-lg sm:left-10">
                  <Cpu size={23} />
                </div>

                <div className="absolute right-2 top-10 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-100 bg-white text-cyan-600 shadow-lg sm:right-10">
                  <Database size={23} />
                </div>

                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-white text-violet-600 shadow-lg sm:left-14">
                  <MonitorSmartphone size={23} />
                </div>

                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-lg sm:right-14">
                  <Zap size={23} />
                </div>

              </div>

              {/* TECHNOLOGY TAGS */}
              <div className="border-t border-gray-100 pt-6">

                <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                  Technology Focus Areas
                </p>

                <div className="flex flex-wrap justify-center gap-2">

                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-medium text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* FINAL CTA */}
        <div className="mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 px-7 py-12 text-center shadow-xl shadow-blue-200/50 sm:px-12 lg:py-16">

          <div className="mx-auto max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50">
              <Rocket size={17} />
              Innovate With Confidence
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Let's Build Something Intelligent Together
            </h2>

            <p className="mt-5 text-sm leading-8 text-blue-100 sm:text-base">
              Have an idea, business challenge, or digital transformation
              project? Let's explore how technology can help move your
              business forward.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start a Conversation

              <ArrowRight size={19} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
