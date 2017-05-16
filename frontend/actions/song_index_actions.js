import * as APIUtil from '../util/song_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";
export const CLEAR_SONGS = "CLEAR_SONGS";

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

export const clearSongs = () => ({
  type: CLEAR_SONGS
})

export const fetchSong = id => dispatch => (
  APIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
);

export const fetchSongs = offset => dispatch => (
  APIUtil.fetchSongs(offset).then(songs => dispatch(receiveSongs(songs)))
);

export const fetchUserSongs = (userId, offset) => dispatch => (
  APIUtil.fetchUserSongs(userId, offset).then(songs => dispatch(receiveSongs(songs)))
);

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id).then(() => dispatch(fetchSongs()))
);
