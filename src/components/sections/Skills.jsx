import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaFigma,
  FaHtml5, FaCss3Alt, FaDatabase, FaRobot
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, 
  SiMongodb, SiPostgresql, SiGraphql, SiFirebase, SiKubernetes, SiJest
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    icon: FaReact,
    color: 'text-blue-400',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: FaNodeJs,
    color: 'text-green-500',
    skills: ['Node.js', 'Express.js', 'Google Sheets API']
  },
  {
    category: 'Database',
    icon: FaDatabase,
    color: 'text-purple-400',
    skills: ['MongoDB', 'MySQL']
  }
];

function TiltCard({ children }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full glass rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(79,124,255,0.2)] transition-shadow duration-500 group"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 z-10 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} className="h-full perspective-1000">
            <TiltCard>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl glass ${category.color} group-hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">{category.category}</h3>
                </div>
                
                <ul className="flex-1 space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-3 text-text-gray group-hover:text-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
