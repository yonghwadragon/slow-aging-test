// src/components/Result/ShareButtons.js
import React from 'react';
import styles from './ShareButtons.module.css';

const SITE_URL = "https://deer-type-test.vercel.app/";

const ShareButtons = ({ resultType }) => {
  // 이미지 공유(캡처)는 추후 적용, 지금은 링크 중심
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      alert('링크가 복사되었어요! 친구에게 공유해보세요!');
    } catch (err) {
      alert('복사에 실패했어요 😢');
    }
  };

  // 모바일 Web Share API
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "지친 유형 테스트 결과",
        text: "나의 유형을 공유해요! 🦌",
        url: SITE_URL
      });
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않아요.');
    }
  };

  return (
    <div className={styles.shareWrapper}>
      <p className={styles.shareTitle}>📢 내 결과 공유하기</p>
      <div className={styles.buttonGroup}>
        <button onClick={handleCopy} className={styles.copyButton}>🔗 링크 복사</button>
        <button onClick={handleNativeShare} className={styles.shareButton}>📱 바로 공유</button>
        <a
          href="https://www.instagram.com/handong_lab_official/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instaButton}
        >
          📷 인스타 보기
        </a>
        {/* 카카오톡 공유는 추후 추가 */}
      </div>
    </div>
  );
};

export default ShareButtons;