import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Header from '../components/Header';
import SurahCard from '../util/surahCard';
import '../styles/tailwind.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.quran.com/api/v4/chapters?language=en').then(res => {
      setData(res.data.chapters);
    });
    axios
      .get(
        'https://api.quran.com/api/v4/verses/by_chapter/1?language=en&words=true&page=1&per_page=10',
      )
      .then(res => {
        console.log(res.data.verses);
      });
  }, []);

  // console.log(data);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-40 py-24">
        {data.map(surah => (
          <SurahCard
            key={surah.id}
            id={surah.id}
            name_simple={surah.name_simple}
            verses_count={surah.verses_count}
            name_translations={surah.translated_name.name}
            name_arabic={surah.name_arabic}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
