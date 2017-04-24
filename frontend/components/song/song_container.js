import React from 'react';
import Song from './song';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_index_actions';

const mapStateToProps = (state, ownProps) => ({
  song: state.songs[ownProps.params.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
