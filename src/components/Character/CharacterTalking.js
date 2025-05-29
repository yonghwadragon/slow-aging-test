// src/components/Character/CharacterTalking.js
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CharacterTalking({ isTalking }) {
  const [frame, setFrame] = useState(0); // 0: 입 열림, 1: 입 닫힘

  useEffect(() => {
    if (!isTalking) {
      setFrame(0);
      return;
    }

    const interval = setInterval(() => {
      setFrame(prev => (prev === 0 ? 1 : 0));
    }, 200);

    return () => clearInterval(interval);
  }, [isTalking]);

  const imageSrc = `/images/${frame === 0 ? "사슴이.png" : "사슴이2.png"}`;

  return (
    <Image
      src={imageSrc}
      alt="말하는 사슴이"
      width={160}
      height={160}
      priority
    />
  );
}