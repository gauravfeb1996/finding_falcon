import produce from 'immer';
import { UPDATE_TOTAL_TIME_REQUEST } from '../actions/totalTIme/constants';

const initialState = {
  totalTime: 0,
};

const totalTimeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_TOTAL_TIME_REQUEST:
        draft.totalTime = action.data;
      break;
          
      default: {
        return draft;
      }
    }
  });

export default totalTimeReducer;
