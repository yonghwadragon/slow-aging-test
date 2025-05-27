// src/components/Result/ResultImageCard.js
import React from 'react';
import Image from 'next/image';
import styles from './ResultImageCard.module.css';

// resultData: 결과 데이터 객체, resultType: energy/kids 등
const ResultImageCard = ({ resultData, resultType }) => {
  // 결과 이미지 경로: public/images/results/energy.png 등
  const imagePath = `/images/results/${resultType}.png`;

  if (!resultData) return null;

  return (
    <div className={styles.cardWrapper} id="result-image-card">
      <div className={styles.imageArea}>
        <Image
          src={imagePath}
          alt="성향 캐릭터"
          width={160}
          height={160}
          className={styles.resultImage}
        />
      </div>
      <div className={styles.textArea}>
        <h2 className={styles.resultTitle}>{resultData.title}</h2>
        <p className={styles.resultDescription}>{resultData.description}</p>
      </div>
    </div>
  );
};

export default ResultImageCard;