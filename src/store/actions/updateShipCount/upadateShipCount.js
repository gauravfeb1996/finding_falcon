import { 
    UPDATE_SHIP_COUNT_REUQEST
} from './constants';

export const updateShipCountRequest = (prevSelected, newSelected) => {
  console.log("here ->", prevSelected, newSelected);
  return {
    type: UPDATE_SHIP_COUNT_REUQEST,
    prevSelected,
    newSelected
  };
}