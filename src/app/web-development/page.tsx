
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Palette,
  Gauge,
  ShieldCheck,
  Search,
  Database,
  Cloud,
  Layers3,
  MonitorSmartphone,
  Workflow,
  CheckCircle2,
  Rocket,
  Lightbulb,
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  BriefcaseBusiness,
  Sparkles,
  Laptop,
  Server,
  MousePointer2,
  Terminal,
  PanelsTopLeft,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Website Development",
    description:
      "We develop custom websites that communicate your brand identity, present your services clearly, and create meaningful digital experiences. Every website is planned around your business objectives, audience expectations, and long-term growth requirements.",
    features: [
      "Corporate and business websites",
      "Professional portfolio websites",
      "Landing pages and campaign websites",
      "Custom website functionality",
    ],
    color: "blue",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Create a convenient online shopping experience with an e-commerce platform designed to make product discovery, purchasing, and order management easier. We focus on intuitive navigation, responsive layouts, and a smooth customer journey.",
    features: [
      "Online product catalogues",
      "Shopping cart and checkout",
      "Product and order management",
      "Payment gateway integration",
    ],
    color: "violet",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Transform business processes into connected web applications. From internal management systems to customer-facing platforms, we develop interactive applications that help teams organize information, manage operations, and work more efficiently.",
    features: [
      "Business management platforms",
      "Admin dashboards and portals",
      "Customer and employee portals",
      "Workflow-based applications",
    ],
    color: "cyan",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Your website should provide a consistent experience on every screen. We create responsive interfaces that adapt to desktops, laptops, tablets, and mobile devices while maintaining readability, usability, and visual consistency.",
    features: [
      "Mobile-first layouts",
      "Flexible page structures",
      "Touch-friendly interactions",
      "Cross-device interface testing",
    ],
    color: "pink",
  },
  {
    number: "05",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "A successful digital product needs more than an attractive appearance. We consider how visitors navigate, understand, and interact with your website. Our design process combines visual clarity, thoughtful structure, and user-focused functionality.",
    features: [
      "Website wireframes",
      "Interface design systems",
      "User journey planning",
      "Interactive prototypes",
    ],
    color: "orange",
  },
  {
    number: "06",
    icon: Gauge,
    title: "Website Optimization",
    description:
      "A well-developed website should be efficient, accessible, and easy to discover. We consider loading performance, technical structure, search visibility, and usability to create a stronger foundation for your online presence.",
    features: [
      "Performance improvements",
      "Technical SEO foundations",
      "Image and asset optimization",
      "Accessibility considerations",
    ],
    color: "emerald",
  },
];

const technologies = [
  {
    icon: Code2,
    name: "Frontend Development",
    tools: "React, Next.js, TypeScript",
    description:
      "Modern interfaces built with reusable components, structured code, and responsive layouts.",
  },
  {
    icon: Server,
    name: "Backend Development",
    tools: "Node.js, Express, APIs",
    description:
      "Application logic, server-side functionality, and integrations that connect digital systems.",
  },
  {
    icon: Database,
    name: "Database Solutions",
    tools: "PostgreSQL, MongoDB, Firebase",
    description:
      "Organized data structures that support application functionality and reliable information management.",
  },
  {
    icon: Cloud,
    name: "Cloud & Deployment",
    tools: "Vercel, Cloud Platforms, CI/CD",
    description:
      "Deployment workflows and hosting foundations that help applications become accessible online.",
  },
  {
    icon: ShieldCheck,
    name: "Security & Reliability",
    tools: "Authentication, Validation, Testing",
    description:
      "Practical security considerations, input validation, and testing throughout development.",
  },
  {
    icon: Search,
    name: "SEO & Performance",
    tools: "Metadata, Core Web Vitals, Analytics",
    description:
      "Technical foundations that help search engines understand your content and visitors use your website.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover & Understand",
    icon: Lightbulb,
    description:
      "We begin by understanding your business, target audience, project goals, and the challenges your website should address. This stage establishes the direction for the entire project.",
    details: [
      "Understand business requirements",
      "Identify target audiences",
      "Define project objectives",
    ],
  },
  {
    number: "02",
    title: "Plan & Design",
    icon: Palette,
    description:
      "We organize the website structure, define the user journey, and plan the visual direction. Wireframes and design concepts help establish how information and features will work together.",
    details: [
      "Plan website architecture",
      "Create page layouts",
      "Establish visual direction",
    ],
  },
  {
    number: "03",
    title: "Develop & Integrate",
    icon: Code2,
    description:
      "The approved design is transformed into a functional website. We build responsive components, connect required services, and implement the features needed to support your business.",
    details: [
      "Build frontend interfaces",
      "Develop backend functionality",
      "Connect APIs and databases",
    ],
  },
  {
    number: "04",
    title: "Test & Refine",
    icon: ShieldCheck,
    description:
      "We review the website across different devices and screen sizes, check important user interactions, and address issues that may affect the experience or functionality.",
    details: [
      "Responsive testing",
      "Functionality checks",
      "Performance review",
    ],
  },
  {
    number: "05",
    title: "Launch & Deploy",
    icon: Rocket,
    description:
      "After the required reviews, the website is prepared for deployment. We consider hosting, domain configuration, production settings, and the steps needed to make the website available online.",
    details: [
      "Production preparation",
      "Domain and hosting setup",
      "Deployment support",
    ],
  },
  {
    number: "06",
    title: "Improve & Evolve",
    icon: Workflow,
    description:
      "A website can continue to evolve as your business changes. Future improvements may include new pages, additional integrations, content updates, and functionality enhancements.",
    details: [
      "Content and feature updates",
      "Ongoing improvements",
      "Future expansion planning",
    ],
  },
];

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Online stores, product catalogues, inventory interfaces, and digital shopping experiences.",
  },
  {
    icon: Building2,
    title: "Corporate & Enterprise",
    description:
      "Professional company websites, service portals, and business information platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Educational websites, learning portals, course platforms, and student-facing applications.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Informational websites, appointment interfaces, and digital healthcare service experiences.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Product presentation websites, operational dashboards, and business process applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Consultancy websites, agency portfolios, booking interfaces, and customer enquiry platforms.",
  },
];

const benefits = [
  {
    title: "A Stronger Digital Presence",
    description:
      "Present your organization with a professional website that communicates your services, values, and business identity.",
  },
  {
    title: "Better Customer Experiences",
    description:
      "Help visitors find information, understand your offerings, and interact with your business through intuitive navigation.",
  },
  {
    title: "More Efficient Operations",
    description:
      "Use web applications and integrations to organize information and simplify selected business activities.",
  },
  {
    title: "Room to Grow",
    description:
      "Build on a flexible technical foundation that can accommodate new content, features, and business requirements.",
  },
];

const faqs = [
  {
    question: "What types of websites can ZYNOVA develop?",
    answer:
      "Web development projects can include corporate websites, business websites, e-commerce stores, portfolio websites, landing pages, web applications, dashboards, and customer portals. The project scope depends on your business goals and required functionality.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive development is an important part of our approach. Website layouts are planned to adapt to different screen sizes, including mobile phones, tablets, laptops, and desktop computers.",
  },
  {
    question: "Can you develop a website with a database?",
    answer:
      "Yes. Where a project requires dynamic information, we can plan backend functionality, database structures, APIs, and administrative interfaces to support the required workflows.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "An existing website can be reviewed for its content, structure, user experience, visual design, and technical requirements. A redesign can focus on improving these areas while considering the parts of your current website that should be retained.",
  },
  {
    question: "Will my website be search-engine friendly?",
    answer:
      "We can include technical SEO foundations such as page metadata, semantic content structure, responsive design, and performance considerations. Search visibility also depends on content quality, competition, authority, and ongoing SEO work.",
  },
  {
    question: "Can the website be expanded in the future?",
    answer:
      "Yes. Project architecture and technology choices can be planned with future requirements in mind. New pages, integrations, dashboards, and other capabilities can be introduced as your business needs evolve.",
  },
];

const colorStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#fcfcff] text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-white px-5 pb-20 pt-24 sm:px-8 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Code2 size={16} />
              Digital Solutions / Web Development
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.13] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building digital experiences that move your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                business forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Your website is more than an online destination. It is a
              connection between your business, your customers, and your
              opportunities. At ZYNOVA AI Solutions, we approach web
              development as a combination of thoughtful design, modern
              engineering, and practical business understanding.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-500">
              From professional business websites to feature-rich web
              applications, we focus on creating digital platforms that are
              responsive, intuitive, and designed around the way people use
              technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your Project
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore Our Expertise
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-7">
              {[
                "Responsive Experiences",
                "Modern Technology",
                "Business-Focused Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 size={17} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white bg-gradient-to-br from-[#f0f5ff] via-[#f8f7ff] to-[#eafaff] p-5 shadow-2xl shadow-blue-100/60 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/80 pb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    zynova.digital
                  </span>
                </div>
                <Globe size={19} className="text-blue-600" />
              </div>

              <div className="py-9 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-200">
                  <Code2 size={38} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                  The Digital Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  Ideas into
                  <br />
                  <span className="text-violet-600">Digital Reality.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-500">
                  Design, develop, connect, and evolve with modern web
                  technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: MonitorSmartphone, label: "Responsive Design" },
                  { icon: Database, label: "Connected Data" },
                  { icon: Layers3, label: "Modern Interfaces" },
                  { icon: ShieldCheck, label: "Reliable Foundations" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
                    >
                      <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                        <Icon size={19} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white bg-white/80 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    Development ecosystem
                  </span>
                  <Sparkles size={16} className="text-violet-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "APIs", "Cloud"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -left-7 top-1/3 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:block">
              <Laptop className="text-blue-600" size={25} />
              <p className="mt-2 text-xs font-bold text-slate-700">
                Modern Web
              </p>
            </div>

            <div className="absolute -right-5 bottom-12 hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-xl sm:block">
              <MousePointer2 className="text-violet-600" size={25} />
              <p className="mt-2 text-xs font-bold text-slate-700">
                User Focused
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Web Development Philosophy
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Technology should make your digital presence work harder.
            </h2>
            <div className="mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Every business has a different story, audience, and set of
              priorities. A website should reflect those differences rather
              than simply follow a generic template. We believe web development
              begins with understanding what an organization wants to
              communicate and what its customers need to accomplish.
            </p>
            <p>
              That understanding guides the structure, design, and technical
              decisions behind a digital platform. A company website may need
              to establish credibility and generate enquiries, while an
              e-commerce platform may need to make product discovery and
              purchasing simple. A web application may require secure access,
              structured data, and carefully designed workflows.
            </p>
            <p>
              Our approach brings these considerations together. We combine
              user-focused interface design with modern development practices
              to create websites and applications that are useful today and
              adaptable to tomorrow&apos;s requirements.
            </p>
            <p>
              We also recognize that launching a website is not the end of its
              journey. Content, customer expectations, and business processes
              change. A well-considered technical foundation makes it easier
              to maintain, improve, and extend your digital platform over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="px-5 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(6,182,212,0.3),transparent_40%)]" />

          <div className="relative grid items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Beyond Traditional Websites
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Create a digital platform that connects every part of your
                business.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                Modern web development can bring customer experiences,
                operational information, business workflows, and external
                services into a connected digital environment. The right
                solution depends on your requirements, but the opportunity is
                to make technology more useful across your organization.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Start a Conversation
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="relative rounded-[30px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "Web Presence" },
                    { icon: Database, label: "Data Systems" },
                    { icon: Workflow, label: "Workflows" },
                    { icon: Smartphone, label: "Mobile Access" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-4 text-center"
                      >
                        <Icon size={30} className="text-cyan-300" />
                        <span className="mt-4 text-sm font-semibold text-white">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-4 text-sm font-semibold text-white">
                  <Layers3 size={19} />
                  Connected Digital Ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Develop
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Web development services for modern businesses
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              From a focused business website to a complex digital application,
              different projects need different solutions. Explore the areas
              of web development that can support your organization&apos;s
              digital objectives.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const style = colorStyles[service.color];

              return (
                <article
                  key={service.number}
                  className="group rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className={`mt-0.5 shrink-0 ${style.text}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-7 h-1 w-12 rounded-full ${style.bg} transition-all duration-300 group-hover:w-full`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Our Technology Ecosystem
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                The right technology for the right purpose.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Technology choices influence how a website performs, how
                information is managed, and how easily a platform can evolve.
                We consider the requirements of each project before selecting
                its development tools and architecture.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Our technology approach can bring together frontend
                frameworks, backend services, databases, APIs, and cloud
                platforms. The goal is to create a coherent solution rather
                than adding technology without a clear business reason.
              </p>

              <div className="mt-8 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <Terminal className="text-violet-600" size={25} />
                  <h3 className="font-bold text-slate-900">
                    Engineering With Purpose
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Maintainable code, thoughtful architecture, useful
                  integrations, and appropriate technology choices help
                  establish a stronger foundation for digital products.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 transition hover:border-violet-200 hover:bg-violet-50/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 font-bold text-slate-900">
                      {technology.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-violet-600">
                      {technology.tools}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {technology.description}
                    </p>
                    <span className="mt-5 block text-xs font-bold text-slate-300">
                      0{index + 1} / TECHNOLOGY AREA
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How We Work
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              From the first idea to a working digital experience.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A clear development process helps keep a project organized and
              aligned with its goals. Each stage builds on the decisions made
              before it, creating a structured path from understanding the
              requirements to launching and improving the final solution.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-blue-300 via-violet-300 to-cyan-300 md:block" />

            <div className="space-y-6">
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative grid gap-6 rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:grid-cols-[80px_1fr_1fr] md:items-start md:p-8"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-100">
                      <Icon size={25} />
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-widest text-blue-600">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Key activities
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-blue-600"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gradient-to-b from-white to-[#f2f5ff] px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Industries & Business Areas
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Digital experiences for different business needs.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Every industry has different customers, processes, and
              expectations. Web platforms should reflect those differences.
              Our development approach can be adapted to a range of business
              environments and digital requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-[24px] border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Explore possibilities
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Business Value
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                A website should do more than look good.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Your digital platform can become an important part of how
                customers discover your business, how your team manages
                information, and how your organization communicates with the
                world.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                By connecting design decisions with business objectives, web
                development can create opportunities to improve customer
                interactions, make information easier to access, and support
                new ways of working.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
              >
                Talk About Your Requirements
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-7"
                >
                  <span className="text-3xl font-bold text-blue-100">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Frequently Asked Questions
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Questions about web development?
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Choosing the right website solution involves understanding
              technology, functionality, project requirements, and future
              needs. Here are some common questions to help you get started.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-6">
              <MessageIcon />
              <h3 className="mt-4 font-bold text-slate-900">
                Have a different question?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell us what you are planning to build and we can discuss the
                requirements.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
              >
                Contact our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900">
                  <span>
                    <span className="mr-3 text-sm font-bold text-blue-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-slate-200/70 pt-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 px-7 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
              <PanelsTopLeft size={31} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Let&apos;s Build Something Meaningful
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Your next digital experience starts with an idea.
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Whether you need a new business website, an e-commerce platform,
              or a custom web application, ZYNOVA AI Solutions can help you
              explore the right development direction. Let&apos;s discuss your
              goals and turn your requirements into a practical digital
              solution.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-cyan-100"
              >
                Start Your Project
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Home
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MessageIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
      <Sparkles size={23} />
    </div>
  );
}
