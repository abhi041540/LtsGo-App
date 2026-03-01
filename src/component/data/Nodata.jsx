import React from 'react';
import emoji from 'emoji-dictionary';

function Nodata() {
  const accentColor = '#e0472c'; // Branding color from style.css

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#f8f9fa' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h2 style={{
          margin: '0 0 10px 0',
          color: '#333',
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>No Results Found</h2>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
          margin: '0 0 25px 0'
        }}>
          We couldn't find any locations matching your search criteria. Please try different keywords or adjust your filters.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: accentColor,
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'transform 0.2s, background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#b7260d'}
          onMouseOut={(e) => e.target.style.backgroundColor = accentColor}
        >
          Back to Search
        </button>
      </div>
    </div>
  );
}

export default Nodata;