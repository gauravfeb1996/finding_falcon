import { 
    GET_PLANETS_REUQEST,
    GET_PLANETS_SUCCESS,
    UPDATE_SELECTED_PLANET
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

export const updateSelectedPlanet = (index, selectedPlanet) => {
  return {
    type: UPDATE_SELECTED_PLANET,
    index,
    selectedPlanet
  };
}