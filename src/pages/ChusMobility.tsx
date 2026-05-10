import React from 'react';
import { Link } from 'react-router-dom';
const ChusMobility: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Chus Hero */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold text-turtle-dark mb-6 md:mb-8 leading-tight">
            Specialized <br/> <span className="text-turtle-teal">Solutions.</span>
          </h1>
          <p className="text-lg md:text-2xl font-body text-turtle-teal max-w-2xl leading-relaxed">
            ChusMobility is our bespoke engineering arm, designing niche mobility solutions for unique urban infrastructures.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-24 md:mb-32">
          <div className="bg-white/50 p-8 md:p-12 rounded-[2.5rem] border border-turtle-teal/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-turtle-teal/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-2xl font-display font-bold mb-6">Last-Mile Cargo</h3>
            <p className="text-turtle-dark/70 leading-relaxed">
              Custom-built remote-drive delivery modules designed for the narrowest pedestrian zones. We're replacing heavy delivery vans with light, zero-emission pods.
            </p>
          </div>
          <div className="bg-white/50 p-8 md:p-12 rounded-[2.5rem] border border-turtle-teal/10 relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-turtle-teal/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-2xl font-display font-bold mb-6">Vertical Integration</h3>
            <p className="text-turtle-dark/70 leading-relaxed">
              Solutions for automated parking and lift systems. Our pods can be integrated directly into modern residential elevators for true door-to-door transit.
            </p>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-turtle-dark rounded-[2.5rem] md:rounded-[3rem] px-8 py-16 md:p-24 text-turtle-light mb-32 flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/2">
            <span className="text-turtle-teal font-bold uppercase text-[10px] tracking-[0.2em] mb-4 block">Case Study Vol. 01</span>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-8 leading-tight">The Old Town <br/> Initiative.</h2>
            <p className="opacity-60 leading-relaxed text-lg">
              In Stockholm's Gamla Stan, we deployed a fleet of 20 Chus-Cargo pods. This reduced delivery-related congestion by 68% while maintaining 100% of the historical district's architectural integrity.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-turtle-teal">-68%</div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">Congestion</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-turtle-teal">Zero</div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">Emissions</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-turtle-teal">20min</div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">Delivery Avg</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-turtle-teal">1.2M</div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">Data Points</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold mb-6">Need a custom mobility solution?</h2>
          <Link 
            to="/contact" 
            className="inline-block bg-turtle-teal text-turtle-light px-12 py-5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-turtle-dark transition-all shadow-xl"
          >
            Partner with Chus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChusMobility;
