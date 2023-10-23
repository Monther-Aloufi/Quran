import { useQuery } from '@tanstack/react-query';

// COMPONENTS
import Load from './Load';

// API
import { fetchVersesByPage } from '../util/api/surahApi';
import { transformVersesToLines } from '../util/dataUtils';

// STYLES
import '../styles/tailwind.css';

const Page = ({ page: pageNumber, surahId }) => {
  const justify =
    pageNumber === 1 || pageNumber === 2
      ? 'justify-center gap-0'
      : 'justify-between';
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
    content = <Load />;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (verses) {
    const page = transformVersesToLines(verses.verses, surahId);
    content = (
      <>
        {page.map((line, i) => (
          <span
            key={i}
            className={`flex gap-0.5 text-3xl leading-10 font-Othmani ${justify}`}
          >
            {line.map((word, i) => (
              <span
                key={i}
                className={` cursor-pointer hover:text-primary 
                            ${word.char_type_name === 'end' && 'font-uthmainc'}
                            ${word.verse_number}
                          `}
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
    <div className={`w-[95%] rtl p-4 text-[4vh] border-b pb-4  `}>
      {content}
      <span className="flex justify-center text-sm text-gray-400 pt-2">
        {pageNumber}
      </span>
    </div>
  );
};

export default Page;
