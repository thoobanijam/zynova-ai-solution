
"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Bot, Code2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white text-gray-900"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.09),transparent_35%)]" />

      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Container */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-28 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14">

        {/* LEFT CONTENT */}
        <div className="z-10 max-w-2xl">

          {/* Top Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles size={16} />
            Innovating the Future with AI
          </div>

          {/* Small Heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            Zynova AI Solutions
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Empower Your Business With{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Technology
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            We transform ideas into powerful digital solutions. From AI-powered
            applications and intelligent automation to modern web platforms and
            custom software, we help businesses work smarter, innovate faster,
            and achieve sustainable growth.
          </p>

          {/* Additional Content */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Combining creativity, technology, and intelligent systems to build
            digital experiences that solve real-world challenges and unlock new
            opportunities for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

           <Link
  href="/explore-solutions"
  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 sm:text-base"
>
  Explore Our Solutions
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 sm:text-base"
            >
              <Play size={17} className="text-blue-600" />
              Let's Talk
            </Link>

          </div>

          {/* Services Highlights */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-600">

            <div className="flex items-center gap-2">
              <Bot size={18} className="text-blue-600" />
              AI Solutions
            </div>

            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-purple-600" />
              Software Development
            </div>

            <div className="flex items-center gap-2">
              <Zap size={18} className="text-cyan-600" />
              Smart Automation
            </div>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-200 pt-8 sm:gap-8">

            <div>
              <h3 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                AI
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Intelligent Solutions
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                Digital
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Transformation
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                Future
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Ready Technology
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center py-10 lg:py-0">

          {/* Outer glow */}
          <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />

          {/* AI Orb */}
          <div className="relative flex h-[290px] w-[290px] items-center justify-center rounded-full border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-[0_0_100px_rgba(59,130,246,0.12)] sm:h-[430px] sm:w-[430px]">

            {/* Rings */}
            <div className="absolute inset-6 rounded-full border border-blue-200/60" />

            <div className="absolute inset-14 rounded-full border border-cyan-200/60" />

            <div className="absolute inset-24 rounded-full border border-purple-200/60" />

            {/* Inner Orb */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 shadow-[0_0_70px_rgba(59,130,246,0.4)] sm:h-48 sm:w-48">

              <div className="absolute inset-2 rounded-full border border-white/30" />

              <Sparkles
                size={60}
                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] sm:h-20 sm:w-20"
              />

            </div>

            {/* Floating Card - AI */}
            <div className="absolute -right-2 top-8 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-xl shadow-blue-900/5 backdrop-blur-xl sm:-right-10 sm:top-16 sm:p-5">
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Bot size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    AI Intelligence
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Smarter Systems
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Card - Automation */}
            <div className="absolute -left-3 bottom-8 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-xl shadow-purple-900/5 backdrop-blur-xl sm:-left-10 sm:bottom-16 sm:p-5">
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                  <Zap size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Automation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Simplify Workflows
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Card - Digital */}
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-gray-100 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:bottom-0 sm:right-0">
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-xs font-medium text-gray-700">
                  Digital Innovation
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
