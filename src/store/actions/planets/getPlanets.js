import { 
    GET_PLANETS_REUQEST,
    GET_PLANETS_SUCCESS
} from './constants';

export const getPlanetsRequest = () => {
  return {
    type: GET_PLANETS_REUQEST
  };
}

export const getPlanetsSuccess = data => {
  return {
    type: GET_PLANETS_SUCCESS,
    data
  };
}