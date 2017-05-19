import React from 'react';
import Waveform from './waveform';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentSong: state.currentSong.current_song
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waveform);
