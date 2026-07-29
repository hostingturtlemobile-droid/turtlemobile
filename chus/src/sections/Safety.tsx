import React from 'react';
import { IconShield, IconBolt, IconPin, IconEye } from '../components/Icons';

const features = [
  { title: 'Digital Monitoring', desc: 'Every trip watched, end to end.', Icon: IconShield },
  { title: 'Emergency Response', desc: 'Help dispatched within seconds.', Icon: IconBolt },
  { title: 'Journey Tracking', desc: 'Shareable, live, start to finish.', Icon: IconPin },
  { title: 'Total Privacy', desc: 'No stranger in the seat beside you.', Icon: IconEye },
];

const Safety: React.FC = () => {
  return (
    <section id="safety" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[280px] bg-chus-blue/10 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center">
        <p className="section-label justify-center">Safety &amp; Privacy</p>
        <h2 className="heading-lg mt-4">No stranger sitting beside you.</h2>
        <p className="body-muted mt-4 max-w-2xl mx-auto">
          Every CHUS trip is remotely monitored, digitally tracked, and built around one idea — you should never have to share your ride with someone you don&apos;t know.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {features.map((f) => (
            <article key={f.title} className="card p-6 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-chus-blue-soft text-chus-blue flex items-center justify-center">
                <f.Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-chus-mute">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safety;
