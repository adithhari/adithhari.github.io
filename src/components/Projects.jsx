import { Award, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center font-mono">Featured Projects</h2>
        <p className="text-xl text-gray-400 text-center mb-16 font-mono">Award-winning projects and innovations</p>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative">
              {/* Card Container */}
              <div className="bg-gradient-to-br from-gray-950 to-black backdrop-blur-sm border border-red-500/20 rounded-3xl overflow-hidden hover:border-red-400/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.2)]">
                <div className="grid lg:grid-cols-[300px,1fr] gap-0">
                  {/* Left Side - Project Image/Icon Area */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} p-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10">
                      <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Award className="w-16 h-16 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/50 rounded-full text-yellow-300 text-sm font-bold font-mono">
                          {project.award}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Project Details */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors font-mono">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-mono">
                          {project.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors font-mono">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider font-mono">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, j) => (
                          <li key={j} className="flex gap-3 text-gray-300 group-hover:text-gray-100 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <span className="text-sm font-mono">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider font-mono">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span 
                            key={j} 
                            className="px-4 py-2 bg-gray-900/50 border border-red-600/30 rounded-lg text-sm font-medium hover:bg-red-950/50 hover:border-red-500/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 cursor-pointer font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 group/btn font-mono"
                      >
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
