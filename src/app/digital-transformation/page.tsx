
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  BrainCircuit,
  Network,
  Cloud,
  Database,
  ShieldCheck,
  Lightbulb,
  Target,
  Compass,
  RefreshCw,
  Layers3,
  Settings2,
  BarChart3,
  Users,
  Building2,
  MonitorSmartphone,
  CheckCircle2,
  Gauge,
  Globe2,
  Sparkles,
  Puzzle,
  GitBranch,
  LineChart,
  MoveUpRight,
  ChevronRight,
} from "lucide-react";

const transformationAreas = [
  {
    number: "01",
    title: "Business Process Modernisation",
    description:
      "Reconsider how everyday business activities are performed. We help identify repetitive tasks, disconnected processes, and operational challenges before designing more efficient digital workflows.",
    icon: Workflow,
    tag: "OPERATIONAL EXCELLENCE",
    tone: "bg-[#eaf2ff]",
    color: "text-blue-700",
  },
  {
    number: "02",
    title: "AI-Powered Business Solutions",
    description:
      "Explore practical applications of artificial intelligence, including intelligent assistants, document processing, predictive analysis, and automation that supports informed decisions.",
    icon: BrainCircuit,
    tag: "INTELLIGENT INNOVATION",
    tone: "bg-[#f0eaff]",
    color: "text-violet-700",
  },
  {
    number: "03",
    title: "Cloud & Digital Infrastructure",
    description:
      "Modernise the technology foundation supporting your business. Cloud-ready architecture and connected services can help improve accessibility, flexibility, and operational management.",
    icon: Cloud,
    tag: "CONNECTED INFRASTRUCTURE",
    tone: "bg-[#e6f7fa]",
    color: "text-cyan-700",
  },
  {
    number: "04",
    title: "Data & Business Intelligence",
    description:
      "Bring information from different business activities into a more useful structure. Develop reporting, dashboards, and analytics that make performance and operational information easier to understand.",
    icon: BarChart3,
    tag: "DATA-DRIVEN THINKING",
    tone: "bg-[#eaf6ed]",
    color: "text-emerald-700",
  },
  {
    number: "05",
    title: "Application & System Integration",
    description:
      "Connect business applications, databases, and external services through suitable APIs and integration workflows, reducing unnecessary information silos.",
    icon: Network,
    tag: "CONNECTED SYSTEMS",
    tone: "bg-[#fff0e7]",
    color: "text-orange-700",
  },
  {
    number: "06",
    title: "Digital Customer Experiences",
    description:
      "Improve the way customers interact with your organisation through responsive websites, mobile applications, digital service channels, and user-centred interfaces.",
    icon: MonitorSmartphone,
    tag: "CUSTOMER EXPERIENCE",
    tone: "bg-[#fcecf4]",
    color: "text-pink-700",
  },
];

const challenges = [
  {
    title: "Disconnected systems",
    description:
      "Information is spread across multiple tools, making it difficult for teams to maintain a consistent view of business activity.",
    icon: Network,
  },
  {
    title: "Manual operations",
    description:
      "Repeated administrative work can consume valuable time and create unnecessary operational complexity.",
    icon: Settings2,
  },
  {
    title: "Limited business visibility",
    description:
      "Scattered data and inconsistent reporting can make it harder to understand performance and identify opportunities.",
    icon: Gauge,
  },
  {
    title: "Outdated digital experiences",
    description:
      "Legacy interfaces and disconnected customer channels may make digital interactions less convenient.",
    icon: MonitorSmartphone,
  },
];

const stages = [
  {
    number: "01",
    name: "Discover",
    subtitle: "Understand the current state",
    description:
      "Explore business objectives, existing applications, team workflows, customer expectations, and the challenges affecting daily operations.",
    icon: Compass,
  },
  {
    number: "02",
    name: "Strategise",
    subtitle: "Define the direction",
    description:
      "Identify improvement opportunities, prioritise initiatives, evaluate technology options, and create a practical transformation roadmap.",
    icon: Target,
  },
  {
    number: "03",
    name: "Design",
    subtitle: "Plan connected experiences",
    description:
      "Shape the application architecture, information flows, user journeys, integrations, and security considerations.",
    icon: Layers3,
  },
  {
    number: "04",
    name: "Implement",
    subtitle: "Build and integrate",
    description:
      "Develop the required digital solutions, connect systems, introduce automation, and validate the new workflows.",
    icon: GitBranch,
  },
  {
    number: "05",
    name: "Optimise",
    subtitle: "Measure and improve",
    description:
      "Review how the solutions perform, collect feedback, improve usability, and identify opportunities for further development.",
    icon: RefreshCw,
  },
];

const industries = [
  {
    name: "Retail & Commerce",
    description:
      "Connect sales channels, inventory information, customer interactions, and operational reporting to support modern retail activities.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=85",
    label: "CONNECTED COMMERCE",
  },
  {
    name: "Healthcare & Wellness",
    description:
      "Explore digital administration, information management, appointment workflows, and connected service experiences.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85",
    label: "DIGITAL HEALTH SERVICES",
  },
  {
    name: "Education & Learning",
    description:
      "Support digital learning environments, student information workflows, online services, and institutional reporting.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85",
    label: "CONNECTED LEARNING",
  },
  {
    name: "Manufacturing & Operations",
    description:
      "Improve operational visibility through connected information, workflow systems, reporting, and suitable automation.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85",
    label: "SMART OPERATIONS",
  },
];

const capabilities = [
  {
    title: "Digital Strategy",
    detail: "Business goals, technology planning, and transformation roadmaps.",
    icon: Lightbulb,
  },
  {
    title: "Application Modernisation",
    detail: "Modern web applications, mobile platforms, and software solutions.",
    icon: MonitorSmartphone,
  },
  {
    title: "Intelligent Automation",
    detail: "Workflow optimisation, AI capabilities, and process automation.",
    icon: BrainCircuit,
  },
  {
    title: "Data Architecture",
    detail: "Database design, information integration, and analytics foundations.",
    icon: Database,
  },
  {
    title: "Cloud Enablement",
    detail: "Cloud-ready applications, deployment, and infrastructure planning.",
    icon: Cloud,
  },
  {
    title: "Security & Governance",
    detail: "Access management, secure development, and responsible data practices.",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Start with business needs",
    description:
      "Technology should address a clearly understood business challenge rather than introduce complexity without a meaningful purpose.",
  },
  {
    title: "Build around people",
    description:
      "Employees, customers, and stakeholders should be considered when designing new processes and digital experiences.",
  },
  {
    title: "Connect the bigger picture",
    description:
      "Applications, information, infrastructure, and workflows should be planned as parts of a connected business environment.",
  },
  {
    title: "Improve continuously",
    description:
      "Transformation is an ongoing activity. Solutions should be reviewed and adapted as business needs evolve.",
  },
];

const faqs = [
  {
    question: "What is digital transformation?",
    answer:
      "Digital transformation is the process of using digital technologies to improve business operations, customer experiences, information management, and organisational processes. It can involve new applications, connected systems, automation, cloud services, and changes to existing workflows.",
  },
  {
    question: "Does digital transformation mean replacing all existing software?",
    answer:
      "No. Many transformation projects can build on existing systems. Depending on compatibility and business requirements, applications can be integrated, modernised, extended, or replaced selectively.",
  },
  {
    question: "Can small businesses benefit from digital transformation?",
    answer:
      "Yes. Small and growing businesses can begin with focused improvements such as digital record management, online customer services, automated workflows, business dashboards, and better-connected applications.",
  },
  {
    question: "How does AI support digital transformation?",
    answer:
      "AI can support activities such as information extraction, customer assistance, document processing, forecasting, knowledge discovery, and workflow automation. The appropriate use cases depend on available data, business objectives, and risk considerations.",
  },
  {
    question: "How long does a digital transformation project take?",
    answer:
      "The timeline depends on the number of systems involved, project scope, integration requirements, data readiness, and organisational needs. A focused initiative may be delivered in stages, while a larger transformation may require a longer roadmap.",
  },
  {
    question: "Can ZYNOVA help with existing business applications?",
    answer:
      "Yes. Depending on the application's technology and available integration options, we can help assess existing systems, modernise interfaces, develop additional functionality, and connect compatible services.",
  },
];

export default function DigitalTransformationPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO - ARCHITECTURAL EDITORIAL LAYOUT */}

      <section className="relative bg-[#f7f9ff] px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Digital Transformation
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[76px]">
                Change the way you work.
                <span className="mt-2 block text-blue-700">
                  Shape what comes next.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
                Transform disconnected processes into connected digital
                experiences. Build smarter operations, modernise business
                systems, and create a stronger foundation for the future.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-slate-500">
                ZYNOVA AI Solutions helps organisations explore and
                implement practical digital improvements through software
                development, intelligent automation, cloud technologies,
                data solutions, and connected business applications.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-slate-950"
                >
                  Plan Your Transformation
                  <ArrowUpRight size={19} />
                </Link>

                <Link
                  href="#transformation-areas"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                >
                  Explore Capabilities
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Modernise
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Existing systems
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Connect
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Business processes
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Evolve
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Digital capabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern collaborative digital business workspace"
                  className="h-[560px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-4 max-w-[270px] rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl sm:-left-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Network size={25} />
                </div>
                <p className="mt-5 text-lg font-bold text-slate-950">
                  One connected digital ecosystem.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Bring people, information, applications, and processes
                  together.
                </p>
              </div>

              <div className="absolute -right-3 top-10 hidden rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur sm:block">
                <Sparkles size={25} className="text-blue-700" />
                <p className="mt-3 text-xs font-bold text-slate-900">
                  Intelligent innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO - OFFSET IMAGE AND CONTENT */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-40 w-40 rounded-full border border-blue-200" />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Business team collaborating on digital transformation"
              className="relative h-[440px] w-full rounded-[28px] object-cover"
            />
            <div className="absolute -bottom-7 right-5 rounded-2xl bg-[#eaf2ff] p-6 sm:-right-7">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Transformation mindset
              </p>
              <p className="mt-2 max-w-[190px] text-xl font-semibold text-slate-950">
                Progress begins with understanding.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              A better way forward
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Digital transformation is not just about adopting technology.
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              It is about rethinking how an organisation creates value,
              serves customers, manages information, and performs its
              everyday activities. Technology provides the tools, but
              meaningful transformation starts with understanding the
              people and processes behind the business.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              An organisation may need to replace manual records with
              digital workflows, connect applications that operate
              independently, modernise an outdated website, or make
              business information easier to access. Each improvement
              contributes to a more connected operating environment.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              Our approach focuses on identifying the right opportunities
              and selecting solutions that address real requirements.
              Rather than treating transformation as a single technology
              installation, we consider it an evolving journey that can
              progress through manageable and measurable initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS CHALLENGES - ASYMMETRIC CARDS */}

      <section className="bg-[#f5f8fd] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Recognising the opportunity
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              When everyday processes become obstacles to progress.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              As organisations grow, their processes and technology
              environments can become more complicated. Recognising
              these challenges helps identify where digital improvements
              can make a meaningful difference.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group flex flex-col justify-between rounded-[25px] p-8 transition hover:-translate-y-1 hover:shadow-xl ${
                    index === 0
                      ? "bg-white"
                      : index === 1
                        ? "bg-[#eaf2ff]"
                        : index === 2
                          ? "bg-[#f0ecfa]"
                          : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-blue-700">
                      CHALLENGE 0{index + 1}
                    </span>
                    <Icon size={27} className="text-blue-700" />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-lg leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-700">
                    An opportunity to improve
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION SERVICES */}

      <section
        id="transformation-areas"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Our transformation capabilities
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
                Six connected areas of digital progress.
              </h2>
            </div>
            <p className="max-w-md leading-8 text-slate-500">
              We combine software, data, automation, and infrastructure
              capabilities to help businesses develop solutions aligned
              with their digital priorities.
            </p>
          </div>

          <div className="space-y-5">
            {transformationAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group grid gap-7 rounded-[25px] border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-lg sm:p-9 lg:grid-cols-[100px_1fr_1.2fr_65px] lg:items-center"
                >
                  <div className="flex items-center justify-between lg:block">
                    <span className="text-3xl font-light text-slate-300">
                      {area.number}
                    </span>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl lg:mt-5 ${area.tone} ${area.color}`}
                    >
                      <Icon size={27} />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-[0.18em] text-blue-700">
                      {area.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-8 text-slate-500">
                    {area.description}
                  </p>

                  <Link
                    href="/contact"
                    aria-label={`Discuss ${area.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f4ff] text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white"
                  >
                    <ArrowUpRight size={21} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE LED DIGITAL ECOSYSTEM */}

      <section className="bg-[#f7f9fc] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                A connected business environment
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Bring your digital ecosystem together.
              </h2>
              <p className="mt-7 leading-8 text-slate-500">
                Business applications are most useful when they support
                a connected flow of information. A customer relationship
                platform, inventory application, finance system, and
                reporting environment may each serve a different purpose,
                but their information can often be connected through
                suitable integrations.
              </p>
              <p className="mt-5 leading-8 text-slate-500">
                We consider how information moves between applications,
                where duplication occurs, and how teams access the data
                they need. This helps establish a clearer technology
                architecture that can support business operations
                and future development.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Connect compatible business applications",
                  "Create consistent information flows",
                  "Reduce avoidable manual data handling",
                  "Support reporting across business functions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-700"
                    />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                alt="Technology team planning a connected digital ecosystem"
                className="h-[500px] w-full rounded-[30px] object-cover"
              />

              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:left-10 sm:right-10">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Applications", icon: MonitorSmartphone },
                    { label: "Information", icon: Database },
                    { label: "Workflows", icon: Workflow },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label}>
                        <Icon
                          size={25}
                          className="mx-auto text-blue-700"
                        />
                        <p className="mt-3 text-xs font-semibold text-slate-700">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES - PHOTO MOSAIC */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Digital transformation across industries
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-slate-950 sm:text-5xl">
              Different industries. Different challenges. Connected possibilities.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
              Digital transformation looks different in every industry.
              The right solutions depend on business processes, customer
              needs, information requirements, and the technology
              environment already in place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className={`group relative overflow-hidden rounded-[28px] ${
                  index === 0 ? "md:translate-y-5" : ""
                }`}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200">
                    {industry.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200">
                    {industry.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
                  >
                    Explore possibilities
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="bg-[#eef3fb] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Technology capabilities
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                The building blocks behind business transformation.
              </h2>
              <p className="mt-7 leading-8 text-slate-600">
                A successful transformation may require several
                technologies working together. Our development
                capabilities cover the application, data, infrastructure,
                automation, and security considerations that support
                digital business solutions.
              </p>

              <div className="mt-9 overflow-hidden rounded-[25px]">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85"
                  alt="Team collaborating on modern digital technology"
                  className="h-[260px] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.title}
                    className="rounded-2xl border border-white bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-bold text-slate-950">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {capability.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP - VERTICAL TIMELINE */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Our transformation roadmap
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
                From understanding to continuous improvement.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                Every organisation has a different starting point.
                We structure transformation work into clear stages
                so priorities, responsibilities, and implementation
                activities can be understood.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700"
              >
                Discuss your roadmap
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative space-y-5">
              <div className="absolute bottom-10 left-[27px] top-10 w-px bg-blue-200" />

              {stages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <article
                    key={stage.number}
                    className="relative flex gap-6 rounded-[24px] border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg sm:gap-8 sm:p-8"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-700 text-white shadow-md">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-blue-700">
                          STAGE {stage.number}
                        </span>
                        <span className="h-px w-7 bg-blue-200" />
                        <span className="text-xs text-slate-400">
                          {stage.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        {stage.name}
                      </h3>
                      <p className="mt-3 text-sm leading-8 text-slate-500">
                        {stage.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}

      <section className="bg-[#f7f9fc] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Our philosophy
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              Transformation should be thoughtful, practical, and sustainable.
            </h2>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-slate-200 py-8 md:px-8 md:py-10"
              >
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-light text-blue-600">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-8 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Frequently asked questions
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              Understanding digital transformation.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Have questions about modernising systems, adopting AI,
              connecting applications, or planning your digital
              transformation journey?
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700"
            >
              Ask us a question
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                  <span className="flex gap-4">
                    <span className="text-sm text-blue-700">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-slate-400 transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-5 pl-9 text-sm leading-8 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#eaf1ff] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-blue-200/70 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-violet-200/60 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                The next chapter starts with a decision
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Make your business ready for a more connected digital future.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                Whether you are beginning with one process improvement
                or planning a wider technology initiative, let's explore
                a practical way to move forward.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-slate-950"
            >
              Start a Conversation
              <MoveUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
