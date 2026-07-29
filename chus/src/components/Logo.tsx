import React from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

const Logo: React.FC<LogoProps> = ({ className = '', markOnly = false }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="chusMark" x1="8" y1="56" x2="56" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B7CFF" />
            <stop offset="0.55" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#22C55E" />
          </linearGradient>
        </defs>
        <path
          d="M52 32c0 11.046-8.954 20-20 20S12 43.046 12 32 20.954 12 32 12c6.4 0 12.1 3.01 15.7 7.7"
          stroke="url(#chusMark)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="48.5" cy="18.5" r="5.5" fill="#22C55E" />
        <circle cx="48.5" cy="18.5" r="3" fill="#0B1220" opacity="0.25" />
      </svg>
      {!markOnly && (
        <span className="leading-none">
          <span className="block font-display font-extrabold text-[15px] tracking-[0.08em] text-chus-ink">
            CHUS
          </span>
          <span className="block font-body font-medium text-[10px] tracking-[0.28em] text-chus-mute uppercase">
            Mobility
          </span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
