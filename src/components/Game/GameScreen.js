// src/components/Game/GameScreen.js
import React, { useEffect, useState, useRef } from 'react';
import ClickSoundButton from '../common/ClickSoundButton';
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

  const [audioEnded, setAudioEnded] = useState(false);
  const audioRef = useRef(null);
  const playedOnce = useRef(false);

  useEffect(() => {
    if (gameState === 'idle') {
      startGame();
    }
  }, [gameState, startGame]);

  useEffect(() => {
    setAudioEnded(false);
      if (currentQuestionIndex === 0 && playedOnce.current) return;
      if (currentQuestionIndex === 0) playedOnce.current = true;

      if (audioRef.current) {
         audioRef.current.pause();
         audioRef.current = null;
       }
    const audio = new Audio(`/audio/questions/q${currentQuestionIndex + 1}.mp3`);
    audioRef.current = audio;
    audio.play().catch(() => {});
    // 예: 1.4초 후 버튼 활성화 (실제 길이보다 짧게 설정해도 무관)
    const earlyEnableTimeout = setTimeout(() => {
      setAudioEnded(true);
    }, 1400);

    // 만약 audio가 정말 끝났다면 이중으로 활성화됨을 방지하지 않음 (안전)
    audio.onended = () => {
      setAudioEnded(true);
      clearTimeout(earlyEnableTimeout);
    };
  }, [currentQuestionIndex]);

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
          <ClickSoundButton
            key={index}
            className={`${styles.option} ${styles[option.styleType]}`}
            onClick={() => answerQuestion(currentQuestion.id, option.point, option.id)}
            disabled={!audioEnded}
          >
            <div className={styles.optionContent}>
              <span>{option.text}</span>
            </div>
          </ClickSoundButton>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;