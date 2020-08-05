import produce from 'immer';
import { GET_PLANETS_SUCCESS, UPDATE_SELECTED_PLANET } from '../actions/planets/constants'

const initialState = {
  planets: null,
  selectedPlanet: new Array(4)
};

const findPlanetUtil = (selectedPlanet, data, selectedPlanetDraft, index) => {
  data.find(function(planet){
    if(planet.name === selectedPlanet){
      selectedPlanetDraft[index] = planet;
    }
    return null;
  })
  return null;
}

const planetsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PLANETS_SUCCESS:
        draft.planets = action.data;
      break;
      case UPDATE_SELECTED_PLANET:
        findPlanetUtil(action.selectedPlanet, draft.planets, draft.selectedPlanet, action.index);
      break;
      default: {
        return draft;
      }
    }
  });

export default planetsReducer;
