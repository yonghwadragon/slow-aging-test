// pages/result.js
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ResultScreen = dynamic(
  () => import("../src/components/Result/ResultScreen"),
  { ssr: false }
);

export default function ResultPage() {
  useEffect(() => {
    const adEl = document.querySelector(".adsbygoogle");
    if (adEl && !adEl.getAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("adsbygoogle push 실패", e);
      }
    }
  }, []);

  return (
    <>
    <Head>
      <title>결과 확인 | 나의 슬로우에이징 레벨은?</title>
      <meta name="description" content="테스트를 완료한 당신의 저속노화 점수를 확인해보세요. 유형별 분석과 건강 루틴 추천까지 제공합니다." />
      <meta property="og:title" content="결과 확인 | 슬로우에이징 레벨" />
      <meta property="og:description" content="내 몸의 슬로우에이징 점수는 몇 점? 결과 페이지에서 확인해보세요!" />
     <meta property="og:image" content="https://slow-aging-test.vercel.app/images/questions/q5.png" />
      <meta property="og:url" content="https://slow-aging-test.vercel.app/result" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="슬로우에이징 테스트 결과" />
      <meta name="twitter:description" content="당신의 저속노화 점수는? 유형별 결과를 친구들과 공유해보세요!" />
      <meta name="twitter:image" content="https://slow-aging-test.vercel.app/images/questions/q5.png" />
    </Head>
    <ResultScreen />
         <div style={{ marginTop: '40px', textAlign: 'center' }}>
       <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100px', backgroundColor: '#f0f0f0' }}
            data-ad-client="ca-pub-9720816639692845"
            data-ad-slot="5126980773"
            data-ad-format="auto"
            data-full-width-responsive="true">
       </ins>
       
     </div>
        <footer
          style={{
            padding: '16px',
            fontSize: '0.78rem',
            lineHeight: '1.6',
            color: '#888',
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
            wordBreak: 'keep-all',
            whiteSpace: 'normal',
          }}
        >
          슬로우에이징 테스트는 간단한 질문을 통해 당신의 건강 습관과 노화 속도를 분석하고, 
          맞춤형 건강 관리 팁과 추천 루틴을 제공하는 콘텐츠입니다.<br />
          또한, 건강에 관심 있는 사용자를 위한 다양한 정보와 관련 광고가 포함될 수 있습니다.
        </footer>
  </>
);
}