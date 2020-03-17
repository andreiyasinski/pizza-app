import React from 'react';
import styles from './pizza.module.css';
import Button from '../../../ui-kit/button/button.component';

const Pizza = ({ pizza }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={pizza.image}
          alt="pizza"
        />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {pizza.name}
          </h2>
          <div className={styles.controls}>
            <Button theme="secondary">Купить</Button>
            <p className={styles.price}>{`${pizza.price.small} руб.`}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Pizza;