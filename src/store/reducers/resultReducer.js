import produce from 'immer';
import { GET_FIND_FALCON_SUCCESS } from '../actions/findFalcon/constants';

const initialState = {
  result: null,
};

const resultReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_FIND_FALCON_SUCCESS:
        draft.result = action.data;
      break;
          
      default: {
        return draft;
      }
    }
  });

export default resultReducer;
