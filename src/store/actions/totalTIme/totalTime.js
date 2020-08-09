import { 
    UPDATE_TOTAL_TIME_REQUEST
} from './constants';

export const updateTotalTimeRequest = (index, timeTaken) => {
  return {
    type: UPDATE_TOTAL_TIME_REQUEST,
    index: index,
    timeTaken: timeTaken
  };
}