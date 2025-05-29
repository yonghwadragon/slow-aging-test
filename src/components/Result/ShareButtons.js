// src/components/Result/ShareButtons.js
import React from 'react';
import styles from './ShareButtons.module.css';

// 현재 도메인 기반으로 링크 생성 (클라이언트 측)
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://slow-aging-test.vercel.app/';

const ShareButtons = ({ resultType, score }) => {
  const shareText = `🧪 나의 노화 점수는 ${score}점, 유형은 "${resultType}"이래요!\n당신도 지금 테스트해보세요 👉 ${SITE_URL}`;

  // 클립보드에 복사
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('링크와 결과가 복사되었어요! 친구에게 공유해보세요!');
    } catch (err) {
      alert('복사에 실패했어요 😢');
    }
  };

  // 모바일 Web Share API
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "지친 유형 테스트 결과",
        text: shareText,
        url: SITE_URL,
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
        {/* 카카오톡 공유는 추후 적용 */}
      </div>
    </div>
  );
};

export default ShareButtons;