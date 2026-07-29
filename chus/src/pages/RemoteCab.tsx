import React from 'react';
import { Link } from 'react-router-dom';
import { IconCheck } from '../components/Icons';

const bullets = [
  'Certified remote driver, every trip',
  'Lower fares than traditional ride-hailing',
  'Live tracking from booking to arrival',
];

const RemoteCab: React.FC = () => {
  return (
    <section className="section-pad pt-32 md:pt-36 bg-white min-h-[100dvh]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="section-label">Service 01 · Remote Cab</p>
          <h1 className="heading-lg mt-4">Say Tchuss to all conventional cabs.</h1>
          <p className="body-muted mt-5">
            Book an electric vehicle remotely operated by a certified driver from a secure operations center. Greater privacy, lower fares, and doorstep arrival — every time. No stranger beside you.
          </p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm md:text-base text-chus-ink">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-chus-green-soft text-chus-green flex items-center justify-center shrink-0">
                  <IconCheck className="w-3 h-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/#app" className="btn-primary">Book a Remote Cab</Link>
            <Link to="/#services" className="btn-outline">All services</Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.5rem] bg-chus-navy border-4 border-chus-ink shadow-soft p-4 flex flex-col animate-float">
            <div className="flex justify-between text-[10px] text-white/60 px-1 mb-2">
              <span>9:41</span>
              <span>5G · 100%</span>
            </div>
            <div className="flex-1 rounded-2xl bg-black/50 relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 280" fill="none">
                <path d="M30 220 C80 180, 100 120, 140 100 S200 70, 210 40" stroke="#3B7CFF" strokeWidth="3" fill="none" />
                <circle cx="30" cy="220" r="6" fill="white" />
                <circle cx="210" cy="40" r="8" fill="#22C55E" />
              </svg>
            </div>
            <div className="mt-3 bg-white/10 rounded-2xl p-4 text-white">
              <p className="text-xs text-white/60">Arriving in</p>
              <p className="font-display font-bold text-2xl">4 min</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-chus-green" />
                <div>
                  <p className="text-sm font-semibold">Remote Driver #2291</p>
                  <p className="text-xs text-white/50">Turtle Mobility KiSS</p>
                </div>
              </div>
              <button type="button" className="mt-4 w-full btn-primary !rounded-xl">
                Track Ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteCab;
