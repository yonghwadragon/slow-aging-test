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
    <h3 className={styles.title}>🔥 인기 릴스 영상</h3>
    <Swiper
      spaceBetween={18}
      slidesPerView={1}
      loop={false}
      centeredSlides={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
      }}
    >
      {reels.map((reel, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.reelCard}>
            <a href={reel.url} target="_blank" rel="noopener noreferrer">
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