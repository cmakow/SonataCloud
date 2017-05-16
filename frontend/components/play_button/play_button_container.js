import React from 'react';
import PlayButton from './play_button';
import { connect } from 'react-redux';
import { receiveCurrentSong, playSong, pauseSong } from '../../actions/current_song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playing: state.currentSong.playing,
    currentSong: state.currentSong.current_song
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
