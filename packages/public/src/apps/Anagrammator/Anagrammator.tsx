"use client"

import { ChangeEvent, Children, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { getCountAnagramFactors } from 'anagrammator';
import { UberMath } from '../../lib/ubermath';
import AnagrammatorMd from './README.md';
import { useAnagrammatorWorker } from './Anagrammator.utils';

interface AnagrammatorState {
  value: string;
  anagramms: Array<string>;
  size: number;
  total: number;
  skipped: number;
  formula: { numerator: number; denominator: Array<number> } | undefined;
}

const normalizeInput = (input: string) => {
  const trimmedInput = input.trim();
  return trimmedInput.length > 0 ? trimmedInput.toUpperCase().replace(/[^A-Z]/, '') : trimmedInput;
};

function Anagrammator() {
  const [{ value, anagramms, size, total, skipped, formula }, setState] = useState<AnagrammatorState>({
    value: '',
    anagramms: [],
    size: 0,
    total: 0,
    skipped: 0,
    formula: undefined,
  });

  const { input, output: newAnagramms, request } = useAnagrammatorWorker();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGenerateAnagrams = useCallback(
    debounce((input: string) => {
      request(input);
    }, 500),
    []
  );

  useEffect(() => {
    debounceGenerateAnagrams(value);
    return () => {
      debounceGenerateAnagrams.cancel();
    };
  }, [debounceGenerateAnagrams, value]);

  useEffect(() => {
    if(input != null && input.length > 0 && newAnagramms.length > 0) {
      setState((oldState) => {
        const newTotal = UberMath.factorial(input.length);
        const newSize = newAnagramms.length;
        const newSkipped = newTotal - newSize;
        return {
          ...oldState,
          anagramms: newAnagramms,
          size: newSize,
          total: newTotal,
          skipped: newSkipped,
          formula: getCountAnagramFactors(input),
        };
      });
    }
  }, [input, newAnagramms]);

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
        <label htmlFor="input">Type in a word:</label> <input id="input" value={value} type="text" onChange={handleChangeValue} />{' '}
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
          {formula != null && (
            <dl>
              <dt>Formula:</dt>
              <dd>
                {formula.numerator} / ({formula.denominator.join(' * ')})
              </dd>
            </dl>
          )}

          {anagramms.length > 0 && (
            <>
              <h2>The anagrams</h2>
              <ol>{Children.toArray(anagramms.map((anagramm) => <li key={anagramm}>{anagramm}</li>))}</ol>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Anagrammator;
