import { ReactNode } from 'react';

export interface FlipCardProps {
  children?:
    | ReactNode
    | ((props: { isFront: boolean; isBack: boolean }) => ReactNode);
  className?: string;
  isFlipped?: boolean;
}
