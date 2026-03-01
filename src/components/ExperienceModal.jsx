import { MapPin, X } from 'lucide-react';

export default function ExperienceModal({ experience, isOpen, isClosing, onClose }) {
  if (!isOpen || !experience) return null;

  return (
    <div 
      onClick={onClose}
      className={`fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-6 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}
      >
        {/* Modal Header */}
        <div className="sticky top-0 flex items-start justify-between p-8 border-b border-cyan-500/30 bg-black/50 backdrop-blur-sm">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2 font-mono">{experience.role}</h2>
            <p className="text-cyan-400 font-semibold mb-1 font-mono">{experience.company}</p>
            <div className="flex items-center gap-2 text-gray-400 font-mono">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </div>
            <p className="text-red-400 font-mono text-sm mt-2">{experience.period}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors ml-4 flex-shrink-0"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">Achievements & Responsibilities</h3>
          <ul className="space-y-3">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-3 items-start text-gray-300 font-mono text-sm leading-relaxed">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
