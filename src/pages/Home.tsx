import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="font-headline text-6xl md:text-8xl font-light tracking-tight text-on-surface mb-4 leading-tight">
            Obscura <span className="italic text-tertiary">Elegance</span>
          </h1>
          <p className="font-body text-secondary text-lg tracking-wide uppercase">The New Standard of Autonomous Luxury</p>
        </div>
        {/* Obsidian Vehicle Render */}
        <div className="w-full max-w-6xl mx-auto transition-transform duration-700 hover:scale-[1.02]">
          <img 
            alt="3D render of the Obsidian Vehicle" 
            className="w-full aspect-video object-cover rounded-xl shadow-2xl shadow-on-surface/5" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uiJ9zUzvb-wmGF6eAfYs7fVtArJI5rH78NZVN6rm8dETvh4miCjpG4YyPNOWCwDIn7dcMB-FVbBhXRmFAuxn8HQJN4WUJpj8chkz6GL6JB7mtDIGH7y0OcDsfC2YlTbuHxOU9iucK2qTPtiZjLnetfxMzKyL4U_DG2-D5FTlbceDIeRTZkBQPyHzA5QMgE5knL4-wg7bUd0x7dF920f78pP7IYorC-qev1wqJxasE2zSO5CgRFT7MyVL2aB" 
          />
        </div>
      </section>

      {/* Technical Highlights Grid */}
      <section className="max-w-screen-2xl mx-auto px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-surface-variant/20 rounded-xl overflow-hidden shadow-sm">
          {[
            { icon: 'settings_remote', title: 'Remote Pilot', desc: 'Encrypted low-latency manual override capabilities via global satellite constellation.' },
            { icon: 'eco', title: 'Zero Emission', desc: 'Solid-state battery architecture providing 800 miles of sustainable range.' },
            { icon: 'shield', title: 'Redundant Safety', desc: 'Triple-layer LiDAR and ultrasonic sensors ensure 360° fail-safe awareness.' },
            { icon: 'cell_tower', title: 'High-Speed Uplink', desc: 'Integrated 6G connectivity keeping your sanctuary online anywhere on earth.' },
            { icon: 'spa', title: 'Premium Sanctuary', desc: 'Acoustic isolation and biometric climate control for absolute serenity.' },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-lowest p-10 flex flex-col justify-between transition-colors hover:bg-surface-bright group">
              <span className="material-symbols-outlined text-primary mb-8">{item.icon}</span>
              <div>
                <h3 className="font-label text-xs uppercase tracking-widest text-tertiary mb-3">{item.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aesthetic Detail Section */}
      <section className="max-w-screen-2xl mx-auto px-12 mb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden bg-surface-container">
          <img 
            alt="Interior Detail" 
            className="w-full h-[600px] object-cover mix-blend-multiply opacity-90" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uiK4FdqZqvBrlFjsMhEHj5zDxwz6BNE3eF_piNG4m-watgh9F8oR2V_lh1GBKxzGpqIF7-cWFxcyAI7zfc3YuoE0b_QZfxRhcI0jNll9Jq61lHGdBimTVWebB4thgD4r6_FHdI1KXcefmCY65MpoxXbTdaEOTWUHaoAsXxeAp9vJspPC7WqP-4OweEF42lTBplj2d3VCaLYHG30NRhff46FHbqzY_8WA3MDvS6z2KckM26pworvOXmR9gI4StOKMWPSE84tXbgMBg" 
          />
        </div>
        <div className="pl-12">
          <h2 className="font-headline text-5xl mb-8 leading-tight">Crafted for the <br/> <span className="italic">Modern Intellectual.</span></h2>
          <div className="w-16 h-1 bg-tertiary-container mb-8"></div>
          <button className="font-label text-sm uppercase tracking-[0.2em] text-primary flex items-center gap-4 group">
            View Specifications 
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
