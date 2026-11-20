"use client";

import Link from "next/link";
import {
  FileText,
  Scale,
  ShieldCheck,
  BriefcaseBusiness,
  Globe,
  CreditCard,
  Copyright,
  AlertTriangle,
  UserCheck,
  LockKeyhole,
  RefreshCw,
  Mail,
  ArrowRight,
  CheckCircle2,
  Gavel,
  Handshake,
  MessageSquare,
  CircleHelp,
} from "lucide-react";

const terms = [
  {
    number: "01",
    title: "Acceptance of Terms",
    icon: Handshake,
    paragraphs: [
      "Welcome to ZYNOVA AI Solutions. These Terms and Conditions govern your access to and use of our website, digital content, communication channels, and services. By visiting our website or engaging with our services, you acknowledge that you have read and understood these terms.",
      "If you do not agree with any part of these Terms and Conditions, you should discontinue using our website and contact our team if you require clarification. Your continued use of the website following the publication of updated terms may indicate your acceptance of those changes, subject to applicable law.",
    ],
  },
  {
    number: "02",
    title: "About Our Services",
    icon: BriefcaseBusiness,
    paragraphs: [
      "ZYNOVA AI Solutions provides technology-focused services intended to help individuals, startups, and organizations improve their digital capabilities. Our areas of work may include artificial intelligence, machine learning, web development, mobile application development, custom software, business automation, cloud solutions, and technology consulting.",
      "The exact scope, features, delivery schedule, pricing, and technical requirements of a project will depend on the individual agreement between ZYNOVA AI Solutions and the customer. Information displayed on this website is provided for general informational purposes and does not automatically constitute a binding service proposal.",
    ],
  },
  {
    number: "03",
    title: "Website Use and User Responsibilities",
    icon: UserCheck,
    paragraphs: [
      "You agree to use our website responsibly, lawfully, and in a way that does not interfere with the experience, security, or rights of other visitors. You must not use our website to distribute harmful content, attempt unauthorized access, introduce malicious software, or engage in fraudulent or unlawful activity.",
      "You are responsible for ensuring that information you submit through our website is accurate, lawful, and does not violate the rights of another person or organization. You should not submit confidential, highly sensitive, or restricted information through general website forms unless an appropriate secure channel has been specifically provided.",
    ],
  },
  {
    number: "04",
    title: "Project Proposals and Agreements",
    icon: FileText,
    paragraphs: [
      "Discussions, enquiries, estimates, and preliminary project proposals do not create a binding obligation to begin or complete a project unless the relevant terms have been formally agreed by the parties.",
      "Before work begins, project-specific details may be documented in a separate proposal, statement of work, service agreement, or other written arrangement. Such documents may define deliverables, milestones, payment terms, responsibilities, intellectual property rights, revisions, support arrangements, and completion criteria.",
    ],
  },
  {
    number: "05",
    title: "Fees and Payment Terms",
    icon: CreditCard,
    paragraphs: [
      "Fees for our services will be communicated through an applicable quotation, proposal, invoice, or service agreement. Pricing may depend on project complexity, development requirements, integrations, third-party services, resources, and the agreed delivery schedule.",
      "Payment schedules, deposits, milestones, accepted payment methods, taxes, and any applicable additional charges will be specified in the relevant project agreement. Customers are responsible for making payments according to the agreed terms. Any late-payment consequences will be governed by the applicable agreement and relevant law.",
    ],
  },
  {
    number: "06",
    title: "Intellectual Property Rights",
    icon: Copyright,
    paragraphs: [
      "Unless otherwise agreed in writing, the content presented on this website, including text, branding, graphics, visual elements, layouts, and original materials, is owned by or used under license by ZYNOVA AI Solutions. You may not reproduce, distribute, modify, or commercially exploit these materials without appropriate authorization.",
      "Ownership and licensing of software, source code, designs, documentation, and other project deliverables will be determined by the applicable project agreement. Third-party libraries, frameworks, software, and assets remain subject to their respective licenses and usage conditions.",
    ],
  },
  {
    number: "07",
    title: "Confidentiality and Data Protection",
    icon: LockKeyhole,
    paragraphs: [
      "We understand that technology projects may involve business information, project documentation, technical requirements, and other confidential material. Where confidentiality obligations apply, the parties should handle such information responsibly and in accordance with their written agreements and applicable law.",
      "Our collection and handling of personal information through the website are described in our Privacy Policy. By using the website, you acknowledge that you can review that policy to understand our general information-handling practices.",
    ],
  },
  {
    number: "08",
    title: "Third-Party Services and Integrations",
    icon: Globe,
    paragraphs: [
      "Some projects or website features may rely on third-party platforms, APIs, hosting providers, cloud infrastructure, payment services, analytics tools, or software libraries. These services may have their own terms, privacy policies, availability conditions, and technical limitations.",
      "Unless expressly agreed otherwise, ZYNOVA AI Solutions does not control independent third-party services. Customers may be required to create accounts, obtain licenses, pay third-party fees, or comply with provider-specific conditions when using integrated services.",
    ],
  },
  {
    number: "09",
    title: "Project Changes and Revisions",
    icon: RefreshCw,
    paragraphs: [
      "Project requirements may evolve during planning, design, development, and implementation. Requests that change the agreed scope, functionality, integrations, design, or delivery schedule may require additional discussion and written approval.",
      "Any additional fees, revised timelines, or changes to deliverables should be agreed before the additional work is undertaken. The number of included revisions, testing responsibilities, and acceptance procedures may be defined in the individual project agreement.",
    ],
  },
  {
    number: "10",
    title: "Service Availability and Website Disclaimer",
    icon: AlertTriangle,
    paragraphs: [
      "We aim to keep our website accessible and our published information reasonably accurate. However, we do not guarantee uninterrupted availability, error-free operation, or that all website content will always be complete, current, or suitable for every purpose.",
      "Website content is provided for general informational purposes. Technology examples, descriptions, and proposed capabilities may change as products, tools, and industry practices evolve. Specific project outcomes depend on requirements, implementation conditions, available resources, and other relevant factors.",
    ],
  },
  {
    number: "11",
    title: "Limitation of Liability",
    icon: ShieldCheck,
    paragraphs: [
      "To the extent permitted by applicable law, ZYNOVA AI Solutions will not be responsible for indirect, incidental, special, or consequential losses arising from the use of, or inability to use, this website or from reliance on general website information.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law. Any project-specific liability, warranties, remedies, and service commitments will be governed by the relevant written agreement.",
    ],
  },
  {
    number: "12",
    title: "Suspension and Termination",
    icon: Scale,
    paragraphs: [
      "We reserve the right to restrict or suspend access to website features where reasonably necessary to protect the website, users, our systems, or our legal rights, or where required by applicable law.",
      "The termination of a customer project or service relationship will be handled according to the applicable agreement. Any outstanding payment obligations, confidentiality duties, intellectual property provisions, and other terms intended to continue after termination will remain subject to their agreed conditions and applicable law.",
    ],
  },
  {
    number: "13",
    title: "Changes to These Terms",
    icon: RefreshCw,
    paragraphs: [
      "We may revise these Terms and Conditions when our services, website functionality, business practices, or legal requirements change. Updated terms will be published on this page with an appropriate revision date where practical.",
      "You are encouraged to review this page periodically. If a change materially affects an existing customer agreement, the terms of that agreement and applicable law will determine how the change applies.",
    ],
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Responsible Use",
    description:
      "Use our website and services lawfully and respect the rights of others.",
  },
  {
    icon: FileText,
    title: "Clear Agreements",
    description:
      "Project scope, deliverables, fees, and responsibilities should be agreed in writing.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    description:
      "Respect original materials, software licenses, and project ownership arrangements.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-800">
      {/* Hero */}
      <section className="relative border-b border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-6 pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Scale size={17} />
                Website Terms & Conditions
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Terms &
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Welcome to ZYNOVA AI Solutions. These Terms and Conditions
                explain the general rules, responsibilities, and conditions
                that apply when you access our website or engage with our
                technology services. Please read them carefully before
                using our website or starting a project with us.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#terms-content"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Explore Terms
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

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-200/70 to-cyan-200/70 blur-2xl" />

              <div className="relative rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100/70 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                    <FileText size={34} />
                  </div>
                  <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700">
                    Important Information
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-extrabold text-gray-900">
                  Building Trust Through Clear Terms
                </h2>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Successful digital partnerships begin with shared
                  expectations. Our terms provide a general framework for
                  website use, project discussions, service engagements,
                  intellectual property, and responsibilities.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Transparent service expectations",
                    "Responsible website usage",
                    "Project-specific agreements",
                    "Respect for intellectual property",
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

                <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                  <div className="flex items-center gap-3">
                    <Gavel size={22} className="text-blue-600" />
                    <span className="font-bold text-gray-900">
                      Fair Business Practices
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    We aim to establish clear expectations and professional
                    working relationships with our customers and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Key Information
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Important Things to Understand
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Our terms are designed to explain the basic expectations
              involved in using our website and working with our technology
              team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section
        id="terms-content"
        className="bg-gradient-to-b from-blue-50/70 to-white px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Full Terms
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Terms of Website Use and Services
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-600">
              The following provisions describe the general terms that apply
              to visitors, prospective customers, and users of the ZYNOVA AI
              Solutions website. Additional conditions may apply to specific
              projects or services through separate written agreements.
            </p>
          </div>

          <div className="space-y-5">
            {terms.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:shadow-lg hover:shadow-blue-100/50 sm:p-9"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="hidden shrink-0 pt-1 sm:block">
                      <span className="text-sm font-extrabold tracking-wider text-blue-300">
                        {section.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon size={23} />
                        </div>

                        <div>
                          <span className="text-xs font-bold text-blue-400 sm:hidden">
                            SECTION {section.number}
                          </span>
                          <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                            {section.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-sm leading-8 text-gray-600 sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50/70 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <Globe size={27} />
            </div>

            <h2 className="mt-7 text-2xl font-extrabold text-gray-950">
              Applicable Laws and Jurisdiction
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              These Terms and Conditions are subject to the laws and
              regulations applicable to the relevant business relationship.
              Any governing law, jurisdiction, or dispute-resolution
              arrangement for a specific project should be clearly stated in
              the applicable written agreement.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              Nothing in these terms is intended to remove rights or
              protections that cannot lawfully be excluded under applicable
              consumer or other relevant legislation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
              <MessageSquare size={27} />
            </div>

            <h2 className="mt-7 text-2xl font-extrabold text-gray-950">
              Questions and Clarifications
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              If you have questions about these Terms and Conditions, need
              clarification about our services, or would like to discuss a
              potential technology project, we encourage you to contact our
              team before proceeding.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              For information about how we handle personal data, please
              review our Privacy Policy.
            </p>

            <Link
              href="/privacy-policy"
              className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-3"
            >
              Read Privacy Policy
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-14 text-center shadow-2xl shadow-blue-200/60 sm:px-14 lg:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
              <CircleHelp size={31} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
              Need More Information?
            </h2>

            <p className="mt-5 leading-8 text-blue-100">
              We believe in clear communication and professional
              relationships. Contact ZYNOVA AI Solutions if you have any
              questions about our website terms, service arrangements, or
              technology solutions.
            </p>

            <a
              href="mailto:info@zynovaai.com?subject=Terms%20and%20Conditions%20Enquiry"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Contact Our Team
              <Mail size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}