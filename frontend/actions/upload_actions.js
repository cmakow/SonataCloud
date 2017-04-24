import * as APIUtil from '../util/song_api_util';
import { receiveSong } from './song_index_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createSong = song => dispatch => {
  return (
  APIUtil.createSong(song).then(song => dispatch(receiveSong(song)), errs => dispatch(receiveErrors(errs)))
    .then(() => hashHistory.push('/'))
);};
