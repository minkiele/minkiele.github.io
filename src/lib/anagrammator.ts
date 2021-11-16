export const anagrammator = (input: string): Array<string> => {
  if (input == null || input.length === 0) {
    return [];
  } else if (input.length === 1) {
    return [input];
  } else if (input.length === 2) {
    return [input, `${input[1]}${input[0]}`];
  } else {
    const output: Array<string> = [];
    for (let i = 0; i < input.length; input += 1) {
      const currentLetter = input[i];
      output.push(
        ...anagrammator(
          `${input.substring(0, i)}${input.substring(i + 1, input.length)}`
        ).map((portion) => `${portion}${currentLetter}`)
      );
    }
    return output;
  }
};

export default anagrammator;
