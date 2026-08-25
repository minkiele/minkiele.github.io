'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from './Sharer.module.scss';

const QRImage = dynamic(() => import('@/lib/QRImage/QRImage'));

interface SharerProps {
  className?: string;
}

export default function Sharer({ className }: SharerProps) {
  const [isVisible, setVisible] = useState(false);
  const [encoded, setEncoded] = useState<string>();
  const pathname = usePathname();

  useEffect(() => {
    setEncoded(window.location.href);
  }, [pathname]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setVisible((current) => !current);
  };

  return (
    <div className={className}>
      <button type="button" onClick={handleClick}>
        {isVisible ? 'Hide' : 'Share'}
      </button>

      {isVisible && (
        <div className={styles.container}>
          <QRImage
            src={encoded}
            alt={`QR code representation of ${encoded}`}
            width="256"
            height="256"
            className={styles.qr}
          />
        </div>
      )}
    </div>
  );
}
