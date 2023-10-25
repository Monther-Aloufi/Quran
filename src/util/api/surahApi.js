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

// Get verses by surah from the API
export const fetchVersesByChapter = async (
  surahId,
  translationId,
  versesCount,
) => {
  const response = await fetch(
    `https://api.quran.com/api/v4/verses/by_chapter/${surahId}?language=en&words=true&translations=${translationId}&page=1&per_page=${versesCount}&fields=text_uthmani&word_fields=text_uthmani`,
  );

  if (!response.ok) {
    throw new Error('Failed to load verses for surah ' + surahId);
  }

  return response.json();
};

// Get verses by page from the API
export const fetchVersesByPage = async pageNumber => {
  const response = await fetch(
    `https://api.quran.com/api/v4/verses/by_page/${pageNumber}?language=en&words=true&per_page=all&word_fields=text_uthmani`,
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

// Get translations from the API
export const fetchTranslations = async () => {
  const translationsRes = await fetch(
    'https://api.quran.com/api/v4/resources/translations',
  );

  if (!translationsRes.ok) {
    throw new Error('Failed to load translations');
  }

  return translationsRes.json();
};
