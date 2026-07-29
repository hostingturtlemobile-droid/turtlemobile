import React from 'react';
import {
  IconCar, IconBox, IconRobot, IconWheel, IconKey, IconSignal,
} from '../components/Icons';

const nodes = [
  { label: 'Passengers', Icon: IconCar, angle: -90 },
  { label: 'Goods', Icon: IconBox, angle: -35 },
  { label: 'Robots', Icon: IconRobot, angle: 20 },
  { label: 'Remote Drivers', Icon: IconWheel, angle: 70 },
  { label: 'Self-Drive', Icon: IconKey, angle: 140 },
  { label: 'Deliveries', Icon: IconBox, angle: 180 },
  { label: 'Live Network', Icon: IconSignal, angle: 235 },
];

const About: React.FC = () => {
  const radius = 148;

  return (
    <section id="about" className="section-pad mist-glow">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <p className="section-label">What is CHUS Mobility</p>
          <h2 className="heading-lg mt-4">This isn&apos;t ride-hailing. It&apos;s remote mobility.</h2>
          <p className="body-muted mt-5">
            Conventional ride-hailing apps connect passengers with drivers who sit beside them. CHUS connects passengers, deliveries, robots, vehicles, and remote drivers through one distributed mobility network.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="pill opacity-60">Taxi company</span>
            <span className="pill opacity-60">Car rental</span>
            <span className="pill !bg-white border border-chus-green text-chus-ink font-semibold">
              Remote Mobility Platform
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] aspect-square">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const cx = 210;
              const cy = 210;
              const nx = cx + Math.cos(rad) * radius;
              const ny = cy + Math.sin(rad) * radius;
              return (
                <line
                  key={node.label}
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke="#D1D5DB"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
          <div className="absolute inset-[18%] rounded-full border border-chus-blue/20 bg-white shadow-card flex flex-col items-center justify-center text-center z-10">
            <span className="font-display font-extrabold text-2xl tracking-wide">CHUS</span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-chus-blue uppercase mt-1">Network</span>
          </div>
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + (Math.cos(rad) * radius) / 4.2;
            const y = 50 + (Math.sin(rad) * radius) / 4.2;
            const Icon = node.Icon;
            return (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-20"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="w-14 h-14 rounded-full bg-white border border-chus-line shadow-sm flex items-center justify-center text-chus-blue">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium text-chus-mute whitespace-nowrap">{node.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
