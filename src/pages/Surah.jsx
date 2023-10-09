import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import '../styles/tailwind.css';

import bismillah from '../public/bismillah.svg';

const Surah = () => {
  const { surahId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // const setDataHandler = res => {
    //   setData(...data, res);
    // };
    fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`,
    )
      .then(resID => resID.json())
      .then(res => setData(res.verses));
  }, [surahId]);

  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-6 sm:mx-20 sm:my-10 md:mx-36 lg:mx-44 xl:mx-80">
      {surahId !== '1' && surahId !== '9' ? (
        <div>
          <img src={bismillah} alt="bismillah"></img>
        </div>
      ) : (
        ''
      )}
      <div className=" text-justify my-4 ">
        {data.map((verse, i) => (
          <span key={verse.id}>
            {verse.text_uthmani} ({i + 1})
          </span>
        ))}
      </div>
    </div>
  );
};

export default Surah;
