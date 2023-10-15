import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import React from 'react';

// STYLES
import '../styles/tailwind.css';
import InfoHeader from '../components/InfoHeader';

// IMAGES
import madinah from '../public/images/madinah.jpg';
import makkah from '../public/images/makkah.jpg';

// ICONS
import west from '../public/icons/west.svg';

const SurahInfo = () => {
  const data = useLoaderData();
  const { revelationPlace } = useRouteLoaderData('surah');
  const html = data.text;

  let image = madinah;

  if (revelationPlace === 'makkah') {
    image = makkah;
  }

  const HTMLRender = () => {
    return { __html: html };
  };

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
      <div className=" w-5/6 ">
        <InfoHeader />
        <div className="infoTextBody" dangerouslySetInnerHTML={HTMLRender()} />
      </div>
    </div>
  );
};

export default SurahInfo;

export const loader = async ({ params }) => {
  const { surahId } = params;
  const response = await fetch(
    `https://api.quran.com/api/v4/chapters/${surahId}/info?language=en`,
  );

  if (!response.ok) {
    throw new Error('Failed to load surah info');
  } else {
    const data = await response.json();
    return data.chapter_info;
  }
};
