import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  CHANGE_NUMBER
} from '../actions';

const initialState  = [];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_FROM_BASKET:
      return state.filter(record => record.id !== action.payload.id);
    case CHANGE_NUMBER:
      return state.map(record => (
        record.id === action.payload.id
        ?
        {...record, number: action.payload.value}
        :
        record
      ))
    default:
      return state
  }
}

export default basket;