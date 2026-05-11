import React from 'react';
import { Link } from 'react-router-dom';

const Investor: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-[100dvh] pt-24 pb-12 px-6 md:px-12 flex items-center">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Investor Hero */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-turtle-dark leading-tight">
            The Turtle <br /> Capital
          </h1>
          <div className="font-body space-y-6 pt-2 md:pt-0">
            <p className="text-lg md:text-xl text-turtle-dark leading-relaxed font-medium">
              We are currently engaging with long-term, value-driven investors who share our belief that urban mobility needs a <span className="text-turtle-teal font-bold">fundamental structural reset</span>. 
            </p>
            <p className="text-base text-turtle-dark/70 leading-relaxed">
              If you are interested in early-stage innovation and want to be among the first to back <span className="text-turtle-dark font-semibold">practical autonomy</span> combined with genuinely <span className="text-turtle-dark font-semibold">sustainable urban mobility</span>, we would be happy to connect.
            </p>
            
            <div className="bg-white/40 border border-turtle-teal/10 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-turtle-dark/50 mb-1">Direct Contact</p>
                <a href="mailto:investors@turtlemobility.com" className="text-base md:text-lg font-bold text-turtle-dark hover:text-turtle-teal transition-colors flex items-center gap-2">
                  investors@turtlemobility.com
                  <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
              <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-turtle-dark/10 pt-4 sm:pt-0 sm:pl-6">
                <p className="text-xs md:text-sm text-turtle-dark/60 max-w-[200px]">
                  Pitch deck and additional materials available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* CTA Section */}
        <div className="bg-turtle-teal text-turtle-light p-8 md:p-12 rounded-[2.5rem] text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">Ready to shape the future of urban mobility?</h2>
          <p className="text-base md:text-lg font-body max-w-2xl mx-auto mb-8 opacity-90">
            Get in touch with our investor relations team to learn more about our vision and current opportunities.
          </p>
          <Link to="/contact" className="inline-block bg-turtle-dark text-turtle-light px-6 py-3 rounded-xl font-body font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-turtle-dark transition-all shadow-lg hover:shadow-xl">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Investor;
