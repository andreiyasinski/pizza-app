import React from 'react';
import cn from 'classnames';
import styles from './sizeSelector.module.css';
import { useSelector } from 'react-redux';

const text = {
  en: {
    small: "Small",
    medium: "Medium",
    big: "Big"
  },
  ru: {
    small: "Маленькая",
    medium: "Средняя",
    big: "Большая"
  }
}

const SizeSelector = ({ changeSize, size }) => {
  const language = useSelector(state => state.language.value);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.name}>{text[language].small}</span>
        <input className={styles.radio} type="radio" name="size" value="small" defaultChecked={true} onChange={changeSize} />
      </label>
      <label className={styles.label}>
      <span className={styles.name}>{text[language].medium}</span>
        <input className={styles.radio} type="radio" name="size" value="medium" onChange={changeSize} />
      </label>
      <label className={styles.label}>
        <span className={styles.name}>{text[language].big}</span>
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