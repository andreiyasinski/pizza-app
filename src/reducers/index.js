import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';
import menu from './menu.reducer';
import selectedPizza from './selectedPizza.reducer';
import types from './types.reducer';
import basket from './basket.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients,
  menu,
  selectedPizza,
  types,
  basket
})

export default mainReducer;