import React from 'react';
import CurrentSong from './current_song';
import { connect } from 'react-redux';
import { receiveCurrentSong } from '../../actions/current_song_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.currentSong.current_song,
    playing: state.currentSong.playing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSongs: songs => dispatch(receiveSongs(songs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentSong);
