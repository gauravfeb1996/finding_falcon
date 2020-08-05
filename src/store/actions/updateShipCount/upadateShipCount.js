import { 
    UPDATE_SHIP_COUNT_REUQEST
} from './constants';

export const updateShipCountRequest = (prevSelected, newSelected) => {
  return {
    type: UPDATE_SHIP_COUNT_REUQEST,
    prevSelected,
    newSelected
  };
}