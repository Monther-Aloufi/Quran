import { Suspense, lazy } from 'react';
import { useParams, useRouteLoaderData, useNavigation } from 'react-router-dom';

// UTILS
import { fetchChapterInfo, fetchVersesByPage } from '../util/api/surahApi';
import { transformVersesToLines } from '../util/dataUtils';

// COMPONENTS
import Page from '../components/Page';
import SurahHeader from '../components/SurahHeader';
import Basmalah from '../components/Basmalah';

// STYLES
import '../styles/tailwind.css';
import PageNavigationControls from '../components/PageNavigationControls';
import { useQuery } from '@tanstack/react-query';

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
            <Page key={page} page={page} surahId={surahId} />
          ))}
        <PageNavigationControls surahId={surahId} />
      </div>
    </div>
  );
};

export default Surah;

export const loader = async ({ params }) => {
  const surahId = params.surahId;
  const data = [];
  let name;
  let startPage, endPage;
  let versesCount;
  let revelationPlace;
  let nameSimple;

  try {
    const surahInfo = await fetchChapterInfo(surahId);
    startPage = surahInfo.chapter.pages[0];
    endPage = surahInfo.chapter.pages[1];
    name = surahInfo.chapter.name_arabic;
    versesCount = surahInfo.chapter.verses_count;
    revelationPlace = surahInfo.chapter.revelation_place;
    nameSimple = surahInfo.chapter.name_simple;
  } catch (error) {
    throw new Error('Failed to load data');
  }

  for (let i = startPage; i <= endPage; i++) {
    try {
      const resData = await fetchVersesByPage(i);
      const arrLines = transformVersesToLines(resData.verses, surahId);
      if (arrLines) {
        data.push([arrLines]);
      }
    } catch (error) {
      throw new Error('Failed to load data for page ' + i);
    }
  }
  return { data, name, nameSimple, versesCount, revelationPlace };
};
