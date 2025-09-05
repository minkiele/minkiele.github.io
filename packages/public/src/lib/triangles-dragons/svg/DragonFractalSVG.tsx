import { FC, SVGAttributes, useMemo } from 'react';
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
  const { path, width, height, segments } = useMemo(() => {
    const plotter = new Plotter(options.orientation);
    plotter.run(Plotter.getDirections(options.iterations, options.direction));
    return plotter.plot(options.segmentLength, options.arcLength);
  }, [options]);

  const border =
    options.border === true
      ? options.segmentLength ?? Plotter.DEFAULT_LENGTH
      : Number(options.border ?? 0);

  return (
    <svg
      {...props}
      className={classNames('dragonFractalSVG', className)}
      viewBox={viewBox ?? `0 0 ${width + 2 * border} ${height + 2 * border}`}
    >
      <g transform={border > 0 ? `translate(${border}, ${border})` : undefined}>
        {options.split ? (
          segments.map((segment, i) => (
            <path
              key={`seg-${segment}-${i}`}
              d={segment}
              stroke="currentColor"
              fill="none"
            />
          ))
        ) : (
          <path d={path} stroke="currentColor" fill="none" />
        )}
      </g>
    </svg>
  );
};

export default DragonFractalSVG;
