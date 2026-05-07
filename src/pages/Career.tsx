import React from 'react';

const Career: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Career Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            Build the <br/> Future of <span className="text-turtle-teal">Flow.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            We're looking for the thinkers, builders, and dreamers who refuse to accept the urban status quo.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="bg-turtle-dark rounded-3xl aspect-video flex items-center justify-center p-12 text-turtle-light overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-turtle-teal/20 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter opacity-10 leading-none absolute top-10 left-10">CULTURE.</h2>
            <p className="text-2xl font-display font-medium relative z-10 leading-relaxed">
              We work in small, highly-autonomous cells. We value speed, radical transparency, and the courage to fail fast.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">Why Turtle?</h2>
            <div className="space-y-6">
              {[
                { title: 'Remote-First Option', desc: 'Work from anywhere on the planet, as long as you can sync with our Gothenburg heart.' },
                { title: 'Equity as Standard', desc: "We are all owners. Every employee receives a significant equity stake in the movement." },
                { title: 'The Lab Access', desc: 'Spend 20% of your time in "The Shell Lab" working on passion projects related to mobility.' }
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-turtle-teal rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-turtle-dark/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roles List */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-bold mb-12">Open Opportunities</h2>
          <div className="flex flex-col border-t border-turtle-dark/10">
            {[
              { role: 'Senior Systems Engineer', dept: 'Engineering', loc: 'Remote / Gothenburg' },
              { role: 'Lead Product Designer', dept: 'Design', loc: 'Gothenburg' },
              { role: 'Command Center Pilot', dept: 'Operations', loc: 'Multiple Cities' },
              { role: 'Battery Chemistry Scientist', dept: 'R&D', loc: 'Gothenburg' }
            ].map(job => (
              <div key={job.role} className="flex flex-col md:flex-row md:justify-between md:items-center p-8 border-b border-turtle-dark/10 hover:bg-white/40 transition-all cursor-pointer group gap-4 md:gap-0">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-turtle-teal transition-colors">{job.role}</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{job.dept} • {job.loc}</p>
                </div>
                <button className="bg-turtle-dark text-turtle-light px-8 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-turtle-teal transition-all md:opacity-0 group-hover:opacity-100">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
