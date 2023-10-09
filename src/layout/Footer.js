import React from 'react';

import quranTextLogo from '../public/icons/quran-text-logo.svg';

import '../styles/tailwind.css';

const Footer = () => {
  return (
    <footer className="flex justify-between border-t lg:px-4 lg:py-1 md:px-3 sm:px-2 sm:py-0">
      <div className="flex flex-col justify-star md:ml-0">
        <a href="/">
          <img
            src={quranTextLogo}
            alt="quran-text-logo"
            className="w-32 h-12 md:w-28 md:h-8"
          />
        </a>
        <p className=" text-black font-bold text-sm md:text-xs">
          Read, study, and learn The Noble Quran.
        </p>
      </div>
      <div className="flex justify-end items-center gap-8 md:gap-6 sm:gap-4">
        <p className="text-black font-bold text-sm hover:underline hover:text-gray-600 cursor-pointer md:text-xs ">
          About Us
        </p>
        <p className="text-black font-bold text-sm  hover:underline hover:text-gray-600 cursor-pointer md:text-xs">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
