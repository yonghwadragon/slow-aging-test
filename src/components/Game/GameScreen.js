// src/components/Game/GameScreen.js
import React, { useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import styles from './GameScreen.module.css';
import { questions } from '@/data/questions';
import Image from 'next/image';

const GameScreen = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    answerQuestion,
    gameState,
    startGame
  } = useGame();

  useEffect(() => {
    if (gameState === 'idle') {
      startGame();
    }
  }, [gameState, startGame]);

  if (gameState !== 'playing') {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingSpinner}></div>
        <p>🦌 준비 중...</p>
      </div>
    );
  }
  if (!currentQuestion) return null;

  const imageSrc = `/images/questions/q${currentQuestionIndex + 1}.png`;

  return (
    <div className={styles.gameScreen}>
      <div className={styles.progressBar}>
       <div
         className={styles.progress}
         style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
       ></div>
      </div>

      <div className={styles.questionContainer}>
        <h2 className={styles.questionText}>{currentQuestion.text}</h2>
      </div>

     <div className={styles.questionImageWrapper}>
       <Image
         src={imageSrc}
         alt={`질문 이미지 ${currentQuestionIndex + 1}`}
         width={240}
         height={240}
         priority
       />
     </div>

      <div className={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${styles[option.styleType]}`} 
            onClick={() => answerQuestion(currentQuestion.id, option.point)} 
          >
            <div className={styles.optionContent}>
              <span>{option.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;