
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  CreditCard,
  Database,
  Headphones,
  Layers3,
  Package,
  PackageCheck,
  ScanBarcode,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";

const retailSolutions = [
  {
    number: "01",
    icon: Store,
    title: "Retail Management Systems",
    description:
      "Bring important retail activities into a connected digital environment. Manage products, store operations, users, and everyday business information through structured applications.",
    tags: ["Store operations", "Business management"],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Point of Sale Applications",
    description:
      "Create convenient checkout experiences with product lookup, barcode scanning, shopping carts, payment workflows, transaction records, and receipt generation.",
    tags: ["Checkout", "Sales processing"],
  },
  {
    number: "03",
    icon: Boxes,
    title: "Inventory & Stock Management",
    description:
      "Improve visibility into product quantities, stock movements, purchase records, transfers, and inventory activity across retail locations.",
    tags: ["Stock visibility", "Product tracking"],
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Purchase & Supplier Management",
    description:
      "Organise purchasing activities, supplier information, goods receiving, purchase records, and stock replenishment workflows.",
    tags: ["Procurement", "Supplier records"],
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "E-commerce Development",
    description:
      "Develop online shopping experiences with product catalogues, customer accounts, cart functionality, order processing, and digital storefronts.",
    tags: ["Online stores", "Order management"],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Retail Analytics & Reporting",
    description:
      "Turn sales, stock, and operational information into meaningful reports and dashboards that help retail teams understand business activity.",
    tags: ["Reports", "Business insights"],
  },
];

const retailTypes = [
  {
    title: "Supermarkets",
    subtitle: "Manage high-volume retail operations",
    description:
      "Support product catalogues, departments, categories, barcode-based checkout, inventory, purchasing, returns, and sales reporting.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
    icon: Store,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Fashion & Lifestyle",
    subtitle: "Organise product collections",
    description:
      "Manage product variants, sizes, colours, collections, customer orders, stock availability, and digital shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85",
    icon: ShoppingBag,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Electronics Retail",
    subtitle: "Keep product information connected",
    description:
      "Support product specifications, serial number records where required, stock visibility, order workflows, and customer service operations.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Wholesale & Distribution",
    subtitle: "Coordinate larger order workflows",
    description:
      "Organise bulk product records, supplier information, purchasing, stock movement, customer orders, and distribution activities.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    icon: Truck,
    color: "bg-orange-100 text-orange-700",
  },
];

const experiences = [
  {
    step: "01",
    title: "Discover Products",
    text: "Customers browse organised product collections, search for items, and explore useful product information.",
    icon: ShoppingBag,
  },
  {
    step: "02",
    title: "Add to Cart",
    text: "Shopping cart functionality helps customers review selected products and quantities before checkout.",
    icon: ShoppingCart,
  },
  {
    step: "03",
    title: "Complete Payment",
    text: "A structured checkout flow can support suitable payment methods and transaction confirmation.",
    icon: Wallet,
  },
  {
    step: "04",
    title: "Process Orders",
    text: "Order records help retail teams coordinate fulfilment, delivery, collection, and customer communication.",
    icon: PackageCheck,
  },
];

const advantages = [
  {
    title: "Better Stock Visibility",
    description:
      "Understand product availability and stock movements through organised inventory records and reporting.",
    icon: Package,
  },
  {
    title: "Smoother Checkout",
    description:
      "Create practical point-of-sale workflows that help staff process purchases and generate transaction records.",
    icon: CreditCard,
  },
  {
    title: "Connected Operations",
    description:
      "Bring sales, purchasing, inventory, and supplier information into a more coordinated environment.",
    icon: Workflow,
  },
  {
    title: "Useful Business Insights",
    description:
      "Use structured retail information to understand sales activity, product performance, and operational patterns.",
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: "What retail software can ZYNOVA develop?",
    answer:
      "We can develop custom retail management systems, POS applications, inventory platforms, supplier and purchasing modules, e-commerce applications, customer management tools, and retail reporting solutions.",
  },
  {
    question: "Can you build a supermarket management system?",
    answer:
      "Yes. A supermarket solution can include departments, categories, products, barcode support, opening stock, purchases, goods receiving, POS, sales history, returns, expiry tracking, transfers, users, and reports.",
  },
  {
    question: "Can retail software support multiple branches?",
    answer:
      "Multi-branch functionality can be included in the system design. Requirements may cover branch-specific inventory, transfers, user permissions, sales records, and consolidated reporting.",
  },
  {
    question: "Can you integrate barcode scanners and receipt printers?",
    answer:
      "Yes, compatible barcode scanners and receipt printers can be considered during development. The exact implementation depends on the device, operating system, browser or application environment, and connection method.",
  },
  {
    question: "Can you create an online retail store?",
    answer:
      "Yes. We can develop online storefronts with product catalogues, product details, shopping carts, customer accounts, order management, and suitable payment integrations.",
  },
];

export default function RetailPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO - BRIGHT RETAIL EDITORIAL STYLE */}

      <section className="relative overflow-hidden bg-[#f4f9f5] px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
              <ShoppingBag size={17} />
              Digital Retail & Commerce
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-6xl lg:text-[68px]">
              Smarter retail starts with{" "}
              <span className="text-emerald-600">
                connected experiences.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Retail is more than selling products. It is a connected
              experience involving customers, employees, inventory,
              suppliers, payments, orders, and business information.
            </p>

            <p className="mt-4 leading-8 text-slate-500">
              ZYNOVA AI Solutions builds digital retail applications that
              help supermarkets, stores, wholesalers, and online businesses
              organise operations, simplify workflows, and create better
              shopping experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                Build Your Retail Solution
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="#retail-services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
              {[
                "Retail Management",
                "Digital Commerce",
                "Smart Inventory",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                >
                  <CheckCircleIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-emerald-200/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[35px] shadow-2xl shadow-emerald-900/10">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1400&q=90"
                alt="Modern supermarket retail shopping environment"
                className="h-[450px] w-full object-cover sm:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  The connected retail experience
                </span>
                <h2 className="mt-3 max-w-md text-2xl font-bold text-white sm:text-3xl">
                  From product discovery to business intelligence.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ScanBarcode size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Smarter checkout
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Connected POS workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETAIL ECOSYSTEM STRIP */}

      <section className="border-y border-slate-100 bg-white px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            One connected retail ecosystem
          </p>
          {[
            "Products",
            "Inventory",
            "Purchasing",
            "Sales",
            "Customers",
            "Analytics",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* RETAIL INTRODUCTION */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Retail transformation
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Every product, process, and customer interaction matters.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-600">
                Retail organisations manage a continuous flow of
                information. Products arrive from suppliers, move through
                inventory, appear in sales channels, and eventually reach
                customers. Each activity creates information that can
                support the next business decision.
              </p>
              <p className="mt-6 leading-8 text-slate-500">
                When retail systems operate separately, teams may spend
                unnecessary time updating records, checking availability,
                reconciling sales, and coordinating orders. Connected
                software can help reduce fragmented processes and make
                information easier to access.
              </p>
              <p className="mt-6 leading-8 text-slate-500">
                Our retail development approach focuses on practical
                functionality, intuitive interfaces, dependable data
                management, and technology that can adapt as a retail
                business grows.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Organise"],
                  ["02", "Connect"],
                  ["03", "Understand"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-xl bg-[#f3f8f5] p-5"
                  >
                    <span className="text-sm font-bold text-emerald-600">
                      {number}
                    </span>
                    <h3 className="mt-2 font-bold text-slate-900">
                      {label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS - OFFSET SERVICE LIST */}

      <section
        id="retail-services"
        className="bg-[#f5f8f6] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Our retail technology services
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              Digital tools for the complete retail operation.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              Choose the capabilities that support your business model.
              Retail modules can be developed individually or combined into
              a wider connected platform based on your requirements.
            </p>
          </div>

          <div className="space-y-4">
            {retailSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="group grid gap-6 rounded-[24px] border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-lg sm:grid-cols-[75px_1fr_auto] sm:items-center sm:p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-emerald-600">
                        {solution.number}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                      {solution.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${solution.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RETAIL BUSINESS TYPES - IMAGE CARDS */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Retail business segments
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Technology for different ways of selling.
              </h2>
            </div>
            <p className="max-w-md leading-8 text-slate-500">
              Every retail business has its own products, customers,
              inventory requirements, and operational processes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {retailTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} retail environment`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 backdrop-blur">
                      RETAIL 0{index + 1}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon size={24} />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-emerald-700">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition group-hover:text-emerald-700"
                    >
                      Discuss your retail needs
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY - HORIZONTAL STEPS */}

      <section className="overflow-hidden bg-[#edf7f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Digital commerce experience
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
              A shopping journey designed around the customer.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A well-designed digital retail experience connects product
              discovery, shopping, checkout, and order fulfilment into a
              logical customer journey.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative rounded-[25px] border border-emerald-100 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600">
                      STEP {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>

                  {index !== experiences.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-600 lg:flex">
                      <ChevronRight size={17} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85"
              alt="Customer completing a retail payment"
              className="h-[280px] w-full object-cover sm:h-[370px]"
            />
          </div>
        </div>
      </section>

      {/* RETAIL ADVANTAGES */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Why connected retail?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Better information can lead to better retail decisions.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Retail technology should make everyday work easier to
              understand and manage. By bringing relevant information
              together, teams can spend less time navigating disconnected
              records and more time focusing on customers and operations.
            </p>
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1000&q=85"
              alt="Retail customer service and checkout experience"
              className="mt-8 h-[260px] w-full rounded-[25px] object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-[24px] p-7 ${
                    index % 2 === 0
                      ? "bg-[#eff8f2]"
                      : "bg-[#f4f6fb]"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}

      <section className="bg-[#f7f9fc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[30px] bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Layers3 size={28} />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">
                Technology that supports your retail ambitions.
              </h2>
              <p className="mt-5 leading-8 text-slate-500">
                The right technology depends on your business requirements,
                application complexity, expected usage, and integration
                environment. We consider the full solution rather than
                selecting tools without understanding the problem.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Frontend Applications", "React · Next.js · TypeScript"],
                ["Backend Development", "Node.js · APIs · Express"],
                ["Data Management", "PostgreSQL · Firebase · Databases"],
                ["Cloud & Deployment", "Cloud hosting · CI/CD"],
                ["AI & Automation", "AI integrations · Workflows"],
                ["Business Reporting", "Dashboards · Data analytics"],
              ].map(([title, technologies]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-[#f9fbfa] p-5"
                >
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {technologies}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Let's make retail technology clearer.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Have questions about custom retail applications, supermarket
              systems, POS, inventory, or e-commerce? Here are some useful
              starting points.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-700"
            >
              Ask us a question
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-emerald-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="flex items-start gap-4">
                    <span className="text-sm font-bold text-emerald-600">
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#123c2b] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-200">
                <Sparkles size={15} />
                Let's transform retail
              </div>

              <h2 className="mt-7 text-3xl font-bold leading-tight text-white sm:text-5xl">
                Your next retail innovation starts with a conversation.
              </h2>

              <p className="mt-6 leading-8 text-emerald-100/80">
                Whether you are planning a supermarket management system,
                a new point-of-sale application, an online store, or a
                connected retail platform, ZYNOVA can help you explore
                the right digital direction.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-emerald-900 transition hover:bg-emerald-100"
            >
              Start Your Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckCircleIcon() {
  return <Check size={16} className="text-emerald-600" />;
}
