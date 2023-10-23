import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

// UTILS
import { fetchChapterInfo } from '../util/api/surahApi';

// COMPONENTS
import SurahHeader from '../components/SurahHeader';
import Basmalah from '../components/Basmalah';

// STYLES
import '../styles/tailwind.css';
import PageNavigationControls from '../components/PageNavigationControls';
import { useQuery } from '@tanstack/react-query';
import Load from '../components/Load';

// LAZY LOADING COMPONENTS
const LazyPage = lazy(() => import('../components/Page'));

const Surah = () => {
  const { surahId } = useParams();

  const { data: surahInfo } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

  const name = surahInfo?.chapter?.name_arabic;

  const PageRangeToNumbers = () => {
    if (surahInfo) {
      const pagesNumbers = [];
      const startPage = surahInfo?.chapter?.pages[0];
      const endPage = surahInfo?.chapter?.pages[1];
      for (let i = startPage; i <= endPage; i++) {
        pagesNumbers.push(i);
      }
      return pagesNumbers;
    }
  };

  const pagesNumbers = PageRangeToNumbers();

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-6 sm:mx-20 sm:my-10 md:mx-36 lg:mx-44 xl:mx-80">
      <h1
        className="text-4xl mb-8 text-center font-surahNames
      "
      >
        {name}
      </h1>
      <Basmalah surahId={surahId} />
      <div className=" flex flex-col items-center gap-4">
        <SurahHeader />
        {surahInfo &&
          pagesNumbers.map(page => (
            <Suspense key={page} fallback={<Load />}>
              <LazyPage page={page} surahId={surahId} />
            </Suspense>
          ))}
        <PageNavigationControls surahId={surahId} />
      </div>
    </div>
  );
};

export default Surah;
