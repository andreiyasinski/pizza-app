import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './pizza.module.css';
import Button from '../../ui-kit/button/button.component';
import { changeSelectedPizzaState } from '../../actions';

const Pizza = ({ pizza, ingredients }) => {
  const [pizzaIngredientsData, setPizzaIngredientsData] = useState([]);
  const [pizzaExtraData, setPizzaExtraData] = useState([]);
  const dispatch = useDispatch();

  const getIngredientsData = useCallback((pizzaIngredients) => {
    return pizzaIngredients.map((ingredient) => (   
      {...ingredients.find(item => item.id === ingredient.id), ...ingredient}
    ))
  }, [ingredients]);

  const getExtraData = useCallback((pizzaExtra) => {
    return pizzaExtra.map((ingredient) => (   
      {...ingredients.find(item => item.id === ingredient)}
    ))
  }, [ingredients]);
  
  useEffect(() => {
    setPizzaIngredientsData(getIngredientsData(pizza.ingredients));
    setPizzaExtraData(getExtraData(pizza.extra));
  }, [pizza, ingredients, getIngredientsData, getExtraData]);
  
  const openPopUp = () => {
    dispatch(
      changeSelectedPizzaState(true, {
        ...pizza,
        ingredients: pizzaIngredientsData,
        extra: pizzaExtraData
      })
    );
  }

  return (
    <li className={styles.wrapper}>
      <div className={styles.container}>
        <img
          onClick={openPopUp}
          className={styles.image}
          src={pizza.image}
          alt={pizza.name}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {pizza.name}
          </h2>
          <div className={styles.bottom}>
            <div className={styles.ingredients}>
              <p className={styles.text}>
                {
                  pizzaIngredientsData.map((ingredient) => (
                    ingredient.name
                  )).join(', ')
                }
              </p>
            </div>
            <div className={styles.controls}>
              <Button
                theme="primary"
                onClick={openPopUp}
              >
                Купить
              </Button>
              <p className={styles.price}>{`${pizza.size.small.price} руб.`}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Pizza;