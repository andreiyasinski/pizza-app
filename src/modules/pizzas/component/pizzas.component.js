import React from 'react';
import styles from './pizzas.module.css';
import Pizza from '../../pizza/component/pizza.component';

const Pizzas = ({ pizzas }) => {
  return (
    <ul className={styles.container}>
      {
        pizzas.map((pizza) => {
          return(
            <Pizza pizza={pizza} key={pizza.id} />
          )
        })
      }
    </ul>
  );
};

export default Pizzas;