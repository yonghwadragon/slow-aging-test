// pages/test.js
import dynamic from "next/dynamic";

const GameScreen = dynamic(() => import("@/components/Game/GameScreen"), {
  ssr: false,
});

export default function TestPage() {
  return <GameScreen />;
}