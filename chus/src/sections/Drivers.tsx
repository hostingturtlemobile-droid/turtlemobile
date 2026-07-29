import React from 'react';
import { Link } from 'react-router-dom';
import { IconHome, IconCar } from '../components/Icons';

const audiences = [
  'Rural Communities',
  'Homemakers',
  'Women',
  'Retired Professionals',
  'Students',
  'Mobility-Constrained',
];

const Drivers: React.FC = () => {
  return (
    <section id="drive" className="section-pad mist-glow">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="section-label">Work from anywhere drivers</p>
            <h2 className="heading-lg mt-4">Drive cities. From anywhere.</h2>
            <p className="body-muted mt-5">
              A CHUS remote driver can safely operate a vehicle in Bangalore from a village a thousand kilometers away. No commute. No relocation. Just a steady income, earned from home.
            </p>
            <Link to="/#contact" className="btn-primary mt-8">Become a Remote Driver</Link>
          </div>

          <div className="relative h-64 md:h-80">
            <div className="absolute left-[8%] top-[45%] flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-chus-line bg-white shadow-card flex items-center justify-center text-chus-green">
                <IconHome className="w-8 h-8" />
              </div>
              <span className="text-xs text-chus-mute font-medium">Home Station</span>
            </div>
            <div className="absolute right-[8%] top-[12%] flex flex-col items-center gap-2">
              <span className="text-xs text-chus-mute font-medium">City Vehicle</span>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-chus-line bg-white shadow-card flex items-center justify-center text-chus-blue animate-float">
                <IconCar className="w-8 h-8" />
              </div>
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 320" fill="none">
              <path
                d="M90 180 C180 170, 220 80, 310 90 S400 140, 420 90"
                stroke="url(#driverPath)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="255" cy="130" r="5" fill="#3B7CFF" />
              <defs>
                <linearGradient id="driverPath" x1="90" y1="180" x2="420" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FB923C" />
                  <stop offset="0.45" stopColor="#8B5CF6" />
                  <stop offset="0.75" stopColor="#3B7CFF" />
                  <stop offset="1" stopColor="#22C55E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {audiences.map((a) => (
            <span key={a} className="pill">{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drivers;
