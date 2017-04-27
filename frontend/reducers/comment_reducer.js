import React from 'react';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';
import { merge } from 'lodash';

const CommentReducer = (state = {comments: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      nextState = merge({}, state);
      nextState.comments = Array.from(action.comments);
      return nextState;
    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      nextState.comments.unshift(action.comment);
      return nextState;
    default:
      return state;
  }
};

export default CommentReducer;
