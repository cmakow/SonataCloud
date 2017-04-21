import React from 'react';
import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../actions/song_actions';

const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_SONGS:
      nextState = Object.assign({}, action.songs);
      return nextState;
    case RECEIVE_SONG:
      nextState = {};
      nextState[action.song.id] = action.song;
      return nextState;
    case REMOVE_SONG:
      nextState = Object.assign({}, state);
      delete nextState[action.song.id]; // need to test that this works!!
      return nextState;
    default:
      return state;
  }
};

export default SongReducer;
