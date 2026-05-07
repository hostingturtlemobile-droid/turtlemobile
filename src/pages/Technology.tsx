import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Tech Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            The Digital <br/> <span className="text-turtle-teal">Tether.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            High-bandwidth tele-operation meets resilient hardware. We're bridging the gap between human intuition and autonomous efficiency.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-12">
            <div className="bg-white/50 p-12 rounded-3xl border border-turtle-teal/10">
              <h3 className="text-2xl font-display font-bold mb-4">Command Horizon™</h3>
              <p className="text-turtle-dark/70 leading-relaxed">
                Our proprietary interface for remote pilots. Using low-latency (sub-20ms) 5G-Direct links, our pilots experience a 360-degree high-fidelity stream of the vehicle's surroundings.
              </p>
            </div>
            <div className="bg-white/50 p-12 rounded-3xl border border-turtle-teal/10">
              <h3 className="text-2xl font-display font-bold mb-4">The Kinetic Shell</h3>
              <p className="text-turtle-dark/70 leading-relaxed">
                A aerospace-grade carbon fiber monocage designed for maximum protection and minimum weight. The shell is the foundation of our energy efficiency metrics.
              </p>
            </div>
          </div>
          <div className="bg-turtle-dark text-turtle-light p-16 rounded-3xl flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 italic">Low Latency <br/>is Safety.</h2>
              <p className="opacity-60 leading-relaxed">
                Our network architecture utilizes a private edge-computing grid, ensuring that every command is executed with nearly zero lag, regardless of urban density.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs uppercase opacity-40">Latency</span>
                <span className="text-xs font-bold">18ms Avg</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs uppercase opacity-40">Frequency</span>
                <span className="text-xs font-bold">120Hz Telemetry</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs uppercase opacity-40">Uptime</span>
                <span className="text-xs font-bold">99.999%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sensory Array */}
        <div className="bg-turtle-teal/5 p-12 md:p-20 rounded-3xl border border-turtle-teal/20 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">The Sensory Array</h2>
          <p className="max-w-3xl mx-auto text-turtle-dark/70 mb-12">
            Equipped with 12 ultrasonic sensors, 8 high-res cameras, and a solid-state LiDAR unit, every Turtle vehicle possesses a level of awareness that far exceeds human capability.
          </p>
          <button className="bg-turtle-dark text-turtle-light px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-turtle-teal transition-all">
            Technical Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
