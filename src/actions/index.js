import axios from 'axios';

export const GET_PIZZAS_REQUEST = 'GET_PIZZAS_REQUEST';
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

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

export const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
}

export const getIngredientsSuccess = (items) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: {
    items,
  },
});

export const getIngredientsFailure = (error) => ({
  type: GET_INGREDIENTS_FAILURE,
  payload: {
    error,
  },
});

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsRequest());

  return axios('/ingredients.json')
    .then((response) => {
      dispatch(getIngredientsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getIngredientsFailure(err));
    });
};