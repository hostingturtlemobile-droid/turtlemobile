import React from 'react';
import { IconLayers, IconChart, IconSignal, IconTarget } from '../components/Icons';

const roles = [
  { title: 'Engineering', Icon: IconLayers, tint: 'text-chus-blue bg-chus-blue-soft' },
  { title: 'Product', Icon: IconChart, tint: 'text-chus-blue bg-chus-blue-soft' },
  { title: 'Operations', Icon: IconSignal, tint: 'text-chus-green bg-chus-green-soft' },
  { title: 'Remote Driving', Icon: IconTarget, tint: 'text-chus-green bg-chus-green-soft' },
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Careers</p>
        <h2 className="heading-lg mt-4">Join the future of mobility.</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role) => (
            <a
              key={role.title}
              href="#contact"
              className="card p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${role.tint}`}>
                <role.Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-display font-bold">{role.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
