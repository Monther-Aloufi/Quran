import { Link } from 'react-router-dom';
import React from 'react';

// STYLES
import '../styles/tailwind.css';

// ICONS
import arrowRight from '../public/icons/chevron-right.svg';
import arrowLeft from '../public/icons/chevron-left.svg';

const PageNavigationControls = ({ surahId }) => {
  const styleButton =
    'border border-gray-200 py-2 px-4 rounded-md cursor-pointer hover:border-gray-700';

  const isLastSurah = surahId === '114';
  const isFirstSurah = surahId === '1';
  const id = parseInt(surahId);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="flex justify-between gap-2">
      {!isFirstSurah && (
        <Link
          to={`/${id - 1}`}
          className={`${styleButton} flex justify-between items-center`}
        >
          <img src={arrowLeft} alt="Previous Surah" className="inline mr-2" />
          <span>Previous Surah</span>
        </Link>
      )}
      <button className={styleButton} onClick={scrollToTop}>
        Beginning of Surah
      </button>
      {!isLastSurah && (
        <Link
          to={`/${id + 1}`}
          className={`${styleButton} flex justify-between items-center`}
        >
          <span>Next Surah</span>
          <img
            src={arrowRight}
            alt="Next Surah"
            className=" text-red-500-700 inline ml-2"
          />
        </Link>
      )}
    </div>
  );
};

export default PageNavigationControls;
