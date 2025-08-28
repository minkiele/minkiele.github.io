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
}

interface DragonFractalSVGProps extends SVGAttributes<SVGSVGElement> {
  options: DragonFractalSVGOptions;
}

const DragonFractalSVG: FC<DragonFractalSVGProps> = ({ options, className, viewBox, ...props }) => {
  const { path, width, height } = useMemo(() => {
    const plotter = new Plotter(options.orientation);
    plotter.run(Plotter.getDirections(options.iterations, options.direction));
    return plotter.plot(options.segmentLength, options.arcLength);
  }, [options]);

  const border = options.border === true ? (options.segmentLength ?? Plotter.DEFAULT_LENGTH) : Number(options.border ?? 0);

  return (
    <svg {...props} className={classNames('dragonFractalSVG', className)} viewBox={viewBox ?? `0 0 ${width + 2 * border} ${height + 2 * border}`}>
      <path d={path} stroke='currentColor' fill="none" transform={border > 0 ? `translate(${border}, ${border})` : undefined} />
    </svg>
  );
};

export default DragonFractalSVG;
