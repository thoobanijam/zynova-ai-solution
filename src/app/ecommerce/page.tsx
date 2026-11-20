
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Package,
  Search,
  Heart,
  UserRound,
  Truck,
  Smartphone,
  Globe2,
  Layers3,
  Database,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Store,
  Wallet,
  MousePointerClick,
  Box,
  Sparkles,
  ChevronRight,
  Headphones,
  Tag,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom E-commerce Websites",
    description:
      "Create an online storefront that reflects your brand, product catalogue, and business model. We develop responsive shopping experiences with organised navigation, product pages, search functionality, and structured customer journeys.",
    icon: ShoppingBag,
    background: "bg-[#f1eaff]",
    iconColor: "text-violet-700",
  },
  {
    number: "02",
    title: "Online Shopping Applications",
    description:
      "Bring your shopping experience to mobile devices with intuitive interfaces, product discovery, customer accounts, cart functionality, and convenient order interactions.",
    icon: Smartphone,
    background: "bg-[#e6f4ff]",
    iconColor: "text-blue-700",
  },
  {
    number: "03",
    title: "Shopping Cart & Checkout",
    description:
      "Build a checkout experience where customers can review products, update quantities, apply eligible discounts, calculate totals, and proceed through a structured payment process.",
    icon: ShoppingCart,
    background: "bg-[#fff0e5]",
    iconColor: "text-orange-700",
  },
  {
    number: "04",
    title: "Payment Gateway Integration",
    description:
      "Connect suitable payment providers to support online transactions, payment status updates, transaction references, and secure checkout workflows.",
    icon: CreditCard,
    background: "bg-[#e7f8ef]",
    iconColor: "text-emerald-700",
  },
  {
    number: "05",
    title: "Order & Delivery Management",
    description:
      "Organise customer orders, fulfilment activities, shipping information, delivery status, and order history through connected business applications.",
    icon: Truck,
    background: "bg-[#fff4e4]",
    iconColor: "text-amber-700",
  },
  {
    number: "06",
    title: "E-commerce Analytics",
    description:
      "Understand online business activity through sales reports, order information, product performance, customer activity, and useful operational dashboards.",
    icon: BarChart3,
    background: "bg-[#f0edff]",
    iconColor: "text-indigo-700",
  },
];

const commerceFeatures = [
  {
    title: "Product Catalogue",
    description:
      "Organise products with descriptions, images, categories, variants, pricing, and availability information.",
    icon: Package,
  },
  {
    title: "Customer Accounts",
    description:
      "Provide customer registration, login, profile management, saved information, and order history.",
    icon: UserRound,
  },
  {
    title: "Product Discovery",
    description:
      "Help customers discover products using search, categories, filters, sorting, and product collections.",
    icon: Search,
  },
  {
    title: "Wishlist & Favourites",
    description:
      "Allow shoppers to save interesting products and revisit their preferred items.",
    icon: Heart,
  },
  {
    title: "Promotions & Discounts",
    description:
      "Support promotional campaigns, coupon codes, eligible discounts, and pricing rules.",
    icon: Tag,
  },
  {
    title: "Customer Support",
    description:
      "Connect customer enquiries, support information, and order-related communication.",
    icon: Headphones,
  },
];

const industries = [
  {
    name: "Fashion & Clothing",
    text: "Create visually engaging storefronts for clothing collections, size variations, colour options, seasonal products, and customer shopping.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85",
    category: "FASHION COMMERCE",
  },
  {
    name: "Beauty & Personal Care",
    text: "Organise beauty products, product collections, descriptions, categories, customer reviews, and promotional shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
    category: "BEAUTY STORES",
  },
  {
    name: "Electronics & Gadgets",
    text: "Present technical specifications, product variants, accessories, availability, product comparisons, and order information.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85",
    category: "ELECTRONICS",
  },
  {
    name: "Food & Grocery Delivery",
    text: "Develop convenient digital shopping experiences for grocery catalogues, product quantities, delivery details, and repeat purchases.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=85",
    category: "GROCERY COMMERCE",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Customers explore product categories, search for items, and view product details.",
    icon: Search,
  },
  {
    number: "02",
    title: "Select",
    description:
      "Products are added to a cart, with options to review selections and quantities.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Purchase",
    description:
      "Customers enter checkout information and complete an available payment method.",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Receive",
    description:
      "Orders move through fulfilment and delivery processes with status updates.",
    icon: Package,
  },
];

const faqs = [
  {
    question: "What type of e-commerce websites can ZYNOVA develop?",
    answer:
      "We can develop custom online stores, fashion websites, grocery shopping platforms, electronics stores, wholesale portals, multi-category storefronts, and other online commerce applications based on your requirements.",
  },
  {
    question: "Can you build an e-commerce website from scratch?",
    answer:
      "Yes. We can develop a custom storefront, backend services, product management, customer accounts, shopping cart, order management, and other required functionality.",
  },
  {
    question: "Can you integrate online payment gateways?",
    answer:
      "Yes. Suitable payment gateways can be integrated based on your target market, payment provider, supported currencies, and business requirements. Provider approval and account configuration may be required.",
  },
  {
    question: "Can my e-commerce website be connected to inventory software?",
    answer:
      "Yes. Where compatible APIs or other supported integration methods are available, an online store can connect to inventory systems to exchange product availability, stock, and order information.",
  },
  {
    question: "Will the online store work on mobile devices?",
    answer:
      "We design responsive interfaces so the shopping experience can adapt to desktop, tablet, and mobile screen sizes. Mobile usability is considered throughout the development process.",
  },
  {
    question: "Can I manage products and orders myself?",
    answer:
      "An administrative dashboard can be developed to manage products, categories, pricing, orders, customers, and other store information according to the permissions and features required.",
  },
];

export default function EcommercePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO - LUXURY COMMERCE EDITORIAL */}

      <section className="relative bg-[#faf8f4] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative z-10">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
              <span className="h-px w-10 bg-violet-600" />
              Digital Commerce Experiences
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[76px]">
              Turn every click into a{" "}
              <span className="font-serif italic text-violet-700">
                shopping experience.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              Your online store is more than a website. It is your digital
              storefront, product catalogue, customer experience, and
              business operation working together.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-500">
              ZYNOVA AI Solutions creates modern e-commerce platforms
              designed to help businesses present products, connect with
              customers, manage orders, and build convenient digital
              shopping experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-violet-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-950"
              >
                Create Your Online Store
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="#commerce-services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-violet-600 hover:text-violet-700"
              >
                Explore Solutions
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-7">
              <div>
                <p className="font-bold text-slate-900">Beautiful storefronts</p>
                <p className="mt-1 text-xs text-slate-500">Brand-led experiences</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="font-bold text-slate-900">Connected operations</p>
                <p className="mt-1 text-xs text-slate-500">Products to fulfilment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-violet-200/50 blur-3xl" />

            <div className="relative grid grid-cols-[1.1fr_0.9fr] gap-4">
              <div className="space-y-4 pt-12">
                <div className="overflow-hidden rounded-[30px]">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85"
                    alt="Modern fashion shopping storefront"
                    className="h-[300px] w-full object-cover"
                  />
                </div>

                <div className="rounded-[25px] bg-violet-700 p-6 text-white">
                  <ShoppingBag size={27} />
                  <p className="mt-5 text-xs uppercase tracking-widest text-violet-200">
                    Your digital storefront
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Designed to make shopping feel effortless.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[25px] bg-[#ece6dc] p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Commerce ecosystem
                  </span>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[ShoppingBag, CreditCard, Truck, Package].map(
                      (Icon, index) => (
                        <div
                          key={index}
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700"
                        >
                          <Icon size={21} />
                        </div>
                      )
                    )}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    Products, payments, orders, and customer journeys.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[30px]">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85"
                    alt="Online shopping payment experience"
                    className="h-[290px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-slate-100 bg-white px-6 py-4 shadow-xl sm:left-8 sm:translate-x-0">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    One connected experience
                  </p>
                  <p className="text-xs text-slate-500">
                    From discovery to delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85"
              alt="Customer browsing products in a digital retail experience"
              className="h-[470px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
                Commerce without boundaries
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                Bring your products closer to customers.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
              More than an online shop
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Your business deserves a digital storefront built with purpose.
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Customers expect online shopping to be straightforward.
              They want to find the right product, understand its details,
              review available options, complete their purchase, and
              receive useful information about their orders.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              Behind that experience is a collection of connected
              capabilities. Product management, customer accounts,
              pricing, cart functionality, payment processing, order
              records, and fulfilment workflows all contribute to how
              an online store operates.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              We approach e-commerce development by considering both
              sides of the experience: the customer-facing storefront
              and the business systems that support it. This creates
              a foundation that can be extended as your product range,
              customer base, and business requirements evolve.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-violet-700 hover:text-slate-950"
            >
              Discuss your e-commerce project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* E-COMMERCE SERVICES */}

      <section
        id="commerce-services"
        className="bg-[#f7f6fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                What we build
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Everything your online business needs to move forward.
              </h2>
            </div>
            <p className="leading-8 text-slate-500">
              From the first product page to the final order confirmation,
              we create digital commerce capabilities that work together
              as part of your business ecosystem.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group rounded-[26px] border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                      SERVICE / {service.number}
                    </span>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.background} ${service.iconColor}`}
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-violet-700"
                  >
                    Learn more
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STOREFRONT PREVIEW */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
              A digital storefront experience
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              A store that feels like your brand.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              The storefront is where customers experience your business.
              It should communicate your identity, present products
              clearly, and make navigation feel natural.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-700 text-white">
                  <ShoppingBag size={19} />
                </div>
                <span className="font-bold tracking-wide text-slate-900">
                  YOUR BRAND
                </span>
              </div>

              <div className="hidden items-center gap-7 text-xs font-semibold text-slate-500 md:flex">
                <span>Home</span>
                <span>Collections</span>
                <span>New Arrivals</span>
                <span>About</span>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <Search size={18} />
                <UserRound size={18} />
                <ShoppingCart size={18} />
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center bg-[#f6f0e9] p-8 sm:p-14">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                  A new collection
                </span>
                <h3 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
                  Discover something beautiful.
                </h3>
                <p className="mt-5 max-w-md leading-8 text-slate-600">
                  Showcase your products with thoughtful presentation,
                  organised collections, and a shopping experience
                  that reflects your brand.
                </p>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white">
                    Explore Collection
                    <ArrowRight size={17} />
                  </span>
                </div>
              </div>

              <div className="relative min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                  alt="Fashion collection presented in an online storefront"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4 sm:p-7">
              {[
                {
                  name: "Product Discovery",
                  icon: Search,
                },
                {
                  name: "Shopping Cart",
                  icon: ShoppingCart,
                },
                {
                  name: "Secure Checkout",
                  icon: ShieldCheck,
                },
                {
                  name: "Order Tracking",
                  icon: Truck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl bg-[#f8f7fb] p-4"
                  >
                    <Icon size={20} className="text-violet-700" />
                    <span className="text-xs font-semibold text-slate-700">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">
            Illustrative storefront concept. Actual branding, products,
            and functionality are defined for each project.
          </p>
        </div>
      </section>

      {/* COMMERCE FEATURES - EDITORIAL GRID */}

      <section className="bg-[#faf8f4] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                Inside your online store
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                The details that make shopping work.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                Great e-commerce experiences are built from many
                connected details. Each feature has a role in helping
                customers find products and helping your team manage
                the business behind the storefront.
              </p>

              <div className="mt-8 overflow-hidden rounded-[25px]">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=85"
                  alt="Online shopping experience on a laptop"
                  className="h-[270px] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {commerceFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="border-b border-slate-200 pb-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-violet-600">
                        0{index + 1}
                      </span>
                      <Icon size={23} className="text-violet-700" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
              The customer journey
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              Four stages. One connected shopping experience.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              An online shopping journey should guide customers naturally
              from product discovery to successful order fulfilment.
              Each stage creates opportunities to improve clarity,
              convenience, and communication.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`relative rounded-[25px] p-7 ${
                    index % 2 === 0
                      ? "bg-[#f0ebfa]"
                      : "bg-[#edf5f4]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-violet-700">
                      PHASE {step.number}
                    </span>
                    <Icon size={27} className="text-violet-700" />
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                  <div className="mt-8 h-1 w-12 rounded-full bg-violet-500" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-[#f7f6fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                Who we support
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
                E-commerce for every kind of business.
              </h2>
            </div>
            <p className="max-w-md leading-8 text-slate-500">
              Whether you sell one specialised product or manage a large
              online catalogue, the platform should reflect how your
              business serves its customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={`${industry.name} e-commerce`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-6 text-xs font-bold tracking-[0.2em] text-white">
                    {industry.category}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {industry.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {industry.text}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700"
                  >
                    Discuss your industry
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT AND ORDER MANAGEMENT */}

      <section className="bg-[#18152a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Behind every successful order
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Connect checkout, payments, and fulfilment.
            </h2>
            <p className="mt-7 leading-8 text-slate-300">
              An online store needs a dependable process behind its
              checkout experience. Customer details, order information,
              payment confirmation, and fulfilment activities should
              move through clearly defined workflows.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              We can develop order management capabilities and integrate
              suitable third-party services according to the project's
              requirements. Payment provider selection, transaction
              handling, and fulfilment processes are planned around the
              target market and business model.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Structured order records",
                "Payment status management",
                "Customer and delivery information",
                "Order fulfilment workflows",
                "Transaction and sales reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-violet-300" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-300">
                  Commerce workflow
                </span>
                <h3 className="mt-2 text-xl font-bold">Order processing</h3>
              </div>
              <Layers3 size={27} className="text-violet-300" />
            </div>

            <div className="space-y-4 pt-7">
              {[
                {
                  name: "Customer Checkout",
                  detail: "Cart and customer information",
                  icon: ShoppingCart,
                },
                {
                  name: "Payment Processing",
                  detail: "Payment provider and status",
                  icon: CreditCard,
                },
                {
                  name: "Order Management",
                  detail: "Order records and validation",
                  icon: Database,
                },
                {
                  name: "Fulfilment",
                  detail: "Packing and delivery workflow",
                  icon: Truck,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                      <Icon size={23} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-violet-300">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl bg-violet-600/20 p-4 text-center text-xs font-semibold text-violet-200">
              Connected commerce process — conceptual illustration
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                Technology foundation
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
                Built with the right tools for your business.
              </h2>
              <p className="mt-6 leading-8 text-slate-500">
                E-commerce architecture should support your products,
                customer experience, integrations, data requirements,
                and expected growth. We choose technologies according
                to the needs of each project.
              </p>

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                alt="E-commerce analytics and digital business dashboard"
                className="mt-8 h-[270px] w-full rounded-[25px] object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Frontend Development",
                  tech: "React · Next.js · TypeScript",
                  icon: MonitorSmartphone,
                },
                {
                  title: "Backend Engineering",
                  tech: "Node.js · Express · REST APIs",
                  icon: Database,
                },
                {
                  title: "Database Systems",
                  tech: "PostgreSQL · Firebase · Neon",
                  icon: Layers3,
                },
                {
                  title: "Payment Integrations",
                  tech: "Payment APIs · Transaction flows",
                  icon: CreditCard,
                },
                {
                  title: "Cloud & Deployment",
                  tech: "Cloud hosting · CI/CD",
                  icon: Globe2,
                },
                {
                  title: "Analytics & Automation",
                  tech: "Reporting · AI · Workflows",
                  icon: Sparkles,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-6 transition hover:border-violet-300 hover:bg-[#faf8ff]"
                  >
                    <Icon size={25} className="text-violet-700" />
                    <h3 className="mt-5 font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.tech}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#f7f6fb] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
              Helpful information
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              E-commerce questions, answered.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Understand the possibilities of custom online stores,
              payment integrations, order management, and digital
              commerce development.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-violet-700"
            >
              Talk to our team
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-violet-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="flex gap-4">
                    <span className="text-sm text-violet-600">
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

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#eee9f8] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-violet-300/40 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                Your digital storefront begins here
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Ready to take your business into the world of e-commerce?
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Let's discuss your online store, customer experience,
                product catalogue, payment requirements, and the
                technology needed to bring your commerce vision to life.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-violet-700 px-8 py-4 font-bold text-white transition hover:bg-slate-950"
            >
              Start Your E-commerce Project
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
