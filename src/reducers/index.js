import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';
import menu from './menu.reducer';
import popUp from './popUp.reducer';
import types from './types.reducer';
import basket from './basket.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients,
  menu,
  popUp,
  types,
  basket
})

export default mainReducer;