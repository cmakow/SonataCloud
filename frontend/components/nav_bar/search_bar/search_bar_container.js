import React from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { fetchSongs } from '../../../actions/song_index_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSongs: () => dispatch(fetchSongs(songs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
