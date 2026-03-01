import { Github, Linkedin, Mail, Phone, Code2, Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500 to-cyan-500 p-1 animate-pulse hover:animate-none hover:scale-110 hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] transition-all duration-500 cursor-pointer group">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-black transition-all duration-500">
              <Code2 className="w-16 h-16 text-red-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-mono whitespace-nowrap">
          {['A', 'D', 'I', 'T', 'H', ' ', 'H', 'A', 'R', 'I', 'N', 'A', 'R', 'A', 'Y', 'A', 'N', 'A', 'N'].map((letter, i) => (
            <span 
              key={i} 
              className="inline-block hover:text-red-500 hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-default"
              style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-gray-300 mb-8">
          <Coffee className="w-6 h-6 text-red-500 animate-pulse hover:animate-none hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
          <span className="font-mono">Converting CAFFEINE to CODE Since 2016</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          MS in Computer Science @ Indiana University Bloomington<br/>
          Full-Stack Developer | AI Enthusiast | Data Science Explorer
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full font-semibold hover:scale-110 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300 relative overflow-hidden font-mono">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#projects" className="group px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 font-mono">
            View Projects
          </a>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="mailto:adithharinarayanan@gmail.com" className="group w-12 h-12 rounded-full bg-gray-900 border border-red-500/30 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:border-red-400">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/adithhari" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-gray-900 border border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-cyan-800 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:border-cyan-400">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/adithhari" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-gray-900 border border-gray-600 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[0_0_20px_rgba(75,85,99,0.6)] hover:border-gray-500">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="tel:+17653506325" className="group w-12 h-12 rounded-full bg-gray-900 border border-red-500/30 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:border-red-400">
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
