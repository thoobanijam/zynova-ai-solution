
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  Workflow,
  Database,
  Layers3,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const expertiseAreas = [
  {
    number: "01",
    title: "Artificial Intelligence",
    subtitle: "Intelligence that creates new possibilities.",
    description:
      "Artificial intelligence is transforming how organizations understand information, interact with customers, and make decisions. We explore intelligent solutions that help businesses improve productivity, automate complex tasks, and create more personalized digital experiences.",
    details: [
      "AI-powered applications",
      "Intelligent assistants and chatbots",
      "Machine learning integration",
      "AI workflow enhancement",
    ],
    icon: BrainCircuit,
    color: "blue",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    title: "Custom Software Development",
    subtitle: "Software designed around your business.",
    description:
      "Every business has unique processes, requirements, and challenges. Custom software development allows organizations to create digital tools that match their workflows rather than relying entirely on generic solutions. Our focus is on scalable architecture, maintainable code, and practical functionality.",
    details: [
      "Business applications",
      "Web-based management systems",
     "API development and integration",
     "Scalable software architecture",
    ],
    icon: Code2,
    color: "violet",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    number: "03",
    title: "Web & Mobile Development",
    subtitle: "Digital experiences built for people.",
    description:
      "The quality of a digital experience can shape how customers interact with a business. We focus on responsive websites, modern web applications, and mobile-friendly experiences that combine attractive interfaces with intuitive navigation, accessibility, and reliable performance.",
    details: [
      "Modern website development",
      "Responsive user interfaces",
      "Web application development",
     "Mobile application experiences",
    ],
    icon: Smartphone,
    color: "cyan",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    number: "04",
    title: "Intelligent Automation",
    subtitle: "Less repetition. More meaningful work.",
    description:
      "Automation helps businesses reduce repetitive activities and simplify operational processes. By connecting applications, data, and workflows, organizations can create more consistent operations and spend more time on tasks that require creativity, collaboration, and decision-making.",
    details: [
      "Workflow automation",
      "Business process optimization",
     "System integrations",
     "Task and notification automation",
    ],
    icon: Workflow,
    color: "emerald",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    subtitle: "Modern infrastructure for continuous growth.",
    description:
      "Cloud technologies and DevOps practices support flexible infrastructure, efficient development, and dependable software delivery. We explore deployment workflows, cloud platforms, version control, and infrastructure practices that help applications evolve and remain manageable.",
    details: [
      "Cloud deployment strategies",
      "CI/CD pipelines",
     "Containerization concepts",
     "Application monitoring",
    ],
    icon: Cloud,
    color: "orange",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    number: "06",
    title: "Data & Digital Transformation",
    subtitle: "Turning information into opportunity.",
    description:
      "Data can help organizations understand performance, identify trends, and make informed decisions. Digital transformation brings technology, processes, and people together to improve how businesses operate, deliver services, and adapt to changing market expectations.",
    details: [
      "Data management solutions",
     "Business intelligence concepts",
     "Digital process transformation",
     "Technology strategy",
    ],
    icon: Database,
    color: "pink",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the business context, user needs, challenges, and objectives before considering the technology.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape practical solutions through thoughtful architecture, user experience planning, and technology selection.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We transform ideas into digital products through structured development, integration, and iterative implementation.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We believe technology should continue evolving through feedback, testing, optimization, and new opportunities.",
  },
];

const capabilities = [
  "Artificial Intelligence",
  "React & Next.js",
  "TypeScript",
  "Mobile Applications",
  "API Integration",
  "Cloud Computing",
  "DevOps",
  "Database Systems",
  "Automation",
  "UI/UX",
  "Data Analytics",
  "Software Architecture",
];

export default function ExpertisePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8fc] px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="absolute -right-40 -top-32 h-[550px] w-[550px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-violet-200/40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles size={16} />
                Technology & Innovation
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Expertise That
                <span className="block text-blue-600">Transforms Ideas.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                We bring together technology, creative thinking, and engineering
                principles to explore smarter digital solutions. Our expertise
                spans AI, software development, cloud technologies, automation,
                and modern digital experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#expertise-areas"
                  className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Our Expertise
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                >
                  Discuss a Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* HERO GRAPHIC */}
            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(30,64,175,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Technology Ecosystem
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Connected Expertise
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Layers3 size={25} />
                  </div>
                </div>

                <div className="relative my-10 flex h-[300px] items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full border border-dashed border-blue-200" />
                  <div className="absolute h-48 w-48 rounded-full border border-violet-200" />
                  <div className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-xl shadow-blue-200" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                    <BrainCircuit size={48} />
                  </div>

                  <div className="absolute left-5 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-lg">
                    <Code2 size={26} />
                  </div>

                  <div className="absolute right-5 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-lg">
                    <Cloud size={26} />
                  </div>

                  <div className="absolute bottom-8 left-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 shadow-lg">
                    <Workflow size={26} />
                  </div>

                  <div className="absolute bottom-8 right-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-lg">
                    <Database size={26} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
                  <div>
                    <BrainCircuit className="mx-auto text-blue-600" size={20} />
                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      AI
                    </p>
                  </div>
                  <div>
                    <Code2 className="mx-auto text-violet-600" size={20} />
                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      Engineering
                    </p>
                  </div>
                  <div>
                    <Workflow className="mx-auto text-cyan-600" size={20} />
                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      Automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-slate-200 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Our technology focus
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold text-slate-500">
              <span>Artificial Intelligence</span>
              <span>Software Engineering</span>
              <span>Cloud & DevOps</span>
              <span>Automation</span>
              <span>Digital Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
              Our Approach to Technology
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              More Than Code.
              <span className="block text-violet-600">
                Solutions With Purpose.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Technology is most valuable when it solves real problems. At
              ZYNOVA AI Solutions, our expertise is shaped by the understanding
              that successful digital products require more than technical
              implementation. They require clear objectives, thoughtful design,
              reliable architecture, and an understanding of the people who use
              them.
            </p>
            <p>
              We explore modern technologies and development practices to help
              businesses simplify operations, improve customer experiences,
              connect systems, and build a foundation for future growth.
              From intelligent applications to cloud-enabled platforms,
              our approach focuses on usefulness, flexibility, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE AREAS */}
      <section
        id="expertise-areas"
        className="bg-[#f8fafc] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              What We Do
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Our Expertise,
              <span className="text-blue-600"> In Detail.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore the technology disciplines that shape our solutions and
              support our vision of a smarter digital future.
            </p>
          </div>

          <div className="space-y-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 hover:border-blue-200 hover:shadow-xl lg:grid-cols-[0.35fr_1.65fr]"
                >
                  {/* LEFT PANEL */}
                  <div
                    className={`relative flex min-h-[240px] flex-col justify-between overflow-hidden ${area.bg} p-8 lg:min-h-full`}
                  >
                    <span className="relative z-10 text-sm font-bold tracking-[0.2em] text-slate-400">
                      EXPERTISE / {area.number}
                    </span>

                    <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-black/5" />
                    <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full border border-black/5" />

                    <div
                      className={`relative z-10 mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg ${area.iconColor} transition duration-300 group-hover:scale-110`}
                    >
                      <Icon size={38} strokeWidth={1.5} />
                    </div>

                    <span className="relative z-10 mt-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Zynova Technology
                    </span>
                  </div>

                  {/* RIGHT PANEL */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {area.number}
                      </span>
                      <span className="text-sm text-slate-400">
                        Technology & Innovation
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-lg font-medium text-slate-500">
                      {area.subtitle}
                    </p>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                      {area.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {area.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-blue-600"
                          />
                          <span className="text-sm font-medium text-slate-700">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                      <span className="text-sm font-semibold text-slate-500">
                        Explore possibilities
                      </span>
                      <ArrowUpRight
                        size={21}
                        className="text-blue-600 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

  {/* CAPABILITY MATRIX */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Layers3 size={29} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Technology Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                A Connected
                <span className="block text-violet-600"> Technology Stack.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Modern solutions often require multiple technologies working
                together. Our technology landscape spans front-end experiences,
                application logic, data systems, integrations, and deployment
                infrastructure.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">
                We focus on choosing the right technologies for each challenge
                instead of forcing every project into the same technical
                approach.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-violet-200 hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white">
                <p className="text-sm font-semibold text-blue-100">
                  Our Technology Philosophy
                </p>
                <p className="mt-2 text-lg font-bold leading-7">
                  Use technology intentionally. Build for real needs. Keep
                  improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-[#f1f5ff] px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              How We Approach Solutions
            </p>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              From Challenge to
              <span className="text-blue-600"> Possibility.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We follow a purpose-driven approach that keeps every stage
              connected to the bigger picture.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className="relative rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-blue-100">
                    {principle.number}
                  </span>
                  {index !== principles.length - 1 && (
                    <ArrowRight
                      size={19}
                      className="hidden text-blue-300 lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 text-white sm:px-14 sm:py-20">
          <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                <Lightbulb size={16} />
                Let's Innovate Together
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Your Challenge.
                <span className="block text-blue-300">Our Technology.</span>
                A Better Possibility.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you are exploring AI, developing a new application,
                improving business processes, or planning a digital transformation,
                let's discover what we can build together.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Start Your Project
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
