// src/components/Result/ResultScreen.js
import React from 'react';
import { useRouter } from 'next/router';
import { getScoreGrade } from '@/data/questions';
import ProductCard from './ProductCard';
import ShareButtons from './ShareButtons';
import ReelsSlider from './ReelsSlider';
import styles from './ResultScreen.module.css';
import ResultImageCard from './ResultImageCard';
import ClickSoundButton from '../common/ClickSoundButton';

const ResultScreen = () => {
  const router = useRouter();
  const score = parseInt(router.query.score, 10);

  const grade = getScoreGrade(score);
  const { type, message, goodPoints, improvePoints, recommendedFoods, supplementaryNote } = grade;

  const handleRestart = () => {
    router.push('/');
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
          🧪 당신의 노화 점수는 {grade.score}점!
        </h2>
        <h3 style={{ fontSize: '1.6rem', margin: '0.2em 0' }}>{type}</h3>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.2em' }}>{message}</p>
        <div className={styles.analysisBox}>
          <h4>👍 잘하고 있는 점</h4>
          <ul>{goodPoints.map((point, idx) => <li key={idx}>{point}</li>)}</ul>

          <h4>⚡ 개선할 점</h4>
          <ul>{improvePoints.map((point, idx) => <li key={idx}>{point}</li>)}</ul>

          <h4>🥗 추천 음식</h4>
          <ul>
            {recommendedFoods.map((food, idx) => (
              <li key={idx}>{food.name} - {food.reason}</li>
            ))}
          </ul>

          <p><i>{supplementaryNote}</i></p>
        </div>
      </div>

      {/* 결과가 이미지, 제품 추천, 릴스 등과 매칭되지 않는다면 이 영역은 비워두거나 다른 디자인으로 대체 */}
      {/* <ResultImageCard resultData={resultData} resultType={resultType} /> */}
      {/* <ProductCard product={resultData.recommendedProduct} resultType={resultType} /> */}
      <ShareButtons resultType={type} score={grade.score} />
      <ReelsSlider />

      <ClickSoundButton className={styles.restartButton} onClick={handleRestart}>
        🔁 처음부터 다시 하기
      </ClickSoundButton>
    </div>
  );
};

export default ResultScreen;