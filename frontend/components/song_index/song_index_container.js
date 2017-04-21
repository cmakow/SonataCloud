import React from 'react';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { receiveSongs } from '../../actions/song_index_actions';
import { receiveCurrentSong } from '../../actions/current_song_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSongs: songs => dispatch(receiveSongs(songs)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
