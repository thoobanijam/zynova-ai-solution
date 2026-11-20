
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  Users,
  Sparkles,
  Target,
  Workflow,
  Globe2,
  ShieldCheck,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

const teamMembers = [
  {
    name: "AI & Innovation",
    role: "Artificial Intelligence",
    description:
      "Exploring intelligent technologies, machine learning concepts, and AI-powered solutions for modern business challenges.",
    initials: "AI",
    gradient: "from-blue-500 to-cyan-400",
    icon: BrainCircuit,
    number: "01",
  },
  {
    name: "Software Engineering",
    role: "Custom Development",
    description:
      "Building scalable applications, reliable software experiences, and technology solutions designed around business needs.",
    initials: "SE",
    gradient: "from-violet-500 to-purple-400",
    icon: Code2,
    number: "02",
  },
  {
    name: "Digital Experience",
    role: "Web & Mobile Solutions",
    description:
      "Creating intuitive digital interfaces and responsive applications that connect businesses with their customers.",
    initials: "DX",
    gradient: "from-orange-400 to-pink-400",
    icon: Sparkles,
    number: "03",
  },
  {
    name: "Automation",
    role: "Intelligent Workflows",
    description:
      "Exploring smarter processes, workflow automation, and practical ways to reduce repetitive business tasks.",
    initials: "AU",
    gradient: "from-emerald-500 to-teal-400",
    icon: Workflow,
    number: "04",
  },
  {
    name: "Cloud & Infrastructure",
    role: "Modern Technology",
    description:
      "Working with modern cloud concepts, deployment practices, and infrastructure approaches that support growth.",
    initials: "CL",
    gradient: "from-sky-500 to-indigo-400",
    icon: Globe2,
    number: "05",
  },
  {
    name: "Quality & Strategy",
    role: "Digital Transformation",
    description:
      "Connecting technology choices with business objectives, quality principles, and long-term digital direction.",
    initials: "QS",
    gradient: "from-rose-500 to-orange-400",
    icon: Target,
    number: "06",
  },
];

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great ideas grow through open communication, shared thinking, and teamwork.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We encourage continuous learning and exploration of emerging technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    description:
      "We value thoughtful decisions, dependable solutions, and responsible innovation.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "We keep real business needs and meaningful user experiences at the center.",
  },
];

const capabilities = [
  "Artificial Intelligence",
  "Software Development",
  "UI/UX Design",
  "Cloud Technologies",
  "Automation",
  "Digital Strategy",
];

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcff] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f1f6ff] px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[100px]" />
        <div className="absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-violet-200/40 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Users size={16} />
              People Behind Innovation
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Great Ideas.
              <span className="block text-blue-600">Shared Vision.</span>
              <span className="block">Smarter Future.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Discover the expertise, creativity, and collaborative mindset
              that shape the ZYNOVA AI Solutions approach to digital innovation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#our-team"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Our Expertise
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-blue-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">AI</p>
                <p className="mt-1 text-sm text-slate-500">Innovation Focus</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Digital</p>
                <p className="mt-1 text-sm text-slate-500">Engineering</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">People</p>
                <p className="mt-1 text-sm text-slate-500">First Approach</p>
              </div>
            </div>
          </div>

          {/* ABSTRACT TEAM ILLUSTRATION */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-200/60 to-violet-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-7 shadow-[0_25px_80px_rgba(59,130,246,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    ZYNOVA AI SOLUTIONS
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    A connected world of ideas
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="relative my-12 flex h-64 items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-dashed border-blue-200" />
                <div className="absolute h-48 w-48 rounded-full border border-violet-200" />
                <div className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-xl shadow-blue-200" />

                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                  <BrainCircuit size={48} strokeWidth={1.5} />
                </div>

                <div className="absolute left-4 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 shadow-lg">
                  <Code2 size={25} />
                </div>
                <div className="absolute right-4 top-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 shadow-lg">
                  <Lightbulb size={25} />
                </div>
                <div className="absolute bottom-3 left-14 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-lg">
                  <Users size={25} />
                </div>
                <div className="absolute bottom-3 right-14 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-lg">
                  <Workflow size={25} />
                </div>
              </div>

              <div className="rounded-2xl bg-[#f5f8ff] p-5">
                <p className="text-sm font-bold text-slate-800">
                  One shared direction
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Combining ideas, expertise, and technology to explore better
                  digital possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
              Our Philosophy
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Innovation Is a
              <span className="block text-violet-600">
                Collaborative Journey.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              At ZYNOVA AI Solutions, we believe meaningful technology is
              created through a combination of curiosity, technical thinking,
              and a clear understanding of business needs.
            </p>
            <p>
              Our team page represents the areas of expertise and working
              principles that support our vision. We believe different
              perspectives and skills can come together to create better
              digital outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM EXPERTISE CARDS */}
      <section
        id="our-team"
        className="bg-[#f3f6fc] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Areas of Expertise
              </span>
              <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
                The Skills That
                <span className="text-blue-600"> Move Ideas Forward.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore the key disciplines and capabilities that inform our
                approach to building modern digital solutions.
              </p>
            </div>

            <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 md:flex">
              <Users size={35} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;

              return (
                <article
                  key={member.number}
                  className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    index % 3 === 1 ? "lg:translate-y-8" : ""
                  }`}
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-slate-50 transition duration-500 group-hover:scale-150" />

                  <div className="relative flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-white shadow-lg`}
                    >
                      <Icon size={30} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {member.number}
                    </span>
                  </div>

                  <div className="relative mt-9">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      {member.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-4 min-h-[105px] text-sm leading-7 text-slate-500">
                      {member.description}
                    </p>
                  </div>

                  <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-slate-700">
                      Explore Expertise
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
              What Brings Us Together
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              More Than Technology.
              <span className="block text-violet-600">A Shared Mindset.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our principles shape how we approach challenges, work together,
              and create meaningful digital experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-violet-200 hover:shadow-lg"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="bg-[#eef4ff] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Technology Landscape
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Knowledge That Connects Ideas to Action.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-8 py-16 text-center text-white shadow-2xl shadow-blue-200 sm:px-16 sm:py-20">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <MessageCircle size={30} />
            </div>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Let's Create Something Meaningful Together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Have an idea, a business challenge, or a digital project in mind?
              Let's start a conversation about what technology can make possible.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Connect With ZYNOVA
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
