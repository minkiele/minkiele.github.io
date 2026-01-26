'use client';

import {
  ChangeEventHandler,
  Fragment,
  FunctionComponent,
  MouseEventHandler,
} from 'react';
import { getNumber, useFactorizer } from './Factorizer.utils';
export { default as ReadmeMd } from './README.md';

const Factorizer: FunctionComponent = () => {
  const { inputs, factorized, mcm, mcd, add, update, del } = useFactorizer();
  const handleInput =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (evt) => {
      update(index, evt.target.value);
    };
  const handleDelete =
    (index: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      del(index);
    };
  const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
    add('2');
  };
  return (
    <>
      {inputs.map((input, index) => (
        <Fragment key={`input-${index}`}>
          <fieldset>
            <legend>Factorize</legend>
            <label htmlFor={`input-${index}`}>Input number: </label>
            <input
              id={`input-${index}`}
              name={`input-${index}`}
              type="number"
              value={input}
              onChange={handleInput(index)}
            />{' '}
            {index > 0 && (
              <button type="button" onClick={handleDelete(index)}>
                Delete
              </button>
            )}
          </fieldset>
          <p>
            {inputs[index]} ={' '}
            {factorized[index].map(([factor, exp], index) => (
              <Fragment key={`f-${factor}-${exp}`}>
                {index > 0 && <>&times;</>}
                {factor}
                {exp > 1 && <sup>{exp}</sup>}
              </Fragment>
            ))}
          </p>
        </Fragment>
      ))}
      {inputs.length > 1 && (
        <>
          <p>
            mcm = {getNumber(mcm)} ={' '}
            {mcm.map(([factor, exp], index) => (
              <Fragment key={`mcm-${factor}-${exp}`}>
                {index > 0 && <>&times;</>}
                {factor}
                {exp > 1 && <sup>{exp}</sup>}
              </Fragment>
            ))}
          </p>
          {/* TODO Fix broken MCD */}
          <p>
            MCD = {getNumber(mcd)} ={' '}
            {mcd.map(([factor, exp], index) => (
              <Fragment key={`mcd-${factor}-${exp}`}>
                {index > 0 && <>&times;</>}
                {factor}
                {exp > 1 && <sup>{exp}</sup>}
              </Fragment>
            ))}
          </p>
        </>
      )}
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
};

export default Factorizer;
