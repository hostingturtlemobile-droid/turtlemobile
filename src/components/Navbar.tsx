import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/turtlemobilelogo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0702e477-3bf6-4391-808b-c8555ed4b201");
    formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsContactModalOpen(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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



  return (
    <>
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-4xl font-headline font-black text-turtle-dark hover:text-turtle-teal transition-all active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsContactModalOpen(true);
            }}
            className="text-4xl font-headline font-black text-turtle-teal hover:text-turtle-dark transition-all active:scale-95 mt-4"
          >
            Contact
          </button>
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
            const useLightText = location.pathname === '/kiss' && !scrolled && !isMenuOpen;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-body font-medium tracking-wide text-[11px] transition-all duration-300 hover:text-turtle-teal hover:-translate-y-0.5 group pb-1 ${
                  useLightText 
                    ? (isActive ? 'text-white' : 'text-white/80') 
                    : (isActive ? 'text-turtle-dark' : 'text-turtle-dark/80')
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
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-turtle-teal text-turtle-light px-8 py-3 rounded-lg font-body font-bold text-xs uppercase tracking-widest hover:bg-turtle-dark hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`lg:hidden p-2 focus:outline-none ${location.pathname === '/kiss' && !scrolled && !isMenuOpen ? 'text-white' : 'text-turtle-dark'}`}
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

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[10001] overflow-y-auto bg-turtle-dark/80 backdrop-blur-sm p-4 md:p-8 flex justify-center items-start md:items-center text-left">
          <div className="bg-turtle-light rounded-[2rem] w-full max-w-2xl p-6 md:p-12 relative my-auto shadow-2xl shrink-0 mt-8 md:mt-auto mb-8 md:mb-auto">
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-turtle-dark/5 flex items-center justify-center hover:bg-turtle-teal hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-display font-bold mb-2 text-turtle-dark">Get in Touch</h2>
            <p className="text-turtle-dark/60 mb-8">
              We'd love to hear from you. Send us a message below.
            </p>

            {submitSuccess ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-turtle-teal/10 text-turtle-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-turtle-dark">Message Sent!</h3>
                <p className="text-turtle-dark/60">We've received your inquiry and will be in touch soon.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Full Name *</label>
                    <input required name="name" type="text" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal text-turtle-dark" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Email Address *</label>
                    <input required name="email" type="email" className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal text-turtle-dark" placeholder="jane@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-turtle-dark/70 mb-2">Message *</label>
                  <textarea required name="message" rows={4} className="w-full bg-white border border-turtle-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-turtle-teal text-turtle-dark" placeholder="How can we help you?" />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-turtle-teal text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-turtle-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
