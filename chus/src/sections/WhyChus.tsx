import React from 'react';
import {
  IconBolt, IconUsers, IconChart, IconPin, IconShield, IconLeaf, IconSignal, IconEye,
} from '../components/Icons';

const problems = [
  { title: 'Traffic Congestion', desc: 'Hours lost to gridlock every single day.', Icon: IconBolt },
  { title: 'Driver Shortages', desc: 'Not enough drivers for rider demand.', Icon: IconUsers },
  { title: 'Rising Fares', desc: 'Surge pricing punishes routine trips.', Icon: IconChart },
  { title: 'Long Wait Times', desc: 'Minutes on the curb add up fast.', Icon: IconPin },
  { title: 'Road Safety', desc: 'Inconsistent standards, inconsistent risk.', Icon: IconShield },
  { title: 'Pollution', desc: 'Idling engines, warming cities.', Icon: IconLeaf },
  { title: 'Driver Fatigue', desc: 'Long shifts behind the wheel, every day.', Icon: IconSignal },
  { title: 'Lack of Privacy', desc: 'A stranger, every ride, every time.', Icon: IconEye },
];

const WhyChus: React.FC = () => {
  return (
    <section id="why-chus" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Why CHUS exists</p>
        <h2 className="heading-lg mt-4 max-w-2xl">Every city hits the same wall.</h2>
        <p className="body-muted mt-4 max-w-2xl">
          Traffic, driver shortages, rising fares, and unsafe rides aren&apos;t separate problems — they&apos;re one system, built for a different century.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {problems.map((item) => (
            <article key={item.title} className="card p-5 md:p-6 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-500 bg-orange-50">
                <item.Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-base text-chus-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-chus-mute leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChus;
