import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// UTILS
import { fetchChapterInfo } from '../util/api/surahApi';

// COMPONENTS
import SurahHeader from '../components/SurahHeader';
import Basmalah from '../components/Basmalah';
import ReadingContent from '../components/ReadingContent';
import TranslateContent from '../components/TranslateContent';
import PageNavigationControls from '../components/PageNavigationControls';

// STYLES
import '../styles/tailwind.css';
import ViewSwitchButton from '../components/ViewSwitchButton';

// LAZY LOADING COMPONENTS

const Surah = () => {
  const [view, setView] = useState('reading');
  const { surahId } = useParams();

  const { data: surahInfo } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

  const name = surahInfo?.chapter?.name_arabic;

  const handleViewSwitch = view => {
    setView(view);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-6 sm:mx-20 sm:my-10 md:mx-36 lg:mx-44 xl:mx-80">
      <ViewSwitchButton handleViewSwitch={handleViewSwitch} />
      <h1
        className="text-4xl mb-8 text-center font-surahNames
      "
      >
        {name}
      </h1>
      <Basmalah surahId={surahId} />
      <div className=" flex flex-col items-center gap-4">
        <SurahHeader />
        {view === 'reading' ? <ReadingContent /> : <TranslateContent />}
        <PageNavigationControls surahId={surahId} />
      </div>
    </div>
  );
};

export default Surah;
