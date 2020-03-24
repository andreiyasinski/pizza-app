import React, { useState } from 'react';
import styles from './popUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopUp } from '../../actions';
import Ingredient from './ingredient/ingredient.component';
import Button from '../../ui-kit/button/button.component';
import SizeSelector from './sizeSelector/sizeSelector.component';
import DoughSelector from './doughSelector/doughSelector.component';
import Extra from './extra/extra.component';

const PopUp = () => {
  const [removed, setRemoved] = useState([]);
  const [size, setSize] = useState("small");
  const [duoghType, setDuoghType] = useState("type1");
  const [extra, setExtra] = useState([]);
  const pizza = useSelector(state => state.popUp.data);
  
  const dispatch = useDispatch();
  
  const { price, diameter, weight } = pizza.size[size];
  const selectedDoughType = pizza.dough[duoghType];
  const extraData = pizza.extra;

  const totalPrice = extra.reduce((sum, current) => +sum + +current.price, +price).toFixed(2);
  
  const closePopUp = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(togglePopUp(false, {}));
    }
  }

  const handleRemoved = (name, isSelected) => {
    const temp = isSelected ? [...removed, name] : removed.filter(v => v !== name);
    setRemoved(temp);
  }

  const changeSize = (e) => {
    let temp = e.target.value === "small" ? "type1" : duoghType;
    setSize(e.target.value);
    setDuoghType(temp);
  }

  const changeDoughType = (e) => {
    setDuoghType(e.target.value);
  }

  const changeExtra = (isSelected, item) => {
    const temp = isSelected ? [...extra, item] : extra.filter(v => v.id !== item.id);
    setExtra(temp);
  }

  return (
    <div className={styles.wrapper} onClick={closePopUp}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageBlock}>
            <img
              src={pizza.image}
              className={styles.image}
              alt={pizza.name}
            />
          </div>
          <div className={styles.description}>
            <h2 className={styles.title}>{pizza.name}</h2>
            <p className={styles.subtitle}>
              {`${diameter} см, ${selectedDoughType.toLowerCase()} тесто, ${weight} г`}
            </p>
            <ul className={styles.list}>
              {
                pizza.ingredients.map( (item, i) => (
                  <Ingredient
                    onChange={handleRemoved}
                    key={item.id}
                    item={item}
                    i={i}
                    length={pizza.ingredients.length}
                  />
                ))
              }
            </ul>
            <SizeSelector
              changeSize={changeSize}
              size={size}
            />
            <DoughSelector
              changeDoughType={changeDoughType}
              duoghType={duoghType}
              size={size}
            />
            <h3 className={styles.addExtraText}>Добавить в пиццу</h3>
            <ul className={styles.extraList}>
              { extraData.map( item => <Extra item={item} key={item.id} onChange={changeExtra} /> ) }
            </ul>
            <Button theme="secondary" className={styles.button}>
              {`Добавить в корзину за ${totalPrice} руб.`}
            </Button>
          </div>
        </div>
        <svg onClick={() => dispatch(togglePopUp(false, {}))} className={styles.closeIcon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z" fill="white"></path>
        </svg>
      </div>
    </div>
  );
};

export default PopUp;