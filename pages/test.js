// pages/test.js
import Head from "next/head";
import dynamic from "next/dynamic";

const GameScreen = dynamic(() => import("@/components/Game/GameScreen"), {
  ssr: false,
});

export default function TestPage() {
  return (
    <>
     <Head>
       <title>테스트 중 | 저속노화 점수 측정</title>
       <meta name="description" content="지금 나의 건강 루틴과 생활 습관을 통해 저속노화 점수를 측정해보세요!" />
       <meta property="og:title" content="저속노화 테스트 진행 중" />
       <meta property="og:description" content="슬로우에이징 테스트 질문에 답해보세요. 건강 루틴을 진단합니다!" />
       <meta property="og:image" content="https://slow-aging-test.vercel.app/images/questions/q5.png" />
       <meta property="og:url" content="https://slow-aging-test.vercel.app/test" />
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:title" content="슬로우에이징 테스트 중" />
       <meta name="twitter:description" content="건강 루틴과 생활 습관을 확인하며 점수를 계산 중입니다." />
       <meta name="twitter:image" content="https://slow-aging-test.vercel.app/images/questions/q5.png" />
     </Head>
     <GameScreen />
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