import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Technology', path: '/tech' },
    { name: 'Career', path: '/career' },
    { name: 'Investor', path: '/investor' },
    { name: 'ChusMobility', path: '/chus' },
    { name: 'KiSS', path: '/kiss' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  return (
    <footer className="bg-turtle-dark text-turtle-light py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-end w-full max-w-screen-2xl mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-body text-3xl font-bold hover:text-turtle-teal transition-colors">
            Turtle Mobility
          </Link>
          <div className="font-body text-[10px] tracking-widest uppercase opacity-40">
            © {new Date().getFullYear()} Turtle Mobility. All rights reserved.
          </div>
          <div className="flex gap-4 mt-2 flex-wrap">
            {legalLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-body text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 hover:text-turtle-teal transition-all whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-12">
          <div className="flex gap-8">
            <a href="#" className="opacity-60 hover:opacity-100 transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.034l4.717 6.237L18.244 2.25zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          <div className="flex gap-x-4 gap-y-3 md:gap-4 flex-wrap md:justify-end w-full items-center">
            {footerLinks.map((link, index, array) => (
              <React.Fragment key={link.name}>
                <Link
                  to={link.path}
                  className={`font-body text-[10px] tracking-widest opacity-60 hover:opacity-100 hover:text-turtle-teal transition-all whitespace-nowrap ${link.name === 'KiSS' ? 'normal-case' : 'uppercase'}`}
                >
                  {link.name}
                </Link>
                {index < array.length - 1 && (
                  <span className="w-[1px] h-3 bg-turtle-light/20 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
