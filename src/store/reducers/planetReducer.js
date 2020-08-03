import produce from 'immer';
import { GET_PLANETS_SUCCESS } from '../actions/planets/constants'

const initialState = {
  planets: null,
};

const planetsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PLANETS_SUCCESS:
        draft.planets = action.data;
      break;
          
      default: {
        return draft;
      }
    }
  });

export default planetsReducer;
