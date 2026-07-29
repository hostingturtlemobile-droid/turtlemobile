import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-glow min-h-[100dvh] pt-28 md:pt-32 pb-16 section-pad flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <p className="section-label animate-fade-up">The world&apos;s first remote mobility platform</p>
        <h1 className="heading-xl mt-5 max-w-4xl animate-fade-up animate-delay-1">
          Say bye to conventional mobility.
        </h1>
        <p className="body-muted mt-6 max-w-2xl animate-fade-up animate-delay-2">
          Book a cab. Book a delivery. Book a robot. Book a remote driver. Or have a vehicle arrive at your doorstep — on its own.
        </p>
        <div className="mt-9 flex flex-wrap gap-3 animate-fade-up animate-delay-3">
          <Link to="/#app" className="btn-primary">Download the App</Link>
          <Link to="/#drive" className="btn-outline">Become a Remote Driver</Link>
        </div>

        <div className="mt-14 md:mt-20 rounded-3xl overflow-hidden border border-chus-line/70 shadow-card bg-gradient-to-r from-[#F3EDE4] via-white to-[#EAF3FF] animate-fade-up animate-delay-3">
          <div className="grid md:grid-cols-2 min-h-[220px] md:min-h-[280px]">
            <div className="relative p-8 md:p-10 flex flex-col justify-end overflow-hidden">
              <div className="absolute inset-0 opacity-70">
                {[...Array(28)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-4 h-7 md:w-5 md:h-8 rounded-md"
                    style={{
                      left: `${(i * 17) % 90}%`,
                      top: `${20 + ((i * 29) % 55)}%`,
                      background: ['#C4A484', '#9CA3AF', '#EAB308', '#78716C'][i % 4],
                      transform: `rotate(${(i % 5) - 2}deg)`,
                    }}
                  />
                ))}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none">
                  <path d="M20 160 C80 140, 120 80, 180 100 S280 160, 380 40" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 6" />
                </svg>
              </div>
              <p className="relative z-10 font-display font-bold text-lg md:text-xl text-chus-ink/80">
                Bangalore Gridlock
              </p>
            </div>
            <div className="relative p-8 md:p-10 flex flex-col justify-end overflow-hidden border-t md:border-t-0 md:border-l border-chus-line/50">
              <div className="absolute inset-0">
                <div className="absolute right-8 top-8 w-24 h-40 bg-chus-blue/10 rounded-xl" />
                <div className="absolute right-20 top-16 w-16 h-28 bg-chus-blue/15 rounded-lg" />
                <div className="absolute right-36 top-10 w-20 h-36 bg-white/70 rounded-xl border border-chus-blue/10" />
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-4 h-7 rounded-md"
                    style={{
                      left: `${15 + i * 9}%`,
                      top: `${45 + (i % 3) * 10}%`,
                      background: i % 2 === 0 ? '#3B7CFF' : '#22C55E',
                    }}
                  />
                ))}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none">
                  <path d="M20 150 C100 140, 160 90, 220 80 S320 70, 380 50" stroke="url(#flowGrad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#F97316" />
                      <stop offset="0.5" stopColor="#3B7CFF" />
                      <stop offset="1" stopColor="#22C55E" />
                    </linearGradient>
                  </defs>
                  <circle cx="380" cy="50" r="6" fill="#22C55E" />
                </svg>
              </div>
              <p className="relative z-10 font-display font-bold text-lg md:text-xl text-chus-blue text-right">
                Flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
