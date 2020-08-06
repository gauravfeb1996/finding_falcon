import { 
    GET_FIND_FALCON_REQUEST,
    GET_FIND_FALCON_SUCCESS
} from './constants';

export const findFalconRequest = (requestData, resolve, reject) => {
  return {
    type: GET_FIND_FALCON_REQUEST,
    requestData,
    resolve,
    reject
  };
}

export const findFalconSuccess = data => {
  return {
    type: GET_FIND_FALCON_SUCCESS,
    data
  };
}