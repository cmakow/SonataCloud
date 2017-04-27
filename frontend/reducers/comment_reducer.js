import React from 'react';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const CommentReducer = (state = {comments: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      nextState = merge({}, state);
      nextState.comments = action.comments;
      return nextState;
    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      nextState.comments[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState.comments[action.comment_id];
      return nextState;
    default:
      return state;
  }
};

export default CommentReducer;
