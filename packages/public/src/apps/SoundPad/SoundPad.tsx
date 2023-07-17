import { FunctionComponent, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import SoundPadMD from './README.md';
import styles from './SoundPad.module.scss';

const SoundPad: FunctionComponent = () => {
  const sounds = useMemo(
    () => [{ label: 'Dragnet', value: 'dragnet.mp3' }],
    []
  );

  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const stop = () => {
    const audio = audioRef.current as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;
  };

  const play = (sound: string) => () => {
    stop();
    const audio = audioRef.current as HTMLAudioElement;
    audio.src = `/assets/${sound}`;
    audio.play();
  };

  return (
    <div>
      <SoundPadMD />
      <div>
        {sounds.map(({ label, value: sound }, index) => (
          <div className={styles.sound} key={`${label}-${sound}-${index}`}>
            <button onClick={play(sound)}>{label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoundPad;
