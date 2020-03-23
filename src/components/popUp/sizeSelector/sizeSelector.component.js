import React from 'react';
import cn from 'classnames';
import styles from './sizeSelector.module.css';

const SizeSelector = ({ changeSize, size }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.name}>Маленькая</span>
        <input className={styles.radio} type="radio" name="size" value="small" defaultChecked={true} onChange={changeSize} />
      </label>
      <label className={styles.label}>
      <span className={styles.name}>Средняя</span>
        <input className={styles.radio} type="radio" name="size" value="medium" onChange={changeSize} />
      </label>
      <label className={styles.label}>
        <span className={styles.name}>Большая</span>
        <input className={styles.radio} type="radio" name="size" value="big" onChange={changeSize} />
      </label>
      <div className={cn(styles.wrapper, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big"
      })}></div>
    </div>
  );
};

export default SizeSelector;