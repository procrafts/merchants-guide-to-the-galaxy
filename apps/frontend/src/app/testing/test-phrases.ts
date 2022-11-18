const phrases = {
  registerSymbol: ['glob is I', 'prok is V', 'pish is X', 'tegj is L'],
  registerPrice: [
    'glob glob Silver is 34 Credits',
    'glob prok Gold is 57800 Credits',
    'pish pish Iron is 3910 Credits',
  ],
  convertRomanToArabic: ['how much is pish tegj glob glob ?'],
  calculatePriceOfItems: [
    'how many Credits is glob prok Silver ?',
    'how many Credits is glob prok Gold ?',
    'how many Credits is glob prok Iron ?',
  ],
  professIncomprehension: [
    'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?',
  ],
};

function getAll() {
  return Object.values(phrases).reduce((p, c) => p.concat(c), []);
}

function getMatchTable(key: keyof typeof phrases) {
  return getAll().map((phrase) => {
    const isMatch = phrases[key].includes(phrase);
    const verb = isMatch ? 'match' : 'not match';
    return { phrase, isMatch, verb };
  });
}

export const TestPhrases = {
  phrases,
  getAll,
  getMatchTable,
};
