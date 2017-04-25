import React from 'react';
import Song from './song';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_index_actions';
import { receiveCurrentSong } from '../../actions/current_song_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    song: state.songs[ownProps.params.id],
    currentSong: state.currentSong.current_song
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSong: id => dispatch(fetchSong(id)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
