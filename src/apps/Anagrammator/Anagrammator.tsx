import { ChangeEvent, Children, useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import anagrammator, { countAnagrams } from "anagrammator-minkiele";
import { UberMath } from "../../lib/ubermath";
import { isValidWord } from "../../lib/stupid-abc";
import { T } from "ramda";

interface AnagrammatorState {
  value: string;
  anagramms: Array<string>;
  size: number;
  total: number;
  skipped: number;
}

const normalizeInput = (input: string) => {
  const trimmedInput = input.trim();
  return trimmedInput.length > 0
    ? trimmedInput.toUpperCase().replace(/[^A-Z]/, "")
    : trimmedInput;
};

function Anagrammator() {
  const [{ value, anagramms, size, total, skipped }, setState] =
    useState<AnagrammatorState>({
      value: "",
      anagramms: [],
      size: 0,
      total: 0,
      skipped: 0,
    });

  const [onlyValid, setOnlyValid] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGenerateAnagrams = useCallback(
    debounce((input: string) => {
      const newTotal = input.length > 0 ? UberMath.factorial(input.length) : 0;

      new Promise<Array<string>>((resolve, reject) => {
        const total = countAnagrams(input);
        if (total < 10000) {
          const newAnagramms = anagrammator(input);
          resolve(newAnagramms);
        } else {
          reject(total);
        }
      }).then(
        (newAnagramms) => {
          setState((oldState) => {
            const newSize = newAnagramms.length;
            const newSkipped = newTotal - newSize;
            return {
              ...oldState,
              anagramms: newAnagramms.filter(onlyValid ? isValidWord : T),
              size: newSize,
              total: newTotal,
              skipped: newSkipped,
            };
          });
        },
        (newSize) => {
          setState((oldState) => {
            const newSkipped = newTotal - newSize;
            return {
              ...oldState,
              anagramms: [],
              size: newSize,
              total: newTotal,
              skipped: newSkipped,
            };
          });
        }
      );
    }, 500),
    [onlyValid]
  );

  useEffect(() => {
    debounceGenerateAnagrams(value);
  }, [debounceGenerateAnagrams, value]);

  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((oldState) => ({
      ...oldState,
      value: normalizeInput(evt.target.value),
    }));
  };

  const handleOnlyValid = (evt: ChangeEvent<HTMLInputElement>) => {
    setOnlyValid(evt.currentTarget.checked);
  };

  return (
    <div>
      <p>Get anagrams for the provided input.</p>
      <p>
        <strong>Warning</strong>: since the growth of the number is almost
        exponential I capped the generator. If total number of anagrams exceed
        10000 they won't be generated, but you can see stats about them.
      </p>
      <p>Added a very stupid control to print only words that can be valid italian
        words. It will skip couples of words that are evidently invalid in the italian
        grammar (e.g. A <em>Q</em> can be followed only by a <em>U</em> or by another <em>U</em>).
        This is just a first -admittedly- very stupid screening as rules generally involve
        groups of 3 or more letters, here repeating the same consonant thrice will result in a valid
        word. Unfortunately rules are extremely complex, groups could be of 2, 3 or 4 letters,
        as we have many words borrowed from greek, latin, french, english and german.
      </p>
      <fieldset>
        <legend>Generator controls</legend>
        <label htmlFor="input">Type in a word:</label>{" "}
        <input
          id="input"
          value={value}
          type="text"
          onChange={handleChangeValue}
        />{" "}
        <input
          id="onlyValid"
          name="onlyValid"
          value="onlyValid"
          type="checkbox"
          checked={onlyValid}
          onChange={handleOnlyValid}
        />{" "}
        <label htmlFor="onlyValid">Only valid words</label>
      </fieldset>
      {total > 0 && (
        <>
          <h2>Facts</h2>
          <dl>
            <dt>Found Anagrams:</dt>
            <dd>{size}</dd>
          </dl>
          <dl>
            <dt>Total Combinations:</dt>
            <dd>{total}</dd>
          </dl>
          <dl>
            <dt>Skipped Combinations:</dt>
            <dd>{skipped}</dd>
          </dl>
          {anagramms.length > 0 && (
            <>
              <h2>The anagrams</h2>
              <ol>
                {Children.toArray(
                  anagramms.map((anagramm) => (
                    <li key={anagramm}>{anagramm}</li>
                  ))
                )}
              </ol>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Anagrammator;
