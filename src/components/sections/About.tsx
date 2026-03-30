"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-b border-slate-200 relative bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)] border-b-4 border-blue-600 inline-block pb-2 mb-8">
                [ 01 / Summary ]
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="p-8 sm:p-12 border-2 border-slate-900 shadow-[12px_12px_0px_#2563eb] bg-white text-slate-800 text-lg leading-relaxed font-semibold relative overflow-hidden">
                {/* Decorative background grid inside the box */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                  <p className="mb-8 font-medium">
                    Hey there! I'm Likith, an experienced Frontend Developer and Team Lead with a passion for delivering scalable,
                    maintainable, and stunning web applications. Over the last <span className="inline-block bg-blue-600 text-white font-black px-3 py-1 shadow-[4px_4px_0px_#0f172a] transform -rotate-2 hover:rotate-0 transition-all mx-1">6+ years</span>, I've
                    specialized in modern JavaScript, TypeScript, and high-performance full-stack architecture.
                  </p>
                  
                  <div className="bg-slate-50 border-2 border-slate-900 p-6 mb-8 shadow-[6px_6px_0px_#0f172a]">
                    <p className="text-slate-800 font-bold mb-4">
                      I have successfully led front-end teams, coordinated with stakeholders, and launched enterprise features powered by:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["React", "Next.js", "Vue.js", "AngularJS", "Node.js", "PHP", "Python"].map((tech) => (
                        <span key={tech} className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors text-sm font-black uppercase tracking-widest px-3 py-1.5 shadow-[2px_2px_0px_#2563eb] cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-medium">
                    I believe in clean code, robust structural layouts, and the continuous pursuit of technical excellence to construct impactful digital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
