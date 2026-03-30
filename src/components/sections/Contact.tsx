"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-white border-t-8 border-slate-900">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)] border-b-4 border-blue-600 inline-block pb-2">
              [ 05 / Contact ]
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start border-b-2 border-slate-200 pb-20">
            <div>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-slate-900 mb-8 leading-tight sm:leading-[0.9] font-[family-name:var(--font-space)]">
                Let's <br className="hidden sm:block" /> Connect
              </h2>
              <div className="border-l-4 border-blue-600 pl-6 py-2 bg-slate-50 border-y-2 border-r-2 border-slate-900 p-6 shadow-[6px_6px_0px_#cbd5e1] max-w-md">
                <p className="text-lg font-bold text-slate-700">
                  Whether you have a strategic vision, a project proposal, or just want to discuss modern front-end architecture.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <a href="mailto:likithcse168@gmail.com" className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border-2 border-slate-900 p-6 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#2563eb] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
                
                <div className="flex items-center gap-4 relative z-10 mb-4 sm:mb-0">
                  <div className="p-3 bg-slate-900 text-white group-hover:bg-blue-600 transition-colors border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black uppercase tracking-widest text-slate-900">Email</span>
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-900 relative z-10 bg-slate-100 px-3 py-2 border-2 border-slate-900 group-hover:bg-blue-50 transition-colors">
                  likithcse168@gmail.com
                </span>
              </a>

              <a href="tel:+91895159671" className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border-2 border-slate-900 p-6 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#10b981] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
                
                <div className="flex items-center gap-4 relative z-10 mb-4 sm:mb-0">
                  <div className="p-3 bg-slate-900 text-white group-hover:bg-emerald-500 transition-colors border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black uppercase tracking-widest text-slate-900">Phone</span>
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-900 relative z-10 bg-slate-100 px-3 py-2 border-2 border-slate-900 group-hover:bg-emerald-50 transition-colors">
                  +91 895159671
                </span>
              </a>

              <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-50 border-2 border-slate-900 p-6 shadow-[8px_8px_0px_#94a3b8] hover:shadow-[12px_12px_0px_#0f172a] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none"></div>

                <div className="flex items-center gap-4 relative z-10 mb-4 sm:mb-0">
                  <div className="p-3 bg-white text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black uppercase tracking-widest text-slate-900">Base</span>
                </div>
                <div className="text-left sm:text-right relative z-10 bg-white px-3 py-2 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                  <span className="block text-sm font-bold uppercase tracking-widest text-slate-900">Bengaluru</span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-500">IN - 560003</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex gap-6">
              <a
                href="https://github.com/LikithKumarDK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_#94a3b8] hover:shadow-[6px_6px_0px_#2563eb] hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/likith-kumar-d-k-5b5187190/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_#94a3b8] hover:shadow-[6px_6px_0px_#2563eb] hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
            
            <div className="border-2 border-slate-900 p-4 bg-white shadow-[4px_4px_0px_#cbd5e1] text-center sm:text-right flex items-center justify-center">
              <p className="text-slate-900 text-xs font-black uppercase tracking-widest">
                © {new Date().getFullYear()} Likith Kumar D K.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
