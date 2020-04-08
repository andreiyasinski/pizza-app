import React from 'react';
import styles from './count.module.css';

const Count = ({ onClick, symbol }) => {
  return (
    <button
      className={styles.count}
      onClick={onClick}
    >
      {symbol}
    </button>
  );
};

export default Count;