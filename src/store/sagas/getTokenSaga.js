import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../actions/tokenAction/constants';
import { getTokenSuccess } from '../actions/tokenAction/getToken'
import apiHandler from '../../utils/api/apiHandler.js';


function* tokenRequestSaga(action) {
    try {
        const res = yield call(apiHandler.postDataAPI, `/token`);
        yield put(getTokenSuccess(res.data.token));
    } catch (error) {
        console.log(error);
    }
}


export function* watchTokenRequest() {
    yield takeLatest(actions.GET_TOKEN_REUQEST, tokenRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchTokenRequest)]);
}
  