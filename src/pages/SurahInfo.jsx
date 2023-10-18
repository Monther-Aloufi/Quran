import { Link, useParams } from 'react-router-dom';
import React from 'react';

// API
import { fetchSurahDetails, fetchChapterInfo } from '../util/api/surahApi';

// STYLES
import '../styles/tailwind.css';
import InfoHeader from '../components/InfoHeader';

// IMAGES
import madinah from '../public/images/madinah.jpg';
import makkah from '../public/images/makkah.jpg';

// ICONS
import west from '../public/icons/west.svg';
import { useQuery } from '@tanstack/react-query';

const SurahInfo = () => {
  const { surahId } = useParams();
  let html;
  let content;

  const HTMLRender = () => {
    return { __html: html };
  };

  const { data: chapterInfo } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

  const revelationPlace = chapterInfo?.chapter?.revelation_place;

  const {
    data: surahInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['surahDetails', surahId],
    queryFn: () => fetchSurahDetails(surahId),
  });

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (surahInfo) {
    html = surahInfo?.chapter_info?.text;
    content = (
      <div className=" w-5/6 ">
        <InfoHeader />
        <div className="infoTextBody" dangerouslySetInnerHTML={HTMLRender()} />
      </div>
    );
  }

  let image = madinah;

  if (revelationPlace === 'makkah') {
    image = makkah;
  }

  return (
    <div className="surahInfo px-80 ">
      <div className="mt-5 w-1/4">
        <div className="mb-2">
          <Link
            to=".."
            className="flex justify-center items-center gap-2 py-1 rounded-md w-8/12 text-sm hover:bg-gray-200"
          >
            <img src={west} alt="Left arrow" className="w-4" />
            Go To Surah
          </Link>
        </div>
        <img src={image} alt="Makkah" className="w-full rounded-sm" />
      </div>
      {content}
    </div>
  );
};

export default SurahInfo;
