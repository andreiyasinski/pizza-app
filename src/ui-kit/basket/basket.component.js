import React from 'react';
import styles from './basket.module.css';

const Basket = () => {
  return (
    <button className={styles.container} href="/">Корзина | 0</button>
  );
};

export default Basket;