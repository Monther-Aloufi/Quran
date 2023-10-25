import React, { lazy, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Load from './Load';

import { fetchChapterInfo } from '../util/api/surahApi';

// LAZY LOADING COMPONENTS
const LazyPage = lazy(() => import('../components/Page'));

const ReadingContent = () => {
  const { surahId } = useParams();
  const { data: surahInfo } = useQuery({
    queryKey: ['surahInfo', surahId],
    queryFn: () => fetchChapterInfo(surahId),
  });

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
    <>
      {surahInfo &&
        pagesNumbers.map(page => (
          <Suspense key={page} fallback={<Load />}>
            <LazyPage page={page} surahId={surahId} />
          </Suspense>
        ))}
    </>
  );
};

export default ReadingContent;
