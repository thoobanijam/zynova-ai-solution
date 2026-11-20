
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  BrainCircuit,
  ChevronDown,
} from "lucide-react";

type DropdownItem = {
  name: string;
  href: string;
};

type NavLink = {
  name: string;
  href: string;
  dropdown: DropdownItem[];
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
      dropdown: [
      { name: "Overview", href: "/overview" },
      { name: "Why Choose Us", href: "/why-choose-us" },
      { name: "Industries We Serve", href: "/industries" },
      { name: "Latest Updates", href: "/updates" },
    ],
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Who We Are", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Our Team", href: "/team" },
      { name: "Our Expertise", href: "/expertise" },
      { name: "Why Zynova", href: "/why-zynova" },
    ],
  },
  {
    name: "Mission",
    href: "/mission",
    dropdown: [
      { name: "Our Mission", href: "/mission" },
      { name: "Our Vision", href: "/vision" },
      { name: "Our Values", href: "/values" },
      { name: "Our Goals", href: "/goals" },
      { name: "Our Approach", href: "/approach" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "AI Development", href: "/ai-development" },
      { name: "Web Development", href: "/web-development" },
      { name: "Mobile App Development", href: "/mobile-apps" },
      { name: "Software Development", href: "/software-development" },
      { name: "UI/UX Design", href: "/ui-ux" },
      { name: "Cloud Solutions", href: "/cloud" },
      { name: "DevOps Services", href: "/devops" },
      { name: "API Integration", href: "/api-integration" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "AI Automation", href: "/automation" },
      { name: "Business Intelligence", href: "/business-intelligence" },
      { name: "Enterprise Solutions", href: "/enterprise" },
      { name: "Retail Solutions", href: "/retail" },
      { name: "E-commerce Solutions", href: "/ecommerce" },
      { name: "Digital Transformation", href: "/digital-transformation" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    dropdown: [
      { name: "Contact Us", href: "/contact" },
      { name: "Get a Quote", href: "/quote" },
      { name: "Book a Consultation", href: "/consultation" },
      { name: "Technical Support", href: "/support" },
      { name: "FAQs", href: "/faq" },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigate to a page or homepage section
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    router.push(href);
  };

  // Open or close mobile dropdown
  const toggleDropdown = (name: string) => {
    setActiveDropdown((previous) =>
      previous === name ? null : name
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* NAVBAR HEADER */}
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="group flex shrink-0 items-center gap-3 text-left"
            aria-label="Go to homepage"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
              <BrainCircuit className="h-7 w-7 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-extrabold leading-none tracking-tight text-gray-900">
                ZYNOVA<span className="text-blue-600">.</span>
              </span>

              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[3px] text-gray-500">
                AI Solutions
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 lg:flex">

            {navLinks.map((link) => (
              <div key={link.name} className="group relative">

                {/* MAIN NAVIGATION BUTTON */}
                <button
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className="flex items-center gap-1.5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600"
                  aria-haspopup="true"
                >
                  {link.name}

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* DESKTOP DROPDOWN */}
                <div className="invisible absolute left-0 top-full z-50 max-h-[75vh] w-64 translate-y-2 overflow-y-auto rounded-xl border border-gray-100 bg-white py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                  {link.dropdown.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleNavigation(item.href)}
                      className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.name}
                      <span className="text-blue-400">→</span>
                    </button>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* DESKTOP ASK ME BUTTON */}
          <button
            type="button"
            onClick={() => handleNavigation("/#contact")}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 lg:inline-flex"
          >
            <MessageCircle size={18} />
            Ask Me
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => {
              setIsOpen((previous) => !previous);
              setActiveDropdown(null);
            }}
            className="p-2 text-gray-800 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="max-h-[80vh] overflow-y-auto border-t border-gray-100 pb-6 pt-3 lg:hidden">

            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100">

                <div className="flex items-center justify-between">

                  {/* MOBILE MAIN NAVIGATION */}
                  <button
                    type="button"
                    onClick={() => handleNavigation(link.href)}
                    className="py-4 font-semibold text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </button>

                  {/* MOBILE DROPDOWN TOGGLE */}
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.name)}
                    className="p-3 text-gray-600 transition-colors hover:text-blue-600"
                    aria-label={`Toggle ${link.name} submenu`}
                    aria-expanded={activeDropdown === link.name}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                </div>

                {/* MOBILE DROPDOWN ITEMS */}
                {activeDropdown === link.name && (
                  <div className="flex flex-col gap-1 pb-3 pl-5">

                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleNavigation(item.href)}
                        className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        → {item.name}
                      </button>
                    ))}

                  </div>
                )}

              </div>
            ))}

            {/* MOBILE ASK ME BUTTON */}
            <button
              type="button"
              onClick={() => handleNavigation("/#contact")}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white"
            >
              <MessageCircle size={18} />
              Ask Me
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}
