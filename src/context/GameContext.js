// src/context/GameContext.js
import { createContext, useContext, useState } from 'react';
import { questions } from '@/data/questions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { db } from '@/lib/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
const GameContext = createContext();

export function GameProvider({ children }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('idle');
  const [characterPosition, setCharacterPosition] = useState('center');
  const [answers, setAnswers] = useState([]);

  // ✅ 경로가 /test일 때마다 상태 초기화
  useEffect(() => {
    if (router.pathname === '/test') {
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState('playing');
      setCharacterPosition('center');
      setAnswers([]);
    }
  }, [router.pathname]);

  const startGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState('playing');
    setCharacterPosition('center');
    setAnswers([]);
  };

  const answerQuestion = (questionId, point, optionId) => {
    const updatedScore = score + point;
    setScore(updatedScore);
    setCharacterPosition('center');
    setAnswers(prev => [...prev, { questionId, optionId, point }]);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setCharacterPosition('center');
      } else {
        setGameState('complete');
        router.push({
          pathname: '/result',
          query: { score: updatedScore }
        });
      }
    }, 800);
  };

  const value = {
    currentQuestionIndex,
    currentQuestion: questions?.[currentQuestionIndex] || null,
    gameState,
    characterPosition,
    startGame,
    answerQuestion,
    score,
    answers
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
}