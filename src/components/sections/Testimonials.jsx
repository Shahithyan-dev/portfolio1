import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager @ TechFlow',
    content: 'Shahithyan delivered a flawless, highly performant web application that exceeded our expectations. The attention to detail in the micro-interactions is truly Apple-level.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'CTO @ StartupX',
    content: 'The 3D WebGL experiences Shahithyan built for us completely transformed our brand presence online. An exceptional developer with a rare blend of design sense and technical expertise.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Designer @ CreativeSpace',
    content: 'Working with Shahithyan is a designer\'s dream. He understands design systems perfectly and brings static mockups to life with smooth, cinematic animations.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'CEO @ DataViz Solutions',
    content: 'We needed a complex data visualization dashboard that performed seamlessly across devices. Shahithyan not only delivered but also optimized the entire architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </div>

      <div className="flex overflow-hidden w-full group py-10">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 px-4">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] glass p-8 rounded-3xl flex-shrink-0 neon-glow-purple hover:shadow-[0_0_40px_rgba(138,92,255,0.3)] transition-shadow duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-accent-purple/50" />
                <div>
                  <h4 className="text-white font-bold font-display">{testimonial.name}</h4>
                  <p className="text-accent-blue text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-text-gray italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
