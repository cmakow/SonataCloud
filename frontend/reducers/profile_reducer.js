import React from 'react';
import { RECEIVE_PROFILE_USER, RECEIVE_PROFILE_ERRORS } from '../actions/profile_actions';

const ProfileReducer = (state = {user: null, errors: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_PROFILE_USER:
      nextState = Object.assign({}, state);
      nextState.user = action.user;
      return nextState;
    case RECEIVE_PROFILE_ERRORS:
      nextState = Object.assign({}, state);
      nextState.errors = action.errors;
      return nextState;
    default:
      return state;
  }
};

export default ProfileReducer;
