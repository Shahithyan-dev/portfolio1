import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    company: 'Self-Employed / Freelance',
    role: 'Web Developer',
    duration: '2024 - Present',
    responsibilities: [
      'Build responsive, user-friendly interfaces with HTML, CSS, React.js, and JavaScript.',
      'Integrate Google Sheets as a lightweight backend using JavaScript for real-time data handling.',
      'Develop hospital management and finance company sites (e.g., NRSLJ Speciality Hospital, Credit Sure Capital).'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Google Sheets API', 'Node.js']
  },
  {
    company: 'Electronics & Communication Engineering',
    role: 'Student',
    duration: 'Ongoing',
    responsibilities: [
      'Pursuing degree in ECE with a strong focus on software development and full stack engineering.',
      'Continuously learning and building personal projects to bridge the gap between hardware and software.',
      'Mastered core web technologies including React, Express, Node.js, and Databases.'
    ],
    technologies: ['C/C++', 'Java', 'Web Technologies', 'Electronics']
  }
];

function TimelineCard({ exp, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line & Dot (Mobile Only for left alignment, Desktop for center) */}
      <div className="absolute md:hidden left-0 top-0 bottom-0 w-px bg-white/10"></div>
      <div className="absolute md:hidden left-[-4px] top-8 w-2 h-2 rounded-full bg-accent-blue neon-glow-blue"></div>

      <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="hidden md:block w-5/12"></div>
        
        <div className="z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-accent-blue neon-glow-blue">
          <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
        </div>
        
        <div className="w-full md:w-5/12 glass p-8 rounded-3xl hover:bg-white/5 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-2xl font-display font-bold text-white">{exp.role}</h3>
            <span className="text-accent-blue font-medium mt-2 md:mt-0">{exp.duration}</span>
          </div>
          <h4 className="text-lg text-text-white/80 mb-6 font-medium">{exp.company}</h4>
          
          <ul className="space-y-3 mb-8">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-3 text-text-gray">
                <span className="text-accent-blue mt-1.5">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-text-gray">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 z-10 container mx-auto px-6" ref={containerRef}>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          My <span className="text-gradient">Journey</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Timeline Line */}
        <motion.div 
          style={{ height: heightProgress }}
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent -translate-x-1/2 origin-top"
        ></motion.div>
        
        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => (
            <TimelineCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
