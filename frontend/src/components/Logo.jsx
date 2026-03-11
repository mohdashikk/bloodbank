import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "logo-brand" }) => {
  return (
    <Link to="/" className={className} style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      cursor: 'pointer'
    }}>
      <div style={{
        backgroundColor: '#ff4757',
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(255, 71, 87, 0.3)',
        flexShrink: 0
      }}>
        {/* Real Blood Drop Icon */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
          <path d="M12 21.5c-4.418 0-8-3.582-8-8 0-4.5 3.5-9.5 8-13.5 4.5 4 8 9 8 13.5 0 4.418-3.582 8-8 8z" />
          <path d="M12 18.5c-2.761 0-5-2.239-5-5 0-2.5 2-5.5 5-8.5 3 3 5 6 5 8.5 0 2.761-2.239 5-5 5z" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '2px',
        fontFamily: "'Outfit', sans-serif"
      }}>
        <span style={{
          color: '#1a1a1a',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-1px'
        }}>Life</span>
        <span style={{
          color: '#ff4757',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-1px'
        }}>Drop</span>
      </div>
    </Link >
  );
};

export default Logo;
