import produce from 'immer';
import { UPDATE_TOTAL_TIME_REQUEST } from '../actions/totalTIme/constants';
import { noPlanetsCanSelected } from '../../utils/constants';

const initialState = {
  totalTimeRecord: new Array(noPlanetsCanSelected).fill(0,0,noPlanetsCanSelected),
  totalTime: 0
};

const totalTimeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_TOTAL_TIME_REQUEST:
        draft.totalTime = draft.totalTime + (action.timeTaken - draft.totalTimeRecord[action.index]) ;
        draft.totalTimeRecord[action.index] = action.timeTaken;
      break;
          
      default: {
        return draft;
      }
    }
  });

export default totalTimeReducer;
