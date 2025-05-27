// src/components/Result/ResultHeader.js
import React from 'react';
import Image from 'next/image';
import { results } from '@/data/questions';
import styles from './ResultHeader.module.css';

const ResultHeader = ({ resultType }) => {
  const resultData = results[resultType];
  const imagePath = `/images/results/${resultType}.png`; // 결과별 이미지가 있을 경우

  if (!resultData) return null;

  return (
    <div className={styles.headerContainer}>
      {/* 캐릭터 또는 대표 이미지 */}
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt="결과 캐릭터"
          width={160}
          height={160}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* 성향 이름 및 설명 */}
      <h1 className={styles.resultTitle}>✨ {resultData.title}</h1>
      <p className={styles.resultDescription}>{resultData.description}</p>
    </div>
  );
};

export default ResultHeader;