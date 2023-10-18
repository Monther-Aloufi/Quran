import { useQuery } from '@tanstack/react-query';

import { fetchVersesByPage } from '../util/api/surahApi';
import { transformVersesToLines } from '../util/dataUtils';

import '../styles/tailwind.css';

const Page = ({ page: pageNumber, surahId }) => {
  const justify =
    surahId === '1' || surahId === '2' ? 'centerPage' : 'justifyPage';
  let content;

  const {
    data: verses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['verses', surahId, pageNumber],
    queryFn: () => fetchVersesByPage(pageNumber),
  });

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (verses) {
    const page = transformVersesToLines(verses.verses, surahId);
    content = (
      <>
        {page.map((line, i) => (
          <span key={i} className="line flex gap-1  leading-10 font-uthmainc">
            {line.map((word, i) => (
              <span
                key={i}
                className={`${
                  word.char_type_name === 'end'
                    ? 'text-[2rem] font-uthmainc'
                    : ''
                }`}
              >
                {word.text_uthmani}
              </span>
            ))}
          </span>
        ))}
      </>
    );
  }

  return (
    <p className={`${justify}  w-full rtl p-4 text-[4vh] border-b pb-4  `}>
      {content}
      <span className="flex justify-center text-sm text-gray-400 pt-2">
        {pageNumber}
      </span>
    </p>
  );
};

export default Page;
