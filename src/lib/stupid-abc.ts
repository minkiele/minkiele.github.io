const A = 'A'.charCodeAt(0);
const ALPHABET: Array<string> = [];
for(let i = 0; i < 26; i += 1) {
  ALPHABET[i] = String.fromCharCode(A + i);
}
const excluding = (...letter: Array<string>) => (current: string) => !letter.includes(current);
const VOWELS = ['A', 'E', 'I', 'O', 'U', 'Y'];
const COUPLINGS: Record<string, Array<string>> = {
  'A': ALPHABET.filter(excluding('A')),
  'C': [...VOWELS, 'C', 'H', 'K', 'L', 'M', 'N', 'Q', 'R', 'S', 'T'],
  'B': [...VOWELS, 'B', 'D', 'J', 'L', 'N', 'R', 'S'],
  'D': [...VOWELS, 'D', 'F', 'R'],
  'E': ALPHABET,
  'F': [...VOWELS, 'F', 'L', 'R', 'T'],
  'G': [...VOWELS, 'D', 'G', 'H', 'L', 'M', 'N', 'R'],
  'H': ['I', 'E'],
  'I': ALPHABET.filter(excluding('I')),
  'J': VOWELS,
  'K': VOWELS,
  'L': ALPHABET.filter(excluding('H', 'J', 'R', 'W', 'X')),
  'M': [...VOWELS, 'B', 'M', 'N', 'P'],
  'N': [...VOWELS, 'C', 'D', 'F', 'G', 'J', 'K', 'N', 'Q', 'S', 'T', 'V', 'Z'],
  'O': ALPHABET,
  'P': [...VOWELS, 'H', 'L', 'N', 'P', 'R', 'S', 'T', 'Z'],
  'Q': ['Q', 'U'],
  'R': ALPHABET.filter(excluding('H', 'W', 'X')),
  'S': ALPHABET.filter(excluding('X')),
  'T': [...VOWELS, 'L', 'M', 'R', 'T'],
  'U': ALPHABET.filter(excluding('U')),
  'V': [...VOWELS, 'R', 'V'],
  'W': VOWELS,
  'X': VOWELS,
  'Y': ALPHABET,
  'Z': [...VOWELS, 'Z']
};

export const isValidWord = (word: string): boolean => {
  for(let i = 0; i < word.length - 1; i += 1) {
    if(!(COUPLINGS[word.charAt(i)]?.includes(word.charAt(i + 1)) ?? false)) {
      return false;
    }
  }
  return true;
}
