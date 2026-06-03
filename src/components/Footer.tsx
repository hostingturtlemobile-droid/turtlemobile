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
            <a href="https://www.linkedin.com/company/turtlemobility/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-all hover:-translate-y-1" aria-label="LinkedIn">
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
