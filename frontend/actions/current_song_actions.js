import * as APIUtil from '../util/song_api_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';

export const receiveCurrentSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

export const playSong = currentSong => ({
  type: PLAY_SONG,
  currentSong
});

export const pauseSong = currentSong => ({
  type: PAUSE_SONG,
  currentSong
});
