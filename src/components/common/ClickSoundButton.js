// src/components/common/ClickSoundButton.js
import React from 'react';

const clickSound = typeof Audio !== 'undefined' ? new Audio('/audio/click.mp3') : null;

const ClickSoundButton = ({ onClick, children, disabled, ...props }) => {
  const handleClick = (e) => {
    if (clickSound) {
      clickSound.currentTime = 0; // 매번 처음부터 재생
      clickSound.play().catch(() => {});
    }
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ClickSoundButton;