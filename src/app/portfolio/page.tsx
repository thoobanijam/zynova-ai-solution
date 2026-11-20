
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  BrainCircuit,
  ShoppingBag,
  Hotel,
  Car,
  Globe,
  Sparkles,
  Layers,
  Rocket,
  CheckCircle2,
  Monitor,
  Database,
  Workflow,
} from "lucide-react";

const projects = [
  {
    name: "SpiceJet Flight Booking Platform",
    category: "Travel & Aviation",
    description:
      "A modern airline booking experience designed to simplify flight discovery, destination selection, booking workflows, and customer interactions. The platform focuses on a responsive interface and streamlined travel search experience.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    icon: Globe,
    color: "bg-orange-50 text-orange-600",
    number: "01",
    tags: ["React", "Node.js", "Express", "Neon DB"],
    link: "https://spicejetreact.vercel.app",
  },
  {
    name: "JioMart E-Commerce Application",
    category: "Retail & E-Commerce",
    description:
      "A retail shopping application concept built around product discovery, organized categories, cart experiences, and smooth shopping interactions. Designed to provide customers with a convenient digital shopping journey.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
    icon: ShoppingBag,
    color: "bg-green-50 text-green-600",
    number: "02",
    tags: ["Flutter", "Dart", "Firebase", "Mobile UI"],
    link: "https://github.com/thoobanijam/jiomartapp",
  },
  {
    name: "BookMyStay Hotel Booking",
    category: "Hospitality & Travel",
    description:
      "A hotel booking platform concept designed to make accommodation discovery easier through intuitive search, hotel details, booking interfaces, and an organized travel experience for guests.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    icon: Hotel,
    color: "bg-blue-50 text-blue-600",
    number: "03",
    tags: ["Flutter", "Dart", "Firebase", "Hotel Booking"],
    link: "https://hotelbooking-app-3o78.onrender.com",
  },
  {
    name: "Ola Ride Booking Application",
    category: "Mobility & Transportation",
    description:
      "A ride-booking application interface concept focused on convenient transportation experiences, simplified booking flows, mobile usability, and essential ride management interactions.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    icon: Car,
    color: "bg-purple-50 text-purple-600",
    number: "04",
    tags: ["Flutter", "Dart", "Mobile Development", "API"],
    link: "https://github.com/thoobanijam/olaapp",
  },
  {
    name: "AI Business Intelligence Dashboard",
    category: "AI & Analytics",
    description:
      "A modern analytics dashboard concept that brings business data, visual reporting, key performance indicators, and intelligent insights together to help teams understand information and make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    icon: BrainCircuit,
    color: "bg-indigo-50 text-indigo-600",
    number: "05",
    tags: ["Next.js", "TypeScript", "AI", "Data Visualization"],
    link: "/contact",
  },
  {
    name: "Modern Business Portfolio",
    category: "Web Design & Development",
    description:
      "A professional business website experience featuring responsive layouts, structured content, modern visual design, project presentation, and optimized navigation for businesses looking to strengthen their digital presence.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    icon: Monitor,
    color: "bg-cyan-50 text-cyan-600",
    number: "06",
    tags: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
    link: "/contact",
  },
];

const projectStats = [
  {
    value: "Web",
    label: "Digital Platforms",
    icon: Globe,
  },
  {
    value: "Mobile",
    label: "Application Experiences",
    icon: Smartphone,
  },
  {
    value: "AI",
    label: "Intelligent Solutions",
    icon: BrainCircuit,
  },
  {
    value: "Cloud",
    label: "Connected Systems",
    icon: Layers,
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Building digital products around unique business requirements, functionality, and user expectations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    description:
      "Creating mobile applications with intuitive navigation, responsive interfaces, and practical functionality.",
  },
  {
    icon: Database,
    title: "Connected Data",
    description:
      "Developing applications with structured data, backend services, and integrated information systems.",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description:
      "Connecting processes and introducing automation to make digital operations more efficient.",
  },
];

const stages = [
  {
    number: "01",
    title: "Project Discovery",
    description:
      "Understanding the project objectives, target audience, business requirements, and technical challenges.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Creating user experiences, defining architecture, and planning the development approach.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building the solution, implementing functionality, integrating systems, and testing features.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Preparing the application for launch and supporting continuous improvements after delivery.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6 py-24 sm:px-10 lg:py-32">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles size={17} />
              Ideas. Innovation. Implementation.
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Our Work.
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Your Inspiration.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore a collection of digital experiences, software
              applications, web platforms, and technology projects that
              demonstrate how ideas can become meaningful digital products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Our Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Start Your Project
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-blue-100 pt-8 sm:grid-cols-4">
              {projectStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label}>
                    <Icon size={22} className="mb-3 text-blue-600" />
                    <h3 className="text-lg font-extrabold text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-blue-200 to-cyan-200 blur-2xl opacity-70" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl shadow-blue-100">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                alt="Digital technology project analytics"
                className="h-[350px] w-full rounded-[25px] object-cover sm:h-[440px]"
              />

              <div className="absolute bottom-8 left-7 right-7 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                    <Rocket size={26} />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-gray-900">
                      Built With Purpose
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Technology designed for real-world experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Behind Every Project
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
              Ideas Become Experiences.
              <span className="text-blue-600"> Experiences Become Impact.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Every digital product begins with an idea and a challenge.
              Our portfolio reflects a variety of application concepts,
              development projects, user interfaces, and digital experiences
              built around solving problems and exploring new possibilities.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              From web platforms and mobile applications to data-driven
              dashboards and connected systems, we explore how technology,
              creativity, and practical development can work together to create
              products people can use.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Each project represents a journey of design, development,
              experimentation, and learning — bringing digital ideas closer
              to real-world applications.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
            >
              Discover Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                alt="Creative team collaborating on digital projects"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-sm font-bold text-cyan-300">
                  Creative Collaboration
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Innovation Through Collaboration
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section
        id="projects"
        className="bg-gradient-to-b from-blue-50/60 via-white to-gray-50 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Selected Projects
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                Explore Our Digital
                <span className="text-blue-600"> Creations</span>
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-gray-600">
                Discover projects across web development, mobile technology,
                travel, retail, analytics, and digital product design.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-gray-600 shadow-sm">
              <Layers size={17} className="text-blue-600" />
              Featured Portfolio
            </div>
          </div>

          {/* Projects */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
                >
                  <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/10 to-transparent" />

                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-blue-700 backdrop-blur-md">
                      {project.category}
                    </div>

                    <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg">
                      <Icon size={27} />
                    </div>

                    <span className="absolute bottom-6 right-6 text-5xl font-black text-white/60">
                      {project.number}
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-extrabold text-gray-900 transition group-hover:text-blue-600 sm:text-2xl">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-gray-100 pt-6">
                      <a
                        href={project.link}
                        target={project.link.startsWith("http") ? "_blank" : undefined}
                        rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-3 font-bold text-blue-600 transition-all group-hover:gap-5"
                      >
                        View Project
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
                alt="Developers working on software and digital products"
                className="h-[430px] w-full rounded-[30px] object-cover shadow-xl"
              />

              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-blue-600 p-6 text-white shadow-xl sm:-left-6">
                <Code2 size={28} />
                <p className="mt-3 text-sm font-bold">Ideas to Applications</p>
              </div>
            </div>

            <div className="pt-6 lg:pt-0">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Capabilities
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                More Than Projects.
                <span className="text-blue-600"> We Build Possibilities.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Our work extends beyond individual applications. We focus on
                building digital foundations that help businesses improve
                operations, connect their systems, engage users, and create
                new services.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We bring design, development, data, automation, and
                technology integration together to create digital experiences
                that support real business needs.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div key={capability.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {capability.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT JOURNEY */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Project Journey
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
              From Concept to
              <span className="text-blue-600"> Digital Reality</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A structured development process helps us turn ideas into
              thoughtfully designed, functional, and reliable digital products.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-blue-100">
                    {stage.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    {index === 0 && <Sparkles size={23} />}
                    {index === 1 && <Layers size={23} />}
                    {index === 2 && <Code2 size={23} />}
                    {index === 3 && <Rocket size={23} />}
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-gray-900">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {stage.description}
                </p>

                {index !== stages.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden text-blue-400 lg:block">
                    <ArrowRight size={22} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] border border-blue-100 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
                alt="Modern computer technology and hardware"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-transparent" />
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 px-8 py-14 sm:px-12">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Technology in Action
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                The Right Tools.
                <span className="text-blue-600"> The Right Experience.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We select technologies based on the needs of each project,
                focusing on maintainability, performance, scalability,
                functionality, and user experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Flutter",
                  "Node.js",
                  "Firebase",
                  "Cloud",
                  "AI",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href="/technologies"
                className="mt-8 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
              >
                Explore Our Tech Stack
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <Rocket size={30} />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Your Next Project Could Be Our Next Success Story
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-50">
              Have an idea worth building? Let's collaborate to design,
              develop, and launch a digital experience that brings your vision
              to life.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Let's Build Together
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
