import React from 'react';

const GetApp: React.FC = () => {
  return (
    <section id="app" className="section-pad mist-glow relative overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[420px] h-[420px] bg-chus-blue/15 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center">
        <p className="section-label justify-center">Get the App</p>
        <h2 className="heading-lg mt-4">One app. Every way to move.</h2>

        <div className="mt-14 flex items-end justify-center gap-4 md:gap-8">
          {/* Left phone */}
          <div className="hidden sm:block w-[140px] md:w-[170px] aspect-[9/19] rounded-[2rem] bg-chus-navy border-4 border-chus-ink shadow-card -rotate-6 p-3 flex flex-col gap-2">
            <div className="rounded-xl bg-chus-blue/80 text-white text-xs font-semibold py-4 px-3 text-left">Ride</div>
            <div className="rounded-xl bg-white/10 text-white/80 text-xs font-medium py-4 px-3 text-left">Delivery</div>
            <div className="rounded-xl bg-white/10 text-white/80 text-xs font-medium py-4 px-3 text-left">Robot</div>
          </div>

          {/* Center phone */}
          <div className="w-[170px] md:w-[200px] aspect-[9/19] rounded-[2.2rem] bg-chus-navy border-4 border-chus-ink shadow-soft z-10 p-3 flex flex-col">
            <div className="flex-1 rounded-2xl bg-black/40 relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-chus-blue/60 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-chus-green" />
              </div>
            </div>
            <div className="mt-3 bg-white/10 rounded-2xl p-3 text-left">
              <p className="text-white text-sm font-semibold">Where to?</p>
              <div className="mt-2 bg-white rounded-xl px-3 py-2 text-xs text-chus-mute">Search destination</div>
            </div>
          </div>

          {/* Right phone */}
          <div className="hidden sm:block w-[140px] md:w-[170px] aspect-[9/19] rounded-[2rem] bg-chus-navy border-4 border-chus-ink shadow-card rotate-6 p-3">
            <p className="text-white text-xs font-semibold text-left mb-3">Wallet Balance</p>
            <div className="h-[70%] rounded-2xl bg-white/10" />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href="#app" className="btn-outline !bg-chus-blue-soft !border-transparent">
            ↓ App Store
          </a>
          <a href="#app" className="btn-outline !bg-chus-blue-soft !border-transparent">
            ↓ Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
