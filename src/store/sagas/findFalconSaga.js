import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../actions/findFalcon/constants';
import { findFalconSuccess } from '../actions/findFalcon/findFalcon';
import apiHandler from '../../utils/api/apiHandler.js';


function* findFalconRequestSaga(action) {
    try {
        const res = yield call(apiHandler.postDataAPI, `/find`, action.requestData);
        yield put(findFalconSuccess(res.data));
        yield action.resolve("Success");
    } catch (error) {
        yield action.reject(error);
        console.log(error);
    }
}


export function* watchFindFalconRequest() {
    yield takeLatest(actions.GET_FIND_FALCON_REQUEST, findFalconRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchFindFalconRequest)]);
}
  