import { createContext, useContext, useState } from 'react';
import { questions, calculateResult } from '../data/questions';
import { useRouter } from 'next/router';

// 게임 컨텍스트 생성
const GameContext = createContext();

// 게임 컨텍스트 프로바이더 컴포넌트
export function GameProvider({ children }) {
  const router = useRouter();
  // 현재 질문 인덱스
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // 사용자 응답 데이터
  const [answers, setAnswers] = useState({});
  
  // 게임 상태 (idle, playing, complete)
  const [gameState, setGameState] = useState('idle');
  
  // 캐릭터 위치 (중앙, 왼쪽, 오른쪽)
  const [characterPosition, setCharacterPosition] = useState('center');
  
  // 결과 타입
  const [resultType, setResultType] = useState('');
  
  // 게임 시작 함수
  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCharacterPosition('center');
    setResultType('');
    
    // 게임 시작 로그
    console.log('게임 시작: 설문 게임이 시작되었습니다.');
  };
  
  // 질문에 응답 처리 함수
  const answerQuestion = (questionId, answerId, direction) => {
    // 현재 질문 데이터
    const currentQuestion = questions[currentQuestionIndex];
    
    // 응답 저장
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);
    
    // 캐릭터 위치 변경
    setCharacterPosition(direction);
    
    // 응답 로그
    console.log(`질문 ${questionId} 응답: ${answerId} (${direction} 방향)`);
    
    // 일정 시간 후 다음 질문으로 이동 (애니메이션 시간 고려)
    setTimeout(() => {
      // 다음 질문이 있으면 이동, 없으면 게임 완료
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCharacterPosition('center'); // 캐릭터 중앙으로 복귀
      } else {
        completeGame(newAnswers);
      }
    }, 1000); // 1초 후 다음 질문으로 (애니메이션 시간)
  };
  
  // 게임 완료 함수
  const completeGame = (finalAnswers) => {
    // 결과 계산
    const result = calculateResult(finalAnswers);
    setResultType(result);
    setGameState('complete');
    
    // 게임 완료 로그
    console.log(`게임 완료: 결과 유형 - ${result}`);
    
    // 게임 데이터 저장 (localStorage 예시)
    saveGameData(finalAnswers, result);

    router.push('/result');

  };
  
  // 게임 데이터 저장 함수
  const saveGameData = (answers, result) => {
    try {
      // 게임 데이터 객체 생성
      const gameData = {
        timestamp: new Date().toISOString(),
        answers,
        result,
      };
      
      // localStorage에 저장 (추후 서버 API로 대체 가능)
      const savedGames = JSON.parse(localStorage.getItem('surveyGames') || '[]');
      savedGames.push(gameData);
      localStorage.setItem('surveyGames', JSON.stringify(savedGames));
      
      console.log('게임 데이터 저장 완료');
    } catch (error) {
      console.error('게임 데이터 저장 오류:', error);
    }
  };
  
  // 게임 재시작 함수
  const restartGame = () => {
    startGame();
    router.push('/game');
  };

  
  // 컨텍스트에 제공할 값들
  const value = {
    // 상태
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    answers,
    gameState,
    characterPosition,
    resultType,
    
    // 액션 함수
    startGame,
    answerQuestion,
    completeGame,
    restartGame,
    
    // 질문 데이터
    questions,
  };
  
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

// 게임 컨텍스트 훅
export function useGame() {
  const context = useContext(GameContext);
  
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  
  return context;
}
