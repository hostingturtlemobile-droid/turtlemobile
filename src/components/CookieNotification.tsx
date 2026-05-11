import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('turtle_cookies_accepted');
    if (!hasAcceptedCookies) {
      // Small delay before showing the notification to allow page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('turtle_cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-turtle-dark text-turtle-light z-50 px-6 py-4 shadow-2xl border-t border-turtle-light/10 animate-fade-in-up">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-body text-sm opacity-90 md:pr-12 text-center md:text-left">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies as described in our <Link to="/cookies" className="underline hover:text-turtle-teal transition-colors font-semibold">Cookie Policy</Link>.
        </div>
        <div className="flex gap-4 shrink-0">
          <Link 
            to="/cookies"
            className="px-6 py-2 border border-turtle-light/30 rounded-full font-display text-xs md:text-sm tracking-widest uppercase hover:bg-turtle-light/10 transition-colors"
          >
            Learn More
          </Link>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 bg-turtle-teal text-turtle-dark rounded-full font-display text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotification;
