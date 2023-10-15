import { Link } from 'react-router-dom';
import React from 'react';

// STYLES
import '../styles/tailwind.css';

// ICONS
import infoIcon from '../public/icons/info.svg';
import playIcon from '../public/icons/play-arrow.svg';

const SurahHeader = () => {
  return (
    <div className="flex justify-between items-center w-[70vh] py-2">
      <Link
        to="info"
        className="flex items-center justify-between gap-1 p-1.5 rounded-md cursor-pointer hover:bg-gray-300 "
      >
        <img src={infoIcon} alt="info icon" className="w-4" />
        <p>Surah Info</p>
      </Link>
      <span className="flex items-center justify-between gap-1  p-1.5 rounded-md cursor-pointer hover:bg-primary-100">
        <img src={playIcon} alt="play icon" className="w-4" />
        <p className=" text-primary">Play Audio</p>
      </span>
    </div>
  );
};

export default SurahHeader;
