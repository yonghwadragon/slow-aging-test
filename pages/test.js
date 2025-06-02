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
   </>
);
}