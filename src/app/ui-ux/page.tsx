
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  PanelsTopLeft,
  Smartphone,
  MonitorSmartphone,
  MousePointer2,
  Accessibility,
  Eye,
  Workflow,
  Search,
  PencilRuler,
  LayoutTemplate,
  Code2,
  CheckCircle2,
  MessageSquareText,
  Layers3,
  Sparkles,
  Target,
  Users,
  Lightbulb,
  Compass,
  Zap,
  ShieldCheck,
  RefreshCw,
 
  Gauge,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    number: "01",
    title: "Website UI Design",
    description:
      "We design modern website interfaces that communicate your brand clearly, guide visitors through meaningful content, and create a consistent experience across every page.",
    details: [
      "Landing page and corporate website design",
      "Responsive page layouts",
      "Visual hierarchy and content structure",
      "Brand-focused design systems",
    ],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App UI Design",
    description:
      "We create mobile-first interfaces that make applications easier to navigate. Every screen is planned around clarity, usability, and the needs of people using your product.",
    details: [
      "iOS and Android interface concepts",
      "Mobile navigation and screen flows",
      "Onboarding and registration experiences",
      "Interactive mobile components",
    ],
  },
  {
    icon: MousePointer2,
    number: "03",
    title: "User Experience Design",
    description:
      "Good user experience begins with understanding people. We explore user needs, identify friction points, and organise product journeys into simple, logical experiences.",
    details: [
      "User journey mapping",
      "Information architecture",
      "Navigation and interaction planning",
      "Usability-focused improvements",
    ],
  },
  {
    icon: PencilRuler,
    number: "04",
    title: "Wireframing & Prototyping",
    description:
      "Before development begins, we turn ideas into structured wireframes and interactive prototypes. This helps teams understand the product and review important decisions early.",
    details: [
      "Low and high-fidelity wireframes",
      "Clickable interface prototypes",
      "Screen flow documentation",
      "Early design feedback",
    ],
  },
  {
    icon: Layers3,
    number: "05",
    title: "Design Systems",
    description:
      "A design system creates consistency as your digital product grows. We organise reusable components, colours, typography, spacing, and interaction patterns into a shared foundation.",
    details: [
      "Reusable UI components",
      "Typography and colour systems",
      "Spacing and layout guidelines",
      "Component documentation",
    ],
  },
  {
    icon: Accessibility,
    number: "06",
    title: "Accessibility & Usability",
    description:
      "We consider different user needs when planning digital interfaces. Clear contrast, readable typography, predictable navigation, and understandable interactions help make products easier to use.",
    details: [
      "Readable text and colour contrast",
      "Clear interface feedback",
      "Keyboard-friendly interaction planning",
      "Accessible component considerations",
    ],
  },
];

const principles = [
  {
    icon: Users,
    title: "People First",
    description:
      "Every design decision should begin with the people who will use the product. We consider their goals, expectations, context, and everyday challenges.",
  },
  {
    icon: Eye,
    title: "Visual Clarity",
    description:
      "Strong visual hierarchy helps users understand what matters. We use layout, typography, colour, and spacing to make information easier to scan.",
  },
  {
    icon: Compass,
    title: "Simple Navigation",
    description:
      "Users should be able to understand where they are and what to do next. We organise navigation and page structure around familiar patterns.",
  },
  {
    icon: Zap,
    title: "Meaningful Interaction",
    description:
      "Buttons, menus, forms, and feedback should behave in ways people can understand. Interactions should support the task rather than distract from it.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency & Trust",
    description:
      "Consistent components and predictable behaviour help people feel confident when using a website or application.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Digital experiences should evolve. We use feedback, usability observations, and product goals to identify opportunities for improvement.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We begin by understanding your business, target audience, product goals, and project requirements. This discovery stage helps establish what the experience needs to achieve.",
    output: "Project understanding and user requirements",
  },
  {
    number: "02",
    title: "Structure",
    icon: Workflow,
    description:
      "We organise content, features, and user journeys into a clear structure. The aim is to make important information easy to find and essential tasks easy to complete.",
    output: "User flows and information architecture",
  },
  {
    number: "03",
    title: "Wireframe",
    icon: PanelsTopLeft,
    description:
      "We create page and screen layouts that define the position of content and interface elements before focusing on detailed visual styling.",
    output: "Wireframes and screen layouts",
  },
  {
    number: "04",
    title: "Design",
    icon: Palette,
    description:
      "We develop the visual direction using typography, colours, imagery, spacing, and reusable interface elements that reflect your brand.",
    output: "High-fidelity interface designs",
  },
  {
    number: "05",
    title: "Prototype",
    icon: MousePointer2,
    description:
      "We connect important screens and interactions into a prototype. This makes it easier to review the proposed experience and understand how the product will work.",
    output: "Interactive prototype",
  },
  {
    number: "06",
    title: "Refine & Handoff",
    icon: CheckCircle2,
    description:
      "We review the design, refine details, and prepare organised assets and component guidance to support the development process.",
    output: "Developer-ready design handoff",
  },
];

const industries = [
  {
    title: "Retail & E-commerce",
    description:
      "Shopping experiences with organised product discovery, clear product details, intuitive filters, and streamlined checkout journeys.",
    icon: Layers3,
  },
  {
    title: "Healthcare",
    description:
      "Clear appointment, patient information, and service interfaces designed to make important tasks easier to understand.",
    icon: ShieldCheck,
  },
  {
    title: "Education",
    description:
      "Learning platforms with structured course content, accessible dashboards, and simple student and educator journeys.",
    icon: Lightbulb,
  },
  {
    title: "Finance & Business",
    description:
      "Professional dashboards, reporting interfaces, and organised workflows that help users understand complex information.",
    icon: Gauge,
  },
  {
    title: "Travel & Hospitality",
    description:
      "Booking and travel interfaces that make searching, comparing, planning, and managing reservations more straightforward.",
    icon: Compass,
  },
  {
    title: "Startups & SaaS",
    description:
      "Product experiences that help new digital businesses explain their value and make their core features easy to use.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "User Interface (UI) design focuses on the visual and interactive elements of a digital product, including buttons, colours, typography, layouts, and components. User Experience (UX) design focuses on how people navigate and use that product. Both work together to create an experience that looks clear and feels intuitive.",
  },
  {
    question: "Can you design both websites and mobile applications?",
    answer:
      "Yes. UI/UX design can cover responsive websites, mobile applications, web applications, dashboards, and other digital products. The design approach is adapted to the platform and the needs of its users.",
  },
  {
    question: "Do you create clickable prototypes?",
    answer:
      "Prototyping can be included in the design process. Interactive prototypes connect screens and demonstrate key user journeys, helping stakeholders review an experience before development.",
  },
  {
    question: "Which design tools can be used?",
    answer:
      "Design workflows may use tools such as Figma for interface design, component libraries, collaboration, and interactive prototyping. The exact toolset depends on project requirements and the client's workflow.",
  },
  {
    question: "Can you redesign an existing website or application?",
    answer:
      "Yes. A redesign can begin with reviewing the existing experience, identifying usability issues, understanding business goals, and planning improvements to the structure and interface.",
  },
  {
    question: "Can the design be handed over to developers?",
    answer:
      "Yes. A design handoff can include organised screens, reusable components, layout guidance, typography and colour specifications, interaction notes, and relevant assets to support implementation.",
  },
];

export default function UiUxPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative isolate bg-[#f7f9ff]">
        <div className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Palette size={16} />
              Creative Digital Experiences
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              UI/UX Design That Makes
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Products Feel Simple.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              At ZYNOVA AI Solutions, we believe great digital experiences
              combine thoughtful design, useful functionality, and a clear
              understanding of people. We create user interfaces and
              experiences that help businesses communicate better and make
              digital interactions easier.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-500">
              From website layouts and mobile application screens to
              interactive prototypes and complete design systems, our approach
              brings structure and creativity together throughout the design
              journey.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Project <ArrowRight size={18} />
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
                User-centred thinking
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Responsive design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Consistent interfaces
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/50 via-violet-100/40 to-cyan-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/40">
              <div
                className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(15,23,42,0.08), rgba(37,99,235,0.12)), url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                  <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                    DESIGN WITH PURPOSE
                  </span>
                  <h2 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                    Turning complex ideas into clear experiences.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                    Thoughtful interfaces. Meaningful interactions. Better
                    digital journeys.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 p-3">
                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <Palette className="mx-auto text-blue-600" size={22} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Visual Design
                  </p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3 text-center">
                  <MousePointer2
                    className="mx-auto text-violet-600"
                    size={22}
                  />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Interaction
                  </p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-3 text-center">
                  <Users className="mx-auto text-cyan-700" size={22} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    User Focus
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
              The Value of Design
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Great design is more than what people see.
            </h2>
            <div className="mt-7 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              A digital product is often one of the most important ways a
              business communicates with its customers. The way a website
              presents information, the way an application guides a user, and
              the way an interface responds to an action can influence how
              people understand and interact with a brand.
            </p>
            <p>
              A visually attractive interface is only one part of a successful
              product. People also need to understand the available options,
              move between sections without confusion, complete tasks
              efficiently, and receive clear feedback when they interact with
              the system.
            </p>
            <p>
              This is why UI and UX design should work together. User
              experience shapes the structure and journey, while user interface
              design gives that journey a visual and interactive form. When
              both are considered from the beginning, the result can be a more
              coherent and approachable digital product.
            </p>
            <p>
              At ZYNOVA, we approach design as a combination of research,
              problem-solving, creativity, and practical thinking. Our goal is
              to help transform business requirements into digital experiences
              that are understandable, consistent, and ready to grow.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Design
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              UI/UX Services for Every Digital Touchpoint
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Every product has its own audience, purpose, and set of
              challenges. We offer design capabilities that can support
              different stages of a digital product, from an early concept to
              an established platform that needs a better experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
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
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-500"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE / EDITORIAL SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-blue-100" />
            <div
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=85')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Design Thinking
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  Understand the problem before designing the solution.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-5 -z-10 h-36 w-36 rounded-full bg-violet-100" />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Design That Solves Problems
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Start with people. Build around their needs.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Design decisions become more effective when they are connected
              to real user needs. Rather than adding visual elements simply
              because they look impressive, we consider how each part of an
              interface supports the purpose of the product.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We consider the questions users may have, the information they
              need, and the actions they want to complete. This helps us plan
              page layouts, screen sequences, navigation patterns, and
              interaction states with a clear direction.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We also consider the wider business context. A customer-facing
              website may need to communicate trust and encourage enquiries,
              while an internal dashboard may need to organise large amounts
              of information for everyday work. Each product requires a design
              approach that reflects its purpose.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand user expectations and business objectives",
                "Organise information into clear journeys",
                "Create consistent and reusable interface patterns",
                "Review interactions before development begins",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <p className="text-sm font-medium leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-blue-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Design Principles
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              The thinking behind every interface.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Strong design is built on more than individual screens. It
              depends on a collection of principles that guide decisions,
              create consistency, and keep the experience focused on the
              people using the product.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-blue-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-bold text-blue-200">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Workflow
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              From the first idea to a development-ready design.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A structured process helps keep the design connected to project
              goals. It also creates opportunities to review decisions at
              different stages instead of waiting until the entire experience
              has been completed.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our workflow can be adapted to the size, complexity, and
              requirements of each project. Some projects need a focused
              redesign, while others need a complete design foundation for a
              new digital product.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
            >
              Start a conversation <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-5">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/15">
                      <Icon size={25} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-blue-600">
                          STEP {step.number}
                        </span>
                        <span className="h-px w-8 bg-blue-200" />
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                        <CheckCircle2 size={15} />
                        {step.output}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIVE DESIGN */}
      <section className="bg-[#f8faff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Designed for Every Screen
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                One consistent experience across devices.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                People access digital products from different devices and
                screen sizes. A website that works well on a desktop should
                also remain understandable and practical on a tablet or
                smartphone.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Responsive design considers how content, navigation, images,
                and interactive elements adapt to different layouts. It is not
                simply about shrinking a desktop page. It is about making
                thoughtful decisions so the experience remains useful in
                different contexts.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                We consider touch-friendly controls, readable text, flexible
                content areas, and clear navigation when planning responsive
                interfaces. These considerations help create a more consistent
                experience for users across devices.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-5">
                  <MonitorSmartphone className="text-blue-600" size={26} />
                  <h3 className="mt-4 font-bold text-slate-900">
                    Desktop & Tablet
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Structured layouts with space for detailed content and
                    productive workflows.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-5">
                  <Smartphone className="text-violet-600" size={26} />
                  <h3 className="mt-4 font-bold text-slate-900">
                    Mobile Experience
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Focused screens, touch-friendly controls, and clear
                    navigation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-200/50 to-violet-200/50 blur-3xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      Responsive Thinking
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      Adapt the experience
                    </h3>
                  </div>
                  <Layers3 className="text-blue-600" size={28} />
                </div>

                <div className="mt-7 grid grid-cols-[1.4fr_0.8fr] gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="h-3 w-20 rounded-full bg-blue-200" />
                    <div className="mt-4 h-24 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100" />
                    <div className="mt-4 h-2 w-full rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-200" />
                    <div className="mt-5 flex gap-2">
                      <div className="h-8 flex-1 rounded-lg bg-blue-600" />
                      <div className="h-8 w-16 rounded-lg border border-slate-200 bg-white" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="mx-auto h-2 w-12 rounded-full bg-slate-300" />
                    <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-violet-100 to-blue-100" />
                    <div className="mt-4 h-2 w-full rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
                    <div className="mt-4 h-7 rounded-lg bg-blue-600" />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
                    <CheckCircle2 size={17} />
                    Consistent design language
                  </div>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Layouts adapt while preserving the product's visual
                    identity and core user journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Where Design Creates Value
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Digital Experiences Across Industries
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Different industries have different users, workflows, and
            expectations. We consider the context of each product when planning
            an interface, rather than applying the same design to every
            business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-violet-200 hover:bg-violet-50/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
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

      {/* TOOLS */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Design Collaboration
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
                A practical foundation for design and development.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                UI/UX design is most effective when designers, developers, and
                business stakeholders can work from a shared understanding.
                Organised design files and reusable components help communicate
                how a product should look and behave.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Tools such as Figma can support interface design, prototyping,
                design collaboration, and component organisation. Depending on
                the project, the design handoff can also include supporting
                notes and specifications to guide implementation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
             <PenTool size={29} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Figma-Based Workflows
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Interface layouts, reusable components, design collaboration,
                  and interactive prototypes.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Code2 size={29} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Developer Handoff
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Structured design assets, layout guidance, component
                  references, and implementation notes.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <MessageSquareText size={29} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Team Collaboration
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Shared feedback, design reviews, and communication throughout
                  the project.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Gauge size={29} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Usability Focus
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Design reviews that consider clarity, consistency, and
                  practical user journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Questions About UI/UX Design
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Learn more about our design services, process, and how UI/UX
            planning can support your digital product.
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
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45 group-open:bg-blue-600 group-open:text-white">
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
              <Sparkles size={30} />
            </div>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Let's Create Something Meaningful
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea for your next digital experience?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
              Whether you are planning a new website, developing a mobile
              application, or improving an existing product, thoughtful design
              can help bring your vision into focus. Let's discuss your goals
              and explore the right direction for your project.
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
