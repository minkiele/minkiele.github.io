import { useRouter } from 'next/navigation';
import { createElement, useEffect } from 'react';

export const useRedirectTo = (path: string | URL) => {
  const { replace } = useRouter();
  useEffect(() => {
    replace(path.toString());
  }, [path, replace]);
};

interface UseRedirectToProps {
  path: string | URL;
}

function UseRedirectToImpl({ path }: UseRedirectToProps) {
  useRedirectTo(path);
  return null;
}

export function getRedirect(path: string | URL) {
  return function UseRedirectTo() {
    return createElement(UseRedirectToImpl, { path });
  };
}
