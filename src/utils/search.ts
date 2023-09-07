// https://taegon.kim/archives/9919

const consonantGroupCharCode = [
  { consonant: 'ㄱ', startSyllable: '가' },
  { consonant: 'ㄲ', startSyllable: '까' },
  { consonant: 'ㄴ', startSyllable: '나' },
  { consonant: 'ㄷ', startSyllable: '다' },
  { consonant: 'ㄸ', startSyllable: '따' },
  { consonant: 'ㄹ', startSyllable: '라' },
  { consonant: 'ㅁ', startSyllable: '마' },
  { consonant: 'ㅂ', startSyllable: '바' },
  { consonant: 'ㅃ', startSyllable: '빠' },
  { consonant: 'ㅅ', startSyllable: '사' },
  { consonant: 'ㅆ', startSyllable: '싸' },
  { consonant: 'ㅇ', startSyllable: '아' },
  { consonant: 'ㅈ', startSyllable: '자' },
  { consonant: 'ㅉ', startSyllable: '짜' },
  { consonant: 'ㅊ', startSyllable: '차' },
  { consonant: 'ㅋ', startSyllable: '카' },
  { consonant: 'ㅌ', startSyllable: '타' },
  { consonant: 'ㅍ', startSyllable: '파' },
  { consonant: 'ㅎ', startSyllable: '하' },
].reduce((acc, item) => {
  const startCharCode = item.startSyllable.charCodeAt(0);
  const endCharCode = startCharCode + 587;
  return {
    ...acc,
    [item.consonant]: {
      start: startCharCode,
      end: endCharCode,
    }
  };
}, {});

const createFuzzyCharMatcher = (char: string) => {
  const isConsonant = (char: string) => /[ㄱ-ㅎ]/.test(char);
  const isSyllable = (char: string) => /[가-힣]/.test(char);

  if (isConsonant(char)) {
    const { start, end } = consonantGroupCharCode[char];
    return `[${char}\\u${start.toString(16)}-\\u${end.toString(16)}]`;

  } else if (isSyllable(char)) {
    const syllableStartOffset = '가'.charCodeAt(0);
    const charCode = char.charCodeAt(0) - syllableStartOffset;
    if (charCode % 28 > 0) { // 종성이 포함되었을 경우
      return char;
    } else {
      const start = Math.floor(charCode / 28) * 28 + syllableStartOffset;
      const end = start + 27;
      return `[\\u${start.toString(16)}-\\u${end.toString(16)}]`;
    }

  } else {
    // from lodash.js
    const escapeRegExp = (str: string) => {
      const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      const reHasRegExpChar = RegExp(reRegExpChar.source);
      return (str && reHasRegExpChar.test(str))
        ? str.replace(reRegExpChar, '\\$&')
        : (str || '');
    };
    return escapeRegExp(char);

  }
};

export const createFuzzyStringMatcher = (str: string) => {
  const pattern = str
    .split('')
    .map(createFuzzyCharMatcher)
    .map(pattern => '(' + pattern + ')')
    .join('.*?');
  return new RegExp(pattern, 'i');
}
