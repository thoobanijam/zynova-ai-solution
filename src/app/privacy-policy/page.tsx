"use client";

import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  Cookie,
  UserCheck,
  FileText,
  Mail,
  ArrowRight,
  Globe,
  Server,
  Settings,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";

const privacySections = [
  {
    number: "01",
    title: "Information We Collect",
    icon: Database,
    description:
      "We may collect information that you voluntarily provide when interacting with our website, requesting a consultation, submitting an enquiry, or communicating with our team.",
    details: [
      "Personal information such as your name, email address, and phone number.",
      "Business information and project requirements that you share with us.",
      "Messages, feedback, and other information submitted through contact forms.",
      "Technical information such as browser type, device information, and website usage data.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    icon: Settings,
    description:
      "The information we collect helps us understand your requirements and deliver a better digital experience. We use information only for legitimate business and service-related purposes.",
    details: [
      "To respond to enquiries and consultation requests.",
      "To provide information about our software and technology services.",
      "To improve website performance, functionality, and user experience.",
      "To communicate important service-related updates.",
      "To protect our website and prevent fraudulent or unauthorized activity.",
    ],
  },
  {
    number: "03",
    title: "Data Protection and Security",
    icon: LockKeyhole,
    description:
      "We take reasonable technical and organizational measures to protect information against unauthorized access, accidental loss, misuse, alteration, or disclosure.",
    details: [
      "Use appropriate security practices when handling information.",
      "Limit access to information to authorized personnel where applicable.",
      "Review and improve security practices as our services evolve.",
      "Take reasonable steps to protect information transmitted through our website.",
    ],
  },
  {
    number: "04",
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    description:
      "Our website may use cookies and similar technologies to support essential functionality, understand visitor interactions, and improve website performance.",
    details: [
      "Essential cookies may support basic website functionality.",
      "Analytics technologies may help us understand website traffic.",
      "Browser settings may allow you to manage or disable cookies.",
      "Disabling certain cookies may affect some website features.",
    ],
  },
  {
    number: "05",
    title: "Sharing of Information",
    icon: Globe,
    description:
      "We do not sell personal information. Information may be shared with trusted service providers when necessary to operate our website, deliver services, or meet legal obligations.",
    details: [
      "Technology providers that support website hosting or infrastructure.",
      "Service providers that help us communicate with customers.",
      "Professional advisers where reasonably necessary.",
      "Relevant authorities when disclosure is required by applicable law.",
    ],
  },
  {
    number: "06",
    title: "Data Retention",
    icon: Clock,
    description:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to enquiries, providing services, and meeting applicable legal requirements.",
    details: [
      "Information is reviewed according to its business purpose.",
      "Data may be retained for legitimate administrative or legal reasons.",
      "Information that is no longer required may be securely deleted or anonymized where appropriate.",
    ],
  },
  {
    number: "07",
    title: "Your Privacy Rights",
    icon: UserCheck,
    description:
      "Depending on your location and applicable privacy laws, you may have rights concerning the personal information we hold about you.",
    details: [
      "Request access to personal information we hold about you.",
      "Ask us to correct inaccurate or incomplete information.",
      "Request deletion of information where legally applicable.",
      "Object to or restrict certain types of processing where applicable.",
      "Withdraw consent where processing is based on your consent.",
    ],
  },
  {
    number: "08",
    title: "Third-Party Websites",
    icon: Server,
    description:
      "Our website may contain links to external websites, platforms, or services. These third-party websites operate independently and may have their own privacy policies and practices.",
    details: [
      "We encourage you to review the privacy policies of external websites.",
      "We are not responsible for the privacy practices of third-party platforms.",
      "Information shared directly with third-party websites is governed by their policies.",
    ],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Responsible Data Handling",
    text: "We aim to handle information responsibly and use it for clearly defined purposes.",
  },
  {
    icon: LockKeyhole,
    title: "Security Awareness",
    text: "We apply reasonable safeguards to protect the information entrusted to us.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "We explain how information may be collected, used, and shared.",
  },
  {
    icon: UserCheck,
    title: "Respect for Privacy",
    text: "We respect applicable privacy rights and provide ways to contact our team.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <ShieldCheck size={17} />
                Your Privacy Matters
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Privacy Policy
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Your Data. Your Trust.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                At ZYNOVA AI Solutions, we respect your privacy and are
                committed to handling your personal information responsibly.
                This policy explains what information we may collect, how we
                use it, how we protect it, and the choices available to you
                when you interact with our website and services.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#policy-details"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Read Our Policy
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-4 font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-100 to-cyan-100 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100/70 sm:p-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-200">
                  <ShieldCheck size={43} />
                </div>

                <h2 className="mt-8 text-2xl font-extrabold text-gray-900">
                  Protecting What Matters
                </h2>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Trust is an important part of every digital relationship.
                  We aim to make privacy and responsible information handling
                  part of the way we build and deliver technology solutions.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Responsible information practices",
                    "Security-focused approach",
                    "Clear privacy communication",
                    "Respect for applicable privacy rights",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-green-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 rounded-2xl bg-blue-50 p-5">
                  <div className="flex items-center gap-3">
                    <LockKeyhole className="text-blue-600" size={22} />
                    <span className="font-bold text-gray-900">
                      Privacy by Design
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    We consider privacy and security when developing and
                    improving our digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Commitment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              The Principles Behind Our Privacy Practices
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We believe that good technology should be supported by
              responsible data practices, transparency, and respect for
              individuals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section
        id="policy-details"
        className="bg-gradient-to-b from-blue-50/70 to-white px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Policy Details
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Understanding How We Handle Your Information
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-600">
              The following sections describe our general privacy practices
              when you visit the ZYNOVA AI Solutions website, contact our
              team, or request information about our services.
            </p>
          </div>

          <div className="space-y-6">
            {privacySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:shadow-lg hover:shadow-blue-100/50 sm:p-9"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex shrink-0 items-start gap-4">
                      <span className="text-sm font-extrabold text-blue-300">
                        {section.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={24} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-gray-900">
                        {section.title}
                      </h3>

                      <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                        {section.description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {section.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-1 shrink-0 text-blue-500"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-9 text-white shadow-xl shadow-blue-200 sm:p-12">
            <Shield size={43} />
            <h2 className="mt-7 text-3xl font-extrabold">
              Children's Privacy
            </h2>
            <p className="mt-5 leading-8 text-blue-50">
              Our website and business services are intended for general
              business and professional audiences. We do not knowingly
              collect personal information from children through our website
              without appropriate authorization where required by law.
            </p>
            <p className="mt-4 leading-8 text-blue-50">
              If you believe that a child has provided personal information
              to us, please contact our team so that we can review the matter
              and take appropriate action.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Policy Updates
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Keeping This Policy Up to Date
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Our services, technologies, and legal obligations may change
              over time. We may therefore update this Privacy Policy to
              reflect changes in our business practices, website features,
              or applicable requirements.
            </p>
            <p className="mt-5 leading-8 text-gray-600">
              When changes are made, we will publish the revised policy on
              this page. We encourage visitors to review this page
              periodically to stay informed about how we handle information.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <FileText className="mt-1 shrink-0 text-blue-600" size={24} />
              <div>
                <h3 className="font-bold text-gray-900">
                  Review This Page Regularly
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Please check this page for the latest version of our
                  privacy practices and any relevant updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-14 text-center shadow-2xl shadow-blue-200/60 sm:px-14 lg:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
              <Mail size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
              Questions About Your Privacy?
            </h2>

            <p className="mt-5 leading-8 text-blue-100">
              If you have questions about this Privacy Policy, would like
              to make a privacy-related request, or need clarification about
              how your information is handled, please contact the ZYNOVA AI
              Solutions team.
            </p>

            <a
              href="mailto:info@zynovaai.com?subject=Privacy%20Policy%20Enquiry"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Email Our Team
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}