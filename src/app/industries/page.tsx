
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  Truck,
  Building2,
  Utensils,
  Plane,
  BriefcaseBusiness,
  BrainCircuit,
  Database,
  Cloud,
  Code2,
  Workflow,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Globe2,
  Cpu,
  BarChart3,
  MonitorSmartphone,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Retail & E-commerce",
    subtitle: "Smarter Retail Experiences",
    description:
      "Transform retail operations with intelligent applications, inventory management systems, e-commerce platforms, and automated business workflows.",
    solutions: [
      "E-commerce website development",
      "Inventory and stock management",
      "Retail management systems",
      "AI-powered product recommendations",
      "Order and payment management",
    ],
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    title: "Healthcare",
    subtitle: "Connected Healthcare Technology",
    description:
      "Support modern healthcare services with digital platforms that improve administrative workflows, information management, and patient experiences.",
    solutions: [
      "Healthcare management platforms",
      "Appointment scheduling systems",
      "Patient information management",
      "Healthcare workflow automation",
      "Reporting and analytics dashboards",
    ],
    icon: HeartPulse,
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
  },
  {
    number: "03",
    title: "Education & E-learning",
    subtitle: "Technology for Better Learning",
    description:
      "Create engaging digital learning environments with modern educational platforms, student management tools, and intelligent learning experiences.",
    solutions: [
      "Learning management systems",
      "Online education platforms",
      "Student management systems",
      "Digital assessment tools",
      "Education analytics dashboards",
    ],
    icon: GraduationCap,
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
  },
  {
    number: "04",
    title: "Finance & Banking",
    subtitle: "Digital Financial Solutions",
    description:
      "Modernize financial operations through secure, structured software solutions, reporting tools, and automated business processes.",
    solutions: [
      "Financial management applications",
      "Business reporting dashboards",
      "Transaction workflow automation",
      "Customer management systems",
      "Financial data analytics",
    ],
    icon: Landmark,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
  },
  {
    number: "05",
    title: "Manufacturing",
    subtitle: "Intelligent Industrial Operations",
    description:
      "Improve operational visibility with digital systems for production workflows, inventory tracking, resource planning, and business reporting.",
    solutions: [
      "Production management systems",
      "Inventory tracking applications",
      "Workflow automation",
      "Operations dashboards",
      "Business process integration",
    ],
    icon: Factory,
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
  },
  {
    number: "06",
    title: "Logistics & Transportation",
    subtitle: "Connected Supply Chains",
    description:
      "Build digital solutions that help coordinate logistics activities, manage deliveries, track operational information, and improve visibility.",
    solutions: [
      "Fleet management applications",
      "Delivery management systems",
      "Shipment tracking platforms",
      "Logistics workflow automation",
      "Operational reporting",
    ],
    icon: Truck,
    color: "from-cyan-500 to-blue-400",
    bg: "bg-cyan-50",
  },
  {
    number: "07",
    title: "Real Estate & Property",
    subtitle: "Smarter Property Management",
    description:
      "Simplify property operations through digital platforms for property listings, customer communication, bookings, and management.",
    solutions: [
      "Property listing platforms",
      "Property management software",
      "Customer relationship systems",
      "Booking and enquiry management",
      "Property analytics dashboards",
    ],
    icon: Building2,
    color: "from-indigo-500 to-blue-400",
    bg: "bg-indigo-50",
  },
  {
    number: "08",
    title: "Food & Hospitality",
    subtitle: "Modern Hospitality Experiences",
    description:
      "Support restaurants, hotels, and hospitality businesses with digital booking, ordering, customer management, and operational applications.",
    solutions: [
      "Restaurant management systems",
      "Online ordering platforms",
      "Hotel booking applications",
      "Reservation management",
      "Customer experience automation",
    ],
    icon: Utensils,
    color: "from-amber-500 to-yellow-400",
    bg: "bg-amber-50",
  },
  {
    number: "09",
    title: "Travel & Tourism",
    subtitle: "Digital Travel Experiences",
    description:
      "Help travel businesses deliver convenient digital experiences through booking platforms, customer portals, and automated travel workflows.",
    solutions: [
      "Travel booking websites",
      "Tour management platforms",
      "Reservation systems",
      "Customer service automation",
      "Travel business dashboards",
    ],
    icon: Plane,
    color: "from-sky-500 to-cyan-400",
    bg: "bg-sky-50",
  },
  {
    number: "10",
    title: "Professional Services",
    subtitle: "Efficient Business Operations",
    description:
      "Help service-based organizations manage customers, projects, documents, and daily workflows through customized digital applications.",
    solutions: [
      "Customer relationship management",
      "Project management applications",
      "Document management systems",
      "Business process automation",
      "Client portals and dashboards",
    ],
    icon: BriefcaseBusiness,
    color: "from-fuchsia-500 to-violet-400",
    bg: "bg-fuchsia-50",
  },
];

const capabilities = [
  {
    title: "Artificial Intelligence",
    description:
      "Integrate intelligent capabilities into applications and business processes.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Software",
    description:
      "Develop digital products tailored to specific industry requirements.",
    icon: Code2,
  },
  {
    title: "Cloud Technology",
    description:
      "Build flexible and scalable cloud-based application solutions.",
    icon: Cloud,
  },
  {
    title: "Data & Analytics",
    description:
      "Turn business information into useful reports and insights.",
    icon: Database,
  },
  {
    title: "Workflow Automation",
    description:
      "Simplify repetitive tasks and connect business processes.",
    icon: Workflow,
  },
  {
    title: "Digital Security",
    description:
      "Consider security and data protection throughout development.",
    icon: ShieldCheck,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand the Industry",
    description:
      "We explore your business environment, customer expectations, processes, and operational challenges.",
  },
  {
    number: "02",
    title: "Identify Opportunities",
    description:
      "We identify where software, automation, and AI can create practical improvements.",
  },
  {
    number: "03",
    title: "Build Your Solution",
    description:
      "We design and develop technology around your specific business requirements.",
  },
  {
    number: "04",
    title: "Support Your Growth",
    description:
      "We help your digital solution evolve as your organization and requirements change.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative isolate bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 px-6 pb-24 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Globe2 size={16} />
              Industries We Serve
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Transforming Industries Through{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Intelligent Technology
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Every industry faces unique challenges and opportunities.
              ZYNOVA AI Solutions helps organizations explore new possibilities
              through AI-powered applications, custom software, intelligent
              automation, and modern digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Industry-Focused Solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Intelligent Innovation
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-300/40 to-violet-300/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Digital Transformation
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Connected Industries
                  </h2>
                </div>
                <Sparkles size={27} className="text-violet-600" />
              </div>

              <div className="relative flex items-center justify-center py-12">
                <div className="absolute h-60 w-60 rounded-full border border-dashed border-blue-200" />
                <div className="absolute h-44 w-44 rounded-full border border-violet-200" />

                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/30">
                  <BrainCircuit size={55} />
                </div>

                <div className="absolute left-2 top-6 rounded-xl bg-white p-3 text-blue-600 shadow-lg">
                  <ShoppingCart size={25} />
                </div>
                <div className="absolute right-2 top-6 rounded-xl bg-white p-3 text-rose-500 shadow-lg">
                  <HeartPulse size={25} />
                </div>
                <div className="absolute bottom-3 left-6 rounded-xl bg-white p-3 text-violet-600 shadow-lg">
                  <GraduationCap size={25} />
                </div>
                <div className="absolute bottom-3 right-6 rounded-xl bg-white p-3 text-cyan-600 shadow-lg">
                  <Factory size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "AI Innovation",
                  "Smart Applications",
                  "Digital Platforms",
                  "Business Automation",
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

      {/* INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Technology Across Industries
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            One Technology Partner.
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Many Business Possibilities.
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            From growing startups to established organizations, every
            business needs technology that supports its goals. We focus on
            understanding industry-specific requirements and developing
            solutions that make business processes more connected, efficient,
            and accessible.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Industry Expertise
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Industries We Help Transform
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore how our technology capabilities can support different
              sectors and their evolving business requirements.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.number}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.color} text-white shadow-lg`}
                    >
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-slate-100">
                      {industry.number}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-wider text-blue-600">
                    {industry.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <h4 className="text-sm font-bold text-slate-800">
                      Potential Solutions
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {industry.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-blue-600"
                          />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-blue-600 transition group-hover:gap-3"
                  >
                    Discuss Your Requirements
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CAPABILITIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Technology Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              The Technology Behind Better Business Solutions
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine modern development technologies and intelligent
              capabilities to address different business challenges.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
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

      {/* INDUSTRY APPROACH */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How We Turn Industry Challenges Into Opportunities
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We follow a collaborative approach that puts your business
              requirements at the center of every technology decision.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <span className="text-4xl font-extrabold text-blue-100">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              The Future Is Digital
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Prepare Your Business for the Next Generation of Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              AI, automation, cloud computing, and connected applications are
              changing how organizations operate. The right digital strategy
              can help your business adapt to new expectations and discover
              better ways of working.
            </p>

            <Link
              href="/#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-cyan-100"
            >
              Start Your Digital Journey
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: BrainCircuit,
                title: "Artificial Intelligence",
                text: "Intelligent business capabilities",
              },
              {
                icon: Cpu,
                title: "Modern Technology",
                text: "Innovative digital applications",
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                text: "Data-driven decision support",
              },
              {
                icon: MonitorSmartphone,
                title: "Digital Experiences",
                text: "Connected customer journeys",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <Icon size={30} className="text-cyan-400" />
                  <h3 className="mt-5 text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.text}
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
            <Sparkles size={32} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight sm:text-5xl">
            Let's Transform Your Industry Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you are launching a new digital business or modernizing
            existing operations, let's explore the right technology solution
            for your goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Contact ZYNOVA
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
