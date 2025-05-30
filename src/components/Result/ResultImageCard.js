// src/components/Result/ResultImageCard.js
import React from 'react';
import Image from 'next/image';
import styles from './ResultImageCard.module.css';

const ResultImageCard = ({ resultType }) => {
  const imagePath = `/images/results/${resultType}`;

  return (
    <div className={styles.cardWrapper} id="result-image-card">
      <div className={styles.imageArea}>
        <Image
          src={imagePath}
          alt="결과 캐릭터 이미지"
          width={160}
          height={160}
          className={styles.resultImage}
        />
      </div>
    </div>
  );
};

export default ResultImageCard;