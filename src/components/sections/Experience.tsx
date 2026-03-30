"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Frontend Architect",
    company: "Nichi-In Software Solutions",
    period: "FEB 2022 — PRESENT",
    location: "BENGALURU, INDIA",
    description: "Spearheading modern web development and architectural decisions while leading a talented team of developers.",
    responsibilities: [
      "Architected frontend solutions using React, Next.js, AngularJS, Vue.js with advanced TypeScript.",
      "Engineered highly responsive UIs utilizing Tailwind CSS and modular Sass architectures.",
      "Optimized complex global state logic using Redux Toolkit and Context APIs for enterprise-scale apps.",
      "Mentored junior developers and enforced CI/CD code quality via comprehensive PR reviews.",
    ],
    projects: ["Hitachi", "Telenet", "Nexta", "DVR", "Uzone", "PLC"],
  },
  {
    role: "Frontend Developer",
    company: "Xorstack",
    period: "JAN 2020 — JAN 2022",
    location: "BENGALURU, INDIA",
    description: "Built and optimized interactive customer-facing interfaces for multiple high-traffic domains.",
    responsibilities: [
      "Constructed dynamic interfaces focusing extensively on React, pure JavaScript, and complex jQuery widgets.",
      "Led the modernization initiative migrating legacy frontend stacks to contemporary React architectures.",
      "Established initial testing phases, notably increasing unit test coverage across all major repositories.",
      "Implemented advanced lazy loading and code-splitting strategies to enhance baseline performance.",
    ],
    projects: ["Abuzaki", "List Match", "Factstream & Covenants", "Broadpub", "Adprime"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)] border-b-4 border-blue-600 inline-block pb-2">
              [ 03 / Employment ]
            </h2>
          </div>

          <div className="relative mx-auto mt-8">
            {/* Flawless vertical tracking line */}
            <div className="absolute left-[18px] md:left-[26px] top-4 bottom-0 w-1 bg-slate-900 z-0"></div>

            <div className="flex flex-col space-y-16 sm:space-y-24">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-row gap-5 sm:gap-6 md:gap-10 relative z-10 group"
                >
                  {/* Timeline Structural Node */}
                  <div className="flex-shrink-0 pt-2 md:pt-1">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_#2563eb] flex items-center justify-center relative group-hover:bg-slate-50 transition-colors z-10">
                      <div className="w-3 h-3 md:w-5 md:h-5 bg-blue-600 border-2 border-slate-900"></div>
                    </div>
                  </div>

                  {/* Content Payload */}
                  <div className="flex-grow grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
                    <div className="xl:col-span-4 flex flex-col pt-1">
                      <span className="font-bold text-blue-600 bg-blue-50 border-2 border-slate-900 px-3 py-1.5 w-max uppercase tracking-widest text-sm mb-4 shadow-[2px_2px_0px_#0f172a]">{exp.period}</span>
                      <h3 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-3 font-[family-name:var(--font-space)]">
                        {exp.role}
                      </h3>
                      <span className="text-lg font-black text-slate-500 uppercase tracking-widest mb-1">{exp.company}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.location}</span>
                    </div>

                    <div className="xl:col-span-8 bg-white p-8 sm:p-10 border-2 border-slate-900 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#2563eb] transition-all duration-300 relative overflow-hidden">
                      {/* Decorative inner background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <p className="text-lg font-bold text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">{exp.description}</p>
                        
                        <ul className="space-y-4 mb-10">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <span className="mt-2 w-2 h-2 border-2 border-slate-900 bg-blue-600 flex-shrink-0 shadow-[2px_2px_0px_#0f172a]"></span>
                              <span className="text-slate-700 font-semibold leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="border-t-2 border-slate-200 pt-6">
                          <p className="text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Selected Projects</p>
                          <div className="flex flex-wrap gap-2.5">
                            {exp.projects.map((project, i) => (
                              <span
                                key={i}
                                className="bg-slate-50 text-slate-900 text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-default shadow-[2px_2px_0px_#0f172a] hover:shadow-[0px_0px_0px_transparent] hover:translate-x-[2px] hover:translate-y-[2px]"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
