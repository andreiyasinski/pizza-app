import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';
import menu from './menu.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients,
  menu
})

export default mainReducer;