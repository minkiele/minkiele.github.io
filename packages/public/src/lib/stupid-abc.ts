const A = 'A'.charCodeAt(0);
const ALPHABET: Array<string> = [];
for (let i = 0; i < 26; i += 1) {
  ALPHABET[i] = String.fromCharCode(A + i);
}
const excluding =
  (...letter: Array<string>) =>
  (current: string) =>
    !letter.includes(current);
const VOWELS = ['A', 'E', 'I', 'O', 'U', 'Y'];
const COUPLINGS: Record<string, Array<string>> = {
  A: ALPHABET, // Aardvark, Abaco, Acapulco, Adagio, Aerare, Afasia, Agave, Aha, Aia, Ajax, Mandrake, Ala, Amore, Anca, Aosta, Apice, Aquila, Arte, Asta, Atollo, Auto, Aviere, Hawaii, Axa, Ayrton, Azz.
  C: [...VOWELS, 'C', 'H', 'K', 'L', 'M', 'N', 'Q', 'R', 'S', 'T'], // Cazzo, Cacca, Cera, Chiavare, Cinema, Jack, Clinica, Dracma, Acne, Como, Acqua, Croco, Clacson, Activa
  B: [...VOWELS, 'B', 'D', 'J', 'L', 'N', 'R', 'S'], // Banana, Nebbia, Rabdomante, Bestia, Bicicletta, Bjorn, Blu, Abnorme, Bolo, Brutto, Abside, Abuso
  D: [...VOWELS, 'D', 'J', 'R'], // Dama, Adda, Destino, Dio, DJ, Domani, Dritto, Dubbio
  E: ALPHABET,
  F: [...VOWELS, 'F', 'L', 'R', 'T'],
  G: [...VOWELS, 'D', 'G', 'H', 'L', 'M', 'N', 'R'],
  H: ['I', 'E'],
  I: ALPHABET,
  J: VOWELS,
  K: VOWELS,
  L: ALPHABET.filter(excluding('H', 'J', 'R', 'W', 'X')),
  M: [...VOWELS, 'B', 'M', 'N', 'P'],
  N: [...VOWELS, 'C', 'D', 'F', 'G', 'J', 'K', 'N', 'Q', 'S', 'T', 'V', 'Z'],
  O: ALPHABET,
  P: [...VOWELS, 'H', 'L', 'N', 'P', 'R', 'S', 'T', 'Z'],
  Q: ['Q', 'U'],
  R: ALPHABET.filter(excluding('H', 'W', 'X')),
  S: ALPHABET.filter(excluding('X')),
  T: [...VOWELS, 'L', 'M', 'R', 'T'],
  U: ALPHABET,
  V: [...VOWELS, 'R', 'V'],
  W: VOWELS,
  X: VOWELS,
  Y: ALPHABET,
  Z: [...VOWELS, 'Z'],
};

export const isValidWord = (word: string): boolean => {
  let equals = 0;
  for (let i = 0; i < word.length - 1; i += 1) {
    const cl = word.charAt(i);
    const cn = word.charAt(i + 1);
    if (!(COUPLINGS[cl]?.includes(cn) ?? false)) {
      return false;
    }
    if (cl === cn) {
      equals += 1;
    } else {
      equals = 0;
    }
    if (equals >= 2) {
      return false;
    }
  }
  return true;
};
