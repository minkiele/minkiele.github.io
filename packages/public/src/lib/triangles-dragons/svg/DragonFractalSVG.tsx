import { FC, SVGAttributes, useDebugValue, useMemo } from 'react';
import Plotter, { Direction, Orientation } from './dragons';
import classNames from 'classnames';

interface DragonFractalSVGOptions {
  iterations: number;
  orientation: Orientation;
  direction?: Direction;
  segmentLength?: number;
  arcLength?: number;
  border?: boolean | number;
  split?: boolean;
}

interface DragonFractalSVGProps extends SVGAttributes<SVGSVGElement> {
  options: DragonFractalSVGOptions;
}

const DragonFractalSVG: FC<DragonFractalSVGProps> = ({
  options,
  className,
  viewBox,
  ...props
}) => {
  const { path, width, height, segments, x, y } = useMemo(() => {
    const plotter = new Plotter(options.orientation);
    plotter.run(Plotter.getDirections(options.iterations, options.direction));
    return plotter.plot(options.segmentLength, options.arcLength, options.split);
  }, [options]);

  const border =
    options.border === true
      ? options.segmentLength ?? Plotter.DEFAULT_LENGTH
      : Number(options.border ?? 0);

  const strokeLinejoin =
    options.split || (options.arcLength ?? Plotter.DEFAULT_ARC) <= 0
      ? 'round'
      : undefined;

  return (
    <svg
      {...props}
      className={classNames('dragonFractalSVG', className)}
      viewBox={viewBox ?? `0 0 ${width + 2 * border} ${height + 2 * border}`}
    >
      <g
        transform={
          border > 0
            ? `translate(${border + (options.split ? x : 0)}, ${
                border + (options.split ? y : 0)
              })`
            : undefined
        }
      >
        {options.split ? (
          segments.map((segment, i) => (
            <path
              key={`seg-${segment}-${i}`}
              d={segment}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin={strokeLinejoin}
            />
          ))
        ) : (
          <path
            d={path}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin={strokeLinejoin}
          />
        )}
      </g>
    </svg>
  );
};

export default DragonFractalSVG;
