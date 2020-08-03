import {combineReducers} from 'redux';
import tokenReducer from './tokenReducer';
import planetsReducer from './planetReducer';
import spaceShipsReducer from './spaceShipsReducer';


const rootReducer = combineReducers({
    token: tokenReducer,
    planets: planetsReducer,
    spaceShips: spaceShipsReducer
});

export default rootReducer;
