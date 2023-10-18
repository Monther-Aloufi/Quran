import { fetchVersesByPage } from './api/surahApi';

export const transformVersesToLines = (verses, surahId) => {
  const lines = {};

  verses.forEach(verse => {
    const verseKey = verse.verse_key.split(':')[0];
    if (verseKey === surahId) {
      verse.words.forEach(word => {
        lines[word.line_number] = lines[word.line_number] || [];
        lines[word.line_number].push(word);
      });
    }
  });

  return Object.values(lines);
};

export const fetchPages = async (start, end, surahId) => {
  const pages = [];
  for (let i = start; i <= end; i++) {
    try {
      const resData = await fetchVersesByPage(i);
      const arrLines = transformVersesToLines(resData.verses, surahId);
      if (arrLines) {
        pages.push([arrLines]);
      }
    } catch (error) {
      throw new Error('Failed to load data for page ' + i);
    }
  }
  return pages;
};
