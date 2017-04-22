import * as APIUtil from '../util/song_api_util';
import { receiveSong } from './song_index_actions';
import { hashHistory } from 'react-router';

export const createSong = song => dispatch => {
  debugger
  return (
  APIUtil.createSong(song).then(song => dispatch(receiveSong(song)))
    .then(() => hashHistory.push('/'))
);};
