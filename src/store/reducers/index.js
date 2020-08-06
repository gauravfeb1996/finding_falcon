import {combineReducers} from 'redux';
import tokenReducer from './tokenReducer';
import planetsReducer from './planetReducer';
import spaceShipsReducer from './spaceShipsReducer';
import resultReducer from './resultReducer';
import totalTimeReducer from './totalTimeReducer';


const rootReducer = combineReducers({
    token: tokenReducer,
    planets: planetsReducer,
    spaceShips: spaceShipsReducer,
    result: resultReducer,
    totalTime: totalTimeReducer
});

export default rootReducer;
