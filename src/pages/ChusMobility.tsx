import React from 'react';
import { Link } from 'react-router-dom';
const ChusMobility: React.FC = () => {
  return (
    <div className="bg-turtle-light min-h-[100dvh] pt-32 pb-20 flex flex-col items-center justify-center px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto py-20">
        <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-turtle-dark mb-6 tracking-tight">
          Coming <br className="md:hidden" /><span className="text-turtle-teal">Soon.</span>
        </h1>
        <p className="text-lg md:text-xl font-body text-turtle-dark/70 mb-12 leading-relaxed">
          We are currently engineering the future of specialized mobility solutions. Our bespoke arm, ChusMobility, will be launching its web presence shortly.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-turtle-dark text-turtle-light px-8 py-4 rounded-xl font-body font-bold text-sm uppercase tracking-widest hover:bg-turtle-teal transition-all shadow-lg hover:shadow-xl"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ChusMobility;
