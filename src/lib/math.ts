export const factorial = (input: number): number => {
  let output = 1;
  for (let i = 1; i <= input; i += 1) {
    output *= i;
  }
  return output;
};
