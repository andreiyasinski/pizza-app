import React from 'react';
import styles from './pizzas.module.css';
import Pizza from '../pizza/pizza.component';
import Popup from '../popUp/popUp.component';

const Pizzas = ({ pizzas, ingredients, isPopUpOpen }) => {
  return (
    <>
      <ul className={styles.container}>
        {
          pizzas.map((pizza) => (
            <Pizza
              pizza={pizza}
              key={pizza.id}
              ingredients={ingredients}
            />
          ))
        }
      </ul>
      { isPopUpOpen &&  <Popup />}
    </>
  );
};

export default Pizzas;