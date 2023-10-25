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

export const transformWordsToLines = words => {
  let lineNumber = words[0].line_number;
  const lines = {};
  words.forEach(word => {
    if (word.line_number !== lineNumber) {
      lineNumber = word.line_number;
    }
    lines[lineNumber] = lines[lineNumber] || [];
    lines[lineNumber].push(word);
  });
  return Object.values(lines);
};
