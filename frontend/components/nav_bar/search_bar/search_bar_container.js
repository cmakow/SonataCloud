import React from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { fetchSearchSongs } from '../../../actions/song_search_actions';

const mapStateToProps = state => {
  debugger
  return ({
    songs: Object.keys(state.search).map(id => state.search[id])
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSearchSongs: (search) => dispatch(fetchSearchSongs(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
