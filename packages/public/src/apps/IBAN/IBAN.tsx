'use client';

import { useReducer, useRef } from 'react';
import { validateIban } from './IBAN.utils';

export { default as ReadmeMd } from './README.md';

const initialState = {
  isValid: false,
  iban: '',
  isVisible: false,
};

export default function IBAN() {
  const [{ isValid, iban, isVisible }, dispatch] = useReducer(
    (
      _: typeof initialState,
      action: { type: 'validate'; iban: string } | { type: 'reset' }
    ) => {
      switch (action.type) {
        case 'validate': {
          return {
            isValid: validateIban(action.iban),
            iban: action.iban,
            isVisible: true,
          };
        }
        case 'reset': {
          return initialState;
        }
      }
    },
    initialState
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {
    dispatch({ type: 'validate', iban: inputRef.current?.value ?? '' });
  };

  const handleChange = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <fieldset>
      <legend>Validate</legend>
      <label htmlFor="iban">IBAN</label>{' '}
      <input type="text" id="iban" ref={inputRef} onChange={handleChange} />{' '}
      <button type="button" onClick={handleSubmit}>
        Validate
      </button>
      {isVisible &&
        (isValid ? (
          <p>IBAN number {iban} is valid, rejoice!</p>
        ) : (
          <p>IBAN number {iban} is not valid. For shame!</p>
        ))}
    </fieldset>
  );
}
