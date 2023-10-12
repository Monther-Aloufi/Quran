export const fetchSurahInfo = async surahId => {
  const surahInfoRes = await fetch(
    `https://api.quran.com/api/v4/chapters/${surahId}?language=en`,
  );

  if (!surahInfoRes.ok) {
    throw new Error('Failed to load surah info');
  }

  return surahInfoRes.json();
};

export const fetchVersesByPage = async pageNumber => {
  const response = await fetch(
    `https://api.quran.com/api/v4/verses/by_page/${pageNumber}?language=en&words=true&per_page=all&fields=text_uthmani&word_fields=text_uthmani&line_fields=text_uthmani`,
  );

  if (!response.ok) {
    throw new Error('Failed to load verses for page ' + pageNumber);
  }

  return response.json();
};
