
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  ShieldCheck,
  Users,
  HeartHandshake,
  Target,
  Award,
  MessageCircle,
  BookOpen,
  RefreshCw,
  LockKeyhole,
  Globe2,
  Sparkles,
  Compass,
  CheckCircle2,
  Handshake,
  BrainCircuit,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Innovation",
    subtitle: "Think beyond the ordinary",
    description:
      "Innovation is at the heart of how we approach technology and business challenges. We believe there is always room to discover better ideas, improve existing processes, and explore new possibilities. We encourage creative thinking and stay curious about emerging technologies that can make a meaningful difference.",
    detail:
      "Our approach is not about adopting every new trend. It is about understanding where innovation creates genuine value. By combining fresh perspectives with practical engineering, we aim to develop solutions that help organizations move forward with confidence.",
    icon: Lightbulb,
    color: "blue",
  },
  {
    number: "02",
    title: "Integrity",
    subtitle: "Do what is right",
    description:
      "Integrity guides our decisions, communication, and professional relationships. We believe trust is earned through honesty, consistency, and accountability. Every project should be approached with transparency, realistic expectations, and respect for the people and organizations involved.",
    detail:
      "We aim to communicate openly about opportunities, challenges, timelines, and technical decisions. By being responsible in the way we work, we seek to create relationships built on confidence rather than promises alone.",
    icon: ShieldCheck,
    color: "violet",
  },
  {
    number: "03",
    title: "Customer Focus",
    subtitle: "Understand before creating",
    description:
      "Every business has its own objectives, challenges, and expectations. We value listening carefully and understanding these differences before recommending a technology solution. Our aim is to make sure that the work we undertake remains connected to the needs of the people it is intended to support.",
    detail:
      "We believe a successful digital solution begins with understanding its users. Their feedback, working environments, and expectations help shape better decisions throughout the development process.",
    icon: HeartHandshake,
    color: "rose",
  },
  {
    number: "04",
    title: "Excellence",
    subtitle: "Care in every detail",
    description:
      "We believe quality is reflected in both the small details and the overall experience of a solution. From planning and design to development and testing, we value careful execution, consistent standards, and a commitment to improving the work we deliver.",
    detail:
      "Excellence is not simply about creating something that works. It also means considering usability, maintainability, performance, and reliability so that digital solutions can provide lasting value.",
    icon: Award,
    color: "amber",
  },
  {
    number: "05",
    title: "Collaboration",
    subtitle: "Better results through teamwork",
    description:
      "Meaningful technology solutions are often created through shared knowledge and different perspectives. We value collaboration between developers, business teams, stakeholders, and users because each perspective can reveal important details and opportunities.",
    detail:
      "We aim to create an environment where ideas can be discussed openly, questions are encouraged, and challenges are addressed together. Strong collaboration helps transform individual contributions into better outcomes.",
    icon: Users,
    color: "cyan",
  },
  {
    number: "06",
    title: "Responsibility",
    subtitle: "Build with awareness",
    description:
      "Technology has an impact on people, businesses, and communities. We value responsible decision-making and recognize the importance of considering security, privacy, accessibility, and the broader consequences of digital systems.",
    detail:
      "Our aim is to approach development thoughtfully, consider risks early, and encourage technology practices that respect users and the information entrusted to digital platforms.",
    icon: LockKeyhole,
    color: "emerald",
  },
  {
    number: "07",
    title: "Continuous Learning",
    subtitle: "Stay curious and keep improving",
    description:
      "The technology landscape changes constantly. We value curiosity, research, experimentation, and continuous learning because staying informed helps us understand new possibilities and make better technical decisions.",
    detail:
      "We believe improvement is an ongoing process. Learning from experience, exploring new tools, and reviewing our methods help us develop stronger capabilities and respond more effectively to changing requirements.",
    icon: BookOpen,
    color: "indigo",
  },
  {
    number: "08",
    title: "Adaptability",
    subtitle: "Be ready for change",
    description:
      "Business requirements and technology environments rarely remain the same forever. We value flexibility and the ability to adapt our thinking, plans, and solutions when new information or changing circumstances require a different approach.",
    detail:
      "By considering future requirements and avoiding unnecessary complexity, we aim to support solutions that can evolve as organizations grow, develop new services, and respond to emerging opportunities.",
    icon: RefreshCw,
    color: "orange",
  },
  {
    number: "09",
    title: "Purposeful Thinking",
    subtitle: "Every solution needs a reason",
    description:
      "We believe technology should serve a clear purpose. Before choosing a tool or developing a feature, we value understanding the problem it is expected to solve and the benefit it should create for its users.",
    detail:
      "Purposeful thinking helps keep projects focused on meaningful outcomes. It encourages us to prioritize useful functionality, avoid unnecessary complexity, and connect technical decisions with business objectives.",
    icon: Target,
    color: "blue",
  },
  {
    number: "10",
    title: "Respect",
    subtitle: "Value every perspective",
    description:
      "Respect is essential to healthy professional relationships. We value different experiences, ideas, skills, and viewpoints, and believe every interaction should be guided by professionalism, fairness, and consideration.",
    detail:
      "By listening to different perspectives and communicating thoughtfully, we aim to create collaborative relationships where people feel heard, appreciated, and able to contribute meaningfully.",
    icon: Handshake,
    color: "violet",
  },
  {
    number: "11",
    title: "Transparency",
    subtitle: "Keep communication clear",
    description:
      "We believe clear communication makes technology projects easier to understand and manage. Transparency means sharing relevant information, explaining technical choices, identifying challenges, and keeping expectations realistic.",
    detail:
      "Our aim is to encourage open discussions throughout a project so that decisions are understood, progress is visible, and everyone involved can work toward the same objectives.",
    icon: MessageCircle,
    color: "cyan",
  },
  {
    number: "12",
    title: "Sustainable Growth",
    subtitle: "Think beyond today",
    description:
      "We value progress that can be maintained and developed over time. Digital solutions should not only address immediate requirements but also consider how organizations may change, expand, and respond to future needs.",
    detail:
      "We aim to encourage scalable thinking, maintainable systems, responsible resource use, and continuous improvement so that technology can remain useful as business priorities evolve.",
    icon: Globe2,
    color: "emerald",
  },
];

const principles = [
  {
    title: "In the way we think",
    description:
      "We approach challenges with curiosity, an open mind, and a willingness to question assumptions. We look for opportunities to simplify complex problems and explore solutions that connect technology with real business requirements.",
    icon: BrainCircuit,
  },
  {
    title: "In the way we work",
    description:
      "We value planning, collaboration, clear communication, and thoughtful execution. We aim to approach each stage of a project with care and maintain focus on quality, usability, and the intended outcome.",
    icon: Compass,
  },
  {
    title: "In the way we build",
    description:
      "We consider the people who use our solutions, the businesses that depend on them, and the responsibilities involved in developing digital systems. Our goal is to build with purpose and improve continuously.",
    icon: CheckCircle2,
  },
];

export default function ValuesPage() {
  const colorStyles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    rose: "bg-rose-50 text-rose-600",
    amber: "bg-amber-50 text-amber-600",
    cyan: "bg-cyan-50 text-cyan-600",
    emerald: "bg-emerald-50 text-emerald-600",
    indigo: "bg-indigo-50 text-indigo-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <main className="bg-[#fbfcff] text-slate-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-100/50 blur-[130px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[2px] bg-indigo-600" />
                <span className="text-sm font-bold tracking-[0.25em] uppercase text-indigo-600">
                  Our Core Values
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.12] tracking-tight text-slate-950">
                Principles that
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  shape everything
                </span>
                we create.
              </h1>

              <p className="text-lg md:text-xl leading-9 text-slate-600 mt-8 max-w-2xl">
                At ZYNOVA AI Solutions, our values represent the
                principles that guide our decisions, influence our
                approach to technology, and shape the relationships
                we build. They reflect our commitment to meaningful
                innovation, responsible development, collaboration,
                and continuous improvement.
              </p>

              <p className="text-lg leading-8 text-slate-500 mt-5 max-w-2xl">
                They are more than statements on a page. They are
                standards we aspire to bring into our everyday
                thinking, planning, communication, and work.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  href="#core-values"
                  className="inline-flex items-center gap-3 rounded-full bg-slate-950 text-white px-7 py-4 font-semibold hover:bg-indigo-700 transition-all"
                >
                  Explore Our Values
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white text-slate-700 px-7 py-4 font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-all"
                >
                  About ZYNOVA
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-[38px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1 shadow-2xl shadow-indigo-200">
                  <div className="rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 min-h-[440px] flex flex-col justify-between text-white relative overflow-hidden">

                    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/20" />
                    <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full border border-white/20" />

                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-blue-100">
                          Our Foundation
                        </p>
                        <p className="text-xl font-bold mt-2">
                          Built on Principles
                        </p>
                      </div>
                      <Sparkles size={25} className="text-blue-100" />
                    </div>

                    <div className="relative z-10 flex justify-center py-8">
                      <div className="w-48 h-48 rounded-full border border-white/30 flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full border border-white/40 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-[28px] bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/30">
                            <HeartHandshake size={48} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold">
                        Believe.
                        <br />
                        Build. Become.
                      </h2>
                      <p className="text-sm text-blue-100 leading-7 mt-3">
                        The principles behind thoughtful technology
                        and meaningful relationships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 shadow-xl rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Guided by Trust
                      </p>
                      <p className="text-xs text-slate-500">
                        Values in every decision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white border-y border-slate-100 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-4">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Believe
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mt-5 leading-tight">
              Strong values create a stronger foundation.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Technology is constantly changing, but the principles
              behind meaningful work remain important. Trust,
              responsibility, creativity, quality, and respect
              influence how organizations develop relationships
              and create lasting value. We believe these principles
              should be reflected in every stage of a technology
              journey.
            </p>

            <p>
              At ZYNOVA AI Solutions, we aspire to combine technical
              capability with a thoughtful and responsible approach.
              Our values help us consider not only what can be built,
              but why it should be built, who it will support, and
              how it can provide useful outcomes.
            </p>

            <p>
              We also believe values become meaningful through
              consistent actions. They should influence everyday
              conversations, project decisions, development
              practices, and the way people work together.
              This is the foundation we want to strengthen as
              we continue learning and growing.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section
        id="core-values"
        className="py-28 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              The Principles We Stand For
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
              Twelve values. One shared direction.
            </h2>

            <p className="text-lg text-slate-600 leading-8 mt-6">
              Each value represents an important part of the culture
              and professional standards we aim to develop. Together,
              they help define how we approach technology, relationships,
              responsibilities, and opportunities for improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group bg-white border border-slate-200 rounded-[28px] p-8 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {value.number}
                    </span>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorStyles[value.color]}`}>
                      <Icon size={27} />
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-indigo-600 mt-7">
                    {value.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-3">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 leading-7 mt-5">
                    {value.description}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  <p className="text-sm text-slate-500 leading-7">
                    {value.detail}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:gap-3 transition-all">
                    Our principle
                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* VALUES IN ACTION */}
      <section className="bg-[#f1f5ff] py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Values in Practice
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
              How our values influence our work.
            </h2>

            <p className="text-lg text-slate-600 leading-8 mt-6">
              Our values are intended to guide more than our ideas.
              They should be reflected in how we understand challenges,
              collaborate with others, and develop solutions that
              support real business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-white rounded-[28px] p-8 md:p-9 border border-white shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-light text-indigo-200">
                      0{index + 1}
                    </span>

                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-9">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8 mt-5">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CUSTOMER RELATIONSHIPS */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Relationships Matter
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mt-5 leading-tight">
              Technology is important. People make the difference.
            </h2>

            <p className="text-lg text-slate-600 leading-8 mt-7">
              Every technology project involves people with different
              responsibilities, experiences, and expectations. We
              believe strong professional relationships are built
              through listening, mutual respect, clear communication,
              and a willingness to understand different perspectives.
            </p>

            <p className="text-lg text-slate-600 leading-8 mt-5">
              We aspire to work with customers and partners as
              collaborators. By understanding their goals and
              maintaining open communication, we aim to create
              technology experiences that are aligned with their
              needs and useful in their everyday work.
            </p>

            <p className="text-lg text-slate-600 leading-8 mt-5">
              This people-focused approach is an important part
              of the professional culture we want to build at
              ZYNOVA AI Solutions.
            </p>
          </div>

          <div className="rounded-[34px] bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100 p-8 md:p-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <HeartHandshake size={28} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                A Relationship Built on Trust
              </h3>

              <p className="text-slate-600 leading-8 mt-4">
                We believe successful collaboration is based on
                understanding, honest communication, shared
                responsibility, and respect for different
                perspectives.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Listen with genuine interest",
                  "Communicate with clarity",
                  "Respect different perspectives",
                  "Work toward shared objectives",
                  "Learn and improve together",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-center">
                    <CheckCircle2
                      size={19}
                      className="text-indigo-600 shrink-0"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-10 md:p-16 text-white relative overflow-hidden">

          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
              The ZYNOVA Way
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Strong principles. Thoughtful technology. Meaningful progress.
            </h2>

            <p className="text-lg text-blue-100 leading-8 mt-6">
              We believe the best technology journeys are shaped
              by more than technical decisions. They are shaped
              by trust, collaboration, responsibility, and a
              shared commitment to improvement. These are the
              values we aspire to bring into every opportunity.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-9 rounded-full bg-white text-indigo-700 px-8 py-4 font-bold hover:bg-blue-50 transition-all"
            >
              Connect With ZYNOVA
              <ArrowRight size={19} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
