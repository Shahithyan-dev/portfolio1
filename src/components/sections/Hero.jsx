import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import MagneticButton from '../ui/MagneticButton';

function AnimatedIcosahedron() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 0]} scale={1.5}>
      <meshBasicMaterial color="#4F7CFF" wireframe />
    </Icosahedron>
  );
}

export default function Hero() {
  const [nameTyped, setNameTyped] = useState('');
  const [isNameDone, setIsNameDone] = useState(false);
  const fullName = "Shahithyan V";

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    
    // Delay before typing starts to wait for the loading screen to finish
    const startDelay = setTimeout(() => {
      // Reset the string in case of Hot Module Reloading
      setNameTyped('');
      
      typingInterval = setInterval(() => {
        if (currentIndex < fullName.length) {
          setNameTyped(fullName.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsNameDone(true);
          }, 300); // Wait a tiny bit after typing finishes
        }
      }, 100);
    }, 3200);

    return () => {
      clearTimeout(startDelay);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, []);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Wireframe Icosahedron Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <AnimatedIcosahedron />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-blue"></span>
            </span>
            <h2 className="text-sm md:text-base text-text-gray font-medium tracking-widest uppercase flex items-center">
              Hi, I'm <span className="text-white font-bold ml-1">{nameTyped}</span>
              {!isNameDone && <span className="inline-block w-1.5 h-4 bg-accent-blue ml-1 animate-pulse"></span>}
            </h2>
          </motion.div>
          
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isNameDone ? "visible" : "hidden"}
            className="flex flex-col items-center md:items-start w-full"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient inline-block min-h-[1.2em]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Building Modern Web Applications',
                  2000,
                  'Crafting Beautiful User Experiences',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span> <br />
            <span className="text-3xl md:text-4xl">& ECE Graduate</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-text-gray mb-10 max-w-xl mx-auto md:mx-0">
            Specializes in creating responsive websites, e-commerce platforms, and database-driven solutions that deliver seamless user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center md:justify-start">
            <MagneticButton className="px-8 py-4 bg-accent-blue text-white shadow-[0_0_20px_rgba(79,124,255,0.4)] hover:bg-blue-600">
              <a href="#projects">View Projects</a>
            </MagneticButton>
            <MagneticButton className="px-8 py-4 glass text-text-white hover:bg-white/10">
              <a href="/Shahithyan_Resume.pdf" download="Shahithyan_Resume.pdf" className="w-full h-full flex items-center justify-center">
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 mt-12">
            {[
              { icon: FaGithub, href: 'https://github.com/Shahithyan-dev' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shahithyan-v-80809027b' },
              { icon: FaEnvelope, href: 'mailto:venkatshahi2489@gmail.com' },
            ].map((social, idx) => (
              <MagneticButton key={idx} className="w-12 h-12 glass flex items-center justify-center hover:bg-white/10 text-xl text-text-white hover:text-accent-blue transition-colors">
                <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full">
                  <social.icon />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants} 
          initial="hidden"
          animate={isNameDone ? "visible" : "hidden"}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 neon-glow-blue bg-gradient-to-tr from-accent-blue/30 to-accent-purple/30">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 glass flex items-center justify-center bg-black/50">
              <img
                src="/profile.jpg"
                alt="Shahithyan Portrait"
                className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
