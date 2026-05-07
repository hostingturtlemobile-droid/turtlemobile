import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 tonal-shift-bg-surface-dim full-width py-16 px-12 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-end w-full max-w-screen-2xl mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-serif text-xl font-semibold text-slate-800 dark:text-slate-200">
            Turtle Mobility
          </div>
          <div className="font-sans text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400">
            © 2024 Turtle Mobility. The Art of Arrival.
          </div>
        </div>
        <div className="flex gap-8 flex-wrap">
          {['Privacy', 'Archive', 'Terms', 'Press', 'Provenance'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
