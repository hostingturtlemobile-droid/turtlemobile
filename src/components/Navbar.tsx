import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Experience', path: '/' },
    { name: 'Challenge', path: '/challenge' },
    { name: 'Solution', path: '/solution' },
    { name: 'Lifestyle', path: '#' },
    { name: 'Concierge', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none no-border bg-slate-100/50 dark:bg-slate-900/50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-full px-12 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="font-serif text-2xl font-bold italic text-blue-800 dark:text-blue-300">
          Turtle Mobility
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-serif tracking-tight text-lg transition-all duration-300 hover:underline decoration-yellow-600 underline-offset-8 ${
                  isActive
                    ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1'
                    : 'text-slate-600 dark:text-slate-400 hover:text-yellow-700 dark:hover:text-yellow-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs hover:opacity-90 transition-opacity">
          Book a Drive
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
