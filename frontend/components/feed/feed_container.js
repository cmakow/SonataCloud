import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux';
import { fetchUserSongs, fetchSongs, clearSongs } from '../../actions/song_index_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  currentSong: state.currentSong.current_song
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserSongs: (userId, offset) => dispatch(fetchUserSongs(userId, offset)),
  fetchSongs: (offset) => dispatch(fetchSongs(offset)),
  clearSongs: () => dispatch(clearSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
