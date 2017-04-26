import React from 'react';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

const CommentReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      nextState = Object.assign({}, state);
      nextState.comments = action.comments;
      return nextState;
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      nextState[action.comment.id] = action.comment;
      return nextState;
    case RECEIVE_COMMENT_ERRORS:
      nextState = Object.assign({}, state);
      nextState.errors = action.errors;
      return nextState;
    default:
      return state;
  }
};
