import React from 'react';
import { RECEIVE_SEARCH_SONGS } from '../actions/song_search_actions';
import { merge } from 'lodash';

const SongSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_SEARCH_SONGS:
      nextState = merge({}, action.songs);
      return nextState;
    default:
      return state;
  }
};

export default SongSearchReducer;
