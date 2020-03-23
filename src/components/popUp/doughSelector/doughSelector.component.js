import React from 'react';
import cn from 'classnames';
import styles from './doughSelector.module.css';

const DoughSelector = ({ changeDoughType, duoghType, size }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.name}>Традиционное</span>
        <input
          onChange={changeDoughType}
          className={styles.radio}
          type="radio"
          name="dough"
          value="type1"
        />
      </label>
      <label className={styles.label}>
        <span className={cn(styles.name, {
          [styles.disabled]:  size === "small"
        })}>Тонкое</span>
        <input
          onChange={changeDoughType}
          className={styles.radio}
          type="radio"
          name="dough"
          value="type2"
          checked={ size !== "small" && duoghType === "type2" }
          disabled={ size === "small" }
        />
      </label>
      <div className={cn(styles.wrapper, {
        [styles.type1]: duoghType === "type1",
        [styles.type2]: duoghType === "type2" &&  size !== "small",
      })}></div>
    </div>
  );
};

export default DoughSelector;