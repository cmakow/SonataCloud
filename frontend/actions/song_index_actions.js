import * as APIUtil from '../util/song_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const removeSong = song => ({
  type: REMOVE_SONG,
  song
});

export const fetchSong = id => dispatch => (
  APIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
);

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);

export const fetchUserSongs = (userId) => dispatch => (
  APIUtil.fetchUserSongs(userId).then(songs => dispatch(receiveSongs(songs)))
);

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id).then(() => dispatch(fetchSongs()))
);
