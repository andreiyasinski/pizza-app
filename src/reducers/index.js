import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';
import menu from './menu.reducer';
import popUp from './popUp.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients,
  menu,
  popUp
})

export default mainReducer;