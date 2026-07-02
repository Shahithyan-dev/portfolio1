import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'ShopSphere E-Commerce',
    description: 'A comprehensive full-stack e-commerce platform built with React, Node.js, and MySQL.',
    longDescription: 'ShopSphere is a robust e-commerce application featuring product catalog management, user authentication, and shopping cart functionality. Built using React for a dynamic frontend, Express and Node.js for the backend API, and MySQL for reliable data storage. It utilizes HashRouter for seamless navigation.',
    image: '/projects/shopsphere.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Shahithyan-dev/ShopSphere',
    live: 'https://shop-sphere-lemon.vercel.app/',
  },
  {
    id: 2,
    title: 'Hotel Room Booking',
    description: 'A complete hotel room booking platform for ALOKA Room Stay with WhatsApp integration.',
    longDescription: 'This project provides a seamless booking experience for hotel guests. It includes an interactive datepicker for date selection and integrates directly with WhatsApp for booking confirmations and inquiries. Built using React.js and custom CSS for a highly responsive layout.',
    image: '/projects/hotel.png',
    tech: ['React.js', 'CSS', 'JavaScript', 'WhatsApp API'],
    github: 'https://github.com/Shahithyan-dev',
    live: 'https://hotelroombooking-83ai.vercel.app/',
  },
  {
    id: 3,
    title: 'Hospital Management System',
    description: 'A specialized hospital website (NRSLJ) featuring patient management and Google Sheets API integration.',
    longDescription: 'Developed for NRSLJ Speciality Hospital, this platform serves as both a public-facing website and an internal management tool. It innovatively uses Google Sheets as a lightweight, real-time database to manage patient records and appointments, powered entirely by Vanilla JavaScript and HTML/CSS.',
    image: '/projects/hospital.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Google Sheets API'],
    github: 'https://github.com/Shahithyan-dev',
    live: 'https://nrsljspecialityhospitals.com/',
  },
  {
    id: 4,
    title: 'Onivewoods',
    description: 'A modern, animated web application built with React, Vite, and Framer Motion.',
    longDescription: 'Onivewoods focuses on delivering a highly interactive and visually engaging user experience. By leveraging Framer Motion for complex animations and Vite for lightning-fast builds, the application achieves excellent performance metrics while maintaining a premium feel.',
    image: '/projects/onivewoods.png',
    tech: ['React.js', 'Vite', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com/Shahithyan-dev/Onivewoods',
    live: 'https://onivewoods.vercel.app/',
  },
  {
    id: 5,
    title: 'Credit Sure Capital',
    description: 'A finance company website integrating Google Sheets and an online payment gateway.',
    longDescription: 'A secure and responsive website built for a finance firm. The site handles customer inquiries and data collection via Google Sheets integration and processes secure transactions through an embedded online payment gateway. Focused on accessibility and trust-building UI.',
    image: '/projects/creditsure.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Payment Gateway'],
    github: 'https://github.com/Shahithyan-dev',
    live: 'https://creditsurecapital.com/',
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 z-10 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Animated Gradient Border via pseudo element */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative h-full glass rounded-3xl overflow-hidden flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  layoutId={`project-image-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-display font-bold text-white mb-2">
                  {project.title}
                </motion.h3>
                <p className="text-text-gray mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-accent-blue">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-text-gray">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 glass py-2 flex justify-center items-center gap-2 rounded-xl text-white hover:bg-accent-blue transition-colors">
                    <FaExternalLinkAlt size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-3xl relative shadow-[0_0_100px_rgba(79,124,255,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={20} />
              </button>

              <div className="relative h-64 md:h-96">
                <motion.img
                  layoutId={`project-image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>

              <div className="p-8 md:p-12">
                <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  {selectedProject.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-sm px-4 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-text-gray text-lg leading-relaxed mb-10">
                  {selectedProject.longDescription}
                </p>

                <div className="flex gap-6">
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="px-8 py-4 bg-accent-blue text-white rounded-xl font-medium shadow-[0_0_20px_rgba(79,124,255,0.4)] hover:bg-blue-600 transition-colors flex items-center gap-3">
                    <FaExternalLinkAlt /> Live Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
