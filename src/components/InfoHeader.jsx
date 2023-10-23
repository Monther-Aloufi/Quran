import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// API
import { fetchChapterInfo } from '../util/api/surahApi';

// STYLES
import '../styles/tailwind.css';

const InfoHeader = () => {
  const { surahId } = useParams();
  const { data: surahInfo } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

  const nameSimple = surahInfo?.chapter?.name_simple;
  const versesCount = surahInfo?.chapter?.verses_count;
  const revelationPlace = surahInfo?.chapter?.revelation_place;

  return (
    <div className="flex justify-between border-b pb-2.5 my-2.5">
      <h1 className=" text-2xl font-bold text-gray-800">Surah {nameSimple}</h1>
      <span className="flex flex-col gap-1.5 ">
        <p className="font-semibold m-0">Ayahs</p>
        <p>{versesCount}</p>
      </span>
      <span className="flex flex-col gap-1.5">
        <p className="font-semibold m-0">Revelation Place</p>
        <p>{revelationPlace}</p>
      </span>
    </div>
  );
};

export default InfoHeader;
