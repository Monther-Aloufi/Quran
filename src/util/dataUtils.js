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
