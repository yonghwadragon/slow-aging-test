import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/HomePage.module.css";
import CharacterTalking from "@/components/Character/CharacterTalking";

export default function Home() {
  const fullText = "나랑 테스트 시작하자!\n테스트 시작 버튼을 눌러!";
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [ready, setReady] = useState(false);
  const introAudio = useRef(null);
  const clickAudio = useRef(null);

  // 로딩 후 콘텐츠 노출
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 버튼 클릭 시 실행
  const handleStartClick = () => {
    if (hasPlayed) return;
    setHasPlayed(true);

    clickAudio.current?.play?.().catch((e) => console.warn("click 재생 실패", e));
    introAudio.current?.play?.().catch((e) => console.warn("intro 재생 실패", e));

    let idx = 0;
    const chars = [...fullText]; // 한글 포함 문자열 분리
    setDisplayed("");

    const typeInterval = setInterval(() => {
      if (idx >= chars.length) {
        clearInterval(typeInterval);
        setReady(true);
        return;
      }

      const char = chars[idx];
      setDisplayed((prev) => {
        if (char === "\n") return prev + "\n";
        if (char === " ") return prev + "\u00a0"; // 공백 깨짐 방지
        return prev + char;
      });

      idx++;
    }, 120);
  };

  return (
    <>
      <Head>
        <title>나의 노화 속도는?</title>
        <meta name="description" content="게임형 설문을 통해 건강 제품을 추천합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 오디오 */}
      <audio ref={introAudio} src="/audio/사슴이_intro.mp3" preload="auto" playsInline />
      <audio ref={clickAudio} src="/audio/click.mp3" preload="auto" playsInline />

      <main className={styles.container}>
        {loading && <p className={styles.loadingText}>🦌 준비 중...</p>}

        {showContent && (
          <>
            {!hasPlayed && (
              <button
                onClick={handleStartClick}
                style={{
                  position: 'fixed', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff', color: '#00b894',
                  border: 'none', borderRadius: '50%',
                  width: '80px', height: '80px', fontSize: '2rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  cursor: 'pointer', zIndex: 999, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                ▶
              </button>
            )}

            <div className={styles.charBubbleWrapper}>
              <CharacterTalking isTalking={!ready && hasPlayed} />
              <div className={styles.bubble}>
                {displayed.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
                <div className={styles.tail} />
              </div>
            </div>

            <h1 className={styles.title}>🧬 나의 슬로우에이징 지수는 몇 점?</h1>
            <p className={styles.subtitle}>
              몇 점일까...? 긴장돼!<br />테스트 시작해보자!
            </p>

            {ready ? (
              <Link href="/test">
                <button
                  className={styles.startButton}
                  onMouseDown={() => {
                    clickAudio.current?.play?.().catch(e => console.warn("click 재생 실패", e));
                  }}
                >
                  🚀 테스트 시작 !!
                </button>
              </Link>
            ) : (
              <button className={styles.startButton} onClick={handleStartClick} disabled>
                🚀 테스트 시작 !!
              </button>
            )}
          </>
        )}
      </main>
    </>
  );
}