
"use client";

import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cloud,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const services = [
  { name: "AI & Machine Learning", href: "/ai-development" },
  { name: "Web Development", href: "/web-development" },
  { name: "Mobile App Development", href: "/mobile-apps" },
  { name: "Custom Software", href: "/consultation" },
  { name: "Business Automation", href: "/business-intelligence" },
  { name: "Cloud & DevOps", href: "/cloud" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Technologies", href: "/technologies" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

const resources = [
  { name: "Our Mission", href: "/about#mission" },
  { name: "Our Vision", href: "/about#vision" },
  { name: "Our Process", href: "/#process" },
  { name: "Achievements", href: "/#achievements" },
  { name: "FAQs", href: "/#faq" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
    color: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "hover:bg-pink-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    color: "hover:bg-blue-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
    color: "hover:bg-gray-900",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CTA Section */}
        <div className="relative -mt-1 overflow-hidden rounded-b-3xl rounded-t-none bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-7 py-12 shadow-xl shadow-blue-200/40 sm:px-12 lg:py-14">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            <div className="max-w-2xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <Sparkles size={16} />
                Let's Innovate Together
              </div>

              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ready to Transform Your Business?
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                Let's turn your ideas into intelligent digital solutions.
                Connect with ZYNOVA AI Solutions and take the next step
                towards innovation.
              </p>

            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              Let's Talk 
              <ArrowRight size={19} />
            </a>

          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Company Information */}
          <div className="lg:col-span-4">

            <a href="/" className="inline-flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">
                <BrainCircuit size={27} />
              </div>

              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-gray-900">
                  ZYNOVA
                </span>

                <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
                  AI SOLUTIONS
                </span>
              </div>

            </a>

            <p className="mt-7 max-w-sm text-sm leading-8 text-gray-600">
              Empowering businesses through artificial intelligence,
              innovative software development, intelligent automation,
              and modern digital solutions. We help transform ideas
              into technology-driven opportunities.
            </p>

            {/* Social Media */}
            <div className="mt-7">

              <h4 className="mb-4 text-sm font-bold text-gray-900">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.color}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

              </div>
            </div>

          </div>

          {/* Services */}
          <div className="lg:col-span-3">

            <h3 className="mb-7 text-lg font-bold text-gray-900">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-blue-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    {service.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">

            <h3 className="mb-7 text-lg font-bold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-blue-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    {link.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Resources and Contact */}
          <div className="lg:col-span-3">

            <h3 className="mb-7 text-lg font-bold text-gray-900">
              Explore
            </h3>

            <ul className="space-y-4">

              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-blue-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    {resource.name}
                  </a>
                </li>
              ))}

            </ul>

            {/* Contact Information */}
            <div className="mt-9">

              <h4 className="mb-5 text-sm font-bold text-gray-900">
                Get In Touch
              </h4>

              <div className="space-y-4">

                <a
                  href="mailto:info@zynovaai.com"
                  className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Mail size={17} />
                  </span>

                  info@zynovaai.com
                </a>

                <a
                  href="/contact"
                  className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <MapPin size={17} />
                  </span>

                  Contact our team
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* Technology Highlights */}
        <div className="border-y border-blue-100 py-8">

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <BrainCircuit size={19} className="text-blue-600" />
              Artificial Intelligence
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <Code2 size={19} className="text-cyan-600" />
              Software Development
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <Workflow size={19} className="text-purple-600" />
              Smart Automation
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <Cloud size={19} className="text-blue-500" />
              Cloud Solutions
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <Globe size={19} className="text-cyan-600" />
              Digital Innovation
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-8 text-center md:flex-row md:text-left">

          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-bold text-gray-800">
              ZYNOVA AI Solutions.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <a
              href="/privacy-policy"
              className="text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              Terms & Conditions
            </a>

            <a
              href="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              Contact
            </a>

          </div>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}
