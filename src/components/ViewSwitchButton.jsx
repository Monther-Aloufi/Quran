import React, { useState } from 'react';

import book from '../public/icons/book.svg';
import reader from '../public/icons/reader.svg';

const ViewSwitchButton = ({ handleViewSwitch }) => {
  const [currentView, setCurrentView] = useState('reading');

  const clickHandler = e => {
    const view = e.target.outerText.toLowerCase();
    setCurrentView(view);
    handleViewSwitch(view);
  };

  return (
    <div className=" relative flex justify-between items-center bg-gray-50 w-1/2 px-4 py-2 rounded-full">
      <button
        onClick={clickHandler}
        className={`w-full p-2 rounded-full transition-all duration-300`}
      >
        <span className="flex justify-center items-center gap-1">
          <img className="z-10 w-3" src={book} alt="close book icon" />
          <span className="z-10">Translation</span>
        </span>
      </button>
      <button
        onClick={clickHandler}
        className={`w-full p-2 rounded-full transition-all duration-300 `}
      >
        <span className="flex justify-center items-center gap-1">
          <img className="w-3 z-10" src={reader} alt="reader icon" />
          <span className="z-10">Reading</span>
        </span>
      </button>
      <span
        className={` z-0 absolute bg-white shadow-md w-[46%] h-4/6 rounded-full transition-all duration-500 ${
          currentView === 'reading' ? ' ml-52' : ''
        }`}
      />
    </div>
  );
};

export default ViewSwitchButton;
