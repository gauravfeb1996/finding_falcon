import produce from 'immer';
import { GET_TOKEN_SUCCESS } from '../actions/tokenAction/constants'

const initialState = {
  token: null,
};

const tokenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TOKEN_SUCCESS:
        draft.token = action.data;
        break;
          
      default: {
        return draft;
      }
    }
  });

export default tokenReducer;
