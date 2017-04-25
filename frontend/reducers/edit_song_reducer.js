import React from 'react';
import { EDIT_SONG, RECEIVE_EDIT_ERRORS } from '../actions/edit_song_actions';

const EditSongReducer = (state = {editedSong: null, errors: []}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case EDIT_SONG:
      nextState = Object.assign({}, state);
      nextState.editedSong = action.editedSong;
      return nextState;
    case RECEIVE_EDIT_ERRORS:
      nextState = Object.assign({}, state);
      nextState.errors = action.errors;
      return nextState;
    default:
      return state;
  }
};

export default EditSongReducer;
