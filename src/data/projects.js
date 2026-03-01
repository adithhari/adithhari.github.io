export const projects = [
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
    github: "https://github.com/adithhari/Mana.ai"
  },
  {
    title: "CDPH Food Inspections Dashboard",
    award: "Full-Stack Analytics Project",
    date: "Aug 2025 - Dec 2025",
    description: "Production-ready analytics platform for 500,000+ food inspections across 47,494+ Chicago facilities",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Chart.js", "Plotly.js", "Material-UI"],
    highlights: [
      "Designed 27+ REST API endpoints with advanced search, filtering, and pagination",
      "Built medallion-architecture ETL pipeline (Bronze → Silver → Gold) for data ingestion and processing",
      "Created 6+ interactive visualizations with Chart.js, Plotly, and Leaflet maps",
      "Implemented full CRUD operations with normalized 5-table PostgreSQL schema and FK constraints",
      "Integrated React Query (TanStack) for efficient server state management and caching"
    ],
    gradient: "from-purple-600 to-blue-600",
    github: "https://github.com/adithhari/CDPH-foodinspections"
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
