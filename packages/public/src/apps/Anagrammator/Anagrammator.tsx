"use client"

import { ChangeEvent, Children, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { countAnagrams, getCountAnagramFactors } from 'anagrammator';
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

/**
 * Create anagrams that go beyond your imagination
 * @returns JSX.Element
 */
function Anagrammator() {
  const [{ value, anagramms, size, total, skipped, formula }, setState] = useState<AnagrammatorState>({
    value: '',
    anagramms: [],
    size: 0,
    total: 0,
    skipped: 0,
    formula: undefined,
  });

  const {
    input: serviceInput,
    anagramm: serviceAnagrammator,
    anagramms: serviceAnagramms,
    idle: serviceIdle
  } = useAnagrammatorWorker();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGenerateAnagrams = useCallback(
    debounce((input: string) => {
      const newTotal = input.length > 0 ? UberMath.factorial(input.length) : 0;
      const newSize = input.length > 0 ? countAnagrams(input) : 0;
      const newSkipped = newTotal - newSize;
      setState((oldState) => ({
        ...oldState,
        anagramms: [],
        size: newSize,
        total: newTotal,
        skipped: newSkipped,
        formula: getCountAnagramFactors(input),
      }));
      serviceAnagrammator(input);
    }, 500),
    [serviceAnagrammator]
  );

  useEffect(() => {
    if(serviceIdle && serviceInput === value) {
      setState((current) => ({ ...current, anagramms: serviceAnagramms }));
    }
  }, [serviceInput, value, serviceIdle, serviceAnagramms]);

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
        <label htmlFor="input">Type in a word:</label> <input id="input" value={value} type="text" onChange={handleChangeValue} readOnly={size > 0 && anagramms.length === 0} />{' '}
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
          {anagramms.length === 0 && size > 0 && <p>Loading...</p>}
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
