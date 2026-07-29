import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Technology', href: '/#technology' },
  { name: 'Safety', href: '/#safety' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToHash = (href: string) => {
    setIsMenuOpen(false);
    const hash = href.split('#')[1];
    if (!hash) return;
    if (location.pathname !== '/') {
      return;
    }
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-chus-line/70 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => scrollToHash(link.href)}
              className="font-body text-sm text-chus-mute hover:text-chus-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/#drive" onClick={() => scrollToHash('/#drive')} className="btn-outline !py-2.5 !px-5">
            Become a Driver
          </Link>
          <Link to="/#app" onClick={() => scrollToHash('/#app')} className="btn-primary !py-2.5 !px-5">
            Get the App
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-chus-ink"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden absolute inset-x-0 top-full bg-white border-b border-chus-line transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => scrollToHash(link.href)}
              className="font-display font-semibold text-xl text-chus-ink"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/#drive" onClick={() => scrollToHash('/#drive')} className="btn-outline w-full">
              Become a Driver
            </Link>
            <Link to="/#app" onClick={() => scrollToHash('/#app')} className="btn-primary w-full">
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
