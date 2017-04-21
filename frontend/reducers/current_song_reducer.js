import React from 'react';
import { RECEIVE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG } from '../actions/current_song_actions';

const CurrentSongReducer = (state = {current_song: null, playing: false}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      nextState = Object.assign({}, state);
      nextState.current_song = action.currentSong;
      if(action.currentSong) {
        nextState.playing = true;
      }
      return nextState;
    case PLAY_SONG:
      nextState = Object.assign({}, state);
      nextState.playing = true;
      return nextState;
    case PAUSE_SONG:
      nextState = Object.assign({}, state);
      nextState.playing = false;
      return nextState;
    default:
      return state;
  }
};

export default CurrentSongReducer;
