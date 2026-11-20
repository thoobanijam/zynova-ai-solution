
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  TabletSmartphone,
  Apple,
  Code2,
  Layers3,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  MapPin,
  Bell,
  ShieldCheck,
  Cloud,
  Database,
  Palette,
  Workflow,
  Rocket,
  CheckCircle2,
  Lightbulb,
  Building2,
  BriefcaseBusiness,
  Factory,
  Globe2,
  Settings,
  Gauge,
  Fingerprint,
  MessageCircle,
  CreditCard,
  Camera,
  Map,
  Package,
  Sparkles,
  MonitorSmartphone,
  Boxes,
  Zap,
  Search,
} from "lucide-react";

const appServices = [
  {
    number: "01",
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description:
      "We develop mobile applications around your business model, customer expectations, and operational requirements. Whether you are planning a customer-facing product or an internal business application, the development process starts with understanding the problem the application needs to solve.",
    details: [
      "Custom business applications",
      "Customer-facing mobile platforms",
      "Application dashboards",
      "Feature-based app development",
    ],
    color: "blue",
  },
  {
    number: "02",
    icon: TabletSmartphone,
    title: "Cross-Platform App Development",
    description:
      "Cross-platform development can help businesses deliver mobile experiences across multiple operating systems while sharing an appropriate amount of application code. We consider functionality, device requirements, performance, and maintenance when selecting the development approach.",
    details: [
      "Android and iOS applications",
      "Reusable application components",
      "Consistent interface experiences",
      "Cross-device testing",
    ],
    color: "violet",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce Mobile Applications",
    description:
      "Make shopping more convenient through mobile applications that help customers browse products, explore categories, manage carts, and complete orders. A well-designed shopping experience can connect customers with your products wherever they are.",
    details: [
      "Product catalogues",
      "Shopping carts and checkout",
      "Order tracking interfaces",
      "Payment service integration",
    ],
    color: "cyan",
  },
  {
    number: "04",
    icon: Building2,
    title: "Enterprise Mobile Applications",
    description:
      "Mobile applications can support business operations by giving employees access to important information and workflows. We can develop applications for selected organizational requirements, helping teams interact with business systems through convenient mobile interfaces.",
    details: [
      "Employee applications",
      "Business operation tools",
      "Management dashboards",
      "Internal workflow interfaces",
    ],
    color: "orange",
  },
  {
    number: "05",
    icon: Palette,
    title: "Mobile UI/UX Design",
    description:
      "A mobile interface should make important actions easy to understand and complete. We focus on navigation, screen structure, visual hierarchy, accessibility, and interaction patterns to create experiences that feel natural on smaller screens.",
    details: [
      "Mobile wireframes",
      "Application screen design",
      "Interactive prototypes",
      "Design systems and components",
    ],
    color: "pink",
  },
  {
    number: "06",
    icon: Settings,
    title: "App Maintenance & Enhancement",
    description:
      "Mobile applications need attention after launch as devices, operating systems, user needs, and business requirements change. Planned maintenance and improvements can help keep an application relevant and support its continued development.",
    details: [
      "Application updates",
      "Bug fixing and improvements",
      "Feature enhancements",
      "Compatibility reviews",
    ],
    color: "emerald",
  },
];

const technologies = [
  {
    icon: Code2,
    name: "Flutter Development",
    label: "Flutter & Dart",
    description:
      "Develop cross-platform mobile applications using a shared codebase and customizable interface components.",
  },
  {
    icon: Apple,
    name: "iOS Development",
    label: "Apple Mobile Ecosystem",
    description:
      "Plan application experiences for Apple devices while considering platform conventions and device capabilities.",
  },
  {
    icon: Smartphone,
    name: "Android Development",
    label: "Android Platform",
    description:
      "Create mobile application experiences for Android devices with attention to screen sizes and platform behavior.",
  },
  {
    icon: Database,
    name: "Backend & Databases",
    label: "APIs, SQL & NoSQL",
    description:
      "Connect mobile applications to backend services, databases, and business information systems.",
  },
  {
    icon: Cloud,
    name: "Cloud Integration",
    label: "Cloud Services",
    description:
      "Use appropriate cloud services to support application data, authentication, storage, and integrations.",
  },
  {
    icon: ShieldCheck,
    name: "Security & Testing",
    label: "Quality & Protection",
    description:
      "Consider secure authentication, data validation, application testing, and responsible information handling.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Idea",
    icon: Lightbulb,
    description:
      "Every application begins with an idea or a business requirement. We explore the intended audience, the main problem, essential features, and the outcomes the application should support.",
    tasks: [
      "Understand the application concept",
      "Identify user requirements",
      "Define the project scope",
    ],
  },
  {
    number: "02",
    title: "Research & Plan",
    icon: Search,
    description:
      "We organize the requirements into a practical development plan. This includes considering the target platforms, important features, technical architecture, and the overall application experience.",
    tasks: [
      "Define application features",
      "Evaluate technical options",
      "Plan the application structure",
    ],
  },
  {
    number: "03",
    title: "Design the Experience",
    icon: Palette,
    description:
      "We plan how users will navigate through the application. Screen layouts, interaction patterns, and visual components are considered to create a consistent experience.",
    tasks: [
      "Create screen wireframes",
      "Design user interfaces",
      "Plan navigation and interactions",
    ],
  },
  {
    number: "04",
    title: "Develop the Application",
    icon: Code2,
    description:
      "The design and requirements are translated into working application functionality. Frontend screens, backend connections, APIs, and other required integrations are developed as part of the solution.",
    tasks: [
      "Build application screens",
      "Connect backend services",
      "Implement required features",
    ],
  },
  {
    number: "05",
    title: "Test & Validate",
    icon: ShieldCheck,
    description:
      "The application is reviewed across supported devices and usage scenarios. Testing helps identify issues with navigation, functionality, compatibility, and the overall user experience.",
    tasks: [
      "Test important user journeys",
      "Review device compatibility",
      "Resolve identified issues",
    ],
  },
  {
    number: "06",
    title: "Launch & Improve",
    icon: Rocket,
    description:
      "Once the application is ready, deployment and release preparation can begin. Future improvements may include additional features, platform updates, performance enhancements, and ongoing maintenance.",
    tasks: [
      "Prepare release builds",
      "Support deployment planning",
      "Plan future enhancements",
    ],
  },
];

const features = [
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Send relevant updates, reminders, and notifications through supported notification services.",
  },
  {
    icon: MapPin,
    title: "Location Services",
    description:
      "Use location capabilities for suitable applications such as delivery, navigation, and nearby services.",
  },
  {
    icon: Fingerprint,
    title: "Authentication",
    description:
      "Support user access through suitable authentication and account management functionality.",
  },
  {
    icon: Camera,
    title: "Camera & Media",
    description:
      "Integrate device camera and media features when they are relevant to the application experience.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Connect suitable payment providers to support transactions within an application's business workflow.",
  },
  {
    icon: MessageCircle,
    title: "Messaging & Communication",
    description:
      "Create communication features and connect messaging services based on project requirements.",
  },
  {
    icon: Database,
    title: "Data Synchronization",
    description:
      "Connect application data with backend services and support suitable synchronization workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Use cloud-based storage services for appropriate application files and information.",
  },
];

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Shopping applications, product discovery, order management, and customer experiences.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Healthcare information applications, appointment interfaces, and patient-facing experiences.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Learning applications, educational resources, student portals, and course experiences.",
  },
  {
    icon: Map,
    title: "Travel & Hospitality",
    description:
      "Travel planning, booking interfaces, service discovery, and visitor information applications.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Operational applications, information access, and selected workplace workflow solutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Enterprise",
    description:
      "Employee tools, customer portals, management interfaces, and business productivity applications.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Reach Customers on Mobile",
    description:
      "Provide customers with a convenient way to access your services and interact with your business through mobile devices.",
  },
  {
    number: "02",
    title: "Improve User Convenience",
    description:
      "Organize important information and actions into a focused mobile experience that supports users wherever they are.",
  },
  {
    number: "03",
    title: "Connect Business Systems",
    description:
      "Mobile applications can connect to APIs, databases, and other services to support connected business workflows.",
  },
  {
    number: "04",
    title: "Support New Opportunities",
    description:
      "A mobile platform can create new ways to deliver services, communicate with customers, and develop digital products.",
  },
];

const faqs = [
  {
    question: "What types of mobile applications can you develop?",
    answer:
      "Mobile application projects can include e-commerce apps, business applications, customer portals, educational applications, booking platforms, and custom mobile products. The features and technology depend on the requirements of each project.",
  },
  {
    question: "Can one application work on both Android and iOS?",
    answer:
      "Yes. Cross-platform technologies such as Flutter can be used to develop applications for Android and iOS from a shared codebase. The right approach depends on the application's functionality, device requirements, and platform-specific needs.",
  },
  {
    question: "Can a mobile application connect to a website or database?",
    answer:
      "Yes. Mobile applications can connect to backend APIs and databases. This allows information such as customer accounts, product details, bookings, and business records to be managed through connected systems.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Payment integration can be considered based on your business model, target market, supported payment providers, and compliance requirements. The specific integration depends on the provider and project scope.",
  },
  {
    question: "Can you update an existing mobile application?",
    answer:
      "Existing applications can be reviewed for bug fixes, interface improvements, new functionality, compatibility, and technical enhancements. The first step is to understand the current application and its architecture.",
  },
  {
    question: "What happens after the app is launched?",
    answer:
      "After launch, an application may require maintenance, platform compatibility updates, performance reviews, bug fixes, and new features. These improvements can be planned according to the application's usage and business priorities.",
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
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
};

export default function MobileAppsPage() {
  return (
    <main className="overflow-hidden bg-[#fcfcff] text-slate-800">
      {/* HERO */}
      <section className="relative bg-white px-5 pb-20 pt-24 sm:px-8 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-[110px]" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-100/60 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
              <Smartphone size={17} />
              Digital Solutions / Mobile Applications
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.13] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Bringing your ideas to life through{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                mobile innovation.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Mobile applications have changed how people communicate, shop,
              learn, work, and access services. They create opportunities for
              businesses to build closer connections with customers and make
              important services available through convenient digital
              experiences.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-500">
              ZYNOVA AI Solutions approaches mobile app development with a
              focus on useful functionality, intuitive design, modern
              engineering, and the needs of the people who will use the
              application.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                Discuss Your App Idea
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
              >
                Explore Our Expertise
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-7">
              {[
                "Android & iOS",
                "Cross-Platform",
                "User-Centred Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 "
                >
                  <CheckCircle2 size={17} className="text-violet-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SMARTPHONE SHOWCASE */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-200/70 via-violet-200/70 to-cyan-200/70 blur-3xl" />

            <div className="relative flex items-center justify-center gap-4 py-5 sm:gap-7">
              {/* Left phone */}
              <div className="relative mt-16 hidden w-40 rotate-[-10deg] rounded-[30px] border-[5px] border-slate-800 bg-slate-800 p-1.5 shadow-2xl sm:block">
                <div className="overflow-hidden rounded-[23px] bg-white">
                  <div className="bg-gradient-to-br from-violet-600 to-blue-600 px-3 pb-7 pt-8 text-white">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-violet-200">
                      Your Activity
                    </span>
                    <p className="mt-2 text-lg font-bold">Overview</p>
                    <p className="mt-1 text-[9px] text-violet-100">
                      Everything in one place
                    </p>
                  </div>
                  <div className="space-y-3 p-3">
                    <div className="rounded-xl bg-blue-50 p-3 ">
                      <div className="h-2 w-12 rounded bg-blue-200" />
                      <div className="mt-3 h-5 w-20 rounded bg-blue-600" />
                    </div>
                    <div className="h-2 w-full rounded bg-slate-100 " />
                    <div className="h-2 w-4/5 rounded bg-slate-100" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-lg bg-violet-50" />
                      <div className="h-12 rounded-lg bg-cyan-50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main phone */}
              <div className="relative z-10 w-60 rounded-[40px] border-[7px] border-slate-900 bg-slate-900 p-1.5 shadow-2xl shadow-blue-300/50 sm:w-64">
                <div className="relative overflow-hidden rounded-[31px] bg-white ">
                  <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />

                  <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-5 pb-8 pt-12 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-blue-100">
                          Welcome back
                        </p>
                        <h3 className="mt-1 text-lg font-bold">Your App</h3>
                      </div>
                      <div className="rounded-xl bg-white/15 p-2">
                        <Bell size={18} />
                      </div>
                    </div>

                    <div className="mt-7 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                      <p className="text-[10px] text-blue-100">
                        Digital Experience
                      </p>
                      <p className="mt-1 text-2xl font-bold">Hello!</p>
                      <p className="mt-1 text-[10px] text-blue-100">
                        Everything you need, connected.
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-800">
                        Explore Features
                      </p>
                      <span className="text-[9px] font-semibold text-blue-600">
                        View all
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 ">
                      {[
                        { icon: ShoppingCart, name: "Shopping", color: "bg-blue-50 text-blue-600" },
                        { icon: MapPin, name: "Location", color: "bg-violet-50 text-violet-600" },
                        { icon: MessageCircle, name: "Messages", color: "bg-cyan-50 text-cyan-600" },
                        { icon: Settings, name: "Settings", color: "bg-orange-50 text-orange-600" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="rounded-xl border border-slate-100 p-3"
                          >
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}>
                              <Icon size={18} />
                            </div>
                            <p className="mt-2 text-[10px] font-semibold text-slate-700">
                              {item.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 rounded-xl bg-slate-50 p-3 ">
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-violet-600" />
                        <span className="text-[10px] font-bold text-slate-800">
                          Made for your everyday
                        </span>
                      </div>
                      <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
                    </div>
                  </div>

                  <div className="mx-auto mb-2 mt-1 h-1 w-20 rounded-full bg-slate-300"  />
                </div>
              </div>

              {/* Right floating visual */}
              <div className="absolute -right-1 -top-20 hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-xl sm:block">
                <TabletSmartphone className="text-violet-600" size={25} />
                <p className="mt-2 text-xs font-bold text-slate-700 ">
                  Cross Platform
                </p>
              </div>

              <div className="absolute -left-1 bottom-8 hidden rounded-2xl border border-cyan-100 bg-white p-4 shadow-xl sm:block">
                <Zap className="text-cyan-600" size={24} />
                <p className="mt-2 text-xs font-bold text-slate-700">
                  Smart Features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              The Mobile-First Opportunity
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Better mobile experiences begin with understanding people.
            </h2>
            <div className="mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Mobile devices have become an important part of everyday life.
              People use applications to access information, communicate,
              manage tasks, make purchases, and interact with businesses. This
              makes mobile technology an important consideration for
              organizations looking to improve their digital services.
            </p>
            <p>
              However, successful mobile app development is not simply about
              placing website content inside a mobile screen. Applications
              should be designed around the way users interact with their
              devices. Navigation, screen layouts, touch interactions,
              performance, and accessibility all influence the experience.
            </p>
            <p>
              A business application may need to support internal operations,
              while a customer application may focus on service access,
              communication, or purchasing. Understanding these different
              requirements helps determine the appropriate features and
              development approach.
            </p>
            <p>
              At ZYNOVA AI Solutions, we see mobile app development as an
              opportunity to connect people, services, and information
              through useful technology. Our focus is on developing solutions
              that have a clear purpose and a foundation for future
              improvements.
            </p>
          </div>
        </div>
      </section>

      {/* DARK IMAGE BANNER */}
      <section className="px-5 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.4),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(6,182,212,0.3),transparent_40%)]" />

          <div className="relative grid items-center gap-10 px-7 py-14 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Connected Mobile Experiences
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                One application. Multiple possibilities.
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                A mobile application can connect customers to services,
                employees to business systems, and users to information. With
                the right combination of interfaces, backend services, and
                integrations, it can become a practical part of a larger
                digital ecosystem.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                We consider how mobile applications fit into your wider
                technology environment so that the experience is connected
                rather than isolated.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Explore Your App Idea
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="font-semibold text-white">
                    Mobile Ecosystem
                  </span>
                  <Globe2 size={21} className="text-cyan-300" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { icon: Smartphone, name: "Mobile Apps" },
                    { icon: Database, name: "Data Systems" },
                    { icon: Cloud, name: "Cloud Services" },
                    { icon: Workflow, name: "Integrations" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center"
                      >
                        <Icon className="mx-auto text-cyan-300" size={29} />
                        <p className="mt-3 text-xs font-semibold text-white">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-4 text-sm font-bold text-white">
                  <Boxes size={19} />
                  Connected Application Platform
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
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Mobile App Services
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Mobile solutions built around your objectives.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Different mobile products require different capabilities. We
              consider the purpose, audience, and technical requirements of
              each project to identify an appropriate development direction.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {appServices.map((service) => {
              const Icon = service.icon;
              const style = colorStyles[service.color];

              return (
                <article
                  key={service.number}
                  className="group rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
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
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className={`mt-0.5 shrink-0 ${style.text}`}
                        />
                        {detail}
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

      {/* APP FEATURES */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Application Capabilities
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Useful features. Thoughtful experiences.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                The functionality of a mobile application should be determined
                by what users need to accomplish. We can plan and integrate
                suitable capabilities based on the project scope and
                requirements.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Some applications require account management and notifications.
                Others may need location services, payments, media access, or
                connections to existing business systems. Each feature should
                serve a clear purpose within the user experience.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-violet-700 p-7 text-white">
                <Sparkles size={27} />
                <h3 className="mt-5 text-xl font-bold">
                  Functionality With Purpose
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  We focus on features that support the application's goals
                  instead of adding complexity that users do not need.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-5 font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Technology Stack
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Modern tools for mobile innovation.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Selecting the right tools is an important part of application
              development. Technology decisions should reflect the target
              platforms, required features, performance expectations, and
              long-term maintenance considerations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="rounded-[24px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {technology.name}
                  </h3>
                  <p className="mt-2 text-xs font-bold text-violet-600">
                    {technology.label}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {technology.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Development Process
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              A structured journey from idea to application.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Mobile applications involve design, engineering, testing, and
              deployment. A clear process helps connect these activities and
              gives the project a practical direction at every stage.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-[26px] border border-slate-200 bg-[#fcfcff] p-7 transition hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-100">
                      <Icon size={25} />
                    </div>
                    <span className="text-3xl font-bold text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Main activities
                    </p>
                    <div className="space-y-3">
                      {step.tasks.map((task) => (
                        <div
                          key={task}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-blue-600"
                          />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gradient-to-b from-[#f5f7ff] to-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Industries We Support
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">
              Mobile technology across business environments.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Mobile applications can support many different industries.
              Their functionality should reflect the specific services,
              workflows, and expectations of each business environment.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-[24px] border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                    Discover possibilities
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Mobile Applications?
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Turn everyday interactions into digital opportunities.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A thoughtfully developed mobile application can provide a more
              direct way for customers and employees to access digital
              services. It can also help organizations introduce new
              capabilities and connect their existing technology systems.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The value of an application depends on the problem it addresses.
              By starting with real user needs and practical business goals,
              organizations can focus on developing features that make a
              meaningful difference.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
            >
              Discuss Your Mobile Project
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-[24px] border border-slate-200 bg-white p-7"
              >
                <span className="text-3xl font-bold text-violet-100">
                  {benefit.number}
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
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Frequently Asked Questions
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Everything you need to know about mobile app development.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Planning a mobile application involves decisions about platforms,
              design, features, integrations, and future improvements. These
              answers provide a starting point for understanding the process.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <MessageCircle size={23} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">
                Have another question?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your application requirements with us and explore the
                right direction for your project.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-700"
              >
                Contact ZYNOVA
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#fcfcff] p-6 open:border-violet-200 open:bg-violet-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900">
                  <span>
                    <span className="mr-3 text-sm font-bold text-violet-500">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-violet-600 shadow-sm transition group-open:rotate-45">
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
              <MonitorSmartphone size={31} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Your Idea. Your Application. Your Opportunity.
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Have an app idea? Let&apos;s bring it to life.
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Whether you are planning a new mobile product, improving an
              existing application, or exploring digital opportunities for
              your business, ZYNOVA AI Solutions is ready to discuss your
              requirements and explore a suitable development approach.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-cyan-100"
              >
                Start Your App Project
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
