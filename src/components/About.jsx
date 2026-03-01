import { Sparkles, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3 font-mono">
            <Sparkles className="w-10 h-10 text-red-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
            About Me
          </h2>
          <p className="text-xl text-gray-400">Passionate about solving complex problems with innovative solutions</p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="group bg-gradient-to-br from-gray-950 via-red-950/20 to-gray-950 border border-red-500/30 rounded-3xl p-10 backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_60px_rgba(239,68,68,0.3)] hover:border-red-400/60 transition-all duration-500 cursor-pointer">
            <p className="text-xl text-gray-200 leading-relaxed text-center group-hover:text-white transition-colors duration-300 font-mono">
              I am passionate about solving complex problems and building innovative, user-focused solutions. With expertise in <span className="text-red-500 font-semibold group-hover:text-red-400 transition-colors">full-stack development</span>, <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">AI</span>, and <span className="text-red-400 font-semibold group-hover:text-red-300 transition-colors">data science</span>, I craft scalable systems and intuitive designs. Currently advancing my skills at <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">Indiana University's Luddy School of Informatics, Computing, and Engineering</span>.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 mt-6 group-hover:text-gray-300 transition-colors">
              <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300" />
              <span className="text-lg font-mono">Bloomington, IN, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
