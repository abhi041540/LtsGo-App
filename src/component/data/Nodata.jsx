import React from 'react';
import emoji from 'emoji-dictionary';

function Nodata()
 {
  const saffronColor = '#FFA500'; // Saffron color

  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: saffronColor, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ fontSize: '3rem' }}>{emoji.getUnicode('disappointed')}</div>
      <h2 style={{ margin: '20px 0' }}>No Results Found</h2>
      <p>Sorry, we couldn't find any data for your search.</p>
    </div>
    </div>
  );
};

export default Nodata;