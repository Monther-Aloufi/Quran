import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

// COMPONENTS
import Load from './Load';

import {
  fetchVersesByChapter,
  fetchChapterInfo,
  fetchTranslations,
} from '../util/api/surahApi';
import TranslateCard from './TranslateCard';

const TranslateContent = () => {
  const { surahId } = useParams();
  let content;

  // FETCH TRANSLATIONS
  const {
    data: translations,
    isError: isTranslationsError,
    error: translationsError,
  } = useQuery({
    queryKey: ['translations'],
    queryFn: () => fetchTranslations(),
  });

  if (isTranslationsError) {
    content = <h1>{translationsError.message}</h1>;
  }

  let translationId = translations?.translations[0]?.id;

  // FETCH CHAPTER INFO BY SURAH ID
  const {
    data: surahInfo,
    isError: isSurahInfoError,
    error: surahInfoError,
  } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

  if (isSurahInfoError) {
    content = <h1>{surahInfoError.message}</h1>;
  }

  let versesCount = surahInfo?.chapter?.verses_count;

  // FETCH CHAPTER VERSES BY CHAPTER ID AND TRANSLATION ID AND VERSES COUNT
  const {
    data: chapter,
    isLoading: isChapterLoading,
    isError: isChapterError,
    error: chapterError,
  } = useQuery({
    queryKey: ['chapter', surahId],
    queryFn: () => fetchVersesByChapter(surahId, translationId, versesCount),
    enabled: !!surahInfo && !!translations,
  });

  if (isChapterLoading) {
    content = <Load />;
  }

  if (isChapterError) {
    content = <h1>{chapterError.message}</h1>;
  }

  if (chapter) {
    content = (
      <>
        {chapter.verses.map((verse, i) => (
          <TranslateCard key={i} verse={verse} />
        ))}
      </>
    );
  }

  return <>{content}</>;
};

export default TranslateContent;
