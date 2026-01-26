'use client';

import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { pronunciaDataOra } from '../../lib/EnunciateNumbers';
export { default as ReadmeMd } from './README.md';

interface Orora {
  now?: Date;
  time?: string;
}

const orora = () => {
  const now = new Date();
  return {
    now,
    time: pronunciaDataOra(now),
  };
};

const OraInParole: FunctionComponent = () => {
  const [{ time: oraInParole, now }, setOraInParole] = useState<Orora>({});

  useEffect(() => {
    setOraInParole(orora());
    const intervalId = setInterval(() => {
      setOraInParole(orora());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Announce time every 30s
  const ariaLive = useMemo(() => (now?.getSeconds() ?? 1) % 30 === 0, [now]);

  return <h2 aria-live={ariaLive ? 'polite' : 'off'}>{oraInParole}</h2>;
};

export default OraInParole;
