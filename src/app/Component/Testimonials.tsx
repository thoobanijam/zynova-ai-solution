
"use client";
import Link from "next/link";
import {
  MessageSquareQuote,
  Quote,
  Star,
  Users,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Send,
  Building2,
} from "lucide-react";

const testimonials = [
  {
    name: "Business Owner",
    role: "Retail & E-commerce",
    company: "Business Client",
    initials: "BO",
    rating: 5,
    feedback:
      "We are excited about the possibilities that modern digital technology can bring to business operations. A well-designed software solution can make everyday processes simpler and more efficient.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Startup Founder",
    role: "Technology & Innovation",
    company: "Startup Client",
    initials: "SF",
    rating: 5,
    feedback:
      "Having the right technology partner is important when turning an idea into a digital product. Clear communication, thoughtful planning, and quality development make a real difference.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Operations Manager",
    role: "Business Management",
    company: "Enterprise Client",
    initials: "OM",
    rating: 5,
    feedback:
      "Business automation and connected systems offer valuable opportunities to reduce repetitive tasks and improve how teams manage their daily work.",
    color: "bg-purple-100 text-purple-700",
  },
];

const feedbackAreas = [
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We believe every successful digital project starts with understanding the people and businesses behind it.",
  },
  {
    icon: MessageSquareQuote,
    title: "Clear Communication",
    description:
      "We value honest conversations, transparent project updates, and collaborative decision-making.",
  },
  {
    icon: Sparkles,
    title: "Continuous Improvement",
    description:
      "We believe great digital experiences grow through feedback, learning, and ongoing improvements.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-6 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <MessageSquareQuote size={17} />
            Client Experiences
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Building Trust Through
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Meaningful Experiences
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            We believe technology is most powerful when it creates value for
            people. Our approach is built around understanding business needs,
            maintaining strong communication, and delivering thoughtful
            digital solutions.
          </p>
        </div>

        {/* Intro banner */}
        <div className="mb-14 grid items-center gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The Client Experience
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Your Goals Matter.
              <span className="block text-blue-600">
                Your Experience Matters More.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              Every organization has different challenges and ambitions.
              That's why we believe in a collaborative approach that places
              your requirements, ideas, and long-term goals at the center of
              every project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-blue-50 p-6">
              <Users className="mb-4 text-blue-600" size={30} />
              <h4 className="font-bold text-gray-900">People First</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Building technology around real people.
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-6">
              <HeartHandshake className="mb-4 text-cyan-600" size={30} />
              <h4 className="font-bold text-gray-900">Partnership</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Growing through collaboration and trust.
              </p>
            </div>

            <div className="col-span-2 rounded-2xl bg-purple-50 p-6">
              <Sparkles className="mb-3 text-purple-600" size={28} />
              <h4 className="font-bold text-gray-900">
                Innovation With Purpose
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Creating digital solutions that address meaningful business
                challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials heading */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </span>

          <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Discover the qualities we aim to bring to every business
            relationship and digital project.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative flex flex-col rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60"
            >
              <div className="absolute right-7 top-7 text-blue-100 transition-colors group-hover:text-blue-200">
                <Quote size={43} />
              </div>

              <div className="mb-6 flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-8 text-gray-600">
                "{testimonial.feedback}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-extrabold ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                    <p className="mt-1 text-xs font-medium text-blue-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback values */}
        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Commitment
            </span>

            <h3 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Every Relationship Starts With Trust
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              We want every interaction with ZYNOVA AI Solutions to reflect
              our commitment to quality, collaboration, and innovation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {feedbackAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feedback invitation */}
        <div className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-14 text-center shadow-xl shadow-blue-200/50 sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <Building2 size={29} />
            </div>

            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Let's Create a Successful Partnership
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
              Your business journey deserves technology that supports your
              vision. Tell us about your goals, and let's explore the
              possibilities together.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Get in Touch
              <Send size={18} />
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
