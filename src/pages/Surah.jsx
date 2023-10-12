import { useParams, useLoaderData } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import '../styles/tailwind.css';

import bismillah from '../public/bismillah.svg';
import Page from '../components/Page';

const Surah = () => {
  const { data, name } = useLoaderData();
  const { surahId } = useParams();
  console.log('data', data);
  console.log('susssss', surahId);

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-6 sm:mx-20 sm:my-10 md:mx-36 lg:mx-44 xl:mx-80">
      <h1 className="text-4xl mb-8 text-center font-nastaleeq">{name}</h1>
      {surahId !== '1' && surahId !== '9' ? (
        <div className="mb-2">
          <img src={bismillah} alt="bismillah"></img>
        </div>
      ) : (
        ''
      )}
      <div className=" flex flex-col items-center gap-4 w">
        {data.map((page, index) => (
          <Page key={index} page={page[0]} surahId={surahId} />
        ))}
      </div>
    </div>
  );
};

export default Surah;

export const loader = async ({ params }) => {
  const surahId = params.surahId;
  const data = [];
  let startPage, endPage, name;

  const surahInfoRes = await fetch(
    `https://api.quran.com/api/v4/chapters/${surahId}?language=en`,
  );

  if (!surahInfoRes.ok) {
    throw new Error('Failed to load data');
  } else {
    const surahInfo = await surahInfoRes.json();
    startPage = surahInfo.chapter.pages[0];
    endPage = surahInfo.chapter.pages[1];
    name = surahInfo.chapter.name_arabic;
  }

  for (let i = startPage; i <= endPage; i++) {
    const response = await fetch(
      ` https://api.quran.com/api/v4/verses/by_page/${i}?language=en&words=true&per_page=all&fields=text_uthmani&word_fields=text_uthmani&line_fields=text_uthmani`,
    );

    if (!response.ok) {
      throw new Error('Failed to load data');
    } else {
      const resData = await response.json();

      const page = [];
      const lines = {};
      resData.verses.map(verse => {
        verse.words.map(word => {
          if (lines.hasOwnProperty(word.line_number)) {
            lines[word.line_number].push(word);
          } else {
            lines[word.line_number] = [word];
          }
        });
      });

      const arrLines = Object.values(lines);
      page.push(arrLines);
      // console.log('lines', lines);
      // console.log('page', page);

      data.push(page);
    }
  }
  // console.log('data', data);
  return { data, name };
};
