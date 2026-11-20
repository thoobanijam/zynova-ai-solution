
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Cpu,
  Database,
  Network,
  Sparkles,
  Workflow,
  MessageSquare,
  ScanSearch,
  BarChart3,
  ShieldCheck,
  Lightbulb,
  Code2,
  FileSearch,
  Languages,
  WandSparkles,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  CheckCircle2,
  Layers3,
  Target,
  Zap,
  RefreshCw,
  Users,
} from "lucide-react";

const aiServices = [
  {
    icon: BrainCircuit,
    title: "Custom AI Development",
    description:
      "We develop AI-powered applications designed around specific business requirements. Rather than forcing a business process into a generic tool, custom AI development makes it possible to build functionality that fits your workflows, users, and operational objectives.",
    details:
      "From intelligent features inside existing applications to dedicated AI-powered platforms, solutions can be designed to support practical business use cases and evolve as requirements change.",
    tags: ["Custom AI applications", "AI integration", "Business solutions"],
    color: "blue",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "AI-powered conversational systems can help businesses respond to common questions, guide customers through services, and make information easier to access. We explore chatbot experiences that go beyond simple scripted responses by using relevant business information and conversational AI capabilities.",
    details:
      "Virtual assistants can support customer service, internal knowledge access, appointment enquiries, product discovery, and other communication workflows.",
    tags: ["Customer support", "Virtual assistants", "Knowledge access"],
    color: "violet",
  },
  {
    icon: Workflow,
    title: "Intelligent Process Automation",
    description:
      "Many business activities involve repetitive steps, manual data entry, document handling, and information transfer between systems. AI-enabled automation can help reduce unnecessary manual work while improving consistency and visibility across business operations.",
    details:
      "We consider how AI, APIs, workflow engines, and existing business applications can work together to support more efficient processes.",
    tags: ["Workflow automation", "Task processing", "System integration"],
    color: "cyan",
  },
  {
    icon: ScanSearch,
    title: "Machine Learning Solutions",
    description:
      "Machine learning can help applications identify patterns, classify information, estimate future outcomes, and make predictions from suitable datasets. We explore machine learning approaches according to the quality of available data and the problem a business wants to address.",
    details:
      "Potential applications include demand forecasting, recommendation systems, classification, anomaly detection, and predictive analysis.",
    tags: ["Prediction", "Classification", "Pattern recognition"],
    color: "emerald",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Businesses work with large amounts of written and conversational information, including emails, documents, feedback, reports, and support enquiries. Natural Language Processing helps software understand, classify, extract, and work with human language.",
    details:
      "NLP capabilities can support document understanding, text summarisation, sentiment analysis, information extraction, and multilingual communication.",
    tags: ["Text analysis", "Language processing", "Information extraction"],
    color: "pink",
  },
  {
    icon: BarChart3,
    title: "AI Data Analytics",
    description:
      "Data becomes more useful when businesses can interpret it and connect insights to decisions. AI-assisted analytics can help identify trends, highlight unusual activity, summarise information, and support exploration of complex datasets.",
    details:
      "We focus on connecting analytics capabilities with business questions so that insights can support planning, operations, and performance improvement.",
    tags: ["Business intelligence", "Predictive insights", "Data exploration"],
    color: "orange",
  },
];

const capabilities = [
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Extract and organise useful information from invoices, forms, reports, and other business documents.",
  },
  {
    icon: Languages,
    title: "Language Understanding",
    description:
      "Work with text and conversational information through classification, summarisation, and language-based tools.",
  },
  {
    icon: WandSparkles,
    title: "Generative AI",
    description:
      "Explore AI-assisted content generation, summarisation, knowledge support, and productivity experiences.",
  },
  {
    icon: Database,
    title: "Knowledge-Based AI",
    description:
      "Connect AI experiences with relevant business information to support more context-aware responses.",
  },
  {
    icon: Network,
    title: "AI System Integration",
    description:
      "Connect AI capabilities with existing applications, APIs, databases, and operational platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Design",
    description:
      "Consider privacy, security, reliability, transparency, and human oversight when designing AI solutions.",
  },
];

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "AI can support product discovery, customer enquiries, inventory insights, demand forecasting, and personalised shopping experiences.",
  },
  {
    icon: Building2,
    title: "Business & Enterprise",
    description:
      "Organisations can explore AI for internal knowledge management, document processing, workflow assistance, and operational analysis.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Appropriately governed AI applications may assist with administrative workflows, information organisation, and non-diagnostic operational tasks.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "AI-powered learning experiences can support content discovery, educational assistance, knowledge access, and administrative activities.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Machine learning and data analysis can help explore equipment patterns, production information, quality trends, and maintenance planning.",
  },
  {
    icon: BarChart3,
    title: "Finance & Analytics",
    description:
      "AI can assist with document classification, data analysis, anomaly identification, and information processing under appropriate controls.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Challenge",
    description:
      "We begin by learning about your business, understanding the problem, identifying the intended users, and discussing what a successful outcome should look like.",
  },
  {
    number: "02",
    title: "Evaluate Data & Feasibility",
    description:
      "We examine relevant data sources, technical requirements, integration needs, and potential limitations to determine which AI approach is appropriate.",
  },
  {
    number: "03",
    title: "Design the Solution",
    description:
      "We define the application experience, AI capabilities, system architecture, security considerations, and the overall implementation direction.",
  },
  {
    number: "04",
    title: "Develop & Integrate",
    description:
      "We build the solution, connect relevant systems, configure AI components, and develop the application features required for the use case.",
  },
  {
    number: "05",
    title: "Test & Validate",
    description:
      "We evaluate output quality, reliability, usability, performance, and relevant safety considerations before preparing the solution for deployment.",
  },
  {
    number: "06",
    title: "Deploy & Improve",
    description:
      "After deployment, we consider feedback, changing requirements, monitoring needs, and opportunities to refine the solution over time.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "More Efficient Workflows",
    description:
      "Reduce repetitive manual activities by exploring suitable AI-assisted processes and automation opportunities.",
  },
  {
    icon: Target,
    title: "Better-Informed Decisions",
    description:
      "Use relevant data analysis and predictive techniques to help teams explore information and understand possible patterns.",
  },
  {
    icon: Users,
    title: "Improved User Experiences",
    description:
      "Create more responsive digital experiences through conversational interfaces, intelligent search, and context-aware assistance.",
  },
  {
    icon: Layers3,
    title: "Connected Applications",
    description:
      "Integrate AI capabilities into existing software and workflows rather than treating every AI project as a completely separate system.",
  },
];

const faqs = [
  {
    question: "What is AI development?",
    answer:
      "AI development is the process of creating software that uses artificial intelligence techniques to perform tasks such as understanding language, recognising patterns, generating content, analysing information, or supporting decisions. The specific approach depends on the business problem and available data.",
  },
  {
    question: "Can AI be integrated into an existing application?",
    answer:
      "Yes. AI capabilities can often be integrated into existing websites, mobile applications, internal systems, and business platforms through APIs and suitable application architecture. The best approach depends on the current technology stack, data access, security requirements, and desired functionality.",
  },
  {
    question: "Does every business need custom AI?",
    answer:
      "No. Some business challenges can be addressed with existing AI tools or conventional software automation. We believe the right solution should be selected according to the actual problem, expected value, implementation effort, and long-term requirements.",
  },
  {
    question: "Is business data important for AI projects?",
    answer:
      "Data can be important for many AI applications, particularly machine learning and business-specific knowledge systems. However, not every AI solution requires a custom training dataset. Some applications use existing AI models with carefully designed instructions, approved information sources, and appropriate integrations.",
  },
];

const colorStyles: Record<
  string,
  { bg: string; text: string; border: string; light: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    light: "from-blue-50",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    light: "from-violet-50",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
    light: "from-cyan-50",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    light: "from-emerald-50",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
    light: "from-pink-50",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    light: "from-orange-50",
  },
};

export default function AIDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#fcfdff] text-slate-800">
      {/* HERO SECTION */}
      <section className="relative px-6 pb-24 pt-24 sm:px-10 lg:px-20 lg:pb-32 lg:pt-32">
        <div className="absolute -right-20 top-0 -z-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[130px]" />
        <div className="absolute -bottom-20 left-0 -z-0 h-96 w-96 rounded-full bg-violet-100/60 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Artificial Intelligence Services
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Building smarter solutions with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Artificial Intelligence.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              Artificial Intelligence is changing how organisations understand
              information, serve customers, automate activities, and develop
              digital products. At ZYNOVA AI Solutions, we explore practical
              ways to bring AI capabilities into business applications and
              everyday operations.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-500">
              From custom AI applications and intelligent chatbots to machine
              learning, natural language processing, and workflow automation,
              our focus is on creating useful technology aligned with real
              business requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss an AI Project <ArrowRight size={19} />
              </Link>
              <Link
                href="/approach"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Our Approach <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
              <div>
                <p className="font-bold text-slate-900">Intelligent</p>
                <p className="mt-1 text-sm text-slate-500">
                  AI-powered experiences
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Integrated</p>
                <p className="mt-1 text-sm text-slate-500">
                  Connected applications
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Purposeful</p>
                <p className="mt-1 text-sm text-slate-500">
                  Business-focused solutions
                </p>
              </div>
            </div>
          </div>

          {/* AI VISUAL PANEL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200 via-violet-200 to-cyan-200 opacity-50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-7 shadow-[0_25px_90px_rgba(30,64,175,0.13)] sm:p-10">
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-violet-100/70 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    AI Ecosystem
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Intelligence in Action
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <BrainCircuit size={28} />
                </div>
              </div>

              <div className="relative mx-auto my-10 flex h-64 w-64 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-100" />
                <div className="absolute inset-5 rounded-full border border-dashed border-violet-200" />
                <div className="absolute inset-10 rounded-full border border-cyan-200" />
                <div className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 blur-xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-xl shadow-violet-200">
                  <BrainCircuit size={55} />
                </div>

                <div className="absolute left-0 top-12 rounded-xl border border-blue-100 bg-white p-3 text-blue-600 shadow-lg">
                  <Database size={23} />
                </div>
                <div className="absolute right-0 top-12 rounded-xl border border-violet-100 bg-white p-3 text-violet-600 shadow-lg">
                  <Network size={23} />
                </div>
                <div className="absolute bottom-0 left-10 rounded-xl border border-cyan-100 bg-white p-3 text-cyan-600 shadow-lg">
                  <Bot size={23} />
                </div>
                <div className="absolute bottom-0 right-10 rounded-xl border border-emerald-100 bg-white p-3 text-emerald-600 shadow-lg">
                  <Workflow size={23} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Machine Learning", icon: Cpu },
                  { name: "AI Automation", icon: Workflow },
                  { name: "Data Intelligence", icon: Database },
                  { name: "Smart Applications", icon: Code2 },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-xl bg-slate-50 p-3"
                    >
                      <Icon size={17} className="text-blue-600" />
                      <span className="text-xs font-semibold text-slate-600">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5 text-white">
                <div className="flex items-center gap-2 text-blue-100">
                  <Sparkles size={17} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Our Focus
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold">
                  Turning intelligence into practical business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-slate-100 bg-white px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Understanding AI Development
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              AI is more than technology. It is a new way to solve problems.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Artificial Intelligence refers to technologies that enable
              computer systems to perform tasks that commonly require human
              intelligence. These tasks can include understanding language,
              identifying patterns, recognising images, generating content,
              processing information, and making predictions based on data.
            </p>
            <p>
              Modern AI development combines different technologies, including
              machine learning, deep learning, generative AI, natural language
              processing, and intelligent automation. Each technology offers
              different capabilities, and the most suitable choice depends on
              the requirements of the application.
            </p>
            <p>
              For businesses, AI becomes valuable when it is connected to a
              meaningful objective. It may help employees find information
              faster, support customers more effectively, process documents,
              analyse operational data, or introduce new features into digital
              products.
            </p>
            <p>
              Our approach is to understand the business context first and then
              explore the appropriate AI capabilities. This helps avoid adding
              unnecessary complexity and keeps development focused on useful
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Develop
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              AI development services for modern businesses.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              Different challenges require different AI capabilities. We
              explore a range of development possibilities, from intelligent
              applications and conversational systems to data-driven solutions
              and automation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              const style = colorStyles[service.color];

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[2rem] border ${style.border} bg-gradient-to-br ${style.light} via-white to-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text} transition group-hover:scale-110`}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.details}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full ${style.bg} px-3 py-1.5 text-xs font-medium ${style.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full ${style.bg} opacity-60 blur-2xl transition group-hover:scale-150`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Technical Capabilities
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Connecting AI capabilities with real applications.
              </h2>
              <p className="mt-7 leading-8 text-slate-500">
                AI solutions often involve more than an AI model. They may
                require application interfaces, databases, APIs, information
                retrieval, security controls, and integration with existing
                business systems.
              </p>
              <p className="mt-5 leading-8 text-slate-500">
                We consider these connected components when planning an AI
                project. The goal is to create an application that people can
                use within their existing workflows, with appropriate controls
                and a clear understanding of its capabilities and limitations.
              </p>

              <Link
                href="/expertise"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-4"
              >
                Explore Our Technical Expertise <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-100 bg-[#fafbff] p-6 transition hover:border-violet-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-5 font-bold text-slate-900">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              AI Across Industries
            </p>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              Exploring AI opportunities across business sectors.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              AI is not limited to one industry. Its applications vary
              according to the information, workflows, customers, and
              operational requirements of each sector.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-gradient-to-br from-blue-50 via-[#f8f8ff] to-violet-50 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                How We Build
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                A clear path from business challenge to AI solution.
              </h2>
              <p className="mt-7 leading-8 text-slate-600">
                AI development requires careful planning, technical
                evaluation, and continuous validation. Our process helps
                connect the original business requirement with the technical
                decisions needed to create a useful solution.
              </p>
              <p className="mt-5 leading-8 text-slate-500">
                We also recognise that AI systems can produce incorrect or
                unexpected outputs. Testing, human oversight, and appropriate
                safeguards are important considerations throughout the
                development lifecycle.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-blue-600">
                  <RefreshCw size={22} />
                  <span className="font-bold">Continuous improvement</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Feedback and evaluation help identify opportunities to refine
                  the solution as real-world requirements become clearer.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-white bg-white p-7 shadow-sm transition hover:shadow-lg sm:p-9"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-100">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-8 text-slate-500 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Business Value
            </p>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
              What can thoughtful AI adoption make possible?
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              The value of AI should be considered in terms of the problem it
              addresses and the improvements it may support. The right
              application can help businesses rethink how information is
              accessed, tasks are completed, and digital services are
              delivered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex gap-6 rounded-3xl border border-slate-100 bg-[#fafbff] p-7 transition hover:border-blue-200 hover:bg-white hover:shadow-lg sm:p-9"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                      Benefit 0{index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE AI */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Responsible AI
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Innovation should be built with responsibility.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              AI systems can influence how information is interpreted and how
              decisions are supported. That makes responsible design an
              important part of any AI initiative. Businesses should understand
              what a system can do, where its limitations exist, and when human
              review is necessary.
            </p>
            <p>
              Privacy, data protection, security, transparency, reliability,
              and appropriate access controls should be considered from the
              beginning of a project. The level of control required will depend
              on the application, the information being processed, and the
              potential consequences of incorrect outputs.
            </p>
            <p>
              We believe AI should support people rather than remove
              accountability. Human oversight, clear expectations, and
              continuous evaluation help create more dependable technology
              experiences.
            </p>

            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {[
                "Privacy-aware design",
                "Security considerations",
                "Human oversight",
                "Output evaluation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Understanding AI development.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Explore some common questions about AI technologies, business
              applications, and the process of developing intelligent
              solutions.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-4"
            >
              Ask us a question <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-100 bg-[#fafbff] p-6 open:border-blue-100 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>
                    <span className="mr-3 text-sm font-bold text-blue-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-8 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-200/50 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/50 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg shadow-blue-100">
            <BrainCircuit size={32} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Let's Explore What's Possible
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Have an idea for an AI-powered solution?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            Let's discuss your business challenge, explore suitable AI
            capabilities, and identify a practical direction for your next
            digital initiative.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start Your AI Project <ArrowRight size={19} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              View All Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
