export default function Marquee() {
  const text = "FULL STACK DEVELOPER • REACT.JS • NEXT.JS • NODE.JS • EXPRESS.JS • MYSQL • MONGODB • HTML • JAVASCRIPT • ";
  
  return (
    <section className="w-full py-8 overflow-hidden bg-secondary border-y border-white/5 relative z-10 flex">
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-gray to-text-white mx-4 tracking-widest opacity-80">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
