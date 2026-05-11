import React from 'react';
import kissHeroImg from '../assets/kiss-hero.png';

const TurtleKiss: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen">
      {/* New Primary Hero */}
      <div className="relative min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-between items-center text-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src={kissHeroImg} alt="KiSS Microcar" className="w-full h-full object-cover object-center" />
          {/* Gradient overlay to ensure white text remains readable against the image */}
          <div className="absolute inset-0 bg-turtle-dark/30 bg-gradient-to-b from-turtle-dark/50 via-transparent to-turtle-dark/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight drop-shadow-lg">
            Convenience of an Autonomous car at the expense of conventional scooter!
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto mt-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pt-24 md:pt-48 pb-8 text-left">
          {/* Stats anchored to bottom-left */}
          <div className="flex flex-wrap justify-start gap-8 md:gap-16 text-white drop-shadow-md">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1">60 km/h</div>
              <div className="text-base md:text-lg font-body opacity-90 uppercase tracking-wider text-xs md:text-sm font-semibold">Top speed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1">140 km</div>
              <div className="text-base md:text-lg font-body opacity-90 uppercase tracking-wider text-xs md:text-sm font-semibold">WLTP Range</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1">30km</div>
              <div className="text-base md:text-lg font-body opacity-90 uppercase tracking-wider text-xs md:text-sm font-semibold">in 10 mins charge*</div>
            </div>
          </div>
          
          {/* Paragraph anchored to bottom-right */}
          <div className="max-w-md lg:ml-auto">
            <p className="text-lg font-body text-white/90 leading-relaxed drop-shadow-md">
              KiSS is a joystick-based control, electric, 2 seater microcar designed for modern urban mobility. It prioritizes simplicity, sustainability, and security with real human control.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 pb-20 md:pb-32 mt-20">
        <div className="max-w-screen-xl mx-auto">
          {/* Manifesto Section */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <h2 className="text-5xl md:text-8xl font-headline font-extrabold text-turtle-dark leading-tight tracking-tight">
              The KiSS <br/> Manifesto.
            </h2>
            <p className="text-2xl md:text-3xl font-headline text-turtle-dark leading-relaxed pb-2 md:pb-4 md:pl-8 lg:pl-16">
              Keep it Simple & Sustainable. This isn't just a slogan- Its our DNA!
            </p>
          </div>

        {/* The Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-turtle-dark/10 mb-32">
          {[
            { word: "SIMPLE.", desc: "Redefining the vehicle platform completely with over 80% lesser parts compared to traditional car. No Steering wheel, No control pedal. Less parts, less failure, less cost! Easy to drive and made for all!" },
            { word: "SUSTAINABLE.", desc: "By stripping away unnecessary parts, mass and complexity, KiSS consumes less - less energy, fewer resources, and less space in already crowded cities. Sustainability begins with doing only what is truly needed." },
            { word: "SECURE.", desc: "KiSS introduces a new kind of security: human-in-the-loop autonomy. Unlike fully driverless systems that struggle with unpredictable real-world conditions, KiSS keeps human judgement where it matters most. This approach delivers autonomous-like convenience while avoiding the unresolved edge cases of full autonomy." }
          ].map((pillar, idx) => (
            <div key={pillar.word} className={`p-8 md:p-12 ${idx !== 2 ? 'md:border-r border-turtle-dark/10' : ''} group hover:bg-white/40 transition-all`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-black text-turtle-teal mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{pillar.word}</div>
              <p className="text-sm text-turtle-dark/80 leading-relaxed font-body">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Content Section: Design Philosophy */}
        <div className="max-w-4xl mb-32">
          <h2 className="text-3xl font-display font-bold mb-8">Design Language 1.0</h2>
          <p className="text-lg text-turtle-dark/80 leading-relaxed mb-8">
            Our design language is inspired by the turtle and long living creature, nature's most efficient protector. It's about a hard, resilient shell protecting a soft, intuitive interior. 
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

        {/* Content Section: Specifications */}
        <div className="mb-32 border-t border-turtle-dark/10 pt-24">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-turtle-dark mb-4">
              Specification
            </h2>
            <p className="text-lg font-body text-turtle-dark/60 max-w-2xl">
              The engineering behind the world's most intuitive microcar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Powertrain & Performance",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                items: [
                  { label: "Motor", value: "Permanent Magnet AC" },
                  { label: "Drive", value: "Direct Drive" },
                  { label: "Peak Power", value: "5.2 kW" },
                  { label: "Torque", value: "22 Nm" }
                ]
              },
              {
                title: "Battery & Charging",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                items: [
                  { label: "Capacity", value: "4.5 kWh" },
                  { label: "Protection", value: "IP67" },
                  { label: "Charge (20-80%)", value: "~75 mins" },
                  { value: "Battery swapping compatible" }
                ]
              },
              {
                title: "Range & Chassis",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
                items: [
                  { label: "Urban Range", value: "Up to 140 km" },
                  { label: "Frame", value: "Lightweight aluminium" },
                  { label: "Suspension", value: "Independent all-wheel" }
                ]
              },
              {
                title: "Steering & Control",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
                items: [
                  { label: "Primary", value: "Joystick-based" },
                  { value: "Steer-by-Wire" },
                  { value: "Brake-by-Wire with ABS" },
                  { value: "No pedals or steering wheel" }
                ]
              },
              {
                title: "Connected Services",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
                items: [
                  { label: "ClouDrive™", value: "Remote driver on demand" },
                  { value: "Human-in-the-loop autonomy" }
                ]
              },
              {
                title: "Design DNA",
                icon: <svg className="w-8 h-8 mb-6 text-turtle-teal opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                items: [
                  { label: "Simple", value: "Minimal interfaces" },
                  { label: "Sustainable", value: "Lightweight, efficient" },
                  { label: "Secure", value: "Human-judgment backed" }
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white/40 p-8 rounded-[2rem] border border-turtle-teal/10 hover:shadow-xl hover:-translate-y-2 hover:bg-white/60 transition-all duration-300 flex flex-col group">
                {section.icon}
                <h3 className="text-xl font-display font-bold text-turtle-dark mb-4 group-hover:text-turtle-teal transition-colors">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm font-body text-turtle-dark/70 leading-relaxed">
                      {item.label ? (
                        <>
                          <span className="font-bold text-turtle-dark">{item.label}:</span> {item.value}
                        </>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TurtleKiss;
