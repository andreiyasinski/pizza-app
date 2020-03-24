import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './pizzas.module.css';
import Pizza from '../pizza/pizza.component';
import Popup from '../popUp/popUp.component';
import Filter from '../filter/filter.component';

const Pizzas = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pizzasList, setPizzasList] = useState([]);


  const pizzas = useSelector((state) => state.pizzas.items);
  const ingredients = useSelector((state) => state.ingredients.items);
  const types = useSelector((state) => state.types.items);
  const isPopUpOpen = useSelector((state) => state.popUp.isPopUpOpen);

  useEffect(() => {
    setPizzasList(pizzas)
  }, [pizzas]);

  const getFilteredPizzas = () => {
    console.log(selectedTypes)
    if (selectedTypes.length === 0) {
      setPizzasList(pizzas)
    } else {
      setPizzasList( pizzas.filter((item) => (
        item.type.some(type => selectedTypes.includes(type))
      )));
    }
  }
  
  const handleFilter = (isSelected, id) => {
    const temp = selectedTypes;
    isSelected ? temp.push(id) : temp.splice(temp.indexOf(id), 1);
    setSelectedTypes(temp);
    getFilteredPizzas();
  }

  return (
    <>
      <Filter onClick={handleFilter} pizzaTypes={types} />
      <ul className={styles.container}>
        { pizzasList.map((pizza) => (
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