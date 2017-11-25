import {
  AZURE_API,
  AZURE_API_SUCCESS,
  AZURE_API_ERROR,
} from './constants';

export function azureMl(content) {
  return {
    type: AZURE_API,
    content,
  };
}

export function azureMlLoaded(content) {
  return {
    type: AZURE_API_SUCCESS,
    content,
  };
}

export function azureMlError(error) {
  return {
    type: AZURE_API_ERROR,
    error,
  };
}
