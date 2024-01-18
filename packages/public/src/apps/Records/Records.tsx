import Image from 'next/image';
import { getDiscography } from './Records.utils';
import Readme from './components/Readme/Readme';
import styles from './Records.module.scss';

export default async function Records() {
  const myDiscography = await getDiscography();

  return (
    <div>
      <Readme />
      <ol className={styles.list}>
        {myDiscography.map((release, index) => (
          <li key={release.id} className={styles.list_item}>
            <span className={styles.imageWrapper}>
              <Image
                src={release.thumb}
                alt="Cover image"
                fill
                className={styles.image}
                priority={index < 4}
              />
            </span>
            <span>
              <strong>{release.artist}</strong>: {release.title} (
              {release.medium})
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
