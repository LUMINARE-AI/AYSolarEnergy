'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/rentARoof.module.css';

export default function NewsImageCard({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className={styles.newsCard}>
      <div className={styles.newsImgWrap}>
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.newsImg}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className={styles.newsPlaceholder}>
            <p>Image coming soon</p>
          </div>
        )}
      </div>
      {caption && <p className={styles.newsCaption}>{caption}</p>}
    </article>
  );
}
