
"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    items: [
      { label: "About Zynova", href: "#about", description: "Discover our company" },
      { label: "Our Mission", href: "#mission", description: "Our purpose and vision" },
      { label: "Our Team", href: "#team", description: "People behind innovation" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "AI Automation", href: "#services", description: "Automate business workflows" },
      { label: "AI Chatbots", href: "#services", description: "Intelligent customer support" },
      { label: "Web Development", href: "#services", description: "Modern business websites" },
      { label: "Mobile App Development", href: "#services", description: "Apps for Android and iOS" },
      { label: "AI Integration", href: "#services", description: "Connect AI to your business" },
      { label: "Cloud & Data Solutions", href: "#services", description: "Smarter data management" },
      { label: "AI Consulting", href: "#services", description: "Technology strategy and guidance" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Business Automation", href: "#solutions", description: "Improve business efficiency" },
      { label: "Custom AI Solutions", href: "#solutions", description: "AI built around your needs" },
      { label: "Customer Experience", href: "#solutions", description: "Smarter customer journeys" },
      { label: "Data Intelligence", href: "#solutions", description: "Turn data into insights" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Retail & E-commerce", href: "#industries", description: "Intelligent retail experiences" },
      { label: "Healthcare", href: "#industries", description: "Digital healthcare solutions" },
      { label: "Education", href: "#industries", description: "Smarter learning technology" },
      { label: "Finance", href: "#industries", description: "Modern financial technology" },
      { label: "Travel & Hospitality", href: "#industries", description: "Connected guest experiences" },
      { label: "Small & Medium Businesses", href: "#industries", description: "Technology that scales" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Case Studies", href: "#resources", description: "Explore project possibilities" },
      { label: "AI Insights & Blog", href: "#resources", description: "Ideas and technology trends" },
      { label: "FAQs", href: "#faq", description: "Frequently asked questions" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    icon: "✧",
    title: "AI Automation",
    description:
      "Transform repetitive business tasks into intelligent automated workflows. Save time, reduce manual work and improve productivity.",
    tags: ["Workflow Automation", "Process Optimization", "AI Agents"],
  },
  {
    number: "02",
    icon: "◈",
    title: "AI Chatbots",
    description:
      "Create intelligent conversational assistants that help customers, answer questions and support your business around the clock.",
    tags: ["Customer Support", "Virtual Assistants", "Lead Generation"],
  },
  {
    number: "03",
    icon: "⌘",
    title: "Web Development",
    description:
      "Build responsive, modern and high-performance websites that strengthen your brand and help your business grow online.",
    tags: ["Next.js", "React", "Business Websites"],
  },
  {
    number: "04",
    icon: "▣",
    title: "Mobile App Development",
    description:
      "Develop user-friendly mobile applications that connect your customers and business services across devices.",
    tags: ["Android", "iOS", "Cross-platform Apps"],
  },
  {
    number: "05",
    icon: "⌬",
    title: "AI Integration",
    description:
      "Connect intelligent AI capabilities with your existing applications, platforms and business systems.",
    tags: ["API Integration", "AI Models", "System Integration"],
  },
  {
    number: "06",
    icon: "☁",
    title: "Cloud & Data Solutions",
    description:
      "Build scalable cloud-based systems and organize business data for secure, reliable digital operations.",
    tags: ["Cloud Solutions", "Data Management", "Analytics"],
  },
];

const solutions = [
  ["Intelligent Operations", "Automate repetitive work and improve everyday business operations."],
  ["Smart Customer Experiences", "Deliver faster, more personalized customer interactions."],
  ["Business Intelligence", "Use data insights to make informed business decisions."],
  ["Digital Transformation", "Modernize existing systems with practical technology."],
];

const industries = [
  ["🛍️", "Retail & E-commerce", "Smarter inventory, customer experiences and retail operations."],
  ["🏥", "Healthcare", "Digital tools for more connected healthcare services."],
  ["🎓", "Education", "Technology that supports modern learning environments."],
  ["💳", "Finance", "Intelligent digital experiences and business processes."],
  ["✈️", "Travel & Hospitality", "Improve bookings, communication and guest experiences."],
  ["🏢", "Professional Services", "Help service businesses work smarter and grow."],
];

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute left-1/3 top-[900px] h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" onClick={closeMenus} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-black text-[#050816] shadow-lg shadow-cyan-500/20">
              Z
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-wide">
                ZYNOVA<span className="text-cyan-400">.</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.28em] text-slate-400">
                AI SOLUTIONS
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div key={item.label} className="relative ">
                {"items" in item && item.items ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-cyan-300 ${
                      activeDropdown === item.label ? "text-cyan-300" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                    <span className="text-xs font-bold "> V</span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                )}

                {"items" in item &&
                  item.items &&
                  activeDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-cyan-400/20 bg-[#0c1429] p-3 shadow-2xl shadow-black/50">
                      <div className="mb-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Explore {item.label}
                      </div>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={closeMenus}
                          className="block rounded-xl px-3 py-3 transition hover:bg-cyan-400/10"
                        >
                          <div className="text-sm font-semibold text-white">
                            {subItem.label}
                          </div>
                          <div className="mt-1 text-xs text-slate-400">
                            {subItem.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-bold text-[#050816] transition hover:scale-105 lg:block"
          >
            Let's Talk ↗
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/15 px-4 py-2 text-2xl lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#080e20] px-5 py-5 lg:hidden">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-white/5">
                {"items" in item && item.items ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between py-4 text-left font-semibold text-slate-200"
                    >
                      {item.label}
                      <span className="text-xl">{activeDropdown === item.label ? "−" : "+"}</span>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pb-3 pl-4">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={closeMenus}
                            className="block py-3 text-sm text-slate-400 hover:text-cyan-300"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenus}
                    className="block py-4 font-semibold text-slate-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={closeMenus}
              className="mt-5 block rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-center font-bold text-[#050816]"
            >
              Let's Talk ↗
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            BUILDING A SMARTER DIGITAL FUTURE
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Innovate Beyond
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Imagination.
            </span>
            <span className="block text-white">Power Your Future.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Welcome to Zynova AI Solutions. We help businesses embrace
            artificial intelligence, intelligent automation and modern digital
            technology to work smarter, serve better and grow faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 font-bold text-[#050816] shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1"
            >
              Explore Our Services ↗
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Discover Zynova
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-cyan-300">AI First</div>
              <div className="mt-1 text-xs text-slate-500">Innovation approach</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">Global</div>
              <div className="mt-1 text-xs text-slate-500">Business perspective</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">Human</div>
              <div className="mt-1 text-xs text-slate-500">Customer focused</div>
            </div>
          </div>
        </div>

        {/* FUTURISTIC VISUAL */}
        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-[350px] w-[350px] rounded-full border border-cyan-400/20 shadow-[0_0_100px_rgba(34,211,238,0.12)] sm:h-[430px] sm:w-[430px]" />
          <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/30 sm:h-[350px] sm:w-[350px]" />
          <div className="absolute h-[210px] w-[210px] animate-pulse rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-600/20 to-purple-500/20 blur-2xl" />
          <div className="relative flex h-56 w-56 items-center justify-center rounded-[40px] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/15 to-blue-600/20 shadow-[0_0_80px_rgba(34,211,238,0.2)] backdrop-blur-xl sm:h-64 sm:w-64">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-8xl font-black text-transparent">
                Z
              </div>
              <div className="mt-2 text-xs font-bold tracking-[0.35em] text-cyan-200">
                INTELLIGENCE
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-16 rounded-xl border border-cyan-400/20 bg-[#101b32]/90 p-4 shadow-xl backdrop-blur">
            <div className="text-xs text-slate-400">AI AUTOMATION</div>
            <div className="mt-1 font-bold text-cyan-300">Work Smarter ✧</div>
          </div>
          <div className="absolute bottom-12 right-0 rounded-xl border border-blue-400/20 bg-[#101b32]/90 p-4 shadow-xl backdrop-blur">
            <div className="text-xs text-slate-400">DIGITAL INNOVATION</div>
            <div className="mt-1 font-bold text-blue-300">Think Beyond ◈</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 border-y border-white/5 bg-white/[0.02] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Who We Are</div>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Technology with a
              <span className="text-cyan-300"> Purpose.</span>
            </h2>
            <p className="mt-7 leading-8 text-slate-400">
              Zynova AI Solutions is a technology-focused brand built around
              the possibilities of artificial intelligence and digital
              innovation. We aim to help startups, entrepreneurs and
              established businesses explore practical technology that solves
              real problems.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              From intelligent automation to web and mobile development, our
              approach brings technology and business goals together. We
              believe digital transformation should be useful, accessible and
              designed around people.
            </p>
            <a href="#contact" className="mt-8 inline-block font-bold text-cyan-300 hover:text-white">
              Work with Zynova →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["✧", "Innovation", "Explore new possibilities."],
              ["◈", "Intelligence", "Make technology work smarter."],
              ["⌘", "Reliability", "Build with care and purpose."],
              ["∞", "Growth", "Create opportunities for tomorrow."],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#0c1429] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="text-3xl text-cyan-300">{icon}</div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section id="mission" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Our Direction</div>
          <h2 className="mt-5 text-4xl font-black sm:text-5xl">Driven by a Bigger Vision</h2>
          <p className="mt-5 leading-7 text-slate-400">
            Our purpose is to make meaningful technology more accessible to businesses everywhere.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-600/5 p-9">
            <div className="text-4xl text-cyan-300">◎</div>
            <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
            <p className="mt-5 leading-8 text-slate-300">
              To empower businesses through accessible artificial intelligence,
              intelligent automation and innovative digital solutions that
              simplify work, improve experiences and create measurable value.
            </p>
          </div>
          <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-400/10 to-blue-600/5 p-9">
            <div className="text-4xl text-purple-300">✧</div>
            <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
            <p className="mt-5 leading-8 text-slate-300">
              To become a trusted technology partner for businesses around the
              world, helping shape a future where intelligent technology
              creates opportunities for people, organizations and communities.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 border-y border-white/5 bg-white/[0.02] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">What We Do</div>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Technology Services for
              <span className="text-cyan-300"> Tomorrow.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Explore our technology service areas, designed to help businesses
              innovate, modernize and build for the future.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.number} className="group rounded-2xl border border-white/10 bg-[#0a1124] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]">
                <div className="flex items-center justify-between">
                  <div className="text-4xl text-cyan-300">{service.icon}</div>
                  <div className="text-sm font-bold text-slate-600">{service.number}</div>
                </div>
                <h3 className="mt-7 text-xl font-bold transition group-hover:text-cyan-300">{service.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="mt-7 inline-block text-sm font-bold text-cyan-300">
                  Discuss this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Business Solutions</div>
          <h2 className="mt-5 text-4xl font-black sm:text-5xl">Make Technology Your Advantage</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Practical digital solutions that connect business challenges with modern technology.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map(([title, description], index) => (
            <div key={title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-300">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="relative z-10 border-y border-white/5 bg-white/[0.02] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Who We Support</div>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Innovation Across Industries</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Technology opportunities for organizations across different sectors and markets.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([icon, title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#0a1124] p-7 transition hover:border-cyan-400/40">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ZYNOVA */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Why Zynova</div>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              A Smarter Partner for Your Digital Journey.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Great technology begins with understanding the people and
              businesses it serves. We focus on practical ideas, thoughtful
              development and solutions aligned with your goals.
            </p>
          </div>
          <div className="space-y-5">
            {[
              ["Business-focused thinking", "Technology choices should support real business objectives."],
              ["Modern digital capabilities", "Explore AI, automation and contemporary development tools."],
              ["Scalable approach", "Plan solutions that can evolve as your business grows."],
              ["People-centered experiences", "Keep usability and customer needs at the center."],
            ].map(([title, description], index) => (
              <div key={title} className="flex gap-4 border-b border-white/10 pb-5">
                <div className="text-xl font-bold text-cyan-300">0{index + 1}</div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="relative z-10 border-y border-white/5 bg-white/[0.02] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Knowledge & Ideas</div>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Explore What's Possible</h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Learn about AI, digital transformation and the ideas shaping tomorrow's businesses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["AI Insights", "Explore artificial intelligence concepts, opportunities and practical business applications."],
              ["Technology Guides", "Understand modern digital tools, automation and software development."],
              ["Case Studies", "Discover examples of how technology can address business challenges."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#0a1124] p-7">
                <div className="text-sm font-bold text-cyan-300">ZYNOVA RESOURCES</div>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{description}</p>
                <a href="#contact" className="mt-7 inline-block text-sm font-bold text-cyan-300">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-5 py-24">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">FAQs</div>
          <h2 className="mt-5 text-4xl font-black">Frequently Asked Questions</h2>
        </div>
        <div className="mt-12 space-y-4">
          {[
            ["What does Zynova AI Solutions do?", "Zynova focuses on AI-related services, intelligent automation, web and mobile development, AI integration and digital technology solutions."],
            ["Who can work with Zynova?", "Our intended audience includes startups, entrepreneurs, small and medium businesses and larger organizations in local and international markets."],
            ["Can you develop custom business solutions?", "Yes. Solutions can be planned around your business requirements, workflows, customers and technology goals."],
            ["Do you work with businesses internationally?", "Zynova is designed to serve both local and global business audiences. Project availability and delivery arrangements can be discussed during consultation."],
            ["How can I discuss a project?", "Use the contact section below to introduce your business, explain your needs and request a consultation."],
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <summary className="cursor-pointer list-none font-bold text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-xl text-cyan-300 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-400">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 px-5 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-600/10 to-purple-600/10 p-8 text-center sm:p-16">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Let's Build the Future</div>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black sm:text-6xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Have an idea, a challenge or a project in mind? Let's explore how
            AI and modern technology can help move your business forward.
          </p>
          <a
            href="mailto:hello@zynovaai.com?subject=Project%20Enquiry"
            className="mt-9 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-9 py-4 font-bold text-[#050816] transition hover:scale-105"
          >
            Start a Conversation ↗
          </a>
          <p className="mt-5 text-sm text-slate-400">Replace hello@zynovaai.com with your official business email if needed.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#030611] px-5 pb-8 pt-14">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="text-2xl font-black tracking-wide">
              ZYNOVA<span className="text-cyan-400">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              AI, automation and digital innovation for a smarter business future.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Company</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <a className="block hover:text-cyan-300" href="#about">About Us</a>
              <a className="block hover:text-cyan-300" href="#mission">Mission & Vision</a>
              <a className="block hover:text-cyan-300" href="#industries">Industries</a>
              <a className="block hover:text-cyan-300" href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Our Services</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <a className="block hover:text-cyan-300" href="#services">AI Automation</a>
              <a className="block hover:text-cyan-300" href="#services">AI Chatbots</a>
              <a className="block hover:text-cyan-300" href="#services">Web Development</a>
              <a className="block hover:text-cyan-300" href="#services">AI Integration</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Get in Touch</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have a project in mind? Start a conversation with our team.
            </p>
            <a href="mailto:hello@zynovaai.com" className="mt-3 inline-block text-sm font-semibold text-cyan-300">
              hello@zynovaai.com
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
        <p>© 2026 Zynova AI Solutions. All rights reserved.</p>
          <p>Designed for a smarter digital future.</p>
        </div>
      </footer>
    </main>
  );
}
