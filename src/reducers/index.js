import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';

const mainReducer = combineReducers({
  pizzas
})

export default mainReducer;