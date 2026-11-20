
import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Database,
  Eye,
  FileBarChart,
  Gauge,
  Layers3,
  LineChart,
  PieChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Business Data Analytics",
    description:
      "Transform business information into meaningful analysis. Explore operational performance, customer activity, sales patterns, and other important indicators to understand what is happening across your organisation.",
    icon: BarChart3,
    tag: "Data Analysis",
  },
  {
    title: "Interactive BI Dashboards",
    description:
      "Bring important business indicators into organised visual dashboards. Present performance measures, trends, comparisons, and operational information in a format that supports easier interpretation.",
    icon: Gauge,
    tag: "Visual Reporting",
  },
  {
    title: "Data Integration & Preparation",
    description:
      "Bring information together from different sources and prepare it for analysis. Structured data preparation can help reduce inconsistencies and provide a more useful foundation for reporting.",
    icon: Database,
    tag: "Data Management",
  },
  {
    title: "Performance & KPI Monitoring",
    description:
      "Define and monitor key performance indicators that reflect business priorities. Compare results over time, identify areas that need attention, and make important measures easier to track.",
    icon: Target,
    tag: "Performance",
  },
  {
    title: "Predictive Business Insights",
    description:
      "Explore historical patterns and suitable analytical models to support forecasting and planning. Predictive techniques can help organisations examine possible future scenarios.",
    icon: TrendingUp,
    tag: "Predictive Analytics",
  },
  {
    title: "Automated Business Reporting",
    description:
      "Reduce repetitive reporting activities by organising data collection, calculations, report generation, and scheduled information delivery into a more consistent process.",
    icon: FileBarChart,
    tag: "Reporting",
  },
];

const applications = [
  {
    title: "Sales & Revenue Intelligence",
    description:
      "Understand revenue patterns, compare sales performance, examine product movement, and identify trends across different reporting periods.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85",
    number: "01",
  },
  {
    title: "Customer & Market Insights",
    description:
      "Analyse customer interactions, purchasing behaviour, engagement patterns, and market information to support better business planning.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85",
    number: "02",
  },
  {
    title: "Operations & Productivity",
    description:
      "Review operational measures, process activity, resource utilisation, and workflow performance to understand where improvements may be needed.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85",
    number: "03",
  },
];

const dataSources = [
  {
    name: "Business Applications",
    description: "Operational platforms and internal tools",
    icon: Layers3,
  },
  {
    name: "Databases",
    description: "Structured records and business information",
    icon: Database,
  },
  {
    name: "Web & Digital Platforms",
    description: "Website and customer activity data",
    icon: Eye,
  },
  {
    name: "External Data",
    description: "Authorised third-party information sources",
    icon: Search,
  },
];

const stages = [
  {
    number: "01",
    title: "Collect",
    description:
      "Identify and gather relevant information from authorised business systems and data sources.",
    icon: Database,
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Organise, validate, and structure information so it is suitable for analysis.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Examine patterns, comparisons, relationships, and performance indicators.",
    icon: Search,
  },
  {
    number: "04",
    title: "Visualise",
    description:
      "Present results through dashboards, charts, summaries, and reports.",
    icon: PieChart,
  },
  {
    number: "05",
    title: "Act",
    description:
      "Use the available insights to support business discussions and informed decisions.",
    icon: Target,
  },
];

const faqs = [
  {
    question: "What is Business Intelligence?",
    answer:
      "Business Intelligence, commonly called BI, involves collecting, organising, analysing, and presenting business information. It helps organisations understand performance, examine trends, and make decisions using available data.",
  },
  {
    question: "How is Business Intelligence different from data analytics?",
    answer:
      "The terms overlap. Business Intelligence often focuses on reporting, dashboards, and understanding business performance, while data analytics can include deeper statistical analysis, experimentation, and predictive modelling.",
  },
  {
    question: "Can you build dashboards using our existing data?",
    answer:
      "Yes, provided the data can be accessed through suitable databases, APIs, files, or other authorised sources. The project begins with reviewing the available data and defining the information your dashboard should display.",
  },
  {
    question: "Can reports be automated?",
    answer:
      "Yes. Depending on the systems involved, recurring data preparation, calculations, report generation, and delivery can be automated to reduce repetitive reporting work.",
  },
  {
    question: "Does Business Intelligence require artificial intelligence?",
    answer:
      "No. BI dashboards and reports can provide useful insights without AI. Artificial intelligence and machine learning can be added where suitable, such as for forecasting, anomaly detection, or more advanced analysis.",
  },
];

export default function BusinessIntelligencePage() {
  return (
    <main className="overflow-hidden bg-[#f8faff] text-slate-800">

      {/* HERO - ANALYTICS DASHBOARD STYLE */}

      <section className="relative px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[550px] w-[550px] rounded-full bg-blue-100/70 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-100/60 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <BrainCircuit size={16} />
              Business Intelligence & Analytics
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Understand · Analyse · Improve
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[65px]">
                Turn business data into{" "}
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  meaningful direction.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Business information becomes more valuable when it can be
                understood and used effectively. ZYNOVA AI Solutions helps
                organisations bring data together, explore performance, and
                create visual insights that support informed decisions.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-slate-500">
                From interactive dashboards and automated reporting to
                predictive analysis, we develop business intelligence
                solutions around your information, objectives, and operational
                requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Discuss Your Data Project
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="#bi-services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Explore Capabilities
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-slate-200 pt-7 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Data-driven thinking
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Visual insights
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  Business reporting
                </span>
              </div>
            </div>

            {/* DASHBOARD MOCKUP */}

            <div className="relative">
              <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-br from-blue-200 via-violet-100 to-cyan-100 blur-2xl opacity-80" />

              <div className="relative rounded-[28px] border border-white bg-white p-5 shadow-[0_25px_80px_rgba(40,60,120,0.14)] sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      Analytics workspace
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-slate-950">
                      Business overview
                    </h2>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                    Sample dashboard
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f5f7ff] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        Revenue
                      </span>
                      <CircleDollarSign size={18} className="text-blue-600" />
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      ₹8.42L
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <ArrowDownRight size={14} />
                      Illustrative value
                    </span>
                  </div>

                  <div className="rounded-2xl bg-[#f7f4ff] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        Orders
                      </span>
                      <FileBarChart size={18} className="text-violet-600" />
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      1,284
                    </p>
                    <span className="mt-2 text-xs font-medium text-slate-400">
                      Illustrative value
                    </span>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Performance overview
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Example visualisation
                      </p>
                    </div>
                    <LineChart size={20} className="text-blue-600" />
                  </div>

                  <div className="mt-6 flex h-36 items-end gap-2">
                    {[38, 55, 43, 72, 61, 84, 67, 94, 73, 88, 62, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="group relative flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400 transition hover:opacity-75"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                    <span>Period 01</span>
                    <span>Period 06</span>
                    <span>Period 12</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-slate-950 p-4 text-white">
                  <div>
                    <p className="text-sm font-semibold">
                      Insight workspace
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Explore business performance
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                    <Sparkles size={21} />
                  </div>
                </div>

                <p className="mt-4 text-center text-[10px] text-slate-400">
                  All dashboard figures are illustrative sample data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRODUCTION */}

      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              The value of business intelligence
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Better visibility creates better opportunities.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Businesses generate information through transactions, customer
              interactions, websites, internal applications, inventory
              systems, and daily operations. However, information stored in
              separate places can be difficult to interpret as a complete
              picture of business performance.
            </p>
            <p>
              Business Intelligence brings relevant information into a more
              organised analytical environment. Through data preparation,
              reporting, visualisation, and analysis, teams can explore
              performance and identify patterns that may otherwise remain
              difficult to see.
            </p>
            <p>
              The objective is not simply to create more charts. It is to
              present useful information in a way that helps people ask
              better questions, understand their results, and consider
              appropriate next steps.
            </p>
          </div>
        </div>
      </section>

      {/* BI SERVICES - CARD GRID */}

      <section
        id="bi-services"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our capabilities
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
                Turn scattered information into organised intelligence.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-500">
              Explore a range of business intelligence services designed to
              help organisations work with data more effectively and
              understand important business measures.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(40,60,120,0.09)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-blue-700 transition group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="text-4xl font-black text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[125px] text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                      {service.tag}
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DATA SOURCES - DARK SECTION */}

      <section className="relative overflow-hidden bg-[#11172e] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Connected data ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Bring your business information into one analytical view.
            </h2>
            <p className="mt-7 leading-8 text-slate-300">
              Useful business insights often depend on information from
              different systems. Sales records, customer data, financial
              information, operational activity, and digital interactions
              can each provide a different part of the business picture.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              A suitable data integration strategy can help bring these
              sources together. We consider the availability, structure,
              permissions, and quality of information before designing
              the analytical environment.
            </p>

            <Link
              href="/api-integration"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              Explore API Integration
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Data architecture
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  From sources to insights
                </h3>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <Database size={25} className="text-cyan-300" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {dataSources.map((source) => {
                const Icon = source.icon;

                return (
                  <div
                    key={source.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <Icon size={23} className="text-violet-300" />
                    <h4 className="mt-4 text-sm font-bold text-white">
                      {source.name}
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {source.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="my-5 flex items-center justify-center">
              <div className="h-8 w-px border-l border-dashed border-cyan-300/60" />
            </div>

            <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600/30 to-violet-600/30 p-5 text-center">
              <Layers3 size={27} className="mx-auto text-cyan-300" />
              <h4 className="mt-3 font-bold">Data Preparation & Analysis</h4>
              <p className="mt-2 text-xs text-slate-300">
                Organise · Validate · Analyse
              </p>
            </div>

            <div className="my-5 flex items-center justify-center">
              <div className="h-8 w-px border-l border-dashed border-cyan-300/60" />
            </div>

            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5 text-center">
              <BarChart3 size={27} className="mx-auto text-emerald-300" />
              <h4 className="mt-3 font-bold">Business Intelligence</h4>
              <p className="mt-2 text-xs text-slate-300">
                Dashboards · Reports · Insights
              </p>
            </div>

            <p className="mt-5 text-center text-[10px] text-slate-500">
              Conceptual data flow illustration
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE-BASED APPLICATIONS */}

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Business applications
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              Insights for the areas that move your business forward.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              Business Intelligence can support different departments and
              business functions. The most useful analytical view depends on
              the questions your organisation needs to answer.
            </p>
          </div>

          <div className="space-y-8">
            {applications.map((item, index) => (
              <article
                key={item.title}
                className={`grid overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8faff] lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[280px] overflow-hidden sm:min-h-[350px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                  <span className="absolute bottom-7 left-7 text-5xl font-black text-white/70">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Intelligence application
                  </span>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-slate-500">
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-violet-700"
                  >
                    Discuss this capability
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - FIVE STAGES */}

      <section className="bg-[#f1f4fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our analytical approach
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              From raw information to useful insight.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              A clear analytical process helps turn information into a
              structured resource for business planning and performance
              evaluation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-100">
                      {stage.number}
                    </span>
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {stage.description}
                  </p>
                  {index !== stages.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1 text-blue-600 lg:block">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE DATA SECTION */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-100 via-white to-violet-100 p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-200/80" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-violet-200/80" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                <ShieldCheck size={31} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-950">
                Responsible use of business data.
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Business intelligence depends on information that is
                appropriate, reliable, and handled with care. Data access,
                quality, security, and governance should be considered
                throughout the analytical lifecycle.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Appropriate data access permissions",
                  "Data quality and validation",
                  "Secure information handling",
                  "Clear reporting definitions",
                  "Responsible analytical practices",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-700"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Data quality & governance
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Trust in your insights starts with trust in your data.
            </h2>
            <p className="mt-7 leading-8 text-slate-600">
              A dashboard can look impressive while still presenting
              incomplete or inconsistent information. Reliable business
              intelligence requires attention to where data comes from, how
              it is defined, and whether it is suitable for the questions
              being asked.
            </p>
            <p className="mt-5 leading-8 text-slate-500">
              We consider data preparation, validation, permissions, and
              reporting definitions as part of the solution. This helps
              stakeholders interpret information more consistently and
              understand the limitations of their analysis.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Database size={24} className="text-blue-600" />
                <h3 className="mt-4 font-bold text-slate-900">
                  Data quality
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Consistent and validated information.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <ShieldCheck size={24} className="text-violet-600" />
                <h3 className="mt-4 font-bold text-slate-900">
                  Data protection
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Appropriate access and handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Business Intelligence, explained.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Explore common questions about dashboards, reporting, data
              analysis, and building an analytical foundation for your
              organisation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-violet-700"
            >
              Have another question?
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#f8faff] p-6 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span className="flex items-start gap-4">
                    <span className="text-sm font-bold text-violet-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={19}
                    className="shrink-0 text-slate-400 transition group-open:rotate-90 group-open:text-blue-600"
                  />
                </summary>

                <p className="mt-5 pl-9 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#11172e] px-8 py-16 text-center text-white sm:px-14 sm:py-20">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/30 blur-[110px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
              <LineChart size={32} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Make data work for your business
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Ready to see your business information differently?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Let's explore how dashboards, reporting, and business analytics
              can help your organisation understand performance and make
              more informed decisions.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Start Your BI Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
