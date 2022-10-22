/**
 * Function to create anagrams. Or armansag, Or smangaar.
 * @param input a string
 * @returns an array of smargana.
 */
export const anagrammator = (input: string): Array<string> => {
  if (input == null || input.length === 0) {
    return [];
  } else if (input.length === 1) {
    return [input];
  } else {
    const output: Array<string> = [];
    const usedLetters: Array<string> = [];
    for (let i = 0; i < input.length; i += 1) {
      const currentLetter = input[i];
      if (usedLetters.indexOf(currentLetter) === -1) {
        usedLetters.push(currentLetter);
        output.push(
          ...anagrammator(
            `${input.substring(0, i)}${input.substring(i + 1, input.length)}`
          ).map((portion) => `${portion}${currentLetter}`)
        );
      } else if (process.env.NODE_ENV === "development") {
        console.debug(
          "Skipping %d! permutations at %s",
          input.length - 1,
          input
        );
      }
    }
    return output;
  }
};

export const anagrammatorAsync = (input: string): Promise<Array<string>> => {
  if (input == null || input.length === 0) {
    return Promise.resolve([]);
  } else if (input.length === 1) {
    return Promise.resolve([input]);
  } else {
    const output: Array<Promise<Array<string>>> = [];
    const usedLetters: Array<string> = [];
    for (let i = 0; i < input.length; i += 1) {
      const currentLetter = input[i];
      if (usedLetters.indexOf(currentLetter) === -1) {
        usedLetters.push(currentLetter);
        output.push(
          anagrammatorAsync(
            `${input.substring(0, i)}${input.substring(i + 1, input.length)}`
          ).then((anagrams) =>
            anagrams.map((portion) => `${portion}${currentLetter}`)
          )
        );
      }
    }
    return Promise.all(output).then((anagramGroups) =>
      anagramGroups.reduce<Array<string>>(
        (acc, anagramGroup) => acc.concat(anagramGroup),
        []
      )
    );
  }
};

export default anagrammator;

export const countAnagrams = (input: string): number => {
  let output = 1;
  const charsMap = new Map<string, number>();
  for (let i = 0; i < input.length; i += 1) {
    const duplications = (charsMap.get(input[i]) ?? 0) + 1;
    charsMap.set(input[i], duplications);
    if (duplications !== i + 1) {
      if (i > 0) {
        // console.log("%s: %d * %d", input[i], output, i + 1);
        output *= (i + 1);
      }
      if (duplications > 1) {
        // console.log("%s: %d / %d", input[i], output, duplications);
        output /= duplications;
      }
    // } else {
    //   console.log("Skipping, duplications and value are equal");
    }
  }
  return output;
};
