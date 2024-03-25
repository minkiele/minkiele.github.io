import { FunctionComponentElement, SVGAttributes } from 'react';
import Piece from '../Piece/Piece';
import { times } from 'ramda';
import { PieceEdges } from '../Piece/Piece.utils';

interface BoardProps
  extends Omit<
    SVGAttributes<SVGSVGElement>,
    'children' | 'dangerouslySetInnerHTML'
  > {
  grid: Array<Array<PieceEdges>>;
}

export default function Board({ grid, ...props }: BoardProps) {
  const rows = grid.length;
  const cols = grid[0].length;
  return (
    <svg {...props} viewBox={`0 0 ${cols * 100} ${rows * 100}`}>
      {grid?.map((col, index) =>
        col.map((edges, jndex) => (
          <Piece
            {...edges}
            key={`${index}-${jndex}`}
            x={jndex * 100}
            y={index * 100}
          />
        ))
      )}
    </svg>
  );
}
