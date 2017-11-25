import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import { azureMlLoaded, azureMlError } from './actions';
import { AZURE_API } from './constants';


export function* getResponseFromAzure(action) {
  const profileReference = 'https://ussouthcentral.services.azureml.net/workspaces/7f9c9e43b8134913b3723edc05902e03/services/194151d37b3a4b09bb788a1c275e0fad/execute?api-version=2.0&details=true';
  const body = JSON.stringify({
    ...action.content,
  });

  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'hGtWzt0byBxk8JxfQ3Tv2QyAtPq9UUgSRTL/v2isjlvr9Nxn9j8jbR6Axma0vOt74TUQSpFerGdPZMaadjyClw==',
    'Content-Length': body.length,
  };

  try {
    const response = yield call(request, profileReference, {
      method: 'POST',
      headers: requestHeaders,
      body,
    });
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
