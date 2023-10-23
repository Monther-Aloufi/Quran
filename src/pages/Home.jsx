// COMPONENTS
import Header from '../components/Header';
import SurahCard from '../components/surahCard';

// UTILS
import { fetchChapters } from '../util/api/surahApi';

// STYLES
import '../styles/tailwind.css';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['chapters'],
    queryFn: fetchChapters,
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p>{error.message}</p>;
  }

  if (data) {
    const chapters = data.chapters;
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-40 py-24">
        {chapters.map(surah => (
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
    );
  }

  return (
    <div>
      <Header />
      {content}
    </div>
  );
};

export default HomePage;
