import produce from 'immer';
import { GET_SPACE_SHIPS_SUCCESS } from '../actions/spaceShips/constants'

const initialState = {
  spaceShips: null,
};

const spaceShipsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPACE_SHIPS_SUCCESS:
        draft.spaceShips = action.data;
      break;
          
      default: {
        return draft;
      }
    }
  });

export default spaceShipsReducer;
