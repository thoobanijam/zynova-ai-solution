
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  GitCommit,
  Workflow,
  Terminal,
  Code2,
  Cloud,
  Server,
  ShieldCheck,
  Gauge,
  Activity,
  RefreshCw,
  Rocket,
  Database,
  Settings,
  Bug,
  CheckCircle2,
  Layers,
  Zap,
  Lock,
  Monitor,
  CircleDot,
  Package,
  Play,
  Boxes,
  GitPullRequest,
} from "lucide-react";

const devopsPractices = [
  {
    number: "01",
    title: "Continuous Integration",
    icon: GitBranch,
    description:
      "Continuous Integration brings code changes together through a consistent development workflow. Automated builds and validation checks can help teams identify integration problems earlier and maintain a more dependable codebase.",
    points: [
      "Organised source control workflows",
      "Automated build validation",
      "Code integration checks",
      "Consistent development branches",
    ],
  },
  {
    number: "02",
    title: "Continuous Delivery & Deployment",
    icon: Rocket,
    description:
      "A structured release process helps teams move tested changes toward production with greater consistency. Deployment workflows can reduce repetitive manual steps and make releases easier to review and manage.",
    points: [
      "Automated deployment pipelines",
      "Environment-specific configuration",
      "Release approvals and checks",
      "Deployment verification",
    ],
  },
  {
    number: "03",
    title: "Infrastructure Automation",
    icon: Settings,
    description:
      "Infrastructure automation helps teams manage environments through repeatable configurations instead of relying entirely on manual setup. This can make development, testing, and production environments easier to maintain.",
    points: [
      "Environment configuration",
      "Repeatable infrastructure setup",
      "Configuration management",
      "Resource organisation",
    ],
  },
  {
    number: "04",
    title: "Containerisation",
    icon: Boxes,
    description:
      "Containers package applications and their dependencies into consistent units. This approach can help development teams run applications across different environments with fewer configuration differences.",
    points: [
      "Application containerisation",
      "Docker-based workflows",
      "Container image management",
      "Environment consistency",
    ],
  },
  {
    number: "05",
    title: "Monitoring & Observability",
    icon: Activity,
    description:
      "Monitoring helps teams understand how applications behave after deployment. Logs, metrics, and alerts provide useful information for identifying issues, reviewing performance, and planning improvements.",
    points: [
      "Application health monitoring",
      "Logs and performance metrics",
      "Alerting considerations",
      "Operational visibility",
    ],
  },
  {
    number: "06",
    title: "DevSecOps Practices",
    icon: ShieldCheck,
    description:
      "Security is most effective when it is considered throughout the development and delivery lifecycle. DevSecOps introduces security checks and responsible configuration practices into everyday engineering workflows.",
    points: [
      "Dependency review",
      "Secret management practices",
      "Access control considerations",
      "Security validation in pipelines",
    ],
  },
];

const pipelineStages = [
  {
    label: "SOURCE",
    title: "Code Repository",
    icon: GitBranch,
    detail: "Version-controlled code changes",
  },
  {
    label: "BUILD",
    title: "Build & Package",
    icon: Package,
    detail: "Compile and prepare application",
  },
  {
    label: "TEST",
    title: "Automated Checks",
    icon: Bug,
    detail: "Validate code and functionality",
  },
  {
    label: "RELEASE",
    title: "Deployment",
    icon: Rocket,
    detail: "Deliver approved application",
  },
  {
    label: "OPERATE",
    title: "Monitor & Improve",
    icon: Activity,
    detail: "Review system health and feedback",
  },
];

const benefits = [
  {
    icon: RefreshCw,
    title: "Repeatable Releases",
    description:
      "Standardised pipelines help teams follow consistent steps when building, testing, and releasing application updates.",
  },
  {
    icon: Gauge,
    title: "Better Delivery Visibility",
    description:
      "A structured workflow makes it easier to understand the status of builds, tests, deployments, and release activities.",
  },
  {
    icon: Bug,
    title: "Earlier Issue Detection",
    description:
      "Automated checks can identify certain code, build, and configuration issues before they reach production.",
  },
  {
    icon: Layers,
    title: "Environment Consistency",
    description:
      "Repeatable configurations help reduce differences between development, testing, staging, and production environments.",
  },
  {
    icon: Lock,
    title: "Security Awareness",
    description:
      "Security checks and access management can become part of the normal development and deployment process.",
  },
  {
    icon: Zap,
    title: "Efficient Collaboration",
    description:
      "Shared workflows help developers and operations teams coordinate responsibilities and understand release requirements.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Assess Your Existing Workflow",
    description:
      "We begin by understanding your current development process, code repositories, application architecture, hosting environment, and release challenges. This gives us a clear picture of where automation and process improvements may be useful.",
  },
  {
    number: "02",
    title: "Design the Pipeline",
    description:
      "We plan the stages required to build, test, package, and deploy your application. The pipeline is designed around your technology stack, team structure, environment requirements, and release strategy.",
  },
  {
    number: "03",
    title: "Configure Automation",
    description:
      "Build scripts, deployment workflows, environment variables, and automated checks are configured to support the planned process. We aim to make repetitive engineering activities more consistent.",
  },
  {
    number: "04",
    title: "Validate the Process",
    description:
      "The pipeline is reviewed through test runs and deployment validation. We check that expected stages work correctly and that failures provide useful information to the team.",
  },
  {
    number: "05",
    title: "Prepare for Production",
    description:
      "We review production configuration, access requirements, release procedures, and operational considerations before the workflow is used for live application delivery.",
  },
  {
    number: "06",
    title: "Monitor and Evolve",
    description:
      "DevOps workflows should evolve alongside the product. We consider monitoring feedback, deployment performance, changing requirements, and opportunities to improve automation.",
  },
];

const technologies = [
  {
    name: "Git",
    category: "Version Control",
    description: "Track source code changes and collaborate through structured branches.",
    icon: GitBranch,
  },
  {
    name: "GitHub Actions",
    category: "CI/CD Automation",
    description: "Automate build, test, and deployment workflows using repository events.",
    icon: GitCommit,
  },
  {
    name: "Docker",
    category: "Containers",
    description: "Package applications and dependencies into portable containers.",
    icon: Boxes,
  },
  {
    name: "Cloud Platforms",
    category: "Infrastructure",
    description: "Host applications and manage cloud-based resources and environments.",
    icon: Cloud,
  },
  {
    name: "Linux",
    category: "Server Environments",
    description: "Work with server environments, command-line tools, and system configuration.",
    icon: Terminal,
  },
  {
    name: "Monitoring Tools",
    category: "Observability",
    description: "Review application health, logs, metrics, and operational events.",
    icon: Activity,
  },
];

const useCases = [
  {
    title: "Web Application Deployment",
    description:
      "Create a repeatable process for building, testing, and deploying modern web applications, including frontend and backend components.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    label: "APPLICATION DELIVERY",
  },
  {
    title: "Cloud-Native Applications",
    description:
      "Organise container-based application workflows and cloud deployment processes around the needs of modern digital products.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    label: "CLOUD OPERATIONS",
  },
  {
    title: "Development Team Automation",
    description:
      "Reduce repetitive development tasks through source control practices, automated checks, build workflows, and shared engineering standards.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
    label: "TEAM COLLABORATION",
  },
];

const faqs = [
  {
    question: "What is DevOps?",
    answer:
      "DevOps is a set of practices and a collaborative approach that brings software development and IT operations closer together. It focuses on improving how applications are developed, tested, released, operated, and maintained.",
  },
  {
    question: "What is the difference between DevOps and CI/CD?",
    answer:
      "DevOps is the broader approach to collaboration, automation, and continuous improvement across development and operations. CI/CD refers to automated practices for integrating code changes and delivering or deploying software.",
  },
  {
    question: "Can you set up a CI/CD pipeline for an existing project?",
    answer:
      "Yes. An existing project can be reviewed to understand its repository structure, build commands, testing requirements, environment configuration, and deployment target. A suitable pipeline can then be planned around those requirements.",
  },
  {
    question: "Do you work with Docker?",
    answer:
      "Docker can be used to package applications and their dependencies into containers. Containerisation may be useful when a project needs consistent application environments across development, testing, and deployment.",
  },
  {
    question: "Can DevOps help reduce deployment errors?",
    answer:
      "Automated builds, repeatable deployment steps, validation checks, and environment management can reduce certain types of manual mistakes. They do not eliminate every risk, so testing, monitoring, access control, and appropriate release procedures remain important.",
  },
  {
    question: "Do small businesses need DevOps?",
    answer:
      "DevOps practices can be useful for projects of different sizes. A small project may only need source control and a simple automated deployment workflow, while a larger platform may require more advanced infrastructure automation and monitoring.",
  },
];

export default function DevOpsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* EDITORIAL HERO */}
      <section className="relative bg-[#f5f8ff]">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <GitBranch size={16} />
              DevOps Engineering & Automation
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Development / Delivery / Operations
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Better Code.
                <span className="block text-blue-600">Smarter Delivery.</span>
                <span className="block text-slate-400">Stronger Operations.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Modern software development requires more than writing code.
                Applications also need dependable build processes, structured
                testing, consistent deployments, and ongoing operational
                attention.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-slate-500">
                ZYNOVA AI Solutions helps businesses introduce practical
                DevOps workflows that connect development and operations. We
                focus on automation, delivery consistency, infrastructure
                organisation, and visibility across the software lifecycle.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Discuss Your DevOps Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/cloud"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Explore Cloud Solutions
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-7">
                <div>
                  <GitBranch className="text-blue-600" size={23} />
                  <p className="mt-3 text-sm font-bold text-slate-900">
                    Version Control
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Organised code
                  </p>
                </div>
                <div>
                  <Workflow className="text-violet-600" size={23} />
                  <p className="mt-3 text-sm font-bold text-slate-900">
                    Automation
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Repeatable workflows
                  </p>
                </div>
                <div>
                  <Activity className="text-cyan-600" size={23} />
                  <p className="mt-3 text-sm font-bold text-slate-900">
                    Monitoring
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Operational insight
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-violet-100/50 to-cyan-100/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/50">
                <div
                  className="relative min-h-[480px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-slate-950/10" />

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur">
                      ENGINEERING WORKFLOW
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur">
                      <Terminal size={19} />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                      From Commit to Production
                    </p>
                    <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                      Engineering a smoother path to delivery.
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                      Connect code, automated checks, deployment, and
                      monitoring through a structured workflow.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
                  <span className="text-sm font-semibold text-slate-700">
                    Software delivery lifecycle
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CircleDot size={12} />
                    Continuous improvement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - EDITORIAL TWO COLUMN */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Beyond Development
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Software delivery is a continuous journey.
            </h2>
            <div className="mt-7 h-1.5 w-20 rounded-full bg-blue-600" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Software teams work across many connected activities. Developers
              write code, review changes, resolve issues, and prepare new
              features. Operations teams manage application environments,
              infrastructure, deployments, and system availability. When these
              activities are disconnected, software delivery can become
              difficult to coordinate.
            </p>
            <p>
              DevOps encourages collaboration and automation across these
              responsibilities. It helps teams establish repeatable processes
              for integrating code, validating changes, preparing releases,
              and understanding application behaviour after deployment.
            </p>
            <p>
              A good DevOps workflow is not necessarily the most complicated
              one. It should be appropriate for the product, team size,
              technology stack, and operational requirements. A small
              application may benefit from a straightforward automated build
              and deployment process, while a larger platform may need
              container orchestration, infrastructure automation, monitoring,
              and additional release controls.
            </p>
            <p>
              At ZYNOVA, we focus on the practical value of DevOps. We look at
              where repetitive tasks can be automated, where errors can be
              detected earlier, and how teams can gain better visibility into
              the process of delivering and maintaining software.
            </p>
          </div>
        </div>
      </section>

      {/* DARK PIPELINE SECTION */}
      <section className="relative overflow-hidden bg-[#101827] py-20 text-white lg:py-28">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                The CI/CD Pipeline
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                A connected path from source code to live application.
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-slate-300">
              A CI/CD pipeline organises the activities involved in preparing
              and delivering software. Each stage has a purpose, and automated
              checks can help teams identify problems before a release moves
              forward.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {pipelineStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.label} className="relative">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-300/50 hover:bg-white/[0.09]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                        {stage.label}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-cyan-300">
                      <Icon size={27} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {stage.detail}
                    </p>
                  </div>
                  {index !== pipelineStages.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-300 xl:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div>
              <p className="font-semibold text-white">
                A pipeline should match your application.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Testing, approval, and deployment stages can be adapted to
                project requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Plan Your Pipeline <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTICES - NUMBERED EDITORIAL LIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Engineering Practices
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            The building blocks of a dependable DevOps workflow.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            DevOps brings together multiple engineering practices. They do not
            all need to be introduced at once. The right combination depends
            on how your applications are built, delivered, and operated.
          </p>
        </div>

        <div className="space-y-5">
          {devopsPractices.map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                key={practice.number}
                className="grid gap-7 rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 md:grid-cols-[90px_1fr_1fr] md:items-start md:p-9"
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="text-3xl font-bold text-blue-100 md:text-4xl">
                    {practice.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 md:mt-5">
                    <Icon size={24} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                    {practice.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-slate-600">
                    {practice.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6f9ff] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Key Considerations
                  </p>
                  <ul className="mt-5 space-y-3">
                    {practice.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-blue-600"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* IMAGE STORY SECTION */}
      <section className="bg-[#f6f8fc] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                DevOps in Practice
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Where engineering workflows make a difference.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-slate-600">
              DevOps practices can support different kinds of software
              projects. The workflow should reflect the way each product is
              developed, tested, released, and maintained.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur">
                    {item.label}
                  </span>
                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-700">
                    <CheckCircle2 size={17} />
                    Practical workflow planning
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK - DIFFERENT HORIZONTAL LAYOUT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Tools & Technologies
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Use the right tools for the right workflow.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              DevOps is not tied to one technology or platform. Different
              projects use different tools depending on their programming
              languages, application architecture, infrastructure, and team
              requirements.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We consider the existing technology stack before recommending
              tools. The aim is to build a maintainable workflow rather than
              introduce unnecessary complexity.
            </p>
            <Link
              href="/expertise"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
            >
              Explore Our Expertise <ArrowRight size={18} />
            </Link>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-slate-900">
                        {technology.name}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {technology.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {technology.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW TIMELINE */}
      <section className="bg-[#f5f8ff] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How We Work
            </p>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              A practical process for DevOps implementation.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Each project begins with understanding the existing environment.
              From there, we define a suitable workflow, configure the
              necessary automation, and review the results before ongoing
              improvements are considered.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-blue-200 sm:left-[31px]" />

            <div className="space-y-8">
              {workflowSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative grid grid-cols-[48px_1fr] gap-5 sm:grid-cols-[64px_1fr] sm:gap-7"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f5f8ff] bg-blue-600 text-xs font-bold text-white shadow-md sm:h-16 sm:w-16">
                    {step.number}
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-lg sm:p-8">
                    <h3 className="text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-8 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Frequently Asked Questions
          </p>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Understanding DevOps
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Here are answers to common questions about DevOps engineering,
            CI/CD, automation, and software delivery.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition open:border-blue-200 open:bg-blue-50/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900 marker:hidden">
                <span className="flex items-start gap-4">
                  <span className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </span>
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition group-open:rotate-45 group-open:bg-blue-600 group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-8 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 px-7 py-16 text-center shadow-2xl shadow-blue-900/15 sm:px-14 lg:py-20">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <GitPullRequest size={30} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Improve Your Software Delivery
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's create a more connected engineering workflow.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
              Whether you need a CI/CD pipeline, automated deployment,
              containerisation, or a more structured development process,
              ZYNOVA AI Solutions can help you explore a practical DevOps
              direction for your project.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Start a Conversation <ArrowRight size={18} />
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
