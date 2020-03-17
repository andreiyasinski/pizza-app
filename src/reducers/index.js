import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients
})

export default mainReducer;