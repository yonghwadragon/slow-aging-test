// src/components/Result/ReelsSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './ReelsSlider.module.css';

const reels = [
  {
    url: 'https://www.instagram.com/reel/DJWWQNuvikK/',
    thumbnail: '/images/reels/reel1.jpg',
    title: '그린의 진심환 체험 경험담'
  },
  {
    url: 'https://www.instagram.com/reel/DJjNMpMPCo3/',
    thumbnail: '/images/reels/reel2.jpg',
    title: '블루의 진심환 체험 경험담'
  },
  {
    url: 'https://www.instagram.com/reel/DJq8LOdPsxf/',
    thumbnail: '/images/reels/reel3.jpg',
    title: '옐로의 ASMR'
  }
];

const ReelsSlider = () => (
  <div className={styles.sliderWrapper}>
    <h3 className={styles.title}>🎬 슬로우에이징, 지금 핫한 영상만 모았어요!</h3>
    <Swiper
      style={{ width: '100%' }}
      spaceBetween={18}
      slidesPerView={1}
      loop={false}
      centeredSlides={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
      }}
    >
    <p className={styles.swiperHint}>좌우로 넘기며 더 많은 영상을 확인해보세요 →</p>
      {reels.map((reel, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.reelCard}>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                const sound = new Audio('/audio/click.mp3');
                sound.play().catch(() => {});
              }}
            >
              <img src={reel.thumbnail} alt={reel.title} className={styles.thumbnail} />
              <div className={styles.reelTitle}>{reel.title}</div>
              <div className={styles.playIcon}>▶</div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ReelsSlider;