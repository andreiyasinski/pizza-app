import React from 'react';
import styles from './pizzas.module.css';
import Pizza from '../pizza/pizza.component';

const Pizzas = ({ pizzas }) => {
  return (
    <ul className={styles.container}>
      {
        pizzas.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.id} />
        ))
      }
    </ul>
  );
};

export default Pizzas;