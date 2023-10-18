// Get list of surahs from the API
export const fetchChapters = async () => {
  const surahsRes = await fetch(
    'https://api.quran.com/api/v4/chapters?language=en',
  );

  if (!surahsRes.ok) {
    throw new Error('Failed to load surahs');
  }

  return surahsRes.json();
};

// Get info for a specific surah from the API
export const fetchChapterInfo = async surahId => {
  const surahInfoRes = await fetch(
    `https://api.quran.com/api/v4/chapters/${surahId}?language=en`,
  );

  if (!surahInfoRes.ok) {
    throw new Error('Failed to load surah info');
  }

  return surahInfoRes.json();
};

// Get verses for a range of pages from the API
export const fetchVersesByPage = async pageNumber => {
  const response = await fetch(
    `https://api.quran.com/api/v4/verses/by_page/${pageNumber}?language=en&words=true&per_page=all&fields=text_uthmani&word_fields=text_uthmani&line_fields=text_uthmani`,
  );

  if (!response.ok) {
    throw new Error('Failed to load verses for page ' + pageNumber);
  }

  return response.json();
};

// Get Surah info from the API
export const fetchSurahDetails = async surahId => {
  const surahInfoRes = await fetch(
    `https://api.quran.com/api/v4/chapters/${surahId}/info?language=en`,
  );

  if (!surahInfoRes.ok) {
    throw new Error('Failed to load surah info');
  }

  return surahInfoRes.json();
};
