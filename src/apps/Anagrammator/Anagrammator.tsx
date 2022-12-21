import { ChangeEvent, Children, useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import anagrammator, { countAnagrams } from "anagrammator-minkiele";
import { UberMath } from "../../lib/ubermath";
import AnagrammatorMd from './README.md';

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
              anagramms: newAnagramms,
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
    []
  );

  useEffect(() => {
    debounceGenerateAnagrams(value);
    return () => {
      debounceGenerateAnagrams.cancel();
    };
  }, [debounceGenerateAnagrams, value]);

  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((oldState) => ({
      ...oldState,
      value: normalizeInput(evt.target.value),
    }));
  };

  return (
    <div>
      <AnagrammatorMd />
      <fieldset>
        <legend>Generator controls</legend>
        <label htmlFor="input">Type in a word:</label>{" "}
        <input
          id="input"
          value={value}
          type="text"
          onChange={handleChangeValue}
        />{" "}
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
