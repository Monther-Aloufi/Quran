import React from 'react';

import '../styles/tailwind.css';
import menuIcon from '../public/icons/menu.svg';
import quranTextLogo from '../public/icons/quran-text-logo.svg';
import profileIcon from '../public/icons/person.svg';
import searchIcon from '../public/icons/search.svg';
import languageIcon from '../public/icons/globe.svg';
import settingsIcon from '../public/icons/settings.svg';

const buttonStyle = 'hover:bg-gray-300 py-0.5 px-1 rounded-full xl:p-2';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm flex justify-between px-3 xl:px-8">
      <div className="flex justify-start items-center ">
        <button className="hover:bg-gray-300 m-2 rounded-full">
          <img src={menuIcon} alt="menu" className=" p-2 w-8 xl:w-10" />
        </button>
        <a href="/">
          <img src={quranTextLogo} alt="quran-text-logo" className="w-28 h-8" />
        </a>
      </div>
      <div className="flex justify-end items-center gap-1 w-1/6">
        <a href="/" className={buttonStyle}>
          <img src={profileIcon} alt="profile" className="h-5" />
        </a>
        <a href="/" className={buttonStyle}>
          <img src={languageIcon} alt="language" className="h-5" />
        </a>
        <a href="/" className={buttonStyle}>
          <img src={settingsIcon} alt="settings" className="h-5" />
        </a>
        <a href="/" className={buttonStyle}>
          <img src={searchIcon} alt="search" className=" h-5" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
