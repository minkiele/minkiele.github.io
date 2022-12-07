import {
  ChangeEventHandler,
  Fragment,
  FunctionComponent,
  useMemo,
  useState,
} from "react";
import { getGroupedFactors } from "./Factorizer.utils";
import FactorizerMd from './README.md';

const Factorizer: FunctionComponent = () => {
  const [input, setInput] = useState<number>(2);
  const groupedFactors = useMemo(
    () => getGroupedFactors(input) as Array<[string, number]>,
    [input]
  );
  const handleInput: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const parsedInput = parseInt(evt.target.value);
    setInput(isNaN(parsedInput) || parsedInput < 2 ? 2 : parsedInput);
  };
  return (
    <div>
      <FactorizerMd />
      <fieldset>
        <legend>Factorize</legend>
        <label htmlFor="input">Input number: </label>
        <input
          id="input"
          name="input"
          type="number"
          value={input}
          onChange={handleInput}
        />
      </fieldset>
      <p>
        {input} ={" "}
        {groupedFactors.map(([factor, exp], index) => (
          <Fragment key={`${factor}-${exp}`}>
            {index > 0 && <>&times;</>}
            {factor}
            {exp > 1 && <sup>{exp}</sup>}
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default Factorizer;
