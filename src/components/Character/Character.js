// src/components/Character/Character.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useGame } from '@/context/GameContext';
import styles from './Character.module.css';

const Character = () => {
  const { characterPosition } = useGame();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('');
    const timer = setTimeout(() => {
      switch (characterPosition) {
        case 'left':
          setAnimationClass(styles.moveLeft);
          break;
        case 'right':
          setAnimationClass(styles.moveRight);
          break;
        case 'center':
        default:
          setAnimationClass(styles.moveCenter);
          break;
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [characterPosition]);

  return (
    <div className={styles.characterContainer}>
      <div className={`${styles.character} ${animationClass}`}>
        <Image
          src="/images/사슴이.png"
          alt="귀여운 사슴 캐릭터"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className={styles.positionIndicator}>
        <div className={`${styles.position} ${characterPosition === 'left' ? styles.active : ''}`}></div>
        <div className={`${styles.position} ${characterPosition === 'center' ? styles.active : ''}`}></div>
        <div className={`${styles.position} ${characterPosition === 'right' ? styles.active : ''}`}></div>
      </div>
    </div>
  );
};

export default Character;