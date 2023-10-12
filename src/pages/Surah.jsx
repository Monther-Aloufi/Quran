import { useParams, useLoaderData } from 'react-router-dom';

// UTILS
import { fetchSurahInfo, fetchVersesByPage } from '../api/surahApi';
import { transformVersesToLines } from '../util/dataUtils';

// COMPONENTS
import Page from '../components/Page';
import SurahHeader from '../components/SurahHeader';
import Basmalah from '../components/Basmalah';

// STYLES
import '../styles/tailwind.css';
import PageNavigationControls from '../components/PageNavigationControls';

const Surah = () => {
  const { data, name } = useLoaderData();
  const { surahId } = useParams();

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
        {data.map((page, index) => (
          <Page key={index} page={page[0]} surahId={surahId} versesCount />
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

  try {
    const surahInfo = await fetchSurahInfo(surahId);
    startPage = surahInfo.chapter.pages[0];
    endPage = surahInfo.chapter.pages[1];
    name = surahInfo.chapter.name_arabic;
    versesCount = surahInfo.chapter.verses_count;
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
  return { data, name, versesCount };
};
