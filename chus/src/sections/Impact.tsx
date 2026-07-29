import React from 'react';
import { IconBriefcase, IconHome, IconUsers } from '../components/Icons';

const cards = [
  {
    title: 'Remote Driver Roles',
    desc: 'A new, dignified source of income for certified remote drivers.',
    Icon: IconBriefcase,
  },
  {
    title: 'Rural Hometowns Connected',
    desc: 'Earning power for hometowns, without leaving them behind.',
    Icon: IconHome,
  },
  {
    title: 'Inclusive Workforce',
    desc: 'Open to women, homemakers, retirees, and the mobility-constrained alike.',
    Icon: IconUsers,
  },
];

const pills = [
  'Fully Electric Fleet',
  'Lower Emissions per Trip',
  'Smaller Road Footprint',
  'Less City Congestion',
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Social Impact &amp; Sustainability</p>
        <h2 className="heading-lg mt-4 max-w-2xl">Mobility that moves people forward.</h2>
        <p className="body-muted mt-4 max-w-3xl">
          Employment outside city limits. Inclusive workforce participation. Reduced migration pressure. Increased mobility access — on a fully electric fleet built for cleaner cities.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <article key={card.title} className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-chus-green-soft text-chus-green flex items-center justify-center">
                <card.Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-chus-mute leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>

        <div className="card mt-5 p-6 md:p-8">
          <h3 className="font-display font-bold text-xl">Electric Mobility. Cleaner Cities.</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {pills.map((p) => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
