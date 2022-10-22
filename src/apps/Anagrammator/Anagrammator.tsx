import { ChangeEvent, Children, useCallback, useEffect, useState } from "react";
import { anagrammatorAsync } from "../../lib/anagrammator";
import { factorial } from "../../lib/math";
import debounce from "lodash.debounce";

interface AnagrammatorState {
  value: string;
  anagramms: Array<string>;
  size: number;
  total: number;
  skipped: number;
}

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
  const debounceGenerateAnagrams = useCallback(debounce((input: string) => {
    anagrammatorAsync(input).then((newAnagramms) => {
      setState((oldState) => {
        const newSize = newAnagramms.length;
        const newTotal = input.length > 0 ? factorial(input.length) : 0;
        const newSkipped = newTotal - newSize;
        return {
          ...oldState,
          anagramms: newAnagramms,
          size: newSize,
          total: newTotal,
          skipped: newSkipped,
        };
      });
    });
  }, 500), []);

  useEffect(() => {
    debounceGenerateAnagrams(value);
  }, [debounceGenerateAnagrams, value]);

  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((oldState) => ({ ...oldState, value: evt.target.value }));
  };

  return (
    <div>
      <div>
        <input
          id="input"
          value={value}
          type="text"
          onChange={handleChangeValue}
        />
      </div>
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
          {anagramms.length > 0 && anagramms.length < 10000 && (
            <>
            <h2>The anagrams</h2>
            <ol>
              {Children.toArray(
                anagramms.map((anagramm) => <li key={anagramm}>{anagramm}</li>)
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
