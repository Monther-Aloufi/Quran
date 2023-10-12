import React from 'react';

import '../styles/tailwind.css';

const Page = ({ page, surahId }) => {
  const justify = surahId === '1' || surahId === '2' ? 'centerPage' : '';
  const pageNumber = page[0][0].page_number;

  return (
    <p
      className={`${justify} w-[497px] rtl mt-4 text-[1.5rem] border-b pb-4  `}
    >
      {page.map(line => (
        <span className="line flex gap-1  leading-10 font-uthmainc">
          {line.map(word => (
            <span>{word.text_uthmani}</span>
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
