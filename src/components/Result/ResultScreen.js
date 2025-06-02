// src/components/Result/ResultScreen.js
import React from 'react';
import { useRouter } from 'next/router';
import { getScoreGrade } from '@/data/questions';
import { useEffect, useRef } from 'react';
import ShareButtons from './ShareButtons';
import ReelsSlider from './ReelsSlider';
import styles from './ResultScreen.module.css';
import ResultImageCard from './ResultImageCard';
import ClickSoundButton from '../common/ClickSoundButton';
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useGame } from '@/context/GameContext';

const ResultScreen = () => {
  const router = useRouter();
  const score = parseInt(router.query.score, 10);
  const { answers } = useGame();
  const resultAudioRef = useRef(null);
  const alreadySaved = useRef(false);
  const grade = getScoreGrade(score);
  const { type, message, goodPoints, improvePoints, recommendedFoods, supplementaryNote } = grade;

  useEffect(() => {
    const visitedKey = 'hasVisitedResultPage';

    if (!sessionStorage.getItem(visitedKey)) {
      sessionStorage.setItem(visitedKey, 'true');
      const updateVisitCount = async () => {
        try {
          const docRef = doc(db, "metrics", "resultViews");
          const snapshot = await getDoc(docRef);
          if (!snapshot.exists()) {
            await setDoc(docRef, { count: 1 });
          } else {
            await updateDoc(docRef, { count: increment(1) });
          }
        } catch (e) {
          console.warn("방문자 수 업데이트 실패", e);
        }
      };
      updateVisitCount();
    }

    const saveResult = async () => {
      if (alreadySaved.current || !Array.isArray(answers) || answers.length !== 7) return;
      alreadySaved.current = true;
      try {
        await addDoc(collection(db, "responses"), {
          answers,
          score: grade?.score ?? 0,
          resultType: grade?.type ?? "unknown",
          timestamp: Timestamp.now()
        });
      } catch (e) {
        console.warn("결과 저장 실패", e);
      }
    };
    saveResult();

    if (resultAudioRef.current) {
      resultAudioRef.current.play().catch((e) =>
        console.warn("결과 사운드 재생 실패", e)
      );
    }
  }, [grade, answers]);

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
      <audio ref={resultAudioRef} src="/audio/result-fanfare.mp3" preload="auto" />
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h2 className={styles.resultTitleLine}>
          🧬 나의 슬로우에이징 레벨은 {grade.score}점!
        </h2>
        <h3 style={{ fontSize: '1.6rem', margin: '0.2em 0' }}>{type}</h3>
        <ResultImageCard resultType={grade.imageFileName} />
        <p className={styles.summaryText}>{message}</p>
        <div className={styles.analysisBox}>
        <h4>👍 잘하고 있는 점</h4>
        <ul className={styles.resultList}>
          {goodPoints.map((point, idx) => (
            <li key={idx}>
              <span>✅</span>
              <span>{point.replace(/^✅\s*/, '')}</span>
            </li>
          ))}
        </ul>

        <h4>⚡ 개선할 점</h4>
        <ul className={styles.resultList}>
          {improvePoints.map((point, idx) => (
            <li key={idx}>
              <span>✨</span>
              <span>{point.replace(/^✨\s*/, '')}</span>
            </li>
          ))}
        </ul>

        <h4>🥗 추천 음식</h4>
        <ul className={styles.resultList}>
          {recommendedFoods.map((food, idx) => (
            <li key={idx}>
              <span>{food.name}</span>
              <span>- {food.reason}</span>
            </li>
          ))}
        </ul>
        </div>

        <div className={styles.supplementaryBox}>
          <p>{supplementaryNote}</p>
        </div>
    </div>

      <ShareButtons resultType={type} score={grade.score} />
      <ReelsSlider />

      <ClickSoundButton className={styles.restartButton} onClick={handleRestart}>
        🔁 처음부터 다시 하기
      </ClickSoundButton>
     <div className={styles.credits}>
       🔊 Sound Effects:<br />
       &quot;Blop&quot; by <strong>Mark DiAngelo</strong> – <a href="http://soundbible.com/2067-Blop.html" target="_blank" rel="noopener noreferrer">CC BY 3.0</a><br />
       &quot;Jump Start&quot; by <strong>plasterbrain</strong> – <a href="https://freesound.org/people/plasterbrain/sounds/397353/" target="_blank" rel="noopener noreferrer">CC0</a><br />
       Provided via <a href="https://www.mewpot.com" target="_blank" rel="noopener noreferrer">Mewpot</a>
     </div>
    </div>
  );
};

export default ResultScreen;