'use client';

import { ChangeEventHandler, useRef, useState } from 'react';
import { validateIban } from './IBAN.utils';

export { default as ReadmeMd } from './README.md';

export default function IBAN() {
  const [iban, setIban] = useState('');
  const isVisible = iban.trim().length > 0;
  const isValid = isVisible && validateIban(iban);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setIban(evt.target.value);
  };

  return (
    <fieldset>
      <legend>Validate</legend>
      <label htmlFor="iban">IBAN</label>{' '}
      <input type="text" id="iban" onChange={handleChange} />
      {isVisible &&
        (isValid ? (
          <p>IBAN number {iban} is valid, rejoice!</p>
        ) : (
          <p>IBAN number {iban} is not valid. For shame!</p>
        ))}
    </fieldset>
  );
}
