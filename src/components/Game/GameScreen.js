// src/components/Game/GameScreen.js
import React, { useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import Character from '../Character/Character';
import styles from './GameScreen.module.css';
import { questions } from '@/data/questions';

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

      <Character key={currentQuestion.id} />

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