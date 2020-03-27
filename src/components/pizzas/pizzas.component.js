import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './pizzas.module.css';
import Pizza from '../pizza/pizza.component';
import SelectedPizza from '../selectedPizza/selectedPizza.component';
import Filter from '../filter/filter.component';

const Pizzas = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pizzasList, setPizzasList] = useState([]);


  const pizzas = useSelector((state) => state.pizzas.items);
  const ingredients = useSelector((state) => state.ingredients.items);
  const types = useSelector((state) => state.types.items);
  const isOpen = useSelector((state) => state.selectedPizza.isOpen);

  useEffect(() => {
    setPizzasList(pizzas)
  }, [pizzas]);

  const getFilteredPizzas = () => {
    if (selectedTypes.length === 0) {
      setPizzasList(pizzas)
    } else {
      setPizzasList( pizzas.filter((item) => (
        item.type.some(type => selectedTypes.includes(type))
      )));
    }
  }
  
  const changeFilter = (isSelected, id) => {
    const newSelectedTypes = selectedTypes;
    isSelected ? newSelectedTypes.push(id) : newSelectedTypes.splice(newSelectedTypes.indexOf(id), 1);
    setSelectedTypes(newSelectedTypes);
    getFilteredPizzas();
  }

  return (
    <>
      <Filter onClick={changeFilter} pizzaTypes={types} />
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
      { isOpen &&  <SelectedPizza /> }
    </>
  );
};

export default Pizzas;