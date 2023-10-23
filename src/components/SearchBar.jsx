import React from 'react';

import searchIcon from '../public/icons/search.svg';
import micIcon from '../public/icons/microphone.svg';

import '../styles/tailwind.css';

const SearchBar = () => {
  return (
    <button className="w-[550px] h-[55px] xl:w-[800px] xl:h[65px] lg:w-[800px] lg:h-[65px] md:w-[650px]  md:h-[60px] rounded-full bg-white flex items-center justify-between p-4 mt-8 mb-6 ">
      <div className="flex justify-start items-center">
        <div className=" hover:bg-gray-300 bg-opacity-80 p-2 rounded-full">
          <img src={searchIcon} alt="search" />
        </div>
        <p className="text-gray-700 text-[18px] ">What do you want to read?</p>
      </div>
      <div className="flex gap-2">
        <p className="text-gray-400 border text-center border-gray-300 p-1">
          ctrl K
        </p>
        <div className=" hover:bg-gray-300 bg-opacity-80 p-2 rounded-full">
          <img src={micIcon} alt="search" className=" text-gra" />
        </div>
      </div>
    </button>
  );
};

export default SearchBar;
