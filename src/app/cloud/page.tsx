
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  CloudUpload,
  Server,
  Database,
  ShieldCheck,
  Network,
  Globe2,
  Monitor,
  Layers,
  Lock,
  Activity,
  Gauge,
  RefreshCw,
  Workflow,
  Code2,
  CheckCircle2,
  Zap,
  Building2,
  HardDrive,
  Settings,
  Cpu,
  Boxes,
  Terminal,
  GitBranch,
  Smartphone,
  BarChart3,
  Sparkles,
  Rocket,
} from "lucide-react";

const cloudServices = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "We help businesses plan and develop applications designed to operate in cloud environments. Cloud-based applications can support flexible access, connected workflows, and the ability to evolve as business requirements change.",
    features: [
      "Cloud-ready application architecture",
      "Web application deployment",
      "Scalable application components",
      "Integration with cloud services",
    ],
  },
  {
    number: "02",
    icon: Server,
    title: "Cloud Infrastructure Solutions",
    description:
      "A reliable cloud environment starts with a suitable infrastructure foundation. We help plan application hosting, server environments, networking requirements, and infrastructure components around your technical and operational needs.",
    features: [
      "Infrastructure planning",
      "Server and hosting configuration",
      "Environment management",
      "Resource organisation",
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "Cloud Database Management",
    description:
      "Modern applications depend on reliable data storage and access. We help plan database environments that support application requirements, organised information, and appropriate data management practices.",
    features: [
      "Database architecture planning",
      "Cloud database integration",
      "Data migration considerations",
      "Backup and recovery planning",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cloud Security & Access",
    description:
      "Security needs to be considered throughout the cloud lifecycle. We incorporate practical security considerations into application architecture, access management, configuration, and deployment planning.",
    features: [
      "Identity and access planning",
      "Role-based access considerations",
      "Secure application configuration",
      "Data protection practices",
    ],
  },
  {
    number: "05",
    icon: GitBranch,
    title: "DevOps & Deployment",
    description:
      "A structured deployment workflow helps development teams release software more consistently. We can help organise development environments, build pipelines, version control workflows, and deployment processes.",
    features: [
      "CI/CD workflow planning",
      "Build and deployment automation",
      "Environment configuration",
      "Release workflow organisation",
    ],
  },
  {
    number: "06",
    icon: Activity,
    title: "Cloud Monitoring & Optimisation",
    description:
      "Cloud environments should be reviewed as applications and workloads evolve. Monitoring and optimisation help teams understand system behaviour, identify potential bottlenecks, and make informed infrastructure decisions.",
    features: [
      "Application performance monitoring",
      "Resource usage reviews",
      "Performance improvement planning",
      "Operational visibility",
    ],
  },
];

const cloudModels = [
  {
    icon: CloudUpload,
    title: "Public Cloud",
    description:
      "Use cloud infrastructure and services provided through a third-party cloud platform. Public cloud environments can support flexible resources and a wide range of application requirements.",
    tag: "Flexible infrastructure",
  },
  {
    icon: Lock,
    title: "Private Cloud",
    description:
      "A private cloud environment is dedicated to a particular organisation. It may be considered when specific control, infrastructure, or operational requirements influence the architecture.",
    tag: "Dedicated environments",
  },
  {
    icon: Network,
    title: "Hybrid Cloud",
    description:
      "Hybrid cloud approaches connect private infrastructure with public cloud resources. This can help organisations plan around existing systems, application needs, and different workload requirements.",
    tag: "Connected environments",
  },
];

const advantages = [
  {
    icon: Gauge,
    title: "Flexible Scalability",
    description:
      "Cloud architecture can make it easier to adjust computing resources as application usage and business requirements change.",
  },
  {
    icon: Globe2,
    title: "Access Across Locations",
    description:
      "Cloud-hosted applications can support teams and customers accessing services from different locations, subject to connectivity and access controls.",
  },
  {
    icon: RefreshCw,
    title: "Simplified Updates",
    description:
      "Organised cloud deployment workflows can help teams manage application updates and releases in a more structured way.",
  },
  {
    icon: ShieldCheck,
    title: "Security Considerations",
    description:
      "Cloud solutions can incorporate identity management, access controls, encryption options, and other security measures appropriate to the system.",
  },
  {
    icon: BarChart3,
    title: "Operational Visibility",
    description:
      "Monitoring and reporting tools can help teams understand application performance, resource usage, and operational behaviour.",
  },
  {
    icon: Zap,
    title: "Faster Development Workflows",
    description:
      "Cloud development environments and automation can support collaboration, testing, and more consistent delivery processes.",
  },
];

const process = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Understand",
    description:
      "We learn about your existing systems, business objectives, application requirements, users, and technical challenges. This helps establish the purpose of the cloud project.",
    output: "Requirements and project direction",
  },
  {
    number: "02",
    icon: Layers,
    title: "Plan the Architecture",
    description:
      "We consider application structure, hosting requirements, data storage, integrations, security, and deployment needs before defining an appropriate cloud architecture.",
    output: "Architecture and infrastructure plan",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop & Configure",
    description:
      "Application components and cloud environments are developed or configured according to the agreed requirements, with attention to maintainability and integration.",
    output: "Configured cloud environment",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Test & Validate",
    description:
      "We review application behaviour, connectivity, configuration, access, and important operational requirements before moving toward deployment.",
    output: "Tested application and environment",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deploy",
    description:
      "The application is prepared for its target environment. Deployment activities may include release configuration, domain setup, environment variables, and production checks.",
    output: "Deployment and release preparation",
  },
  {
    number: "06",
    icon: Activity,
    title: "Monitor & Improve",
    description:
      "After deployment, monitoring and ongoing reviews help identify opportunities to improve reliability, performance, security, and resource usage.",
    output: "Operational review and improvement plan",
  },
];

const industries = [
  {
    icon: ShoppingIcon,
    title: "Retail & E-commerce",
    description:
      "Cloud-enabled commerce platforms, product databases, inventory applications, and connected business operations.",
  },
  {
    icon: Building2,
    title: "Enterprise & Corporate",
    description:
      "Business applications, internal portals, reporting systems, and connected services for organisational workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Backend services, cloud databases, APIs, authentication, and connected features for mobile products.",
  },
  {
    icon: BarChart3,
    title: "Finance & Analytics",
    description:
      "Data platforms, reporting applications, information management, and analytical workflows.",
  },
  {
    icon: GraduationCapIcon,
    title: "Education",
    description:
      "Learning platforms, student portals, digital resources, and systems that support online education.",
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description:
      "Cloud-based software products, application services, APIs, and scalable technical foundations.",
  },
];

const faqs = [
  {
    question: "What is cloud computing?",
    answer:
      "Cloud computing provides access to computing resources such as servers, storage, databases, networking, and software services through cloud platforms. Instead of managing every infrastructure component locally, organisations can use services hosted by cloud providers.",
  },
  {
    question: "What types of cloud solutions can ZYNOVA help with?",
    answer:
      "Cloud-related projects can include cloud application development, infrastructure planning, database integration, deployment workflows, security considerations, monitoring, and optimisation. The scope depends on your business requirements and existing technology.",
  },
  {
    question: "Can you migrate an existing application to the cloud?",
    answer:
      "An existing application can be assessed for cloud migration. The process typically involves reviewing its architecture, dependencies, databases, hosting requirements, security needs, and deployment process before selecting a suitable migration approach.",
  },
  {
    question: "Is cloud computing suitable for small businesses?",
    answer:
      "Cloud services can be useful for businesses of different sizes. The right solution depends on application requirements, expected usage, data needs, budget, and operational capabilities. Resource planning is important because cloud usage can create ongoing costs.",
  },
  {
    question: "How do you approach cloud security?",
    answer:
      "Cloud security requires attention to identity and access management, secure configuration, data protection, application security, monitoring, and responsibility boundaries between the cloud provider and the organisation. Security measures should be selected according to the system's risks.",
  },
  {
    question: "Can cloud infrastructure support future business growth?",
    answer:
      "A well-planned cloud architecture can provide flexibility as workloads and application requirements change. However, scalability depends on application design, infrastructure configuration, service limits, performance testing, and cost management.",
  },
];

function SearchIcon({ size = 24 }: { size?: number }) {
  return <Terminal size={size} />;
}

function ShoppingIcon({ size = 24 }: { size?: number }) {
  return <Boxes size={size} />;
}

function GraduationCapIcon({ size = 24 }: { size?: number }) {
  return <Monitor size={size} />;
}

export default function CloudPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative isolate bg-[#f5f9ff]">
        <div className="absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Cloud size={17} />
              Cloud Technology & Infrastructure
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build a Smarter Foundation with
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Cloud Technology.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              ZYNOVA AI Solutions helps businesses explore and build cloud-ready
              digital solutions. From application hosting and infrastructure
              planning to cloud databases and deployment workflows, we focus on
              creating technology foundations that support modern business
              needs.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-500">
              Our cloud approach connects application development,
              infrastructure, security, and operational thinking to help
              businesses build systems that can adapt as their requirements
              evolve.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Cloud Project <ArrowRight size={18} />
              </Link>

              <Link
                href="/approach"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                Our Approach <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Cloud-ready applications
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Secure architecture
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Flexible infrastructure
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/60 via-cyan-100/40 to-violet-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/40">
              <div
                className="relative min-h-[450px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(15,23,42,0.12), rgba(37,99,235,0.15)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />

                <div className="absolute left-6 top-6 rounded-2xl border border-white/30 bg-white/15 p-4 text-white backdrop-blur-md">
                  <Cloud size={30} />
                  <p className="mt-2 text-xs font-semibold tracking-widest">
                    CLOUD ECOSYSTEM
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                  <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                    CONNECT • BUILD • EVOLVE
                  </span>
                  <h2 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                    Technology without boundaries.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                    Create connected digital systems with a foundation built
                    for changing business needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3">
                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <Server className="mx-auto text-blue-600" size={23} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Infrastructure
                  </p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-3 text-center">
                  <Database className="mx-auto text-cyan-700" size={23} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Data Systems
                  </p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3 text-center">
                  <ShieldCheck className="mx-auto text-violet-600" size={23} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Understanding Cloud Technology
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Move beyond traditional infrastructure.
            </h2>
            <div className="mt-7 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Businesses increasingly depend on digital applications,
              databases, online services, and connected systems. As these
              systems grow, managing infrastructure and ensuring that
              applications remain accessible can become more complex.
            </p>
            <p>
              Cloud computing provides an alternative approach to accessing
              computing resources. Instead of relying entirely on locally
              managed hardware, organisations can use cloud-hosted services for
              application hosting, storage, databases, networking, and other
              technical requirements.
            </p>
            <p>
              However, moving to the cloud is not simply a matter of selecting
              a hosting provider. A successful cloud solution requires
              thoughtful architecture, appropriate resource planning, secure
              configuration, reliable application development, and a clear
              understanding of ongoing operating costs.
            </p>
            <p>
              At ZYNOVA, we look at cloud technology as part of a wider digital
              ecosystem. We consider how applications, information, users,
              integrations, and infrastructure work together to support your
              business.
            </p>
            <p>
              Whether you are planning a new application or reviewing an
              existing system, the right cloud strategy can help create a more
              flexible foundation for future development.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f6f9fd] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Cloud Capabilities
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              Cloud Services for Modern Businesses
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              From the application layer to infrastructure and operations, our
              cloud capabilities cover important areas of a modern digital
              environment. Each engagement can be shaped around your existing
              technology, project objectives, and business priorities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cloudServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOUD MODELS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Cloud Deployment Models
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Choose an environment that fits your needs.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Cloud environments are not identical. Different organisations
              have different requirements for infrastructure control,
              application access, data handling, integration, and operational
              management.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Understanding the available deployment models helps businesses
              make informed decisions. The right choice depends on technical
              requirements, security considerations, compliance obligations,
              budget, and the systems that need to be supported.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We help evaluate these considerations before selecting an
              architecture. This keeps the cloud environment connected to
              actual project needs instead of choosing technology simply
              because it is popular.
            </p>
          </div>

          <div className="space-y-4">
            {cloudModels.map((model, index) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg sm:flex-row sm:items-start sm:p-7"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-700">
                    <Icon size={27} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {model.title}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {model.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {model.description}
                    </p>
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE VISUAL */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(15,23,42,0.18), rgba(37,99,235,0.20)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Connected Architecture
                </span>
                <h3 className="mt-3 text-3xl font-bold">
                  Every component has a purpose.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                  Applications, data, infrastructure, and security work
                  together as part of a connected technology environment.
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Connected Systems
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Build an ecosystem, not just a server.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                A cloud solution is made up of several connected elements.
                Applications need a suitable runtime environment, databases
                need reliable connectivity, and users need secure ways to
                access the features available to them.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                APIs and integrations connect different services, while
                monitoring and deployment workflows help teams maintain and
                improve the system over time. Each component should be
                considered in relation to the overall architecture.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                We focus on bringing these pieces together into a coherent
                technical foundation. This includes considering how the
                application will be maintained, how information moves through
                the system, and how the environment may need to change as the
                business grows.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Monitor, label: "Applications" },
                  { icon: Database, label: "Data & Storage" },
                  { icon: Network, label: "APIs & Networking" },
                  { icon: ShieldCheck, label: "Security & Access" },
                  { icon: GitBranch, label: "Deployment" },
                  { icon: Activity, label: "Monitoring" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <Icon size={19} className="text-blue-600" />
                      <span className="text-sm font-semibold text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Business Benefits
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Why Consider Cloud Technology?
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Cloud adoption can create opportunities to improve how digital
            systems are developed, hosted, accessed, and maintained. The
            benefits depend on selecting suitable services and managing them
            effectively.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <article
                key={advantage.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Icon size={25} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {advantage.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CLOUD SECURITY */}
      <section className="bg-blue-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Security by Design
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Build with security in mind from the beginning.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Cloud environments introduce important security responsibilities.
              Applications, data, user accounts, infrastructure settings, and
              connected services all need appropriate protection.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Security should not be treated as a final step after development.
              It should influence architecture, access planning, configuration,
              testing, and operational processes from the start of a project.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We consider security measures according to the nature of the
              application and the information it handles. The exact controls
              depend on the selected cloud platform, project requirements, and
              applicable regulations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-9">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <ShieldCheck size={29} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Security Considerations
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Important areas in cloud architecture
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Identity & Access Management",
                  description:
                    "Define who can access systems and which actions they are permitted to perform.",
                },
                {
                  title: "Data Protection",
                  description:
                    "Consider appropriate data handling, encryption, backup, and recovery practices.",
                },
                {
                  title: "Secure Configuration",
                  description:
                    "Review infrastructure and application settings to reduce unnecessary exposure.",
                },
                {
                  title: "Monitoring & Visibility",
                  description:
                    "Use relevant monitoring and logging to understand system activity and potential issues.",
                },
                {
                  title: "Updates & Maintenance",
                  description:
                    "Plan ongoing maintenance and updates for applications and infrastructure components.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Industries & Applications
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Cloud Solutions Across Business Sectors
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Cloud technology can support many types of digital products and
            business operations. The architecture and services should reflect
            the needs of the industry and the people who depend on the system.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {industry.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Cloud Project Process
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              A Structured Journey from Planning to Deployment
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Cloud projects require coordination between application
              development, infrastructure, data, and operational requirements.
              Our process provides a clear framework for moving from initial
              understanding to deployment and ongoing improvement.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700">
                      <Icon size={26} />
                    </div>
                    <span className="text-2xl font-bold text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-6 flex items-start gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-700">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                    {step.output}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-cyan-700 px-7 py-16 text-center shadow-2xl shadow-blue-900/15 sm:px-14 lg:py-20">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <Cloud size={31} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Build Your Digital Foundation
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to explore what's possible with cloud technology?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
              Whether you are planning a cloud-based application, improving
              your existing infrastructure, or exploring a more connected
              digital environment, ZYNOVA AI Solutions can help you define the
              next steps for your project.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Talk to Our Team <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
