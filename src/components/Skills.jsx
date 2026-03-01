import { Code2, Database, Cloud, Terminal, Sparkles } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold mb-4 text-center flex items-center justify-center gap-3 font-mono">
          <Code2 className="w-12 h-12 text-red-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
          Technical Arsenal
        </h3>
        <p className="text-xl text-gray-400 text-center mb-16 font-mono">Technologies I work with to build amazing solutions</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="group bg-gradient-to-br from-gray-950 to-black border border-red-500/30 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 backdrop-blur-sm hover:border-red-400/60 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                <Terminal className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors font-mono">Languages</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-red-950/40 border border-red-700/40 rounded-lg text-sm hover:bg-red-900/50 hover:border-red-500/60 hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="group bg-gradient-to-br from-gray-950 to-black border border-cyan-500/30 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-500 backdrop-blur-sm hover:border-cyan-400/60 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                <Code2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors font-mono">Frameworks</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-cyan-950/40 border border-cyan-700/40 rounded-lg text-sm hover:bg-cyan-900/50 hover:border-cyan-500/60 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="group bg-gradient-to-br from-gray-950 to-black border border-red-500/30 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 backdrop-blur-sm hover:border-red-400/60 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                <Database className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors font-mono">Databases</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-red-950/40 border border-red-700/40 rounded-lg text-sm hover:bg-red-900/50 hover:border-red-500/60 hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="group bg-gradient-to-br from-gray-950 to-black border border-cyan-500/30 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-500 backdrop-blur-sm hover:border-cyan-400/60 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                <Cloud className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors font-mono">Cloud & DevOps</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.cloud.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-cyan-950/40 border border-cyan-700/40 rounded-lg text-sm hover:bg-cyan-900/50 hover:border-cyan-500/60 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="group bg-gradient-to-br from-gray-950 to-black border border-red-500/30 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-500 backdrop-blur-sm md:col-span-2 lg:col-span-2 hover:border-red-400/60 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                <Sparkles className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors font-mono">Tools & Platforms</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-red-950/40 border border-red-700/40 rounded-lg text-sm hover:bg-red-900/50 hover:border-red-500/60 hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
