"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-slate-200 bg-slate-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)] border-b-4 border-blue-600 inline-block pb-2">
              [ 04 / Credentials ]
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#22c55e] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start border-b-2 border-emerald-500 pb-6 mb-8">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)]">
                    Education
                  </h3>
                  <span className="text-sm font-bold bg-slate-900 text-white px-3 py-1.5 uppercase tracking-widest shadow-[2px_2px_0px_#0f172a] transform rotate-2 group-hover:rotate-0 transition-all cursor-default">
                    2019
                  </span>
                </div>
                <div className="space-y-6">
                  <p className="font-black text-slate-900 text-2xl uppercase tracking-tighter leading-snug">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <div className="inline-block border-l-4 border-emerald-500 pl-4 py-1">
                    <p className="font-bold text-slate-600 uppercase tracking-widest sm:text-lg mb-1">PESITM (VTU)</p>
                    <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Shivamogga, Karnataka</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#f59e0b] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start border-b-2 border-amber-500 pb-6 mb-8">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)]">
                    Certifications
                  </h3>
                  <span className="text-sm font-bold bg-slate-900 text-white px-3 py-1.5 uppercase tracking-widest shadow-[2px_2px_0px_#0f172a] transform -rotate-2 group-hover:rotate-0 transition-all cursor-default">
                    2019
                  </span>
                </div>
                <div className="space-y-6">
                  <p className="font-black text-slate-900 text-2xl uppercase tracking-tighter leading-snug">
                    JAVA Programming Certification
                  </p>
                  <div className="inline-block border-l-4 border-amber-500 pl-4 py-1">
                    <p className="font-bold text-slate-600 uppercase tracking-widest sm:text-lg mb-1">ABC-Tech Training & Upskilling</p>
                    <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
