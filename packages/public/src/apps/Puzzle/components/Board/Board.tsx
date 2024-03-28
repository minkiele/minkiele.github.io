import { MouseEvent, MouseEventHandler, SVGAttributes } from 'react';
import Piece from '../Piece/Piece';
import { PieceEdges } from '../Piece/Piece.utils';

interface BoardProps
  extends Omit<
    SVGAttributes<SVGSVGElement>,
    'children' | 'dangerouslySetInnerHTML'
  > {
  grid: Array<Array<PieceEdges>>;
  onPieceClick?: (
    row: number,
    col: number,
    edges: PieceEdges,
    evt: MouseEvent<SVGElement>
  ) => void;
}

export default function Board({ grid, onPieceClick, ...props }: BoardProps) {
  const rows = grid.length;
  const cols = grid[0].length;
  const onPieceClickFactory =
    (
      row: number,
      col: number,
      edges: PieceEdges
    ): MouseEventHandler<SVGElement> =>
    (evt) => {
      onPieceClick?.(row, col, edges, evt);
    };
  return (
    <svg {...props} viewBox={`0 0 ${cols * 100} ${rows * 100}`}>
      {grid?.map((col, index) =>
        col.map((edges, jndex) => (
          <Piece
            {...edges}
            key={`${index}-${jndex}`}
            onClick={onPieceClickFactory(index, jndex, edges)}
            transform={`translate(${jndex * 100}, ${index * 100})`}
          />
        ))
      )}
    </svg>
  );
}
