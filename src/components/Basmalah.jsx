import React from 'react';

// STYLES
import '../styles/tailwind.css';

// ICONS
import bismillah from '../public/bismillah.svg';

const Basmalah = ({ surahId }) => {
  return (
    <div>
      {surahId !== '1' && surahId !== '9' ? (
        <div className="mb-2">
          <img src={bismillah} alt="bismillah"></img>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Basmalah;
