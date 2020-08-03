import { 
  GET_SPACE_SHIPS_REUQEST,
  GET_SPACE_SHIPS_SUCCESS
} from './constants';

export const getSpaceShipsRequest = () => {
  return {
    type: GET_SPACE_SHIPS_REUQEST
  };
}

export const getSpaceShipsSuccess = data => {
  return {
    type: GET_SPACE_SHIPS_SUCCESS,
    data
  };
}