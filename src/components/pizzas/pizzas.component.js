import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './pizzas.module.css';
import Pizza from '../pizza/pizza.component';
import Popup from '../popUp/popUp.component';
import Filter from '../filter/filter.component';

const Pizzas = () => {
  const [selectedTypes, setSelectedTypes] = useState([])
  const pizzas = useSelector((state) => state.pizzas.items);
  const ingredients = useSelector((state) => state.ingredients.items);
  const types = useSelector((state) => state.types.items);
  const isPopUpOpen = useSelector((state) => state.popUp.isPopUpOpen);
  
  const handleFilter = (e, id) => {
    const temp = selectedTypes;
    e.target.checked ? temp.push(id) : temp.splice(temp.indexOf(id), 1);
    setSelectedTypes(temp);
    console.log(selectedTypes)
  }

  return (
    <>
      <Filter onClick={handleFilter} pizzaTypes={types} />
      <ul className={styles.container}>
        { pizzas.map((pizza) => (
            <Pizza
              pizza={pizza}
              key={pizza.id}
              ingredients={ingredients}
            />
          ))
        }
      </ul>
      { isPopUpOpen &&  <Popup /> }
    </>
  );
};

export default Pizzas;