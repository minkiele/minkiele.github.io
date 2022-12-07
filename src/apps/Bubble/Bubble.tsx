import { FunctionComponent, useRef } from "react";
import FunctionalBubble, { FunctionalBubbleSimulationNodeDatum } from "./FunctionalBubble";
import BubbleMd from "./README.md";

const Bubble: FunctionComponent = () => {
  const rawdata = useRef(
    Array<FunctionalBubbleSimulationNodeDatum>(24)
      .fill({ v: 0 })
      .map(() => ({ v: Math.floor(Math.random() * 90 + 10) }))
  );
  return <div>
    <BubbleMd />
    <div><FunctionalBubble data={rawdata.current} hasLabels /></div>
  </div>
};

export default Bubble;
