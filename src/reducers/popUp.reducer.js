import { TOGGLE_POPUP } from '../actions';

const initialState  = {
  isPopUpOpen: false
};

const popUp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        isPopUpOpen: action.payload.isPopUpOpen,
      };
    default:
      return state
  }
}

export default popUp;