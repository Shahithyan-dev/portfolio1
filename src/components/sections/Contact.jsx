import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const text = `*New Portfolio Contact*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/916374235151?text=${text}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      e.target.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 z-10 container mx-auto px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-text-gray text-lg max-w-xl mx-auto mb-6">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm currently open to new opportunities.
        </p>
        <div className="h-1 w-20 bg-accent-purple rounded-full mx-auto"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass p-8 md:p-12 rounded-3xl neon-glow-blue"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-white/10 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-white/10 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
            <input 
              type="text" 
              id="subject" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-white/10 transition-colors"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
            <textarea 
              id="message" 
              rows="5"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-white/10 transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <MagneticButton className="w-full py-4 bg-accent-blue text-white shadow-[0_0_20px_rgba(79,124,255,0.4)] hover:bg-blue-600 rounded-xl flex items-center justify-center gap-2 group">
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}
