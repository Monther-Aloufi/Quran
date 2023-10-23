export const transformVersesToLines = (verses, surahId) => {
  const lines = {};

  verses.forEach(verse => {
    const key = verse.verse_key;
    const surahNumber = key.split(':')[0];
    const verseNumber = key.split(':')[1];
    if (surahNumber === surahId) {
      verse.words.forEach(word => {
        lines[word.line_number] = lines[word.line_number] || [];
        word.verse_number = verseNumber;
        lines[word.line_number].push(word);
      });
    }
  });

  return Object.values(lines);
};
