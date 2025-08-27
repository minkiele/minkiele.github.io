'use client';

import classNames from 'classnames';
import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import { getDragonFractal, L, R } from '../../lib/triangles-dragons/dragons';
import { Plane } from '../../lib/triangles-dragons/matrix/plane';
import styles from './Dragons.module.scss';
import DragonsMd from './README.md';
import DragonFractalSVG from '@/lib/triangles-dragons/svg/DragonFractalSVG';
import {
  getCompatDirection,
  getCompatIterations,
  getCompatOrientation,
} from '@/lib/triangles-dragons/svg/compat';

const Dragons: FunctionComponent = () => {
  const [dragons, setDragons] = useState<{
    iterations: number;
    fold: typeof L | typeof R;
    orientation: Plane.Orientation;
    svg: boolean;
  }>({
    iterations: 3,
    fold: L,
    orientation: Plane.Orientation.E,
    svg: true,
  });
  const handleDragons: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newDragons = parseInt(evt.target.value);
    if (newDragons > 0) {
      setDragons((current) => ({ ...current, iterations: newDragons }));
    }
  };
  const handleFold: ChangeEventHandler<HTMLInputElement> = (evt) => {
    switch (evt.target.value) {
      case 'L': {
        setDragons((current) => ({ ...current, fold: L }));
        break;
      }
      case 'R': {
        setDragons((current) => ({ ...current, fold: R }));
        break;
      }
    }
  };
  const handleOrientation: ChangeEventHandler<HTMLInputElement> = (evt) => {
    switch (evt.target.value) {
      case 'N': {
        setDragons((current) => ({
          ...current,
          orientation: Plane.Orientation.N,
        }));
        break;
      }
      case 'E': {
        setDragons((current) => ({
          ...current,
          orientation: Plane.Orientation.E,
        }));
        break;
      }
      case 'S': {
        setDragons((current) => ({
          ...current,
          orientation: Plane.Orientation.S,
        }));
        break;
      }
      case 'W': {
        setDragons((current) => ({
          ...current,
          orientation: Plane.Orientation.W,
        }));
        break;
      }
    }
  };
  const handleRendering: ChangeEventHandler<HTMLInputElement> = (evt) => {
    switch (evt.target.value) {
      case 'svg': {
        setDragons((current) => ({ ...current, svg: true }));
        break;
      }
      case 'text': {
        setDragons((current) => ({ ...current, svg: false }));
        break;
      }
    }
  };

  return (
    <div>
      <DragonsMd />
      <div>
        <fieldset>
          <legend>Iterations</legend>
          <label htmlFor="newDragons">
            This will generate a dragon fractal with the specified iterations
            (after 15 iterations will start to considerably slow down).
          </label>
          <input
            id="newDragons"
            type="number"
            onChange={handleDragons}
            value={dragons.iterations}
          />
        </fieldset>
        <fieldset>
          <legend>Fold orientation</legend>
          <input
            type="radio"
            name="fold"
            id="foldLeft"
            value="L"
            onChange={handleFold}
            checked={dragons.fold === L}
          />
          <label htmlFor="foldLeft">Left</label>{' '}
          <input
            type="radio"
            name="fold"
            id="foldRight"
            value="R"
            onChange={handleFold}
            checked={dragons.fold === R}
          />
          <label htmlFor="foldRight">Right</label>
        </fieldset>
        <fieldset>
          <legend>Start direction</legend>
          <input
            type="radio"
            name="orientation"
            id="orientationNorth"
            value="N"
            onChange={handleOrientation}
            checked={dragons.orientation === Plane.Orientation.N}
          />
          <label htmlFor="orientationNorth">North</label>{' '}
          <input
            type="radio"
            name="orientation"
            id="orientationEast"
            value="E"
            onChange={handleOrientation}
            checked={dragons.orientation === Plane.Orientation.E}
          />
          <label htmlFor="orientationEast">East</label>{' '}
          <input
            type="radio"
            name="orientation"
            id="orientationSouth"
            value="S"
            onChange={handleOrientation}
            checked={dragons.orientation === Plane.Orientation.S}
          />
          <label htmlFor="orientationSouth">South</label>{' '}
          <input
            type="radio"
            name="orientation"
            id="orientationWest"
            value="W"
            onChange={handleOrientation}
            checked={dragons.orientation === Plane.Orientation.W}
          />
          <label htmlFor="orientationWest">West</label>{' '}
        </fieldset>
        <fieldset>
          <legend>Rendering method</legend>
          <input
            type="radio"
            name="rendering"
            id="renderingSvg"
            value="svg"
            onChange={handleRendering}
            checked={dragons.svg}
          />
          <label htmlFor="renderingSvg">SVG</label>{' '}
          <input
            type="radio"
            name="rendering"
            id="renderingText"
            value="text"
            onChange={handleRendering}
            checked={!dragons.svg}
          />
          <label htmlFor="renderingText">Text</label>{' '}
        </fieldset>
      </div>
      {dragons.svg ? (
        <DragonFractalSVG
        className={styles.dragonSvg}
          style={{width: `${Math.min(100, Math.max(10, Math.log(dragons.iterations) / Math.log(17) * 100))}%`}}
          options={{
            iterations: getCompatIterations(dragons.iterations),
            direction: getCompatDirection(dragons.fold),
            orientation: getCompatOrientation(dragons.orientation),
          }}
        />
      ) : (
        <pre
          className={classNames({
            [styles.dragons]: true,
            [styles.dragons__medium]:
              dragons.iterations > 10 && dragons.iterations <= 13,
            [styles.dragons__small]: dragons.iterations > 13,
          })}
        >
          {getDragonFractal(
            dragons.iterations,
            dragons.fold,
            dragons.orientation
          ).toString()}
        </pre>
      )}
    </div>
  );
};

export default Dragons;
