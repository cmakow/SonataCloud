import React from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { fetchSearchSongs } from '../../../actions/song_search_actions';

const mapStateToProps = state => {
  return ({
    songs: Object.values(state.search)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSearchSongs: (search) => dispatch(fetchSearchSongs(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
