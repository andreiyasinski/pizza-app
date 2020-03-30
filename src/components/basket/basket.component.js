import React from 'react';
import styles from './basket.module.css';
import { useSelector } from 'react-redux';
import BasketItem from './basketItem/basketItem.component';
import Button from '../../ui-kit/button/button.component';
import { Link } from 'react-router-dom';
import { basketText as text } from '../../text/text';

const Basket = () => {
  const basket = useSelector(state => state.basket);
  const language = useSelector(state => state.language.value);
  const totalOrderPrice = basket.reduce((sum, current) => (
    sum + +current.pizza.price * current.amount
  ), 0).toFixed(2);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text[language].basket}</h1>
      {
        basket.length ?
        <ul className={styles.list}>
          {
            basket.map(item => (
              <BasketItem key={item.id} item={item} />
            ))
          }
        </ul>
        :
        <p>{text[language].add}</p>
      }
      <p className={styles.total}> 
        {`${text[language].total}: ${totalOrderPrice} ${text[language].byn}`}
      </p>
      <div className={styles.bottom}>
        <Link to="/" className={styles.link} tabIndex="-1">
          <Button theme="secondary" className={styles.back}>{text[language].back}</Button>
        </Link>
        <Button
          theme="secondary"
          className={styles.button}
          isDisabled={!basket.length}
        >
          {text[language].order}
        </Button>
      </div>
    </div>
  );
};

export default Basket;