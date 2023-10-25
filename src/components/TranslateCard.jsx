import React from 'react';

// ICONS
import threeDots from '../public/icons/menu_more_horiz.svg';
import bookOpen from '../public/icons/book-open.svg';
import chat from '../public/icons/chat.svg';
import play from '../public/icons/play-outline.svg';
import { transformWordsToLines } from '../util/dataUtils';

const TranslateCard = ({ verse }) => {
  const { verse_key, words, translations } = verse;

  const lines = transformWordsToLines(words);

  const HTMLRender = html => {
    return { __html: html };
  };

  return (
    <div className="flex justify-between w-full ">
      <div>
        <div className="flex flex-col justify-end items-center">
          <div>{verse_key}</div>
          <div>
            <img src={play} alt="play icon" />
          </div>
          <div>
            <img src={bookOpen} alt="book open icon" />
          </div>
          <div>
            <img src={chat} alt="chat icon" />
          </div>
          <div>
            <img src={threeDots} alt="three dots icon" />
          </div>
        </div>
      </div>
      <div>
        <div className=" rtl flex  font-uthmainc text-3xl">
          {lines.map((line, i) => (
            <span className="flex gap-0.5 text-3xl leading-10 ">
              {line.map(word => (
                <span>{word.text}</span>
              ))}
            </span>
          ))}
        </div>
        <div>
          {translations.map(translate => (
            <span dangerouslySetInnerHTML={HTMLRender(translate.text)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslateCard;
