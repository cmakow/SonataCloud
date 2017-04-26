import * as APIUtil from '../util/song_api_util';
import { fetchSongs } from './song_index_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS";

export const receiveUploadErrors = errors => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
});

export const createSong = song => dispatch => {
  return (
  APIUtil.createSong(song).then(() => dispatch(fetchSongs()), errs => dispatch(receiveUploadErrors(errs)))
    .then(() => hashHistory.push('/'))
);};
