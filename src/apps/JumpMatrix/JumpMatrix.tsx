import classNames from "classnames";
import { FunctionComponent, useEffect, useState } from "react";
import { JumpMatrix as JumpMatrixLogic } from "../../lib/JumpMatrix";
import styles from './JumpMatrix.module.scss';
import JumpMatrixMd from './JumpMatrix.md';

interface JumpMatrixState {
  matrix: JumpMatrixLogic;
  tries: number;
  moves: number;
}

const runJumpMatrix = (): JumpMatrixState => {
  let tries = 0;
  let done = false;
  let moves = 0;

  let jm: JumpMatrixLogic | undefined;

  do {
    jm = new JumpMatrixLogic();
    tries += 1;
    try {
      jm.play();
      done = true;
    } catch (err) {}
    moves += jm.getMove();
  } while (!done);
  return { matrix: jm as JumpMatrixLogic, tries, moves };
};

const JumpMatrix: FunctionComponent = () => {
  const [{ matrix, moves, tries }, setMatrixState] = useState<JumpMatrixState>(
    runJumpMatrix()
  );

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Delay by 250ms to actualy re-render with mutated classes
    // And showing correctly the transitions
    setTimeout(() => {
      setVisible(true);
    }, 250);
  }, [matrix]);

  const handleUpdate = () => {
    setVisible(false);
    setMatrixState(runJumpMatrix());
  };

  return (
    <div>
      <JumpMatrixMd />
      <h3>Facts</h3>
      <dl>
        <dt>Total tries:</dt>
        <dd>{tries}</dd>
        <dt>Average moves:</dt>
        <dd>{moves / tries}</dd>
      </dl>
      <table>
        <tbody>
          {matrix.getMatrix().map((row, index) => (
            <tr key={`${row.toString()}-${index}`}>
              {row.map((col, colIndex) => (
                <td key={`${col}-${colIndex}`} className={classNames({
                  [styles.cell]: true,
                  [styles.cell__visible]: visible
                })} data-c={col}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <button onClick={handleUpdate}>More magic please</button>
      </p>
    </div>
  );
};

export default JumpMatrix;
