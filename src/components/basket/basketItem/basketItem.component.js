import React from 'react';
import styles from './basketItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteFromBasket, changeNumber } from '../../../actions';

const BasketItem = ({ item }) => {
  const { name, image, size, dough, removed, extra, price } = item.pizza;
  const dispatch = useDispatch();

  const totalPizzaPrice = (+price * item.number).toFixed(2)

  const deleteItem = (id) => {
    dispatch(deleteFromBasket(id))
  }

  const increaseNumber = (id) => {
    const newNumber = item.number + 1;
    dispatch(changeNumber(id, newNumber))
  }

  const decreaseNumber = (id) => {
    const newNumber = item.number - 1;
    item.number > 1 ? dispatch(changeNumber(id, newNumber)) : dispatch(deleteFromBasket(id));
  }

  return (
    <li className={styles.container}>
      <div className={styles.right}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.description}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.details}>
            {`${size.name} ${size.diameter} см, ${dough.toLowerCase()} тесто`}
          </p>
          {
            removed.length !== 0 && <p className={styles.details}>{`Убрано: ${removed.join(', ')}`}</p>
          }
          {
            extra.length !== 0 && <p className={styles.details}>{`Добавлено: ${extra.map(v => v.name).join(', ')}`}</p>
          }
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.amount}>
          <span
            className={styles.count}
            onClick={() => decreaseNumber(item.id)}
          >
            -
          </span>
          {item.number}
          <span
            className={styles.count}
            onClick={() => increaseNumber(item.id)}
          >
            +
          </span>
        </div>
        <p className={styles.price}>
          {`${totalPizzaPrice} руб.`}
        </p>
        <div className={styles.delete} onClick={() => deleteItem(item.id)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.75 6H5.25L5.90993 15.8047C5.97132 16.8184 6.50848 17.5 7.39863 17.5H12.6014C13.4915 17.5 14.0133 16.8184 14.0901 15.8047L14.75 6Z" fill="#373535"></path>
          <path d="M13.8498 3.00681L6.19643 3.00688C4.98382 2.88702 5.02127 4.36489 5 5L14.9917 4.99999C15.0165 4.38088 15.0624 3.12667 13.8498 3.00681Z" fill="#373535"></path>
        </svg>
        </div>
      </div>
    </li>
  );
};

export default BasketItem;