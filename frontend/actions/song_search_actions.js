import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SEARCH_SONGS = 'RECEIVE_SEARCH_SONGS';

export const receiveSearchSongs = songs => ({
  type: RECEIVE_SEARCH_SONGS,
  songs
});

export const fetchSearchSongs = search => dispatch => (
  APIUtil.fetchMatchingSongs(search).then(songs => dispatch(receiveSearchSongs(songs)))
);
