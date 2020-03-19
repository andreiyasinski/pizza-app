import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas, getIngredients } from '../../actions';
import Pizzas from './pizzas.component';

const PizzasContainer = () => {
  const pizzas = useSelector((state) => state.pizzas.items);
  const ingredients = useSelector((state) => state.ingredients.items);
  const isPopUpOpen = useSelector((state) => state.popUp.isPopUpOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
    dispatch(getIngredients());
  }, [dispatch]);
 
  return (
    <>
      <Pizzas
        pizzas={pizzas}
        ingredients={ingredients}
        isPopUpOpen={isPopUpOpen}
      />
    </>
  );
};

export default PizzasContainer;