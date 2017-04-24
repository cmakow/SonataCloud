import React from 'react';
import { RECEIVE_ERRORS } from '../actions/upload_actions';

const UploadSongReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      nextState = Object.assign({}, state);
      nextState.errors = action.errors;
      return nextState;
    default:
      return state;
  }
};

export default UploadSongReducer;
