
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  Workflow,
  Database,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  BarChart3,
  Rocket,
  Layers,
  Bot,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI & Intelligent Solutions",
    description:
      "We help businesses unlock the power of artificial intelligence through intelligent applications, AI-powered assistants, automation, and data-driven decision-making.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    icon: BrainCircuit,
    color: "from-blue-600 to-cyan-500",
    features: [
      "AI-powered applications",
      "Intelligent chatbots",
      "AI workflow automation",
      "Machine learning solutions",
    ],
    href: "/ai-solutions",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "We create modern, responsive, and high-performance websites that help businesses establish a strong digital presence and deliver meaningful online experiences.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    icon: Code2,
    color: "from-indigo-600 to-blue-500",
    features: [
      "Business websites",
      "Web applications",
      "E-commerce platforms",
     "Custom dashboards",
    ],
    href: "/web-development",
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "We design and develop mobile applications that combine intuitive interfaces, reliable functionality, and seamless performance across modern mobile devices.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=900&q=85",
    icon: Smartphone,
    color: "from-violet-600 to-purple-500",
    features: [
      "Android applications",
      "iOS applications",
      "Flutter development",
      "Mobile API integration",
    ],
    href: "/mobile-apps",
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "We support businesses with scalable cloud infrastructure, automated deployment pipelines, and reliable environments designed for modern software delivery.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    icon: Cloud,
    color: "from-cyan-600 to-sky-500",
    features: [
      "Cloud infrastructure",
      "CI/CD pipelines",
      "Application deployment",
      "Infrastructure optimization",
    ],
    href: "/cloud-solutions",
  },
  {
    number: "05",
    title: "Business Automation",
    description:
      "We simplify repetitive business processes through smart automation, integrated systems, and digital workflows that reduce manual work and improve productivity.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=85",
    icon: Workflow,
    color: "from-emerald-600 to-teal-500",
    features: [
      "Workflow automation",
      "Business process optimization",
      "System integration",
     "Automated reporting",
    ],
    href: "/automation",
  },
  {
    number: "06",
    title: "Data & Analytics",
    description:
      "We transform business data into useful insights with analytics solutions, reporting systems, and interactive dashboards that support smarter decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    icon: BarChart3,
    color: "from-orange-500 to-amber-500",
    features: [
      "Business intelligence",
      "Data visualization",
      "Custom dashboards",
     "Performance reporting",
    ],
    href: "/data-analytics",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, challenges, goals, and opportunities before defining the right digital solution.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We create a clear roadmap, select the right technologies, and plan a solution aligned with your objectives.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our team transforms ideas into functional digital products through design, development, testing, and collaboration.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We help deploy your solution, improve performance, and support your business as it continues to grow.",
    icon: Rocket,
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "Intelligent Technology",
    description:
      "AI-powered tools and modern technologies that help businesses automate tasks and work smarter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    description:
      "Thoughtful development practices that prioritize reliability, data protection, and system security.",
  },
  {
    icon: Globe,
    title: "Connected Experiences",
    description:
      "Digital platforms designed to connect users, services, business systems, and information.",
  },
  {
    icon: Zap,
    title: "Built for Growth",
    description:
      "Flexible and scalable solutions that can evolve alongside your business and customer needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#d0def3]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6ea0e5] via-[#071426]/95 to-[#071426]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9fbde9] via-transparent to-[#071426]/30" />
        </div>

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
              <Sparkles size={16} />
              Digital Solutions for a Smarter Future
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Technology That
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Moves Business
              </span>
              Forward.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              We combine artificial intelligence, software engineering, modern
              design, and intelligent automation to help businesses solve
              challenges, create opportunities, and build their next generation
              of digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#our-services"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
              {[
                "Business-focused solutions",
                "Modern technology",
                "Scalable development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={17} className="text-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual card */}
          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=90"
                  alt="Artificial intelligence and digital technology"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#0c2037] p-5">
                  <BrainCircuit className="mb-3 text-cyan-400" size={26} />
                  <p className="font-bold text-white">AI Innovation</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Intelligent digital systems
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0c2037] p-5">
                  <Workflow className="mb-3 text-blue-400" size={26} />
                  <p className="font-bold text-white">Automation</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Optimized business workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-10 top-16 hidden rounded-2xl border border-cyan-100/10 bg-[#10243b] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Zap className="text-cyan-400" size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Smart Technology</p>
                  <p className="text-xs text-gray-400">Designed for tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
              Turning Complex Challenges into
              <span className="text-blue-600"> Digital Opportunities</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              At Zynova AI Solutions, we believe technology should do more than
              exist. It should create meaningful impact. Our services are designed
              to help organizations modernize operations, improve customer
              experiences, and build sustainable digital capabilities.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              From the first idea to a fully deployed product, we bring together
              strategic thinking, design, development, and emerging technologies
              to deliver solutions that work in the real world.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
            >
              Discover Zynova
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100 to-cyan-100 blur-2xl opacity-70" />

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Technology team collaborating on digital solutions"
                className="h-[440px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-semibold text-cyan-300">
                  Ideas to Innovation
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Building Digital Experiences That Matter
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="our-services"
        className="bg-gradient-to-b from-gray-50 to-white px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Expertise
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
                Solutions Designed
                <span className="text-blue-600"> Around Your Needs</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Explore our range of technology services built to support
                innovation, digital transformation, and business growth.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
            >
              Request a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/70"
                >
                  {/* Card Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/10 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      SERVICE {service.number}
                    </span>

                    <div
                      className={`absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}
                    >
                      <Icon size={27} />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-gray-900 transition group-hover:text-blue-600 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[100px] text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-blue-500"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="mt-7 inline-flex items-center gap-2 border-t border-gray-100 pt-5 font-bold text-blue-600 transition-all group-hover:gap-4"
                    >
                      Explore Service
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

  {/* BUSINESS SOLUTIONS */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[36px] bg-[#071426]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team planning digital transformation"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/20 to-[#071426]/60" />
              </div>

              <div className="relative px-8 py-14 sm:px-12 sm:py-16">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Digital Transformation
                  </span>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Your Business.
                    <br />
                    <span className="text-cyan-400">Reimagined.</span>
                  </h2>

                  <p className="mt-6 leading-8 text-gray-300">
                    Every business has unique challenges. We develop customized
                    digital solutions that align with your operations, customers,
                    goals, and long-term vision instead of forcing your business
                    into a one-size-fits-all technology.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Modernize outdated business systems",
                      "Improve productivity through automation",
                      "Build new digital products",
                      "Connect tools and business platforms",
                      "Make better decisions with data",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white"
                      >
                        <CheckCircle2 className="text-cyan-400" size={18} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-bold text-white transition hover:-translate-y-1"
                  >
                    Build Your Solution
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-blue-50/50 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              Built on the Right
              <span className="text-blue-600"> Foundation</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Great digital solutions need more than code. They require a strong
              foundation of security, strategy, integration, and forward-thinking
              technology.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-3xl border border-blue-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900">
                    {capability.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              From Idea to
              <span className="text-blue-600"> Implementation</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Our collaborative process brings structure, clarity, and innovation
              to every project from the first conversation to launch.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative">
                  <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-blue-100">
                        {item.step}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {index !== process.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-blue-400 lg:block">
                      <ArrowRight size={23} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

  {/* CTA */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
              <Rocket size={30} />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Ready to Build Something Extraordinary?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Whether you have an idea, a business challenge, or a digital
              transformation goal, our team is ready to help turn your vision
              into a practical technology solution.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}