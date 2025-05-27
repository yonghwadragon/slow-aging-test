// pages/result.js
import dynamic from "next/dynamic";

const ResultScreen = dynamic(
  () => import("../src/components/Result/ResultScreen"),
  { ssr: false }
);

export default function ResultPage() {
  return <ResultScreen />;
}
