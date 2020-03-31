import React from 'react';
import styles from './bunner.module.css';

const Bunner = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>#StayAtHome</h2>
      <h3 className={styles.subtitle}>We will deliver!</h3>
    </div>
  );
};

export default Bunner;