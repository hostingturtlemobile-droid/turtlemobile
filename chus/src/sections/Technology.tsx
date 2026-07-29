import React from 'react';
import { IconMonitor, IconSignal, IconCar } from '../components/Icons';

const tags = [
  'Teleoperation',
  'Smart Routing',
  'Fleet Intelligence',
  'AI Monitoring',
  'Low-Latency Network',
  'Redundant Fail-Safes',
];

const Technology: React.FC = () => {
  return (
    <section id="technology" className="section-pad mist-glow">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="section-label">Technology</p>
          <h2 className="heading-lg mt-4">A technology company, first.</h2>
          <p className="body-muted mt-5">
            Every CHUS vehicle can be operated by a certified driver sitting far away — at a home station, a village hub, or a city operations center. A live connection carries video, audio, and control signals over the mobile network in real time, so the driver sees the road exactly as it is and the vehicle responds within milliseconds.
          </p>
          <p className="body-muted mt-4">
            Smart routing keeps every trip on the fastest safe path. Fleet intelligence balances vehicles, robots, and remote drivers across the city as demand shifts. AI-assisted monitoring and redundant network fail-safes watch every trip end to end. It&apos;s all powered by Turtle Mobility — a next-generation electric micro-mobility platform built specifically for urban transportation.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>

        <div className="card p-8 md:p-10 relative min-h-[340px]">
          <div className="absolute left-10 top-10 flex flex-col items-center gap-2 text-center">
            <div className="w-16 h-16 rounded-full bg-chus-blue-soft text-chus-blue flex items-center justify-center border border-chus-blue/20">
              <IconMonitor className="w-7 h-7" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">Remote Driver</p>
              <p className="text-xs text-chus-mute">Operating from home</p>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-center">
            <div className="w-16 h-16 rounded-full bg-chus-blue-soft text-chus-blue flex items-center justify-center border border-chus-blue/20">
              <IconSignal className="w-7 h-7" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">Mobile Network</p>
              <p className="text-xs text-chus-mute">Live signal, both ways</p>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex flex-col items-center gap-2 text-center">
            <div className="w-16 h-16 rounded-full bg-chus-green-soft text-chus-green flex items-center justify-center border border-chus-green/20">
              <IconCar className="w-7 h-7" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">Vehicle</p>
              <p className="text-xs text-chus-mute">Moving, live on route</p>
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 340" fill="none">
            <path d="M90 70 C160 90, 170 140, 200 170" stroke="#3B7CFF" strokeWidth="2" className="animate-dash" fill="none" />
            <path d="M220 190 C260 230, 290 250, 320 270" stroke="#22C55E" strokeWidth="2" className="animate-dash" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Technology;
