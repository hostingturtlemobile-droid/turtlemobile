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

  const navLinks = [
    { name: 'Turtle KiSS', path: '/kiss' },
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/tech' },
    { name: 'Career', path: '/career' },
    { name: 'Investor', path: '/investor' },
    { name: 'ChusMobility', path: '/chus' },
  ];

  const contactLink = { name: 'Contact', path: '/contact' };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled 
        ? 'bg-turtle-light/80 backdrop-blur-md py-3 shadow-sm border-b border-turtle-teal/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center z-50" onClick={() => setIsMenuOpen(false)}>
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
                className={`relative font-body font-medium tracking-wide text-[11px] uppercase transition-all duration-300 hover:text-turtle-teal hover:-translate-y-0.5 group pb-1 ${
                  isActive ? 'text-turtle-dark' : 'text-turtle-dark/80'
                }`}
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
          className="lg:hidden z-50 p-2 text-turtle-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-turtle-light transition-all duration-500 flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-headline font-bold text-turtle-dark hover:text-turtle-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
