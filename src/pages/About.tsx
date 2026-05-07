import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            The Movement <br/> Behind the <span className="text-turtle-teal">Shell.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            Turtle Mobility isn't just a car company. We're a technology collective reimagining how the world moves.
          </p>
        </div>

        {/* Genesis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">The Genesis</h2>
            <p className="text-turtle-dark/70 leading-relaxed mb-6">
              Founded in Gothenburg in 2024, Turtle was born from a simple observation: urban transit is broken. Traditional cars are too large, steering systems are archaic, and the "one person per 2-ton vehicle" model is unsustainable.
            </p>
            <p className="text-turtle-dark/70 leading-relaxed">
              We stripped away the complexity. No steering wheel. No pedals. Just a high-bandwidth connection to a human pilot and a chassis designed for the narrowest city streets.
            </p>
          </div>
          <div className="bg-turtle-dark h-80 rounded-3xl flex items-center justify-center p-12 text-center">
            <p className="text-turtle-light text-2xl font-display italic">"Simplicity is the ultimate sophistication in motion."</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: "Radical Safety", desc: "Human intuition combined with AI oversight means we've achieved a 99.9% safety record across all test miles." },
            { title: "Eco-Fidelity", desc: "Every component is designed for 100% recyclability, powered by our next-gen solid-state battery array." },
            { title: "Pure Access", desc: "Mobility should be a right, not a luxury. Our one-hand-drive interface makes driving accessible to everyone." }
          ].map((val) => (
            <div key={val.title} className="bg-white/40 backdrop-blur-sm p-10 rounded-2xl border border-turtle-teal/5">
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-sm text-turtle-dark/60 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Footprint */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Expanding the Network</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {['Gothenburg', 'Berlin', 'Tokyo', 'San Francisco', 'London'].map(city => (
              <span key={city} className="text-2xl font-headline font-black uppercase tracking-tighter">{city}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
