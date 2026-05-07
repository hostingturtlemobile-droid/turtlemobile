import React from 'react';

const Investor: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 md:pb-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Investor Hero */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-8 leading-tight">
            The Capital <br/> of <span className="text-turtle-teal">Change.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            Investing in the transition from asset ownership to mobility-as-a-service. Secure, scalable, and sustainable.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { label: 'Market Cap Potential', value: '$4.2T', desc: 'Urban MaaS market forecast by 2030.' },
            { label: 'Series B Round', value: '$120M', desc: 'Closed July 2024 with Tier 1 VCs.' },
            { label: 'Pilot Retention', value: '96%', desc: 'Industry-leading certification stickiness.' }
          ].map(stat => (
            <div key={stat.label} className="bg-white/40 p-12 rounded-3xl border border-turtle-teal/5">
              <div className="text-4xl md:text-5xl font-black mb-4 text-turtle-dark">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-turtle-teal mb-4">{stat.label}</div>
              <p className="text-xs text-turtle-dark/50 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-turtle-dark text-turtle-light p-12 md:p-24 rounded-[3rem] mb-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Quarterly Perspective</h2>
            <p className="opacity-70 leading-relaxed mb-8">
              "We aren't just selling rides. We are selling the recapture of urban time. Our financial model relies on the extreme efficiency of high-utilization remote-drive fleets, eliminating the idle time of traditional vehicle ownership."
            </p>
            <p className="text-turtle-teal font-bold text-sm">— Marcus V., Chief Investment Officer</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl flex justify-between items-center border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <span className="text-sm font-medium">Q3 Shareholders Report</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">PDF / 4.2 MB</span>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl flex justify-between items-center border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <span className="text-sm font-medium">Mobility Market Analysis 2024</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">PDF / 8.1 MB</span>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl flex justify-between items-center border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <span className="text-sm font-medium">Sustainability ESG Metrics</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">CSV / 1.2 MB</span>
            </div>
          </div>
        </div>

        {/* Board Section */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Governing the Future</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {['Nexus Ventures', 'Green Horizon Fund', 'Nordic Equity', 'Global Transit Partners'].map(fund => (
              <div key={fund} className="opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                <div className="h-1 bg-turtle-dark mb-4 w-12 mx-auto" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{fund}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
