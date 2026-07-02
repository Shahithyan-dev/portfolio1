import { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hasStarted, setHasStarted] = useState(false);
  
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView && !hasStarted) {
      spring.set(value);
      setHasStarted(true);
    }
  }, [inView, spring, value, hasStarted]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bio Card */}
          <div className="lg:col-span-8 glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[80px] rounded-full group-hover:bg-accent-purple/20 transition-colors duration-700"></div>
            
            <h3 className="text-2xl font-display font-semibold text-white mb-6">Crafting Digital Experiences</h3>
            <p className="text-text-gray leading-relaxed text-lg mb-6">
              I'm Shahithyan V, an Electronics and Communication Engineering student with a strong passion for Full Stack Web Development. I enjoy building modern, responsive, and user-friendly web applications that solve real-world problems.
            </p>
            <p className="text-text-gray leading-relaxed text-lg">
              My journey started with HTML, CSS, and JavaScript, and later expanded into React.js, Node.js, Express.js, and MySQL. I have developed multiple projects including a Hospital Management System, Credit Sure Capital Website, and ShopSphere E-Commerce Platform.
              I love transforming ideas into functional applications and continuously learning new technologies. My goal is to become a skilled Full Stack Developer capable of building scalable web applications and innovative software solutions.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { label: 'Years Experience', value: 1, suffix: '+' },
              { label: 'Projects Completed', value: 5, suffix: '+' },
              { label: 'Technologies', value: 10, suffix: '+' },
              { label: 'Freelance Clients', value: 2, suffix: '+' },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300 neon-glow-blue hover:shadow-[0_0_30px_rgba(79,124,255,0.3)]">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display flex">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-text-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
