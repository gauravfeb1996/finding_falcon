import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../actions/planets/constants';
import { getPlanetsSuccess } from '../actions/planets/planets'
import apiHandler from '../../utils/api/apiHandler.js';


function* planetRequestSaga(action) {
    try {
        const res = yield call(apiHandler.getDataAPI, `/planets`);
        yield put(getPlanetsSuccess(res));
    } catch (error) {
        console.log(error);
    }
}


export function* watchPlanetRequest() {
    yield takeLatest(actions.GET_PLANETS_REUQEST, planetRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchPlanetRequest)]);
}
  