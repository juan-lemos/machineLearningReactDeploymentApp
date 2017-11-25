import { fromJS } from 'immutable';
import {
  AZURE_API,
  AZURE_API_SUCCESS,
  AZURE_API_ERROR,
} from './constants';

const initialState = fromJS({
  loadingFromAzure: false,
  errorAzure: false,
  responseAzure: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case AZURE_API:
      return state
        .set('errorAzure', true)
        .set('loadingFromAzure', true)
        .set('responseAzure', null);
    case AZURE_API_SUCCESS:
      return state
        .set('loadingFromAzure', false)
        .set('responseAzure', action.content);
    case AZURE_API_ERROR:
      return state
        .set('errorAzure', true)
        .set('loadingFromAzure', false);
    default:
      return state;
  }
}

export default homeReducer;

