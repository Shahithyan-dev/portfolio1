import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  "シャヒティヤン V", // Japanese
  "샤히티얀 V",       // Korean
  "शाहित्यन वी",     // Hindi
  "沙希提扬 V",       // Chinese
  "Шахитьян В",      // Russian
  "شاهيثيان ڤي",     // Arabic
  "ஷாஹித்யன் வி",     // Tamil
  "SHAHITHYAN V",    // English
];

export default function LoadingScreen({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === languages.length - 1) {
      // Reached English. Wait a little bit, then complete.
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 150); // Flash duration

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center h-24 w-full justify-center">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute text-4xl md:text-6xl font-display font-bold text-white tracking-widest text-center px-4 flex items-center gap-4 whitespace-nowrap"
          >
            <span className="text-accent-blue/50 text-3xl md:text-5xl font-light">&lt;</span>
            {languages[index]}
            <span className="text-accent-blue/50 text-3xl md:text-5xl font-light">/&gt;</span>
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle dot at the bottom to show progress */}
        <div className="absolute -bottom-12 flex gap-2">
          {languages.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-accent-blue scale-150' : 
                i < index ? 'bg-accent-purple/50' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
