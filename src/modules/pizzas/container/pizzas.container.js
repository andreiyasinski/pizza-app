import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../../actions';
import Pizzas from '../component/pizzas.component';

const PizzasContainer = () => {
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);


  return (
    <>
      <Pizzas pizzas={pizzas} />
    </>
  );
};

export default PizzasContainer;