import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = comment_id => ({
  type: REMOVE_COMMENT,
  comment_id
});

export const fetchUserComments = user_id => dispatch => (
  APIUtil.fetchUserComments(user_id).then(comments => dispatch(receiveComments(comments)), err => dispatch(receiveCommentErrors(err)))
);

export const fetchSongComments = song_id => dispatch => (
  APIUtil.fetchSongComments(song_id).then(comments => dispatch(receiveComments(comments)), err => dispatch(receiveCommentErrors(err)))
);

export const postComment = comment => dispatch => (
  APIUtil.postComment(comment).then(comment => dispatch(receiveComment(comment)), err => dispatch(receiveCommentErrors(err)))
);

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)), err => dispatch(receiveCommentErrors(err)))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then(id => dispatch(removeComment(id)))
);
