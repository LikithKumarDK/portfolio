"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Python"],
    color: "bg-blue-500",
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "Vue.js", "Angular"],
    color: "bg-emerald-500",
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "MySQL", "PostgreSQL", "MongoDB"],
    color: "bg-amber-500",
  },
  {
    title: "UI Architecture",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass", "LESS"],
    color: "bg-pink-500",
  },
  {
    title: "AI & Agentic Workflows",
    skills: ["Antigravity", "Cursor", "Claude", "ChatGPT", "Agentic AI"],
    color: "bg-purple-500",
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git", "Docker", "Webpack", "Vite", "REST APIs"],
    color: "bg-slate-600",
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "macOS", "Linux"],
    color: "bg-slate-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 border-b border-slate-200 relative bg-slate-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 font-[family-name:var(--font-space)] border-b-4 border-blue-600 inline-block pb-2">
              [ 02 / Capabilities ]
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="border-t-2 border-slate-900"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row hover:bg-slate-50 transition-colors group ${
                  index !== skillCategories.length - 1 ? "border-b-2 border-slate-900" : ""
                }`}
              >
                {/* Category Header Left Column */}
                <div className="w-full md:w-1/3 xl:w-1/4 py-6 md:pr-6 md:border-r-2 border-slate-900 flex items-center md:items-start lg:items-center gap-4">
                  <span className={`w-3 h-3 flex-shrink-0 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] ${category.color}`}></span>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Right Column */}
                <div className="w-full md:w-2/3 xl:w-3/4 py-6 md:pl-6 border-t-2 md:border-t-0 border-slate-900 md:border-transparent flex flex-wrap gap-3 items-center">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs sm:text-sm font-black bg-white text-slate-900 border-2 border-slate-900 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-[3px_3px_0px_#0f172a] hover:shadow-[0px_0px_0px_transparent] hover:translate-x-[3px] hover:translate-y-[3px] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
