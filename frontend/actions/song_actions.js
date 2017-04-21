import * as APIUtil from '../util/song_api_util';

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

export const fetchUserSongs = (userId) => dispatch => (
  APIUtil.fetchUserSongs(userId).then(songs => {
    debugger
    return dispatch(receiveSongs(songs));
  })
);

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id).then(song => dispatch(removeSong(song)))
);
