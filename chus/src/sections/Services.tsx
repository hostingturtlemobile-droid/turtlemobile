import React from 'react';
import { Link } from 'react-router-dom';
import { IconCar, IconBox, IconRobot, IconWheel, IconKey } from '../components/Icons';

const services = [
  {
    title: 'Remote Cab',
    desc: 'An EV, operated remotely. No stranger beside you.',
    Icon: IconCar,
    tint: 'bg-chus-blue-soft text-chus-blue',
    href: '/services/remote-cab',
  },
  {
    title: 'Goods Delivery',
    desc: 'Groceries, parcels, and small business — delivered electric.',
    Icon: IconBox,
    tint: 'bg-chus-blue-soft text-chus-blue',
  },
  {
    title: 'Delivery Robots',
    desc: 'Autonomous, supervised robots for the last 500 meters.',
    Icon: IconRobot,
    tint: 'bg-chus-green-soft text-chus-green',
  },
  {
    title: 'Remote Driver',
    desc: 'Hire a certified driver for your own vehicle.',
    Icon: IconWheel,
    tint: 'bg-chus-green-soft text-chus-green',
  },
  {
    title: 'Self-Drive',
    desc: 'It arrives on its own. You drive from there.',
    Icon: IconKey,
    tint: 'bg-chus-blue-soft text-chus-blue',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-pad mist-glow">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Our Services</p>
        <h2 className="heading-lg mt-4">Five services. One platform.</h2>
        <p className="body-muted mt-4 max-w-2xl">
          Everything a city needs to move — booked from the same app, run through the same operations network.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => {
            const content = (
              <>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.tint}`}>
                  <service.Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-base">{service.title}</h3>
                <p className="mt-2 text-sm text-chus-mute leading-relaxed">{service.desc}</p>
              </>
            );

            if (service.href) {
              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="card p-5 md:p-6 hover:-translate-y-1 hover:border-chus-blue/40 transition-all block"
                >
                  {content}
                </Link>
              );
            }

            return (
              <article key={service.title} className="card p-5 md:p-6">
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
