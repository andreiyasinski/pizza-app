import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './pizza.module.css';
import Button from '../../ui-kit/button/button.component';
import { togglePopUp } from '../../actions';

const Pizza = ({ pizza, ingredients }) => {
  const [pizzaIngredientsData, setPizzaIngredientsData] = useState([]);
  const [pizzaIngredients, setPizzaIngredients] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    setPizzaIngredientsData(getIngredientsData(pizza.ingredients));
    setPizzaIngredients(getIngredientsNames(pizzaIngredientsData));
    // eslint-disable-next-line
  }, [pizza, ingredients]);

  useEffect(() => {
    setPizzaIngredients(getIngredientsNames(pizzaIngredientsData));
    // eslint-disable-next-line
  }, [pizzaIngredientsData]);
  
  const getIngredientsData = (pizzaIngredients) => {
    return pizzaIngredients.map((ingredient) => (   
      {...ingredients.find(item => item.id === ingredient.id), ...ingredient}
    ))
  }

  const getIngredientsNames = (ingredients) => {
    return ingredients.map((ingredient) => (
      ingredient.name
    )).join(', ');
  }

  const openPopUp = () => {
    dispatch(togglePopUp(true));
  }

  return (
    <li className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={pizza.image}
          alt={pizza.name}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {pizza.name}
          </h2>

          <div className={styles.bottom}>
            <p className={styles.ingredients}>{pizzaIngredients}</p>
            <div className={styles.controls}>
              <Button
                theme="secondary"
                onClick={openPopUp}
              >
                Купить
              </Button>
              <p className={styles.price}>{`${pizza.price.small} руб.`}</p>
            </div>
          </div>

        </div>
      </div>
    </li>
  );
};

export default Pizza;