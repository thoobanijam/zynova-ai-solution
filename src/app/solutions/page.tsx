
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ShoppingCart,
  Building2,
  HeartPulse,
  GraduationCap,
  Factory,
  Truck,
  Landmark,
  BarChart3,
  Cloud,
  Workflow,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Target,
  Rocket,
  Layers,
  Globe,
  Zap,
  Database,
  MonitorSmartphone,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "AI-Powered Business Solutions",
    category: "Artificial Intelligence",
    description:
      "Transform the way your organization operates with intelligent applications, AI assistants, automated decision support, and smart business workflows. We help businesses explore practical AI opportunities and integrate intelligent technology into everyday operations.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
    icon: BrainCircuit,
    color: "bg-blue-100 text-blue-700",
    features: [
      "AI-powered business assistants",
      "Intelligent automation",
      "Predictive analytics",
      "Custom AI integrations",
    ],
  },
  {
    number: "02",
    title: "Retail & E-Commerce Solutions",
    category: "Retail Technology",
    description:
      "Create connected retail experiences with modern point-of-sale systems, inventory management, online shopping platforms, and intelligent business reporting. Our solutions help retailers improve operational visibility and customer experiences.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-700",
    features: [
      "Retail management systems",
      "Inventory and stock tracking",
      "E-commerce development",
      "Sales and reporting dashboards",
    ],
  },
  {
    number: "03",
    title: "Enterprise Digital Solutions",
    category: "Enterprise Technology",
    description:
      "Bring your business processes, information, and teams together through integrated enterprise platforms. We develop customized systems that support organizational efficiency, collaboration, reporting, and business growth.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
    color: "bg-indigo-100 text-indigo-700",
    features: [
      "Enterprise applications",
      "Business management platforms",
      "Workflow integration",
      "Custom administrative dashboards",
    ],
  },
  {
    number: "04",
    title: "Healthcare Technology Solutions",
    category: "Healthcare Innovation",
    description:
      "Support modern healthcare operations through digital platforms designed for efficient administration, information management, appointment coordination, and connected healthcare experiences.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    icon: HeartPulse,
    color: "bg-rose-100 text-rose-700",
    features: [
      "Healthcare management platforms",
      "Appointment scheduling systems",
      "Digital patient administration",
      "Healthcare data dashboards",
    ],
  },
  {
    number: "05",
    title: "Education & E-Learning Solutions",
    category: "Education Technology",
    description:
      "Make learning and educational administration more accessible with digital learning platforms, student management systems, online assessment tools, and interactive educational experiences.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-700",
    features: [
      "Learning management systems",
      "Student management platforms",
      "Online learning portals",
      "Digital assessment tools",
    ],
  },
  {
    number: "06",
    title: "Manufacturing & Industrial Solutions",
    category: "Industrial Technology",
    description:
      "Improve operational visibility and production coordination through digital industrial platforms, inventory monitoring, process automation, and business intelligence tools.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    icon: Factory,
    color: "bg-amber-100 text-amber-700",
    features: [
      "Production management platforms",
      "Inventory monitoring",
      "Process automation",
      "Operational analytics",
    ],
  },
  {
    number: "07",
    title: "Logistics & Supply Chain Solutions",
    category: "Logistics Technology",
    description:
      "Connect supply chain operations with digital tools for shipment coordination, order tracking, inventory visibility, and operational reporting. Help teams access relevant information throughout the delivery process.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    icon: Truck,
    color: "bg-cyan-100 text-cyan-700",
    features: [
      "Fleet management platforms",
      "Shipment tracking systems",
      "Supply chain dashboards",
      "Order management solutions",
    ],
  },
  {
    number: "08",
    title: "Financial & Business Management",
    category: "Financial Technology",
    description:
      "Build digital financial and administrative tools that support organized business operations, financial visibility, transaction management, and more informed business planning.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    icon: Landmark,
    color: "bg-emerald-100 text-emerald-700",
    features: [
      "Financial reporting dashboards",
      "Business administration systems",
      "Transaction management",
      "Data-driven insights",
    ],
  },
];

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Integrate intelligent capabilities into business applications and digital workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description:
      "Build flexible digital infrastructure that supports accessibility and scalability.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Organize business information with structured databases and connected systems.",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description:
      "Reduce repetitive processes through connected and automated workflows.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Business-Focused Strategy",
    description:
      "We begin by understanding your business objectives and designing technology around real operational needs.",
  },
  {
    icon: Layers,
    title: "Flexible Architecture",
    description:
      "Our solutions are designed with adaptable structures that can evolve as your organization grows.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "We consider system reliability, responsible data handling, and security throughout development.",
  },
  {
    icon: Zap,
    title: "Practical Innovation",
    description:
      "We focus on technologies that deliver useful outcomes rather than complexity for its own sake.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We explore your business environment, current challenges, target users, and desired outcomes.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the solution architecture, user experience, technology stack, and implementation roadmap.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build, integrate, and test your solution with attention to functionality, quality, and performance.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We support deployment, knowledge transfer, improvements, and future development opportunities.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6 py-24 sm:px-10 lg:py-32">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles size={17} />
              Smart Solutions. Real Business Impact.
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Solutions That
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Transform Business
              </span>
              Possibilities.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              We develop intelligent digital solutions that help businesses
              modernize operations, connect systems, improve customer
              experiences, and unlock new opportunities through technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Solutions
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-8 py-4 font-bold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50"
              >
                Talk to Our Experts
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-blue-100 pt-8 sm:grid-cols-3">
              {[
                "AI Innovation",
                "Business Automation",
                "Digital Growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  <CheckCircle2 size={17} className="shrink-0 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-200 to-cyan-200 opacity-60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl shadow-blue-100">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90"
                alt="Global digital technology network"
                className="h-[330px] w-full rounded-[25px] object-cover sm:h-[430px]"
              />

              <div className="absolute bottom-8 left-7 right-7 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Lightbulb size={27} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900">
                      Innovation Meets Purpose
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Technology designed around your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
              alt="Business professionals collaborating on a solution"
              className="h-[420px] w-full rounded-[30px] object-cover shadow-xl"
            />

            <div className="absolute -bottom-7 -right-3 max-w-[250px] rounded-2xl border border-blue-100 bg-white p-6 shadow-xl sm:-right-7">
              <BrainCircuit className="mb-3 text-blue-600" size={30} />
              <h3 className="font-extrabold text-gray-900">
                Technology With Purpose
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Digital innovation aligned with real business objectives.
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Solution Approach
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
              Turning Business Challenges into
              <span className="text-blue-600"> Digital Progress</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Modern businesses face changing customer expectations,
              operational complexity, increasing data requirements, and
              growing competition. The right technology can help organizations
              respond to these challenges with greater confidence.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              At Zynova AI Solutions, we approach every project with a
              problem-solving mindset. We combine software engineering,
              artificial intelligence, cloud technologies, and business
              understanding to create solutions that fit the way organizations
              work.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you are launching a new digital product, improving an
              existing platform, or transforming an entire workflow, our goal
              is to make technology useful, accessible, and ready for growth.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:gap-5"
            >
              Learn More About Zynova
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section
        id="solutions"
        className="bg-gradient-to-b from-blue-50/70 via-white to-gray-50 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Offer
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
              Digital Solutions for
              <span className="text-blue-600"> Every Industry</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We create technology solutions for different business
              environments, combining industry understanding with flexible
              digital platforms and intelligent capabilities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-bold text-blue-700 backdrop-blur">
                      {solution.category}
                    </span>

                    <span className="absolute bottom-5 right-5 text-4xl font-black text-white/70">
                      {solution.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${solution.color}`}>
                        <Icon size={25} />
                      </div>

                      <h3 className="text-xl font-extrabold text-gray-900 transition group-hover:text-blue-600">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-gray-600">
                      {solution.description}
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-gray-400">
                        Key Capabilities
                      </h4>

                      <div className="grid grid-cols-1 gap-3">
                        {solution.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-gray-600"
                          >
                            <CheckCircle2 size={16} className="shrink-0 text-blue-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600 transition-all group-hover:gap-4"
                    >
                      Discuss This Solution
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONNECTED TECHNOLOGY */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Technology Foundation
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                Connected Technologies.
                <span className="text-blue-600"> Smarter Outcomes.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Effective digital solutions often require multiple technologies
                working together. We combine modern software platforms,
                intelligent services, cloud environments, and structured data
                systems to create connected business experiences.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our technology choices are guided by your project requirements,
                existing infrastructure, performance expectations, and future
                development needs.
              </p>

              <Link
                href="/technologies"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Our Technologies
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.title}
                    className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-7 transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900">
                      {technology.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {technology.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION BANNER */}
      <section className="px-6 py-16 sm:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-blue-50">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-8 py-14 sm:px-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Intelligent Transformation
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Make Your Next Business Move a
                <span className="text-blue-600"> Smarter One.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Technology should help businesses move forward with clarity.
                From intelligent applications to connected enterprise
                platforms, we help turn opportunities into practical digital
                initiatives.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Modernize existing operations",
                  "Connect disconnected business systems",
                  "Create better digital customer experiences",
                  "Use data to support better decisions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Business Goals
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative h-[350px] lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                alt="Technology professionals collaborating"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-transparent lg:from-blue-50/20" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-white to-blue-50/60 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The Zynova Difference
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
              Why Businesses Choose
              <span className="text-blue-600"> Our Approach</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We bring together technology, problem-solving, and a practical
              understanding of business needs to deliver purposeful digital
              experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Process
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
              How We Bring Solutions
              <span className="text-blue-600"> to Life</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Every successful project begins with understanding the problem.
              Our process provides a clear path from business requirements to
              a working digital solution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-5xl font-black text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-7 text-xl font-extrabold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden text-blue-400 lg:block">
                    <ArrowRight size={23} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -left-20 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <Rocket size={31} />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Let's Create a Solution That Moves You Forward
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-50">
              Have a business challenge, a digital idea, or a transformation
              goal? Connect with Zynova AI Solutions and let's explore how the
              right technology can make a difference.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1"
              >
                Start a Conversation
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
