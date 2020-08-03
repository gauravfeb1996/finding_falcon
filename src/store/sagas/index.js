import { all, fork } from "redux-saga/effects"; 
import getTokensaga from "./getTokenSaga";
import getPlanets from "./getPlanetSaga";
import getSpaceShips from './getSpaceShipsSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(getTokensaga),
        fork(getPlanets),
        fork(getSpaceShips)
    ]);
}
