import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Briefcase, Award, ExternalLink, Coffee, Sparkles, Database, Cloud, Terminal } from 'lucide-react';

export default function ProfessionalPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      role: "Software Developer",
      company: "Cognizant",
      location: "Chennai, India",
      period: "Aug 2022 - Jun 2024"
    },
    {
      role: "SDE Intern",
      company: "Cognizant",
      location: "Chennai, India",
      period: "Jan 2022 - Aug 2022"
    }
  ];

  const projects = [
    {
      title: "Mana.ai: AI Meeting Co-pilot",
      award: "1st Runner-Up, Luddy Hackathon '25",
      date: "Feb 2025",
      description: "Real-time meeting transcription with emotion analysis and automated action items",
      tech: ["WebRTC", "Google Meet API", "Hume AI", "React", "D3.js", "Supabase", "NLP"],
      highlights: [
        "Built real-time transcription using WebRTC and Google Meet API",
        "Implemented speaker diarization and emotion analysis with Hume AI",
        "Automated NLP workflows to generate summaries and Trello action items",
        "Visualized interactive mind-maps with React and D3.js"
      ],
      gradient: "from-red-600 to-cyan-600",
      github: null
    },
    {
      title: "TinkerPad: LLM Document Summarizer",
      award: "2nd Runner-Up, Luddy Hackathon '24",
      date: "Aug 2024",
      description: "AI-powered document summarization tool with transformer models",
      tech: ["Flask", "React", "Hugging Face", "BART", "T5", "Docker", "AWS EC2"],
      highlights: [
        "Designed summarization tool with Flask, ReactJS, and Hugging Face transformers",
        "Applied BART and T5 models to compress documents by ~70%",
        "Deployed Dockerized APIs on AWS EC2 with <2s response time"
      ],
      gradient: "from-cyan-600 to-red-600",
      github: "https://github.com/adithhari/Document-Summarizer"
    },
    {
      title: "PneumoNetFusion: Pneumonia Detection",
      award: "Research Project",
      date: "Jan 2024 - Apr 2024",
      description: "Ensemble CNN network for chest X-ray pneumonia detection",
      tech: ["Python", "TensorFlow", "GANs", "CNN", "Computer Vision"],
      highlights: [
        "Enhanced dataset with 5,000+ synthetic X-rays via GANs",
        "Trained ensemble of custom CNNs achieving 93% detection accuracy",
        "Improved detection by 15% through image refinement and data augmentation"
      ],
      gradient: "from-red-600 to-red-900",
      github: "https://github.com/adithhari/XRay-Classifier"
    },
    {
      title: "COVID-19 Screening System",
      award: "IoT Project",
      date: "2021",
      description: "IoT-based COVID-19 safety screening system with automated temperature detection",
      tech: ["Python", "IoT", "Raspberry Pi", "Sensors"],
      highlights: [
        "Built automated screening system for public safety",
        "Integrated temperature sensors and facial recognition",
        "Deployed in real-world settings for contactless screening"
      ],
      gradient: "from-cyan-600 to-gray-900",
      github: "https://github.com/adithhari/Covid-19-screening-system"
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "C#", "TypeScript", "Java", "C++", "C", "R", "HTML", "CSS"],
    frameworks: ["ASP.NET", "React", "Angular", "SpringBoot", "NestJS", "Express", "EF Core", "LINQ"],
    databases: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Neo4J", "Firebase", "DynamoDB"],
    cloud: ["AWS EC2", "Lambda", "S3", "RDS", "CloudFront", "Azure", "Docker", "Kubernetes"],
    tools: ["Git", "Jira", "Jenkins", "TeamCity", "Postman", "TensorFlow", "Datadog", "Trello"]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500 to-cyan-500 p-1 animate-pulse hover:animate-none hover:scale-110 hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] transition-all duration-500 cursor-pointer group">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-black transition-all duration-500">
                <Code2 className="w-16 h-16 text-red-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-mono whitespace-nowrap flex justify-center">
            <span className="inline-flex">
              {/* {['A', 'D', 'I', 'T', 'H', ' ', 'H', 'A', 'R', 'I', 'N', 'A', 'R', 'A', 'Y', 'A', 'N', 'A', 'N'].map((letter, i) => ( */}
              {['ADITH', ' ', 'HARINARAYANAN'].map((letter, i) => (
                <span 
                  key={i} 
                  className="inline-block hover:text-red-500 hover:scale-125 hover:-translate-y-2 transition-all duration-300 cursor-default"
                  style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-gray-300 mb-8">
            <Coffee className="w-6 h-6 text-red-500 animate-pulse hover:animate-none hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
            <span className="font-mono">Converting CAFFEINE to CODE Since 2016</span>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            MS in Computer Science @ Indiana University<br/>
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

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3 font-mono">
              <Sparkles className="w-10 h-10 text-red-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
              About Me
            </h2>
            {/* <p className="text-xl text-gray-400">Passionate about solving complex problems with innovative solutions</p> */}
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

          {/* Skills */}
          <div>
            <h3 className="text-5xl font-bold mb-4 text-center flex items-center justify-center gap-3 font-mono">
              <Code2 className="w-12 h-12 text-red-500 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
              Technical Arsenal
            </h3>
            <p className="text-xl text-gray-400 text-center mb-16 font-mono">Technologies I have worked with to build amazing solutions</p>
            
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
        </div>
      </section>

      {/* Experience Section */}
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
                    <div className="group bg-gradient-to-br from-gray-950 to-black backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-400/60 transition-all duration-500 cursor-pointer">
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

      {/* Projects Section */}
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

      {/* Contact Section */}
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
            <a href="tel:+17653506325" className="group bg-gray-950 border border-cyan-500/30 rounded-2xl p-6 hover:bg-gray-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/60 transition-all duration-500 flex items-center gap-4 cursor-pointer">
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p className="hover:text-red-400 transition-colors duration-300 cursor-default font-mono">© 2025 Adith Harinarayanan • Converting caffeine to code since 2016</p>
        </div>
      </footer>
    </div>
  );
}