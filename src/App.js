import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceModal from './components/ExperienceModal';

export default function ProfessionalPortfolio() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSelectExperience = (exp) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience onSelectExperience={handleSelectExperience} />
      <Projects />
      <Contact />
      <Footer />
      <ExperienceModal 
        experience={selectedExperience} 
        isOpen={isModalOpen} 
        isClosing={isClosing} 
        onClose={handleCloseModal}
      />
    </div>
  );
}