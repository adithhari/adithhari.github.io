import { Coffee, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <Coffee className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse hover:animate-none hover:scale-125 hover:rotate-12 hover:text-red-400 transition-all duration-500 cursor-pointer" />
        
        <h2 className="text-5xl font-bold mb-6 font-mono">Looking to start your coffee journey with me?</h2>
        
        <p className="text-xl text-gray-400 mb-12 font-mono">Feel free to reach out for opportunities, collaborations, or just to chat!</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="mailto:adithharinarayanan@gmail.com" className="group bg-gray-950 border border-red-500/30 rounded-2xl p-6 hover:bg-gray-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:border-red-400/60 transition-all duration-500 flex items-center gap-4 cursor-pointer">
            <Mail className="w-6 h-6 text-red-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            <div className="text-left">
              <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-mono">Email</div>
              <div className="font-semibold group-hover:text-red-400 transition-colors font-mono">adithharinarayanan@gmail.com</div>
            </div>
          </a>
          <a href="tel:+1" className="group bg-gray-950 border border-cyan-500/30 rounded-2xl p-6 hover:bg-gray-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/60 transition-all duration-500 flex items-center gap-4 cursor-pointer">
            <Phone className="w-6 h-6 text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            <div className="text-left">
              <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors font-mono">Phone</div>
              <div className="font-semibold group-hover:text-cyan-400 transition-colors font-mono">+1 (765) 350-6325</div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://linkedin.com/in/adithhari" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full font-semibold hover:scale-110 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center gap-2 font-mono">
            <Linkedin className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            LinkedIn
          </a>
          <a href="https://github.com/adithhari" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gray-900 border border-cyan-500/30 rounded-full font-semibold hover:bg-gray-800 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-400/60 transition-all duration-300 flex items-center gap-2 font-mono">
            <Github className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
