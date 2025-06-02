// pages/result.js
import Head from "next/head";
import dynamic from "next/dynamic";

const ResultScreen = dynamic(
  () => import("../src/components/Result/ResultScreen"),
  { ssr: false }
);

export default function ResultPage() {
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
  </>
);
}