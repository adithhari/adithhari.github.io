export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-red-500 via-cyan-400 to-red-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-pointer font-mono">
            Adith Harinarayanan
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono">
            <a href="#home" className="hover:text-red-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">About</a>
            <a href="#experience" className="hover:text-red-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Projects</a>
            <a href="#contact" className="hover:text-red-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
