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
      <title>저속노화 레벨 테스트 | 슬로우에이징 지수 확인하기</title>
      
      <meta 
        name="description" 
        content="간단한 슬로우에이징 테스트로 내 몸의 노화 속도를 점수로 진단하세요. 나에게 맞는 건강 루틴도 함께 알아보세요." 
      />
      
      <meta 
        name="keywords" 
        content="슬로우에이징, 저속노화, 노화 속도 진단, 건강 루틴 추천, 건강 테스트, 몸나이 측정, 노화 방지 방법" 
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="저속노화 레벨 테스트 | 슬로우에이징 지수 확인하기" />
      <meta 
        property="og:description" 
        content="지금 내 몸의 슬로우에이징 점수는 몇 점일까요? 쉽고 재미있는 테스트로 노화 속도를 체크해보세요!" 
      />
      <meta 
        property="og:image" 
        content="https://deer-type-test.vercel.app/images/사슴이.png" 
      />
      <meta 
        property="og:url" 
        content="https://deer-type-test.vercel.app" 
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="저속노화 레벨 테스트 | 슬로우에이징 지수 확인하기" />
      <meta 
        name="twitter:description" 
        content="슬로우에이징 테스트로 나의 노화 속도를 점수로 진단하고, 건강 루틴을 점검하세요." 
      />
      <meta 
        name="twitter:image" 
        content="https://deer-type-test.vercel.app/images/사슴이.png" 
      />

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon_antlers_pair.ico" />
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