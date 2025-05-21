'use client';

import { useStore } from 'zustand';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import {
  DiscographyEntry,
  pickOne,
  serialize,
  storage,
  store,
  StoredROTD,
  unserialize,
} from './Display.utils';
import Image from 'next/image';
import ROTDMD from '../../README.md';

interface DisplayProps {
  discography: Array<DiscographyEntry>;
}

export default function Display({ discography }: DisplayProps) {
  const { rotd, setRotd } = useStore(store);

  useEffect(() => {
    const updateRotd = () => {
      if (discography.length > 0) {
        if (rotd == null) {
          const storedRotd = storage.get();
          const parsedRotd =
            storedRotd == null
              ? undefined
              : unserialize<StoredROTD>(storedRotd);
          const isValid = dayjs(parsedRotd?.validity).isAfter(dayjs());
          const loadedRotd =
            parsedRotd == null
              ? undefined
              : discography.find(({ id }) => id === parsedRotd.id);
          if (isValid && loadedRotd) {
            setRotd(loadedRotd);
          } else {
            const newRotd = pickOne(discography);
            storage.set(
              serialize<StoredROTD>({
                id: newRotd.id,
                validity: dayjs().endOf('day').toISOString(),
              })
            );
            setRotd(newRotd);
          }
        }
      }
    };
    updateRotd();
    const timerId = setInterval(updateRotd, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, [rotd, setRotd, discography]);

  return (
    <div>
      <ROTDMD />
      {rotd == null ? (
        'Loading...'
      ) : (
        <div>
          <h2>
            {rotd.artist} - {rotd.title}
            {rotd.year && <> ({rotd.year})</>}
          </h2>
          <Image
            src={rotd.thumb}
            alt="Album cover art"
            width={250}
            height={250}
          />
          <p>Available on {rotd.medium}</p>
        </div>
      )}
    </div>
  );
}
