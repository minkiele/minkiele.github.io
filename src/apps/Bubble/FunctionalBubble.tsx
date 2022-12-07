import { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  scaleLinear,
  scaleSqrt,
  forceSimulation,
  forceX,
  forceY,
  forceCollide,
  interpolateHcl,
  rgb,
  ScaleLinear,
  Simulation,
  SimulationNodeDatum,
} from "d3";

import _ from 'lodash';

export interface FunctionalBubbleSimulationNodeDatum extends SimulationNodeDatum {
  v: number;
}

interface FunctionalBubbleProps {
  data?: Array<FunctionalBubbleSimulationNodeDatum>;
  width?: number;
  height?: number;
  hasLabels?: boolean;
}

interface FunctionalBubbleInstanceProps {
  minValue: number;
  maxValue: number;
  mounted: boolean;
  simulation:
    | Simulation<FunctionalBubbleSimulationNodeDatum, undefined>
    | undefined;
}

const FunctionalBubble: FunctionComponent<FunctionalBubbleProps> = ({
  data: propData = [],
  hasLabels = false,
  width = 600,
  height = 400,
}) => {
  const _this = useRef<FunctionalBubbleInstanceProps>({
    minValue: 1,
    maxValue: 100,
    mounted: false,
    simulation: undefined,
  });

  const [data, setData] = useState<Array<FunctionalBubbleSimulationNodeDatum>>(
    []
  );

  useEffect(() => {
    _this.current.mounted = true;
    if (propData.length > 0) {
      _this.current.minValue =
        0.95 * Math.min(...propData.map((item) => item.v));

      _this.current.maxValue =
        1.05 * Math.max(...propData.map((item) => item.v));

      simulatePositions(propData);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      _this.current.mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propData]);

  const radiusScale = (value: number) => {
    const fx = scaleSqrt()
      .range([1, 50])
      .domain([_this.current.minValue, _this.current.maxValue]);

    return fx(value);
  };

  const simulatePositions = (
    dataToRender: Array<FunctionalBubbleSimulationNodeDatum>
  ) => {
    const clonedData = _.clone(dataToRender);
    _this.current.simulation =
      forceSimulation<FunctionalBubbleSimulationNodeDatum>()
        .nodes(clonedData)
        .velocityDecay(0.5)
        .force("x", forceX().strength(0.05))
        .force("y", forceY().strength(0.05))
        .force(
          "collide",
          forceCollide((d) => radiusScale(d.v) + 2)
        )
        .on("tick", () => {
          if (_this.current.mounted) {
            setData(_.clone(clonedData));
          }
        });
  };

  const renderBubbles = (dataToRender: Array<FunctionalBubbleSimulationNodeDatum>) => {
    const {minValue, maxValue} = _this.current;
    const color = scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(interpolateHcl as any)
      .range(["#eb001b", "#f79e1b"] as any) as unknown as ScaleLinear<number, string>;

    // render simple circle element
    if (!hasLabels) {
      const circles = _.map(dataToRender, (item, index) => {
        return (
          <circle
            key={index}
            r={radiusScale(item.v)}
            cx={item.x}
            cy={item.y}
            fill={color(item.v)}
            stroke={rgb(color(item.v)).brighter(2).toString()}
            strokeWidth="2"
          />
        );
      });

      return (
        <g transform={`translate(${width / 2}, ${height / 2})`}>{circles}</g>
      );
    }

    // render circle and text elements inside a group
    const texts = _.map(dataToRender, (item, index) => {
      const fontSize = radiusScale(item.v) / 2;
      return (
        <g
          key={index}
          transform={`translate(${width / 2 + (item.x as number)}, ${
            height / 2 + (item.y as number)
          })`}
        >
          <circle
            r={radiusScale(item.v)}
            fill={color(item.v)}
            stroke={rgb(color(item.v)).brighter(2).toString()}
            strokeWidth="2"
          />
          <text
            dy="6"
            fill="#fff"
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="bold"
          >
            {item.v}
          </text>
        </g>
      );
    });

    return texts;
  };

  if (data.length) {
    return (
      <svg width={width} height={height}>
        {renderBubbles(data)}
      </svg>
    );
  }

  return <div>Loading</div>;
};

export default FunctionalBubble;
