import React from 'react';

const TurtleKiss: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Manifesto Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            The KiSS <br/> <span className="text-turtle-teal">Manifesto.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            Keep it Simple & Sustainable. This isn't just a slogan - it's our technical and design blueprint.
          </p>
        </div>

        {/* The Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-turtle-dark/10 mb-32">
          {[
            { word: "SIMPLE.", desc: "Eliminating 80% of traditional vehicle components. No engine, no gearbox, no manual steering column. Less parts, less failure, more room for you." },
            { word: "SUSTAINABLE.", desc: "Circular design from the ground up. Our shells are made from bio-composite fibers, and our batteries are designed for a second-life in stationary storage." },
            { word: "SECURE.", desc: "High-bandwidth security. Our Command Horizon link uses quantum-ready encryption, ensuring that every ride is as secure as it is smooth." }
          ].map((pillar, idx) => (
            <div key={pillar.word} className={`p-12 ${idx !== 2 ? 'md:border-r border-turtle-dark/10' : ''} group hover:bg-white/40 transition-all`}>
              <div className="text-3xl md:text-5xl font-headline font-black text-turtle-teal mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{pillar.word}</div>
              <p className="text-sm text-turtle-dark/70 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Content Section: Design Philosophy */}
        <div className="max-w-4xl mb-32">
          <h2 className="text-3xl font-display font-bold mb-8">Design Language 1.0</h2>
          <p className="text-lg text-turtle-dark/80 leading-relaxed mb-8">
            Our design language is inspired by the turtle - nature's most efficient protector. It's about a hard, resilient shell protecting a soft, intuitive interior. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-turtle-teal pl-8 py-4">
              <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-turtle-teal">Visual Breath</h4>
              <p className="text-sm opacity-60">We use negative space to reduce cognitive load. A clean car leads to a clean mind.</p>
            </div>
            <div className="border-l-4 border-turtle-teal pl-8 py-4">
              <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-turtle-teal">Kinetic Honesty</h4>
              <p className="text-sm opacity-60">Every curve has an aerodynamic purpose. Form follows function, with zero decorative waste.</p>
            </div>
          </div>
        </div>

        {/* Visual Anchor */}
        <div className="bg-turtle-dark h-96 rounded-[3rem] overflow-hidden flex items-center justify-center relative p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-turtle-teal/30 to-transparent" />
          <p className="text-3xl md:text-5xl font-headline font-extrabold text-turtle-light italic relative z-10 leading-tight">
            "We don't build cars. <br/> We build flow."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurtleKiss;
