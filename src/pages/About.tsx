import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            The Movement <br/> Behind the <span className="text-turtle-teal">Shell.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            Turtle mobility isn't just a car company. We are building a real-world, long-lasting companion, that empowers you and stays with you through every journey.
          </p>
        </div>

        {/* The Genesis Section */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-16 text-turtle-dark text-center">
            The Genesis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "The Broken Model",
                desc: "Turtle Mobility is the world’s first joystick‑based electric microcar designed from the ground up for modern urban mobility. For decades, cities have relied on a model that no longer makes sense, one person traveling in a two‑to‑three‑ton vehicle, forced into congested urban streets. This approach is inefficient, expensive, environmentally harmful, and fundamentally misaligned with how people actually move in cities today."
              },
              {
                title: "Purpose-Built",
                desc: "At Turtle Mobility, we questioned everything. We stripped away decades of unnecessary complexity, studied real‑world urban mobility pain points, and reimagined what a city vehicle should be. The result is a new microcar that is compact, sleek, sustainable, affordable, and purpose‑built for urban environments. We believe mobility should not be limited by age, physical ability, or driving experience. Our vehicles are purpose‑built for dense urban environments and are operated through a joystick instead of traditional steering wheel and pedals, making them accessible, simple, and far less intimidating."
              },
              {
                title: "Human-in-the-Loop",
                desc: "What truly sets Turtle Mobility apart is our human‑in‑the‑loop autonomy. Users can drive the vehicle themselves or choose to have it fully driven by a certified remote driver - delivering autonomous‑like convenience without removing humans from the decision‑making loop."
              },
              {
                title: "Radical Simplicity",
                desc: "Our car is minimalistically designed, intentionally free from unnecessary fancy features that add cost, weight, and complexity which are rarely used over a car’s lifetime. Modern vehicles are often overloaded with unnecessary functions that make them intimidating, difficult to use, and expensive to maintain. At Turtle Mobility, we take the opposite approach. We believe a car is a car - not a gaming studio, and not a movie theatre. Every element is designed with purpose, focusing on what truly matters for safe, efficient, and enjoyable urban mobility. The result is a vehicle built around clarity, simplicity, and function - nothing more, nothing less."
              },
              {
                title: "The Founding Vision",
                desc: "Turtle Mobility was founded by a group of passionate engineers with experience across traditional Swedish and German automotive OEMs and autonomous vehicle startups. Through years of working inside the industry, the founding team reached a clear conclusion that the conventional five‑seater car is outdated for urban mobility, and current approaches to full autonomy are moving in a direction that is increasingly complex, expensive, and inaccessible. Driven by the belief that mobility is not a luxury, but a fundamental right, the founders stepped out of their comfort zones to build a more practical, human‑centric solution. Turtle Mobility was founded in 2025 in Gothenburg with a global vision - creating vehicles that solve real urban mobility problems today, not hypothetical ones of tomorrow. We are not just building cars. We are building trusted, long‑lasting mobility companions for everyday urban life."
              }
            ].map((item, i) => (
              <div 
                key={item.title} 
                className={`bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-turtle-teal/10 hover:shadow-xl transition-all duration-500 flex flex-col justify-center ${i === 4 ? 'md:col-span-2 md:w-3/4 md:mx-auto' : ''}`}
              >
                <div className="w-12 h-1.5 bg-turtle-teal mb-6 opacity-50 rounded-full" />
                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-6 text-turtle-dark">{item.title}</h3>
                <p className="text-base md:text-lg text-turtle-dark/80 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
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
