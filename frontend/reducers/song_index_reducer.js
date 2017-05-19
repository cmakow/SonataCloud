import React from 'react';
import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG, CLEAR_SONGS } from '../actions/song_index_actions';

const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case CLEAR_SONGS:
      nextState = {};
      return nextState;
    case RECEIVE_SONGS:
      nextState = Object.assign({}, state, action.songs);
      return nextState;
    case RECEIVE_SONG:
      nextState = {};
      nextState[action.song.id] = action.song;
      return nextState;
    case REMOVE_SONG:
      nextState = Object.assign({}, state);
      debugger
      delete nextState[action.song.id];
      return nextState;
    default:
      return state;
  }
};

export default SongReducer;
