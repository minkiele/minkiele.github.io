import { FunctionComponent, useMemo } from 'react';
import { PieceProps, getPath, usePiece } from './Piece.utils';

const Piece: FunctionComponent<PieceProps> = ({
  N: nProp,
  S: sProp,
  W: wProp,
  E: eProp,
  ...props
}) => {
  const { N, S, W, E } = usePiece(
    // Avoiding the infinite loop
    useMemo(
      () => ({ N: nProp, S: sProp, W: wProp, E: eProp }),
      [nProp, sProp, wProp, eProp]
    )
  );
  const d = useMemo(() => getPath({ N, S, W, E }), [N, S, W, E]);
  return (
    <svg {...props} width={160} height={160} viewBox="0 0 160 160">
      <path d={d} className="outline" />
    </svg>
  );
};

export default Piece;
