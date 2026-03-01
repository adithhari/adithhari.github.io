import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../data/experiences';

export default function Experience({ onSelectExperience }) {
  return (
    <section id="experience" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center flex items-center justify-center gap-3 font-mono">
          <Briefcase className="w-10 h-10 text-red-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
          Work Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-cyan-500 to-red-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-red-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-cyan-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div 
                    onClick={() => onSelectExperience(exp)}
                    className="group bg-gradient-to-br from-gray-950 to-black backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-400/60 transition-all duration-500 cursor-pointer"
                  >
                    {/* Date Badge */}
                    <div className="inline-block px-4 py-1 bg-red-950/50 border border-red-700/50 rounded-full text-sm text-red-400 font-semibold mb-3 group-hover:bg-red-900/60 group-hover:border-red-500/60 transition-colors font-mono">
                      {exp.period}
                    </div>
                    
                    {/* Role */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-mono">
                      {exp.role}
                    </h3>
                    
                    {/* Company */}
                    <div className="text-cyan-400 font-semibold mb-1 group-hover:text-cyan-300 transition-colors font-mono">
                      {exp.company}
                    </div>
                    
                    {/* Location */}
                    <div className="text-gray-500 text-sm flex items-center gap-2 font-mono">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
