import * as APIUtil from '../util/song_api_util';
import { hashHistory } from 'react-router';

export const EDIT_SONG = 'EDIT_SONG';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const editSong = editedSong => ({
  type: EDIT_SONG,
  editedSong
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const updateSong = editedSong => dispatch => {
  debugger
  return APIUtil.updateSong(editedSong).then(song => dispatch(receiveSong(song)),
    err => dispatch(receiveErrors(song)))
    .then(() => hashHistory.push('/')); // update later to go to song show page
};

export const fetchSong = id => dispatch => {
  return APIUtil.fetchSong(id).then(song => dispatch(editSong(song)), err => dispatch(receiveErrors(err)));
};
