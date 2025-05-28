// src/components/Result/ResultScreen.js
import React from 'react';
import { useRouter } from 'next/router';
import { results } from '@/data/questions';
import ProductCard from './ProductCard';
import ShareButtons from './ShareButtons';
import ReelsSlider from './ReelsSlider';
import styles from './ResultScreen.module.css';
import ResultImageCard from './ResultImageCard';

const ResultScreen = () => {
  const router = useRouter();
  const score = parseInt(router.query.score, 10);

  let resultType = '';
  if (score <= 40) resultType = 'senior';
  else if (score < 60) resultType = 'kids';
  else resultType = 'energy';

  const resultData = results[resultType];

  const handleRestart = () => {
    router.push('/test');
  };

  if ((!score && score !== 0) || isNaN(score)) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>결과를 불러올 수 없어 😥</h2>
        <button className={styles.restartButton} onClick={handleRestart}>처음부터 다시 해볼래!</button>
      </div>
    );
  }

  return (
    <div className={styles.resultContainer}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#13b887', marginBottom: '0.4em' }}>
          🧪 당신의 노화 점수는 {score}점!
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#555' }}>
          아래 결과를 확인해보세요.
        </p>
      </div>

      <ResultImageCard resultData={resultData} resultType={resultType} />
      <ShareButtons resultType={resultType} />
      <ProductCard product={resultData.recommendedProduct} resultType={resultType} />
      <ReelsSlider />

      <button className={styles.restartButton} onClick={handleRestart}>
        🔁 처음부터 다시 하기
      </button>
    </div>
  );
};

export default ResultScreen;