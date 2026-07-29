import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-chus-line bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Logo />
        <p className="font-mono text-[10px] md:text-xs tracking-[0.14em] uppercase text-chus-mute">
          © {new Date().getFullYear()} CHUS Mobility — Say bye to conventional mobility
        </p>
      </div>
    </footer>
  );
};

export default Footer;
