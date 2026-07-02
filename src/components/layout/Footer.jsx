import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary pt-16 pb-8 overflow-hidden z-10">
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue animate-pulse-slow"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center">
              <img src="/logo.png" alt="Shahithyan Logo" className="w-12 h-12 object-contain" />
            </a>
            <p className="text-text-gray mt-2 max-w-xs">
              Crafting immersive digital experiences through code and design.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: '#' },
              { icon: FaLinkedin, href: '#' },
              { icon: FaEnvelope, href: 'mailto:test@example.com' },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-white hover:text-accent-blue hover:bg-white/10 transition-colors"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:border-accent-blue transition-colors group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="text-center md:text-left text-sm text-text-gray/60 flex flex-col md:flex-row justify-between border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Shahithyan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with <span className="text-accent-purple">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
