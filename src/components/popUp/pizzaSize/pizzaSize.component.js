import React from 'react';
import cn from 'classnames';
import styles from './pizzaSize.module.css';

const PizzaSize = ({ handleRadio, size }) => {
  return (
    <div className={styles.container}>
      <label className={styles.size}>
        <span className={styles.name}>Маленькая</span>
        <input className={styles.radio} type="radio" name="size" value="small" defaultChecked={true} onChange={handleRadio} />
      </label>
      <label className={styles.size}>
      <span className={styles.name}>Средняя</span>
        <input className={styles.radio} type="radio" name="size" value="medium" onChange={handleRadio} />
      </label>
      <label className={styles.size}>
        <span className={styles.name}>Большая</span>
        <input className={styles.radio} type="radio" name="size" value="big" onChange={handleRadio} />
      </label>
      <div className={cn(styles.sizeWrapper, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big"
      })}></div>
    </div>
  );
};

export default PizzaSize;