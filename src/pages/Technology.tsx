import React, { useState } from 'react';
import whitepaperPdf from '../assets/ClouDrive_Whitepaper.pdf';
import latencyImg from '../assets/latency-diagram.png';
import sensorImg from '../assets/sensor-diagram.png';

const Technology: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Tech Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            ClouDrive™- <br/> <span className="text-turtle-teal">Valet in your Wallet!</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            High-bandwidth tele-operation meets resilient hardware. We're bridging the gap between human intuition and autonomous efficiency.
          </p>
        </div>

        {/* Whitepaper Summary */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Autonomy with Real Human Control</h2>
            <p className="text-turtle-dark/80 leading-relaxed mb-6 font-body text-lg">
              ClouDrive™ allows vehicles to be operated remotely with a human driver in full control using real-time video, audio, and sensor feedback. Tele-driving is not just a backup feature; it is a <span className="font-bold text-turtle-teal">core capability</span> that delivers the benefits of autonomous driving while keeping human judgment in the loop—crucial for complex urban environments.
            </p>
            <h3 className="text-2xl font-display font-bold mb-4 mt-8">Ultra-Low Latency</h3>
            <p className="text-turtle-dark/80 leading-relaxed font-body text-lg">
              Utilizing multi-network connectivity across 5G and modern 4G networks, we achieve glass-to-glass video latency below <span className="font-bold">60 milliseconds</span>. This ensures remote drivers can react naturally, perform precise maneuvers, and drive smoothly.
            </p>
            <div className="rounded-2xl overflow-hidden border border-turtle-teal/10 shadow-sm mt-8 bg-white">
              <img src={latencyImg} alt="Ultra-Low Latency Connectivity Diagram" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="bg-turtle-teal/5 p-8 md:p-12 rounded-[2.5rem] border border-turtle-teal/10">
            <h3 className="text-2xl font-display font-bold mb-8">Minimalist Architecture</h3>
            <ul className="space-y-6 text-turtle-dark/80 font-body">
              <li className="flex gap-4"><span className="text-turtle-teal font-bold">01</span> <div><span className="font-bold">Purpose-driven stack</span> with 4 cameras, GPS, tactile, and audio sensors—reducing complexity and improving reliability.</div></li>
              <li className="flex gap-4"><span className="text-turtle-teal font-bold">02</span> <div><span className="font-bold">Radar Safety Redundancy</span> provides independent safety, enabling autonomous emergency braking (MRM).</div></li>
              <li className="flex gap-4"><span className="text-turtle-teal font-bold">03</span> <div><span className="font-bold">Software-defined</span> steer/brake-by-wire platform supported by Advanced Driver Assistance Systems (ADAS).</div></li>
              <li className="flex gap-4"><span className="text-turtle-teal font-bold">04</span> <div><span className="font-bold">Cabin transparency</span> shows occupants when a remote driver is actively in control, building trust.</div></li>
            </ul>
          </div>
        </div>

        {/* Remote Operations Features */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-turtle-dark text-turtle-light p-10 rounded-2xl flex flex-col">
            <svg className="w-8 h-8 mb-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 className="text-2xl font-display font-bold mb-6">Remote Driving Station</h3>
            <p className="text-sm opacity-80 leading-relaxed font-body mb-6">
              Developed to the highest automotive standards and equipped with a full set of vehicle controls, including a steering wheel, pedals, and auxiliary functions that enable our Remote Drivers to operate vehicles in real time.
            </p>
            <p className="text-sm opacity-80 leading-relaxed font-body">
              Surrounding and in-vehicle sounds, such as emergency vehicles, are captured via microphones and enable a full situational awareness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-turtle-dark text-turtle-light p-10 rounded-2xl flex flex-col">
            <svg className="w-8 h-8 mb-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <h3 className="text-2xl font-display font-bold mb-6">Real time data transportation</h3>
            <p className="text-sm opacity-80 leading-relaxed font-body mb-6">
              Our advanced connectivity stack enables live video feeds and sensor data, allowing Remote Drivers to operate vehicles from a distance and navigate city streets, neighborhoods, and pickup locations with precision.
            </p>
            <p className="text-sm opacity-80 leading-relaxed font-body">
              All drivers' controls are transmitted to the vehicle via an end-to-end encrypted connection, ensuring the highest safety standards throughout operation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-turtle-dark text-turtle-light p-10 rounded-2xl flex flex-col">
            <svg className="w-8 h-8 mb-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-2xl font-display font-bold mb-6">Reliable vehicle operation</h3>
            <p className="text-sm opacity-80 leading-relaxed font-body mb-6">
              Our vehicles are equipped with proprietary hardware that ensures the safe execution of driver commands.
            </p>
            <p className="text-sm opacity-80 leading-relaxed font-body">
              This system is developed in accordance with industry standards (ISO 26262 and ISO/SAE 21434) and ensures reliable and secure operation of our vehicles.
            </p>
          </div>
        </div>

        {/* Safe By Design Section */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Safe by design</h2>
          <p className="text-lg md:text-xl text-turtle-dark/80 max-w-4xl mx-auto mb-12 md:mb-20 font-body">
            Safety is built into every part of the Turtle. We use multiple layers of redundancy to ensure safe operation at all times:
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Center block */}
            <div className="bg-[#e8efd6] py-16 px-8 md:p-24 rounded-[3rem] border border-turtle-teal/10 text-center relative z-0 mb-12 md:mb-16">
              <h3 className="text-3xl font-display font-bold mb-6">The Sensory Array</h3>
              <p className="max-w-md mx-auto text-turtle-dark/80 mb-10 text-lg font-body leading-relaxed">
                Equipped with multiple High-res cameras and sensors and a radar, every turtle possesses a level of awareness that far exceeds human capability.
              </p>

              <div className="max-w-2xl mx-auto mb-10 bg-white rounded-2xl p-4 shadow-sm border border-turtle-teal/10">
                 <img src={sensorImg} alt="Sensory Array Diagram" className="w-full h-auto" />
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-turtle-dark text-turtle-light px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-turtle-teal transition-all shadow-xl"
              >
                Technical Whitepaper
              </button>
            </div>

            {/* Left Card (Overlapping) */}
            <div className="md:absolute top-10 md:-left-16 lg:-left-32 xl:-left-40 bg-turtle-dark text-turtle-light p-8 rounded-2xl md:w-80 shadow-2xl z-10 text-left mb-6 md:mb-0">
              <svg className="w-6 h-6 mb-4 text-turtle-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <h4 className="font-display font-bold mb-3 text-lg">Multi-Network Connectivity</h4>
              <p className="text-xs opacity-70 leading-relaxed font-body">
                Vehicles are connected to multiple cellular networks at once, ensuring stable, real-time control even if one network experiences issues.
              </p>
            </div>

            {/* Right Card (Overlapping) */}
            <div className="md:absolute bottom-[-3rem] -right-4 lg:-right-20 bg-turtle-dark text-turtle-light p-8 rounded-2xl md:w-80 shadow-2xl z-10 text-left">
              <svg className="w-6 h-6 mb-4 text-turtle-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="font-display font-bold mb-3 text-lg">Fail-Safe Protocols</h4>
              <p className="text-xs opacity-70 leading-relaxed font-body">
                In the rare case of a connection loss or unexpected issue, vehicles are automatically brought to a safe stop, executing the MRM - Minimum risk maneuver.
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-turtle-dark/80 max-w-2xl mx-auto mt-16 md:mt-24 font-body leading-relaxed">
            Our Remote Drivers undergo extensive training and continuous evaluation, ensuring that every trip meets the highest safety standards.
          </p>
        </div>
      </div>

      {/* PDF Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-turtle-dark/90 backdrop-blur-sm p-4 md:p-8 flex justify-center items-start md:items-center">
          <div className="bg-turtle-light rounded-[2rem] w-full max-w-5xl h-[85vh] p-4 md:p-8 relative my-auto shadow-2xl flex flex-col mt-16 md:mt-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 md:bg-turtle-dark/5 text-white md:text-turtle-dark flex items-center justify-center hover:bg-turtle-teal hover:text-white transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-display font-bold mb-4 pr-12 text-turtle-dark">ClouDrive™ Technical Whitepaper</h2>
            <div className="flex-1 rounded-2xl overflow-hidden border border-turtle-dark/10 bg-white">
              <iframe 
                src={whitepaperPdf} 
                title="ClouDrive Whitepaper Full"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;
