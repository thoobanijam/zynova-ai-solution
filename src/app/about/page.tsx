
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  Code2,
  Cloud,
  Database,
  Workflow,
  Sparkles,
  Globe2,
  Cpu,
  CheckCircle2,
  Compass,
  Layers3,
  Handshake,
  Zap,
  MonitorSmartphone,
  Building2,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore new technologies and creative approaches to develop solutions that address evolving business challenges.",
    icon: Lightbulb,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We believe in honest communication, responsible technology decisions, and building trust through our work.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We value teamwork and meaningful partnerships, keeping clients involved throughout the development journey.",
    icon: Users,
    color: "bg-violet-50 text-violet-600",
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "We prioritize understanding business requirements and creating digital experiences that serve real user needs.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
  },
  {
    number: "05",
    title: "Quality",
    description:
      "We emphasize thoughtful design, maintainable development, testing, and continuous improvement.",
    icon: CheckCircle2,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We embrace learning, adaptability, and long-term thinking to help technology evolve alongside business goals.",
    icon: Rocket,
    color: "bg-orange-50 text-orange-600",
  },
];

const capabilities = [
  {
    title: "Artificial Intelligence",
    description:
      "Explore AI-powered applications and intelligent features that support business workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Software Development",
    description:
      "Build tailored applications around specific business processes and requirements.",
    icon: Code2,
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Create responsive, accessible, and engaging digital experiences across devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Cloud Solutions",
    description:
      "Develop flexible cloud-based systems that support changing application needs.",
    icon: Cloud,
  },
  {
    title: "Data & Analytics",
    description:
      "Organize business information and create useful reporting and analytics experiences.",
    icon: Database,
  },
  {
    title: "Intelligent Automation",
    description:
      "Connect repetitive workflows and simplify everyday business operations.",
    icon: Workflow,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand Before Building",
    description:
      "We start by learning about the business, its users, challenges, and desired outcomes.",
  },
  {
    number: "02",
    title: "Design With Purpose",
    description:
      "We focus on intuitive experiences, practical functionality, and thoughtful architecture.",
  },
  {
    number: "03",
    title: "Develop With Quality",
    description:
      "We use modern development practices to create maintainable and adaptable digital products.",
  },
  {
    number: "04",
    title: "Improve Continuously",
    description:
      "We believe successful digital solutions should evolve as technology and business needs change.",
  },
];

const audiences = [
  {
    title: "Startups",
    description:
      "Technology foundations and digital products that help new ideas move toward implementation.",
    icon: Rocket,
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Practical software and automation solutions for improving everyday business operations.",
    icon: Building2,
  },
  {
    title: "Growing Enterprises",
    description:
      "Flexible application and integration approaches for evolving organizational requirements.",
    icon: Globe2,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative isolate bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 px-6 pb-24 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              About ZYNOVA AI Solutions
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Empowering Businesses Through{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Intelligent Innovation
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              We are a technology-focused brand built around the idea that
              innovation should create meaningful business value. ZYNOVA AI
              Solutions brings together artificial intelligence, modern
              software development, and digital transformation to help
              organizations explore what's possible.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                Connect With Us
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Innovation Driven
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Business Focused
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-300/40 to-violet-300/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-7 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Our Identity
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Intelligence Meets Innovation
                  </h2>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <BrainCircuit size={27} />
                </div>
              </div>

              <div className="flex justify-center py-12">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-100 shadow-inner">
                  <div className="absolute inset-4 rounded-full border border-dashed border-blue-300" />

                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/30">
                    <Sparkles size={55} />
                  </div>

                  <div className="absolute -right-3 top-7 rounded-xl bg-white p-3 text-cyan-600 shadow-lg">
                    <Cpu size={23} />
                  </div>

                  <div className="absolute -bottom-2 left-4 rounded-xl bg-white p-3 text-violet-600 shadow-lg">
                    <Database size={23} />
                  </div>

                  <div className="absolute -left-3 top-8 rounded-xl bg-white p-3 text-blue-600 shadow-lg">
                    <Cloud size={23} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "AI Innovation",
                  "Digital Solutions",
                  "Modern Software",
                  "Smart Automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center text-xs font-semibold text-slate-700 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Connecting Technology With Real Business Needs
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ZYNOVA AI Solutions is focused on creating modern digital
              solutions that help businesses adapt to an increasingly
              technology-driven world.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our approach combines creative problem-solving with modern
              development technologies. We explore how AI, automation,
              software engineering, and cloud platforms can work together to
              address practical challenges and create better digital
              experiences.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We believe good technology starts with listening. Understanding
              the people, processes, and goals behind a project helps us
              identify solutions that are useful, adaptable, and meaningful.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <BrainCircuit size={26} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Intelligent Thinking
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Exploring technology with creativity and practical purpose.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-violet-100 bg-violet-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <Code2 size={26} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Modern Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Building useful digital applications with modern technologies.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                <Workflow size={26} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Smart Processes
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Finding opportunities to simplify business workflows.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <Globe2 size={26} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Digital Growth
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supporting adaptable and future-ready business experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Inspired by the Possibilities of Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ZYNOVA AI Solutions is built around a simple idea: technology
              should help people and businesses move forward. As artificial
              intelligence and digital platforms continue to evolve, we see
              opportunities to make everyday business activities more
              connected, intelligent, and accessible.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute bottom-10 left-7 top-10 w-px bg-gradient-to-b from-blue-300 via-violet-300 to-cyan-300 sm:left-1/2" />

            {[
              {
                number: "01",
                title: "A Vision for Innovation",
                text: "Recognizing the opportunity to bring intelligent technology and practical software development together.",
              },
              {
                number: "02",
                title: "A Business-First Mindset",
                text: "Focusing on real challenges, user needs, and solutions that serve meaningful business purposes.",
              },
              {
                number: "03",
                title: "Building Digital Possibilities",
                text: "Exploring AI, automation, cloud technology, and modern applications to create useful digital experiences.",
              },
              {
                number: "04",
                title: "Looking Toward the Future",
                text: "Continuously learning and adapting as technology creates new opportunities for organizations.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`relative mb-10 flex items-start gap-6 ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {item.number}
                </div>

                <div
                  className={`flex-1 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:w-[44%] sm:flex-none ${
                    index % 2 === 0
                      ? "sm:mr-auto"
                      : "sm:ml-auto"
                  }`}
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>

                <div className="hidden sm:block sm:w-[44%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Direction
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The principles that guide our purpose, technology decisions,
              and approach to digital innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-600 p-9 text-white shadow-xl shadow-blue-500/10 sm:p-12">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Target size={33} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                  Our Mission
                </p>

                <h3 className="mt-4 text-3xl font-extrabold">
                  Creating Technology With Purpose
                </h3>

                <p className="mt-6 leading-8 text-blue-50">
                  Our mission is to explore and develop intelligent digital
                  solutions that help businesses address challenges,
                  simplify processes, improve user experiences, and embrace
                  technological opportunities.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 to-indigo-700 p-9 text-white shadow-xl shadow-violet-500/10 sm:p-12">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Eye size={33} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-violet-100">
                  Our Vision
                </p>

                <h3 className="mt-4 text-3xl font-extrabold">
                  A Smarter Digital Future
                </h3>

                <p className="mt-6 leading-8 text-violet-50">
                  Our vision is to contribute to a future where intelligent
                  technology, innovative software, and connected digital
                  experiences create new possibilities for businesses and
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Believe In
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our values shape how we approach technology, work with people,
              and develop solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.color}`}
                    >
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-slate-100">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What We Do
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Our Technology Expertise
              </h2>
            </div>

            <p className="leading-8 text-slate-600">
              We bring together different technology capabilities to help
              organizations plan, build, and improve their digital solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {capability.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Philosophy
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How We Think. How We Build.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We believe the best digital solutions come from a balance of
              understanding, creativity, engineering, and continuous
              improvement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-white bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <span className="text-4xl font-extrabold text-blue-100">
                  {principle.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Who We Support
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Technology for Every Stage of Business Growth
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different organizations need different technology approaches.
              We aim to understand those needs and identify solutions that
              support their goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div
                  key={audience.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {audience.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {audience.description}
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
            <Handshake size={32} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight sm:text-5xl">
            Let's Build a Smarter Future Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Every great digital solution begins with an idea. Tell us about
            your goals and let's explore how technology can help bring your
            vision to life.
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
