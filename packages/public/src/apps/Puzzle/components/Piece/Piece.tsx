import { FunctionComponent, useMemo } from 'react';
import { PieceProps, getPath, usePiece } from './Piece.utils';
import classNames from 'classnames';

const Piece: FunctionComponent<PieceProps> = ({
  N: nProp,
  S: sProp,
  W: wProp,
  E: eProp,
  className,
  ...props
}) => {
  const { N, S, W, E } = usePiece(
    // Avoiding the infinite loop
    useMemo(
      () => ({ N: nProp, S: sProp, W: wProp, E: eProp }),
      [nProp, sProp, wProp, eProp]
    )
  );
  const d = useMemo(
    () => getPath({ N, S, W, E }),
    [N, S, W, E]
  );
  return <path {...props} d={d} className={classNames(className, 'outline')} />;
};

export default Piece;
