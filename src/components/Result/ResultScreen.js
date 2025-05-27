// src/components/Result/ResultScreen.js
import React from 'react';
import { useGame } from '@/context/GameContext';
import { results } from '@/data/questions';
import ResultHeader from './ResultHeader';
import ProductCard from './ProductCard';
import ShareButtons from './ShareButtons';
import ReelsSlider from './ReelsSlider';
import styles from './ResultScreen.module.css';

const ResultScreen = () => {
  const { resultType, restartGame } = useGame();
  const resultData = results[resultType];

  if (!resultData) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>결과를 불러올 수 없어 😥</h2>
        <button className={styles.restartButton} onClick={restartGame}>처음부터 다시 해볼래!</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <ResultHeader resultType={resultType} />

      <ShareButtons resultType={resultType} />
      <hr style={{ margin: '20px 0' }} />

      <ProductCard product={resultData.recommendedProduct} resultType={resultType} />

      <ReelsSlider /> {/* + 릴스 슬라이더 추가 */}

      <button className={styles.restartButton} onClick={restartGame}>
        🔁 처음부터 다시 하기
      </button>
    </div>
  );
};

export default ResultScreen;