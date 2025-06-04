// src/components/Result/ShareButtons.js
import React from 'react';
import styles from './ShareButtons.module.css';
import ClickSoundButton from '../common/ClickSoundButton';
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const trackShareClick = async (type) => {
  try {
    const docRef = doc(db, "interactions", "shareClicks");
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      await setDoc(docRef, { [type]: 1 });
    } else {
      await updateDoc(docRef, { [type]: increment(1) });
    }
  } catch (e) {
    console.warn("공유 클릭 수 저장 실패", e);
  }
};

// 현재 도메인 기반으로 링크 생성 (클라이언트 측)
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://slow-aging-test.vercel.app/';

const ShareButtons = ({ resultType, score }) => {
  const shareText = `✨ 내 슬로우에이징 레벨은 ${score}점! 유형은 "${resultType}"이래!\n너도 궁금하지? 지금 바로 해봐 👉 ${SITE_URL}`;

  // 클립보드에 복사
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('링크와 결과가 복사되었어요! 친구에게 공유해보세요!');
      await trackShareClick("copyLink");
    } catch (err) {
      alert('복사에 실패했어요 😢');
    }
  };

  // 모바일 Web Share API
  const handleNativeShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: "지친 유형 테스트 결과",
        text: shareText
      });
     await trackShareClick("webShare");
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않아요.');
    }
  };

  return (
    <div className={styles.shareWrapper}>
      <p className={styles.shareTitle}>📢 내 결과 공유하기</p>
      <div className={styles.buttonGroup}>
        <ClickSoundButton onClick={handleCopy} className={styles.copyButton}>🔗 내 결과 복사</ClickSoundButton>
        <ClickSoundButton onClick={handleNativeShare} className={styles.shareButton}>📱 바로 공유</ClickSoundButton>
         <a
           href="https://www.instagram.com/handong_lab_official/"
           target="_blank"
           rel="noopener noreferrer"
           className={styles.instaButton}
           onClick={() => {
             const sound = new Audio('/audio/click.mp3');
             sound.play().catch(() => {});
             trackShareClick("instagram");
           }}
         >
           📷 인스타 보기
         </a>
        {/* 카카오톡 공유는 추후 적용 */}
      </div>
    </div>
  );
};

export default ShareButtons;