
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Workflow,
  Sparkles,
  Compass,
  Layers3,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const milestones = [
  {
    number: "01",
    year: "The Beginning",
    title: "A Vision for Better Technology",
    description:
      "ZYNOVA AI Solutions is built around a simple idea: technology should make business easier, smarter, and more effective. Our vision is to help organizations turn complex challenges into practical digital opportunities.",
    icon: Lightbulb,
    color: "from-cyan-400 to-blue-500",
    tag: "The Vision",
  },
  {
    number: "02",
    year: "Building the Foundation",
    title: "Turning Ideas Into Digital Solutions",
    description:
      "We focus on creating a strong foundation through modern web development, custom software, intelligent applications, and cloud technologies. Every solution begins with understanding the problem it needs to solve.",
    icon: Code2,
    color: "from-violet-500 to-purple-600",
    tag: "The Foundation",
  },
  {
    number: "03",
    year: "Embracing Intelligence",
    title: "Bringing AI Into Everyday Business",
    description:
      "Artificial intelligence and automation are changing how businesses operate. Our direction is to explore practical ways to use intelligent technologies to simplify workflows, support decisions, and improve digital experiences.",
    icon: BrainCircuit,
    color: "from-emerald-400 to-teal-500",
    tag: "The Innovation",
  },
  {
    number: "04",
    year: "Looking Ahead",
    title: "Creating What's Next",
    description:
      "Our journey continues with a focus on emerging technologies, thoughtful engineering, and meaningful digital transformation. We aim to build solutions that can grow alongside the businesses that use them.",
    icon: Rocket,
    color: "from-orange-400 to-pink-500",
    tag: "The Future",
  },
];

const principles = [
  {
    icon: Target,
    title: "Purpose Before Technology",
    description:
      "We begin with business goals and real challenges before choosing the technology.",
  },
  {
    icon: Users,
    title: "People at the Center",
    description:
      "We value useful experiences that make technology easier for people to use.",
  },
  {
    icon: Workflow,
    title: "Continuous Improvement",
    description:
      "We believe digital solutions should evolve as needs and technologies change.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and Responsibility",
    description:
      "We value thoughtful engineering, reliability, and responsible technology choices.",
  },
];

const focusAreas = [
  "Artificial Intelligence",
  "Custom Software Development",
  "Web and Mobile Applications",
  "Intelligent Automation",
  "Cloud Solutions",
  "Digital Transformation",
];

export default function StoryPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#071329] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/25 blur-[130px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-36">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Sparkles size={16} />
              The ZYNOVA Journey
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Every Great Future
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Starts With an Idea.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Our story is about exploring possibilities, embracing innovation,
              and building digital solutions that help businesses move forward
              with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#our-journey"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Our Journey
                <ArrowDown size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
              >
                Connect With Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* ABSTRACT VISUAL */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-16 rounded-full border border-violet-300/30" />
            <div className="absolute inset-24 rounded-full border border-blue-300/30" />

            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-600/20 blur-3xl" />

            <div className="relative flex h-52 w-52 items-center justify-center rounded-[3rem] border border-white/20 bg-white/[0.08] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:h-60 sm:w-60">
              <div className="absolute inset-3 rounded-[2.5rem] border border-white/10" />
              <BrainCircuit
                size={105}
                strokeWidth={1.1}
                className="text-cyan-300"
              />
              <div className="absolute -right-8 top-7 rounded-2xl border border-white/20 bg-[#152743] p-4 shadow-xl">
                <Sparkles className="text-violet-300" size={26} />
              </div>
              <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/20 bg-[#152743] p-4 shadow-xl">
                <Code2 className="text-cyan-300" size={26} />
              </div>
            </div>

            <div className="absolute left-5 top-20 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
            <div className="absolute bottom-20 right-8 h-4 w-4 rounded-full bg-violet-400 shadow-[0_0_20px_#a78bfa]" />
            <div className="absolute right-16 top-10 h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-[#f8fafc] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Where It All Begins
            </p>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Technology With
              <span className="block text-blue-600">A Clear Purpose.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              At ZYNOVA AI Solutions, we see technology as more than lines of
              code or digital tools. We see it as an opportunity to solve
              problems, unlock new possibilities, and create better ways of
              working.
            </p>
            <p>
              Our story reflects a commitment to learning, innovation, and
              practical solutions. From modern applications to AI-powered
              technologies, we focus on connecting ideas with meaningful
              digital outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section
        id="our-journey"
        className="relative overflow-hidden bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="absolute -right-48 top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -left-48 bottom-20 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Evolution
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              The Journey Behind
              <span className="text-blue-600"> Our Vision</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every step represents a commitment to learning, creating, and
              finding smarter ways to use technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {milestones.map((item, index) => {
                const Icon = item.icon;
                const isRight = index % 2 !== 0;

                return (
                  <div
                    key={item.number}
                    className={`relative grid items-center gap-8 pl-16 md:grid-cols-2 md:pl-0 ${
                      isRight ? "" : ""
                    }`}
                  >
                    <div className="absolute left-0 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-sm font-bold text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
                      {item.number}
                    </div>

                    <div
                      className={`${
                        isRight
                          ? "md:col-start-2 md:row-start-1 md:pl-16"
                          : "md:pr-16 md:text-right"
                      }`}
                    >
                      <div
                        className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                          isRight ? "" : ""
                        }`}
                      >
                        <div
                          className={`mb-7 flex items-center gap-4 ${
                            isRight ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                          >
                            <Icon size={27} />
                          </div>
                          <div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                              {item.year}
                            </span>
                            <p className="mt-1 text-xs font-medium text-slate-400">
                              {item.tag}
                            </p>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-4 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`hidden md:block ${
                        isRight
                          ? "md:col-start-1 md:row-start-1"
                          : "md:col-start-2"
                      }`}
                    >
                      <div
                        className={`flex h-full min-h-[180px] items-center ${
                          isRight ? "justify-end pr-16" : "justify-start pl-16"
                        }`}
                      >
                        <span className="text-7xl font-black tracking-tighter text-slate-100 lg:text-9xl">
                          {item.number}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="bg-[#071329] px-6 py-24 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                What Guides Us
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Our Journey Is Guided By
                <span className="text-cyan-300"> Purpose.</span>
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-slate-300">
                The way we think, design, and build is shaped by principles
                that keep business needs and people at the center of innovation.
              </p>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-3 font-semibold text-cyan-300 transition hover:gap-5"
              >
                Discover Who We Are
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition hover:border-cyan-300/40 hover:bg-white/[0.09]"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon size={25} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-cyan-300">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY FOCUS */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
              What We Explore
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              Building Across the
              <span className="text-violet-600"> Digital Landscape.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We bring together modern technologies and creative thinking to
              explore solutions for evolving business needs.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white transition group-hover:scale-110">
                  {index === 0 && <BrainCircuit size={23} />}
                  {index === 1 && <Code2 size={23} />}
                  {index === 2 && <Layers3 size={23} />}
                  {index === 3 && <Workflow size={23} />}
                  {index === 4 && <Globe2 size={23} />}
                  {index === 5 && <Compass size={23} />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800">{area}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore possibilities
                  </p>
                </div>
                <ArrowUpRight
                  size={19}
                  className="text-slate-400 transition group-hover:text-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-200">
            <Rocket size={31} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            The Next Chapter
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            The Future Is Not Just
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Something We Imagine.
            </span>
            <span className="block">It's Something We Build.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We believe meaningful innovation begins with collaboration. Let's
            explore how technology can help move your business forward.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start a Conversation
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
