"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            {/* Brutalist Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-6 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_#2563eb]"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-slate-900 font-black tracking-widest text-xs sm:text-sm uppercase">
                Frontend Architect & Team Lead
              </span>
            </motion.div>

            {/* Single-line Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold tracking-tight text-slate-900 mb-6 whitespace-normal xl:whitespace-nowrap leading-tight"
            >
              Likith Kumar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">D K</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              Structuring complex web applications and leading high-performance engineering teams with over 6 years of expertise.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#experience"
                className="flex items-center justify-center gap-3 px-8 py-3.5 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-slate-900 shadow-[6px_6px_0px_#0f172a] hover:shadow-[0px_0px_0px_transparent] hover:translate-x-[6px] hover:translate-y-[6px] transition-all text-sm sm:text-base cursor-pointer"
              >
                View Experience <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 font-black uppercase tracking-widest border-2 border-slate-900 shadow-[6px_6px_0px_#cbd5e1] hover:shadow-[0px_0px_0px_transparent] hover:translate-x-[6px] hover:translate-y-[6px] hover:bg-slate-900 hover:text-white transition-all text-sm sm:text-base cursor-pointer"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 h-full lg:pl-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-[280px] sm:w-[350px] lg:w-full max-w-[420px] aspect-[4/5] z-10"
            >
              {/* Decorative background glow moved back with -z-10 and lower opacity */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-[3rem] blur-3xl opacity-30 -z-10"></div>

              <div className="relative z-10 w-full h-full p-2 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden group">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo/Professional Portrait of a Young Man.png`}
                    alt="Likith Kumar D K"
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] rounded-[1.5rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Floating elegant badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white/90 backdrop-blur-md border border-slate-100 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Based In</p>
                  <p className="text-sm font-black text-slate-800">Bengaluru, IN</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
