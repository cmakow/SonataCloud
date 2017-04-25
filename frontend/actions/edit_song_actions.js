import * as APIUtil from '../util/song_api_util';
import { hashHistory } from 'react-router';
import { receiveSong } from './song_index_actions';

export const EDIT_SONG = 'EDIT_SONG';
export const RECEIVE_EDIT_ERRORS = "RECEIVE_EDIT_ERRORS";

export const editSong = editedSong => ({
  type: EDIT_SONG,
  editedSong
});

export const receiveEditErrors = errors => ({
  type: RECEIVE_EDIT_ERRORS,
  errors
});

export const updateSong = editedSong => dispatch => {
  return APIUtil.updateSong(editedSong).then(song => dispatch(receiveSong(song)),
    err => dispatch(receiveEditErrors(song)))
    .then(() => hashHistory.push('/')); // update later to go to song show page
};

export const fetchSong = id => dispatch => {
  return APIUtil.fetchSong(id).then(song => dispatch(editSong(song)), err => dispatch(receiveEditErrors(err)));
};
