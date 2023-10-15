import { useRouteLoaderData } from 'react-router-dom';
import React from 'react';

// STYLES
import '../styles/tailwind.css';

const InfoHeader = () => {
  const { nameSimple, revelationPlace, versesCount } =
    useRouteLoaderData('surah');

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
