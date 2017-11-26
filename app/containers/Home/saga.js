import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import { azureMlLoaded, azureMlError } from './actions';
import { AZURE_API } from './constants';


export function* getResponseFromAzure(action) {
  const profileReference = `https://mushroomsmlback.herokuapp.com/?bruises=${action.content.bruises}&odor=${action.content.odor}&gillsize=${action.content.gillsize}&gillcolor=${action.content.gillcolor}&stalksurfaceabovering=${action.content.stalksurfaceabovering}&stalksurfacebelowring=${action.content.stalksurfacebelowring}&stalkcolorabovering=${action.content.stalkcolorabovering}&stalkcolorbelowring=${action.content.stalkcolorbelowring}&ringtype=${action.content.ringtype}&sporeprintcolor=${action.content.sporeprintcolor}`;

  try {
    const response = yield call(request, profileReference);
    yield put(azureMlLoaded(response));
  } catch (err) {
    yield put(azureMlError(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(AZURE_API, getResponseFromAzure),
  ]);
}
