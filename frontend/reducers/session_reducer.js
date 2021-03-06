import React from 'react';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
