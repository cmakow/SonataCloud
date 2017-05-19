import React from 'react';
import Song from './song';
import { connect } from 'react-redux';
import { fetchSong, fetchSongs } from '../../actions/song_index_actions';
import { receiveCurrentSong } from '../../actions/current_song_actions';
import { editSong } from '../../actions/edit_song_actions';
import { deleteSong } from '../../actions/song_show_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    song: state.songs[ownProps.params.song_id],
    currentSong: state.currentSong.current_song
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  editSong: song => dispatch(editSong(song)),
  fetchSong: id => dispatch(fetchSong(id)),
  deleteSong: id => dispatch(deleteSong(id)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
