import { 
    GET_TOKEN_REUQEST,
    GET_TOKEN_SUCCESS
} from './constants';

export const getTokenRequest = () => {
  return {
    type: GET_TOKEN_REUQEST
  };
}

export const getTokenSuccess = data => {
  return {
    type: GET_TOKEN_SUCCESS,
    data
  };
}