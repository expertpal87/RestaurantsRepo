import {RESTAUTANTS} from '../Actions/types';

//=----------- initialState ------//
const initialState = {
  restaurantsList: [],
};

//=----------- reducer ------//
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAUTANTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Reducer;
