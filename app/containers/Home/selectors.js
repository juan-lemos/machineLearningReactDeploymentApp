import { createSelector } from 'reselect';


const selectHomeDomain = (state) => state.get('home');

const makeSelectAzure = () =>
  createSelector(selectHomeDomain, (substate) =>
    substate.get('responseAzure')
  );
const makeSelectAzureLoading = () =>
  createSelector(selectHomeDomain, (substate) =>
    substate.get('loadingFromAzure')
  );
const makeSelectAzureError = () =>
  createSelector(selectHomeDomain, (substate) =>
    substate.get('errorAzure')
  );

export {
  makeSelectAzure,
  makeSelectAzureLoading,
  makeSelectAzureError,
};
