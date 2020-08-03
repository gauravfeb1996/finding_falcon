import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../actions/spaceShips/constants';
import { getSpaceShipsSuccess } from '../actions/spaceShips/getSpaceShips';
import apiHandler from '../../utils/api/apiHandler.js';


function* spaceShipsRequestSaga(action) {
    try {
        const res = yield call(apiHandler.getDataAPI, `/vehicles`);
        yield put(getSpaceShipsSuccess(res.data));
    } catch (error) {
        console.log(error);
    }
}


export function* watchSpaceShipsRequest() {
    yield takeLatest(actions.GET_SPACE_SHIPS_REUQEST, spaceShipsRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchSpaceShipsRequest)]);
}
  