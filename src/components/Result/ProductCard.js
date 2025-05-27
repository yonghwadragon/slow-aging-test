// src/components/Result/ProductCard.js
import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, resultType }) => {
  const imagePath = `/images/results/${resultType}.png`; // 제품 이미지가 있다면 표시

  if (!product) return null;

  return (
    <div className={styles.card}>
      <Image
        src={imagePath}
        alt="제품 이미지"
        width={200}
        height={200}
        className={styles.image}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>🦌 {product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <ul className={styles.benefits}>
          {product.benefits.map((item, idx) => (
            <li key={idx}>✔ {item}</li>
          ))}
        </ul>
        {/* 구매 버튼은 나중에 추가 가능 */}
      </div>
    </div>
  );
};

export default ProductCard;