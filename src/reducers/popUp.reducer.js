import { TOGGLE_POPUP } from '../actions';

const initialState  = {
  isPopUpOpen: false,
  data: {}
};

const popUp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        isPopUpOpen: action.payload.isPopUpOpen,
        data: action.payload.data
      };
    default:
      return state
  }
}

export default popUp;