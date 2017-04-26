import * as APIUtil from '../util/profile_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PROFILE_USER = "RECEIVE_PROFILE_USER";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";

export const receiveProfileUser = (user) => ({
  type: RECEIVE_PROFILE_USER,
  user
});

export const receiveProfileErrors = (errors) => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveProfileUser(user)), err => dispatch(receiveProfileErrors(err)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(user => dispatch(receiveProfileUser(user)),
      err => dispatch(receiveProfileErrors(err)))
);
