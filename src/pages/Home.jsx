import { useLoaderData } from 'react-router-dom';
import { json } from 'react-router-dom';

import Header from '../components/Header';
import SurahCard from '../util/surahCard';
import '../styles/tailwind.css';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch(
    'https://api.quran.com/api/v4/chapters?language=en',
  );

  if (!response.ok) {
    // throw new Error('Failed to load chapters');
    return json({ message: 'Failed to load chapters' }, { status: 500 });
  } else {
    const data = await response.json();
    return data.chapters;
  }
};
