
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Globe2,
  Sparkles,
  Headphones,
  BriefcaseBusiness,
  Code2,
  BrainCircuit,
  ChevronDown,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";


const services = [
  "AI Development",
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "Business Intelligence",
  "E-commerce Solutions",
  "Digital Transformation",
  "Enterprise Solutions",
  "Retail Solutions",
  "Other Enquiry",
];

const contactTopics = [
  {
    title: "Start a New Project",
    description:
      "Have an idea, business challenge, or digital product in mind? Let's explore how we can bring it to life.",
    icon: Sparkles,
  },
  {
    title: "Technology Consultation",
    description:
      "Discuss your existing technology environment, development requirements, and possible improvements.",
    icon: BrainCircuit,
  },
  {
    title: "Business Partnership",
    description:
      "Interested in working together? Tell us about your organisation and potential collaboration.",
    icon: BriefcaseBusiness,
  },
];

const faqs = [
  {
    question: "How can I contact ZYNOVA AI Solutions?",
    answer:
      "You can use the enquiry form on this page or contact us through the email and telephone details listed here. Share a short description of your requirements so we can understand your enquiry.",
  },
  {
    question: "What information should I include in my project enquiry?",
    answer:
      "Include your business objective, the type of solution you are considering, important features, preferred technologies if known, and any expected timeline or budget information you are comfortable sharing.",
  },
  {
    question: "Can I discuss an existing website or application?",
    answer:
      "Yes. You can contact us about website improvements, application development, integrations, maintenance, modernisation, and other technology requirements.",
  },
  {
    question: "Do you work with startups and growing businesses?",
    answer:
      "Our service areas can support different types of organisations, including startups, small and medium-sized businesses, and larger enterprises. The project scope and approach depend on your requirements.",
  },
  {
    question: "What happens after I submit the enquiry form?",
    answer:
      "Your enquiry will be prepared for submission through your configured contact endpoint. Once a backend or email service is connected, it can be used to receive and manage enquiries. Until then, the form displays a local confirmation only.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend demonstration only.
    // Connect an API or email service to receive real enquiries.
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#fffefa] text-slate-800">

      {/* HERO - SPLIT CONTACT DESIGN */}

      <section className="relative px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Let's Connect
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[76px]">
                Every great idea begins with a
                <span className="block text-blue-700">
                  conversation.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
                Have a project in mind? Looking for a technology partner?
                Or simply exploring new possibilities? We would love to
                hear what you are working on.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-slate-500">
                Connect with ZYNOVA AI Solutions to discuss artificial
                intelligence, software engineering, digital experiences,
                automation, and technology strategies that support
                business growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-slate-950"
                >
                  Send an Enquiry
                  <ArrowUpRight size={19} />
                </a>

                <a
                  href="#contact-information"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                >
                  Contact Information
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-7 border-t border-slate-200 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Let's Talk
                    </p>
                    <p className="text-xs text-slate-500">
                      Discuss your ideas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Digital Solutions
                    </p>
                    <p className="text-xs text-slate-500">
                      Explore possibilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                  alt="Professional team collaborating on a project"
                  className="h-[550px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-4 max-w-[280px] rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl sm:-left-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Headphones size={25} />
                </div>
                <p className="mt-5 text-lg font-bold text-slate-950">
                  Your ideas deserve attention.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tell us what you want to build, improve, or explore.
                </p>
              </div>

              <div className="absolute -right-3 top-10 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
                <Sparkles size={24} className="text-violet-600" />
                <p className="mt-3 text-xs font-bold text-slate-900">
                  Let's create something meaningful
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section
        id="contact-information"
        className="bg-[#f3f6fc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              Choose the best way to reach us.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Whether you prefer email, a phone conversation, or a written
              project enquiry, start with the channel that works best for you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Mail size={24} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                Email Us
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Send your project requirements or general questions.
              </p>
              <p className="mt-5 break-all text-sm font-semibold text-blue-700">
                Add your official email
              </p>
            </article>

            <article className="rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Phone size={24} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                Call Us
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Discuss your requirements and possible next steps.
              </p>
              <p className="mt-5 text-sm font-semibold text-violet-700">
                Add your business phone
              </p>
            </article>

            <article className="rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                <MapPin size={24} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                Our Location
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Connect with us to discuss location and meeting arrangements.
              </p>
              <p className="mt-5 text-sm font-semibold text-cyan-700">
                Add your business address
              </p>
            </article>

            <article className="rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Clock size={24} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                Business Hours
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Share your preferred time when contacting our team.
              </p>
              <p className="mt-5 text-sm font-semibold text-orange-700">
                Add your working hours
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT FORM */}

      <section
        id="contact-form"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Project enquiry
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Tell us a little about what you have in mind.
            </h2>

            <p className="mt-7 leading-8 text-slate-500">
              Every project starts with understanding. Tell us about your
              organisation, your objectives, and the challenge you want
              to solve. This information helps frame a useful initial
              discussion.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Target size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Understand your goals
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Explain the business outcome you want to achieve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Code2 size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Explore suitable solutions
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Discuss applications, technology, integration, and
                    development possibilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Consider your requirements
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Share relevant project details so the discussion
                    can focus on your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[25px]">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
                alt="Modern business workspace"
                className="h-[250px] w-full object-cover"
              />
            </div>
          </div>

          {/* FORM CARD */}

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(30,64,175,0.08)] sm:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-7 text-3xl font-bold text-slate-950">
                  Thank you for your enquiry!
                </h3>

                <p className="mt-4 max-w-md leading-8 text-slate-500">
                  Your information has been validated in this page.
                  This is a frontend demonstration; no email or database
                  submission has been configured yet.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      service: "",
                      budget: "",
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-slate-950"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-9">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Contact form
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                    Start your conversation.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Complete the details below to prepare your project enquiry.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Company / Organisation
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      What service are you interested in? *
                    </label>

                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 pr-12 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Estimated Project Budget
                    </label>

                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 pr-12 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select a budget range</option>
                        <option value="Not decided">Not decided yet</option>
                        <option value="Under 1,000">Under 1,000</option>
                        <option value="1,000 - 5,000">1,000 - 5,000</option>
                        <option value="5,000 - 10,000">5,000 - 10,000</option>
                        <option value="10,000 - 25,000">10,000 - 25,000</option>
                        <option value="25,000+">25,000+</option>
                      </select>
                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                      Budget ranges are indicative. Please discuss the
                      applicable currency when contacting us.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Tell us about your project *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, business challenge, required features, or questions..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-[#fafbff] px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-[#f3f6fc] p-4">
                    <ShieldCheck
                      size={21}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    <p className="text-xs leading-6 text-slate-500">
                      Please avoid including passwords, payment details,
                      or other sensitive personal information in this form.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-slate-950"
                  >
                    Submit Your Enquiry
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Fields marked with * are required.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* DISCUSSION TOPICS */}

      <section className="bg-[#f4f7fc] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              What would you like to discuss?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-slate-950 sm:text-5xl">
              Start with the conversation that matters to your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
              You do not need to have every technical detail figured out.
              A clear description of your goal is a useful starting point.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.title}
                  className="group rounded-[26px] border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="mt-8 block text-xs font-bold tracking-[0.2em] text-blue-700">
                    DISCUSSION 0{index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-slate-500">
                    {topic.description}
                  </p>

                  <a
                    href="#contact-form"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                  >
                    Start here
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#eaf1ff] px-8 py-16 sm:px-14 lg:px-20">
          <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-blue-200/70 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-violet-200/60 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Let's build what is next
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Have an idea that could make a difference?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                Bring your questions, business challenges, and ideas.
                Let's explore the right digital direction together.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-slate-950"
            >
              Get Started
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Helpful information
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-5xl">
              Before you reach out.
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              Here are some common questions about project enquiries
              and working with ZYNOVA AI Solutions.
            </p>

            <div className="mt-9 rounded-2xl bg-[#f1f5ff] p-6">
              <MessageCircle size={26} className="text-blue-700" />
              <h3 className="mt-4 font-bold text-slate-950">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Use the enquiry form to tell us what you would like
                to discuss.
              </p>
              <a
                href="#contact-form"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
              >
                Contact us
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                  <span className="flex gap-4">
                    <span className="text-sm text-blue-700">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-slate-400 transition group-open:rotate-180"
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

    </main>
  );
}
