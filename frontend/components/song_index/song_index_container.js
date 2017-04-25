import React from 'react';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { receiveSongs, deleteSong } from '../../actions/song_index_actions';
import { receiveCurrentSong } from '../../actions/current_song_actions';
import { editSong } from '../../actions/edit_song_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    currentSong: state.currentSong.current_song
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSongs: songs => dispatch(receiveSongs(songs)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  deleteSong: id => dispatch(deleteSong(id)),
  editSong: song => dispatch(editSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
