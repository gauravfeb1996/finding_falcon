import produce from 'immer';
import { GET_SPACE_SHIPS_SUCCESS } from '../actions/spaceShips/constants'
import { UPDATE_SHIP_COUNT_REUQEST } from '../actions/updateShipCount/constants';
import { noPlanetsCanSelected } from '../../utils/constants';

const initialState = {
  spaceShips: null,
  spaceShipInitial: null,
  selectedSpaceShips: new Array(noPlanetsCanSelected)
};

const updateShipCountUtil = (prevSelected, newSelected, index, data, selectedSpaceShipState) => {
  data.find(function (ship) {
    if(ship.name === prevSelected){
      ship.total_no = ship.total_no+1
    }
    if(ship.name === newSelected){
      selectedSpaceShipState[index] = ship;
      ship.total_no = ship.total_no-1
    }
    return null;
  });
}

const spaceShipsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPACE_SHIPS_SUCCESS:
        draft.spaceShips = action.data;
        draft.spaceShipInitial = action.data;
      break;
      case UPDATE_SHIP_COUNT_REUQEST:
        updateShipCountUtil(action.prevSelected, action.newSelected, action.index, draft.spaceShips, draft.selectedSpaceShips);
      break;  
      default: {
        return draft;
      }
    }
  });

export default spaceShipsReducer;
