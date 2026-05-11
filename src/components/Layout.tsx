import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieNotification from './CookieNotification';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-turtle-light overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieNotification />
    </div>
  );
};

export default Layout;
