import { FC, ReactNode, useId, useMemo } from 'react';

const useEnsureId = (id?: string) => {
  const generatedId = useId();
  return useMemo(() => id ?? generatedId, [id, generatedId]);
};

export default useEnsureId;

export const IdProvider: FC<{
  id?: string;
  children: (input: { id: string }) => ReactNode;
}> = ({ id: idProp, children }) => {
  const id = useEnsureId(idProp);
  return children(useMemo(() => ({ id }), [id]));
};
