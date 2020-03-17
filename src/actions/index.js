import axios from 'axios';

export const GET_PIZZAS_REQUEST = 'GET_PIZZAS';
export const GET_PIZZAS_SUCCESS = 'GET_PIZZAS_SUCCESS';
export const GET_PIZZAS_FAILURE = 'GET_PIZZAS_FAILURE';

export const getPizzasRequest = () => {
  return {
    type: GET_PIZZAS_REQUEST
  }
}

export const getPizzasSuccess = (items) => ({
  type: GET_PIZZAS_SUCCESS,
  payload: {
    items,
  },
});

export const getPizzasFailure = (error) => ({
  type: GET_PIZZAS_FAILURE,
  payload: {
    error,
  },
});

export const getPizzas = () => (dispatch) => {
  dispatch(getPizzasRequest());

  return axios('/pizzas.json')
    .then((response) => {
      dispatch(getPizzasSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getPizzasFailure(err));
    });
};