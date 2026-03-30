"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-40 top-0 border-b border-slate-900 bg-slate-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch h-20">
            <div className="flex-shrink-0 flex items-center border-r border-slate-200 pr-6 mr-6">
              <a href="#" className="flex items-center gap-3">
                <span className="w-10 h-10 border-2 border-slate-900 flex items-center justify-center text-slate-900 font-bold text-xl hover:bg-slate-900 hover:text-white transition-colors">
                  LK
                </span>
                <span className="font-black text-xl lg:text-2xl tracking-tighter uppercase text-slate-900 hidden sm:block font-[family-name:var(--font-space)]">
                  Likith Kumar D K
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex h-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-6 border-l border-slate-200 text-slate-500 hover:bg-slate-900 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center px-8 border-l border-slate-900 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-bold uppercase tracking-widest"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center border-l border-slate-200 pl-4">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-900 p-2 border-2 border-transparent focus:border-slate-900 transition-colors"
              >
                <Menu size={28} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay and Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-slate-50 border-l border-slate-900 z-50 md:hidden flex flex-col"
            >
              <div className="h-20 border-b border-slate-900 flex justify-between items-center px-6 bg-white">
                <span className="font-black text-xl uppercase tracking-tighter font-[family-name:var(--font-space)]">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <div className="flex flex-col flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-slate-200 px-6 py-6 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-lg font-bold uppercase tracking-widest transition-colors block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="p-6">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
