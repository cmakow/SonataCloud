import React from 'react';
import CurrentSong from './current_song';
import { connect } from 'react-redux';
import { receiveCurrentSong } from '../../actions/current_song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentSong: state.currentSong.current_song,
    playing: state.currentSong.playing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveCurrentSong: song => dispatch(receiveCurrentSongs(song)),
  clearCurrentSong: () => dispatch(receiveCurrentSong(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentSong);
