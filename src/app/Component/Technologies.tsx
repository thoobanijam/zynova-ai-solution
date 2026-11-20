
"use client";
import Link from "next/link";
import {
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Terminal,
  Globe,
  ShieldCheck,
  Layers,
  Workflow,
  Server,
  Sparkles,
  ArrowRight,
  Cpu,
  Zap,
  
} from "lucide-react";

const technologyCategories = [
  {
    title: "Frontend Development",
    subtitle: "Beautiful and responsive user experiences",
    icon: Code2,
    color: "bg-blue-50 text-blue-600",
    technologies: [
      { name: "React", description: "Interactive user interfaces", icon: "⚛️" },
      { name: "Next.js", description: "Modern full-stack React framework", icon: "▲" },
      { name: "TypeScript", description: "Reliable typed JavaScript", icon: "TS" },
      { name: "Tailwind CSS", description: "Utility-first styling", icon: "🌊" },
      { name: "HTML5", description: "Modern web structure", icon: "🌐" },
      { name: "JavaScript", description: "Dynamic web experiences", icon: "JS" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Powerful systems and application logic",
    icon: Server,
    color: "bg-cyan-50 text-cyan-600",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime environment", icon: "🟢" },
      { name: "Express.js", description: "Lightweight backend framework", icon: "🚀" },
      { name: "Python", description: "Versatile development language", icon: "🐍" },
      { name: "REST APIs", description: "Application communication", icon: "🔗" },
      { name: "Firebase", description: "Backend application services", icon: "🔥" },
      { name: "Prisma", description: "Modern database toolkit", icon: "◆" },
    ],
  },
  {
    title: "Database & Storage",
    subtitle: "Organized, reliable business data",
    icon: Database,
    color: "bg-purple-50 text-purple-600",
    technologies: [
      { name: "PostgreSQL", description: "Relational database management", icon: "🐘" },
      { name: "MySQL", description: "Structured database solutions", icon: "🐬" },
      { name: "MongoDB", description: "Flexible document database", icon: "🍃" },
      { name: "Neon", description: "Serverless PostgreSQL platform", icon: "⚡" },
      { name: "Google Sheets", description: "Cloud-based business data", icon: "📊" },
      { name: "Firebase", description: "Cloud-hosted application data", icon: "🔥" },
    ],
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Intelligent and automated solutions",
    icon: BrainCircuit,
    color: "bg-indigo-50 text-indigo-600",
    technologies: [
      { name: "OpenAI API", description: "AI-powered application features", icon: "🤖" },
      { name: "Machine Learning", description: "Data-driven intelligence", icon: "🧠" },
      { name: "Python AI", description: "AI and automation development", icon: "🐍" },
      { name: "AI Agents", description: "Intelligent task automation", icon: "✨" },
      { name: "Data Analytics", description: "Insights from business data", icon: "📈" },
      { name: "Chatbots", description: "Automated customer assistance", icon: "💬" },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Deployment, infrastructure and scalability",
    icon: Cloud,
    color: "bg-sky-50 text-sky-600",
    technologies: [
      { name: "AWS", description: "Cloud computing services", icon: "☁️" },
      { name: "Docker", description: "Application containerization", icon: "🐳" },
      { name: "GitHub", description: "Version control and collaboration", icon: "🐙" },
      { name: "GitHub Actions", description: "Automated CI/CD workflows", icon: "⚙️" },
      { name: "Vercel", description: "Modern web deployment", icon: "▲" },
      { name: "Linux", description: "Server and system management", icon: "🐧" },
    ],
  },
  {
    title: "Mobile & UI/UX Design",
    subtitle: "Engaging mobile and digital experiences",
    icon: Smartphone,
    color: "bg-pink-50 text-pink-600",
    technologies: [
      { name: "Flutter", description: "Cross-platform mobile development", icon: "💙" },
      { name: "Dart", description: "Modern application programming", icon: "🎯" },
      { name: "Figma", description: "Interface and experience design", icon: "🎨" },
      { name: "Responsive UI", description: "Multi-device experiences", icon: "📱" },
      { name: "Prototyping", description: "Interactive design concepts", icon: "🖌️" },
      { name: "Design Systems", description: "Consistent interface components", icon: "🧩" },
    ],
  },
];

const developmentTools = [
  { name: "VS Code", description: "Code editor" },
  { name: "Git", description: "Version control" },
  { name: "Postman", description: "API testing" },
  { name: "npm", description: "Package management" },
  { name: "Figma", description: "UI/UX design" },
  { name: "PowerShell", description: "Command-line automation" },
];

const benefits = [
  {
    icon: Layers,
    title: "Modern Architecture",
    description:
      "We use modern development approaches to build maintainable and scalable applications.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "We consider security, performance, and reliability throughout the development process.",
  },
  {
    icon: Workflow,
    title: "Connected Systems",
    description:
      "We integrate applications, APIs, databases, and automation into connected workflows.",
  },
  {
    icon: Zap,
    title: "Future Ready",
    description:
      "We choose technologies that can adapt to evolving business needs and opportunities.",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-6 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={17} />
            Our Technology Stack
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Powered by Modern
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Technology & Innovation
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            We work with modern technologies, frameworks, and development
            tools to create intelligent applications, scalable platforms,
            secure systems, and powerful digital experiences for businesses.
          </p>
        </div>

        {/* Technology categories */}
        <div className="space-y-12">
          {technologyCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8"
              >
                {/* Category heading */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${category.color}`}
                  >
                    <CategoryIcon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Technology cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gradient-to-r from-white to-blue-50/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-xl font-bold text-blue-700 shadow-sm">
                        {technology.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {technology.name}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {technology.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Development tools */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Development Environment
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Tools That Power Our Workflow
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              We use professional development tools to support collaboration,
              efficient coding, testing, design, and deployment.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {developmentTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Terminal size={23} />
                </div>

                <h4 className="font-bold text-gray-900">{tool.name}</h4>
                <p className="mt-1 text-xs text-gray-500">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology benefits */}
        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Technology Approach
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              More Than Just Technology
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              The right technology should solve problems, simplify operations,
              improve experiences, and create opportunities for growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-8 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-100/70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-100/70 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Cpu size={29} />
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Have a Technology Challenge?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Let's discuss how modern software, artificial intelligence,
              cloud technologies, and smart automation can help your business
              achieve its next goal.
            </p>

           <Link
  href="/contact"
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  Discuss Your Project
  <ArrowRight size={19} />
</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
