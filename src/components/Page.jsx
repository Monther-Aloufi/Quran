import React from 'react';

import '../styles/tailwind.css';

const Page = ({ page, surahId }) => {
  const justify =
    surahId === '1' || surahId === '2' ? 'centerPage' : 'justifyPage';
  const pageNumber = page[0][0].page_number;

  return (
    <p className={`${justify}  w-full rtl p-4 text-[4vh] border-b pb-4  `}>
      {page.map((line, i) => (
        <span key={i} className="line flex gap-1  leading-10 font-uthmainc">
          {line.map((word, i) => (
            <span
              key={i}
              className={`${
                word.char_type_name === 'end' ? 'text-[2rem] font-uthmainc' : ''
              }`}
            >
              {word.text_uthmani}
            </span>
          ))}
        </span>
      ))}
      <span className="flex justify-center text-sm text-gray-400 pt-2">
        {pageNumber}
      </span>
    </p>
  );
};

export default Page;
