import React from 'react';
import styles from './basket.module.css';
import { useSelector } from 'react-redux';
import BasketItem from './basketItem/basketItem.component';
import Button from '../../ui-kit/button/button.component';
import { Link } from 'react-router-dom';


const Basket = () => {
  const basket = useSelector(state => state.basket);
  const totalOrderPrice = basket.reduce((sum, current) => (
    sum + +current.pizza.price * current.number
  ), 0).toFixed(2);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
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
        <p>Добавьте что-нибудь из корзину</p>
      }
      <p className={styles.total}>{`Сумма заказа: ${totalOrderPrice} руб.`}</p>
      <div className={styles.bottom}>
        <Link to="/" className={styles.link}>
          <Button theme="secondary" className={styles.back}>Вернуться в меню</Button>
        </Link>
        <Button theme="secondary" className={styles.button}>Заказать</Button>
      </div>
    </div>
  );
};

export default Basket;