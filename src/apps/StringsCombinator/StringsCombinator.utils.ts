export interface StringCase {
  letter: string;
  cases: Array<string>;
  many: string;
}

const strongChunk = (chunk: string): string => `<strong>${chunk}</strong>`;
const ucFirstChunk = (chunk: string) =>
  `${chunk[0].toUpperCase()}${chunk.substring(1)}`;

export const getCombinations = (
  cases: Array<StringCase>,
  prefix = '',
  upperCase = true,
  strong = false,
  variant = 3,
): Record<string, string> => {
  const sentences: Record<string, string> = {};

  for (let i = 1; i < variant ** cases.length; i += 1) {
    let key = "";
    let combination: Array<string> = [];
    for (let j = 0; j < cases.length; j += 1) {
      const index = Math.floor(i / variant ** j) % variant;
      if (index >= variant - 1) {
        key += "N";
        combination.push(cases[j].many);
      } else {
        if (index > 0 && index < variant - 1) {
          combination.push(cases[j].cases[index - 1]);
        }
        key += index;
      }
      key += cases[j].letter;
    }

    if (combination.length > 0) {
      if (upperCase) {
        combination.splice(0, 1, ucFirstChunk(combination[0]));
      }

      if (strong) {
        combination = combination.map(strongChunk);
      }
    }

    const combinationsLength = combination.length;
    for (let j = 0; j < combinationsLength - 1; j += 1) {
      combination.splice(
        j * 2 + 1,
        0,
        j === combinationsLength - 2 ? " e " : ", "
      );
    }

    sentences[`${prefix}${key}`] = combination.join("");
  }
  return sentences;
};
