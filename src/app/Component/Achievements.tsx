
"use client";

import Link from "next/link";

import {
  Award,
  BriefcaseBusiness,
  Code2,
  Users,
  TrendingUp,
  ShieldCheck,
  BrainCircuit,
  Cloud,
  Rocket,
  Lightbulb,
  Target,
  Handshake,
  CheckCircle2,
  Globe,
  Cpu,
  Workflow,
  ArrowRight,
  Sparkles,
} from "lucide-react";
const achievements = [
  {
    icon: BriefcaseBusiness,
    number: "01",
    title: "Business Growth",
    description:
      "We help businesses improve operations, reach new customers, and create opportunities through intelligent digital solutions.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Modern Development",
    description:
      "We develop responsive websites, scalable applications, and custom software designed around real business requirements.",
  },
  {
    icon: Users,
    number: "03",
    title: "Client Focused",
    description:
      "We believe every business is unique. Our approach starts with understanding your goals and delivering solutions that fit.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Digital Innovation",
    description:
      "We bring together modern technologies, creative thinking, and practical strategies to support digital transformation.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence in Quality",
    description:
      "We focus on quality at every stage, from planning and design to development, testing, and delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    description:
      "We value secure development practices, responsible data handling, transparency, and dependable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We explore emerging technologies and creative approaches to solve complex business challenges.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We aim to build lasting relationships through collaboration, communication, and continuous improvement.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI-powered applications, intelligent assistants, machine learning solutions, and business intelligence.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Modern websites, web applications, mobile solutions, and custom business platforms.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description:
      "Automated workflows, business process optimization, and intelligent system integrations.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, deployment pipelines, application hosting, and scalable environments.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernizing business operations with connected systems and technology-driven processes.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Globe,
    title: "Global Digital Solutions",
    description:
      "Flexible technology solutions designed to support businesses across industries and markets.",
    color: "bg-teal-50 text-teal-600",
  },
];

const benefits = [
  "Solutions designed around your business goals",
  "Responsive and user-friendly digital experiences",
  "Modern, scalable technology architecture",
  "Focus on security and reliable performance",
  "Transparent communication and collaboration",
  "Continuous improvement and technical support",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-white px-6 py-24 sm:py-28"
    >
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={17} />
            Discover ZYNOVA AI Solutions
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Creating Technology That
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Moves Businesses Forward
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
            At ZYNOVA AI Solutions, we combine artificial intelligence,
            software engineering, and digital innovation to help businesses
            work smarter, operate efficiently, and embrace new opportunities.
            Our focus is on building practical technology that creates
            meaningful value.
          </p>
        </div>

        {/* Company introduction */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your Partner in the
              <span className="text-blue-600"> Digital Future</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              ZYNOVA AI Solutions is focused on delivering modern technology
              services that help organizations adapt to an increasingly
              connected world. We bring together creative ideas, technical
              expertise, and a business-first mindset to develop digital
              products and intelligent systems.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are starting a new business, improving an existing
              operation, or exploring artificial intelligence, we work to
              transform your ideas into practical, scalable solutions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
                <Target className="mb-3 text-blue-600" size={27} />
                <h4 className="font-bold text-gray-900">Our Mission</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Make advanced technology practical and accessible for
                  businesses.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-5">
                <Rocket className="mb-3 text-cyan-600" size={27} />
                <h4 className="font-bold text-gray-900">Our Vision</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Build a smarter future through innovation and intelligent
                  digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Technology illustration */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-cyan-50 to-purple-100 blur-xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl shadow-blue-100/50 sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    ZYNOVA TECHNOLOGY
                  </p>
                  <h4 className="mt-2 text-2xl font-bold text-gray-900">
                    Innovation in Action
                  </h4>
                </div>
                <div className="rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-200">
                  <BrainCircuit size={30} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-blue-100 bg-white p-5">
                  <Code2 className="mb-4 text-blue-600" size={28} />
                  <h5 className="font-bold text-gray-900">Development</h5>
                  <p className="mt-2 text-sm text-gray-500">
                    Modern digital products
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-white p-5">
                  <Workflow className="mb-4 text-cyan-600" size={28} />
                  <h5 className="font-bold text-gray-900">Automation</h5>
                  <p className="mt-2 text-sm text-gray-500">
                    Smarter workflows
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-white p-5">
                  <Cloud className="mb-4 text-purple-600" size={28} />
                  <h5 className="font-bold text-gray-900">Cloud Systems</h5>
                  <p className="mt-2 text-sm text-gray-500">
                    Connected infrastructure
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-white p-5">
                  <Cpu className="mb-4 text-indigo-600" size={28} />
                  <h5 className="font-bold text-gray-900">AI Solutions</h5>
                  <p className="mt-2 text-sm text-gray-500">
                    Intelligent technology
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Sparkles size={24} />
                  <h5 className="font-bold">Think. Innovate. Transform.</h5>
                </div>
                <p className="mt-3 text-sm leading-6 text-blue-50">
                  Turning business challenges into opportunities through
                  intelligent technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company focus cards */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What Drives Us
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Strategic Focus
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              We focus on the principles that help create useful, reliable,
              and forward-thinking digital solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-100 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={27} />
                    </div>
                    <span className="text-3xl font-extrabold text-blue-100">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services and capabilities */}
        <div className="mb-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Capabilities
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Technology Services for Modern Businesses
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              From intelligent applications to connected cloud systems, we
              bring the technologies and capabilities businesses need to
              move forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                    <Icon size={28} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3">
                    Explore possibilities
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company values */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What Matters to Us
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              The principles behind every idea, project, partnership, and
              technology solution we create.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/50 p-7 transition-all duration-300 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={25} />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why work with us */}
        <div className="mb-24 grid items-center gap-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/70 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The ZYNOVA Advantage
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Built Around Your
              <span className="text-blue-600"> Business Success</span>
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              Choosing the right technology partner is an important step in
              your digital journey. We focus on understanding your business,
              identifying opportunities, and developing solutions that can
              evolve with your needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white bg-white/90 p-4 shadow-sm"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-cyan-600"
                />
                <p className="text-sm font-medium leading-6 text-gray-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-14 text-center shadow-xl shadow-blue-200/60 sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <Rocket size={30} />
            </div>

            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Let's Build Something Intelligent
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
              Have an idea, a business challenge, or a vision for your next
              digital product? Let's explore how AI, software development,
              and automation can help bring it to life.
            </p>

          <Link
  href="/contact"
  className="mt-8 inline-flex min-h-[56px] min-w-[240px] items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
>
  Start a Conversation
  <ArrowRight size={20} className="shrink-0 text-black" />
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
