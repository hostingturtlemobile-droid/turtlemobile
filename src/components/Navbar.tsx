import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/turtlemobilelogo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock logic to fix "background vanishing" on mobile scroll
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'KiSS', path: '/kiss' },
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/tech' },
    { name: 'Career', path: '/career' },
    { name: 'Investor', path: '/investor' },
    { name: 'ChusMobility', path: '/chus' },
  ];

  const contactLink = { name: 'Contact', path: '/contact' };

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 ease-in-out ${
      isMenuOpen 
        ? 'z-[9999] bg-[#e3f2c7] py-6' 
        : scrolled 
          ? 'z-50 bg-turtle-light/80 backdrop-blur-md py-3 shadow-sm border-b border-turtle-teal/10' 
          : 'z-50 bg-transparent py-6'
    }`}>
      {/* Mobile Menu Overlay - Force-opaque background and extreme z-index */}
      <div 
        className={`lg:hidden fixed inset-0 w-screen h-screen flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
        style={{ 
          backgroundColor: '#e3f2c7', 
          zIndex: 9999
        }}
      >
        <div className="flex flex-col items-center gap-6 overflow-y-auto max-h-[70vh] w-full pt-12 pb-8 no-scrollbar">
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-4xl font-headline font-black text-turtle-dark hover:text-turtle-teal transition-all active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center" style={{ zIndex: 10000 }} onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Turtle Mobility" className="h-18 md:h-30 w-auto" />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center flex-grow px-12 justify-end mr-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-body font-medium tracking-wide text-[11px] transition-all duration-300 hover:text-turtle-teal hover:-translate-y-0.5 group pb-1 ${
                  isActive ? 'text-turtle-dark' : 'text-turtle-dark/80'
                } ${link.name === 'KiSS' ? 'normal-case' : 'uppercase'}`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-turtle-teal transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to={contactLink.path}
            className="bg-turtle-teal text-turtle-light px-8 py-3 rounded-lg font-body font-bold text-xs uppercase tracking-widest hover:bg-turtle-dark hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden p-2 text-turtle-dark focus:outline-none"
          style={{ zIndex: 10000 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
