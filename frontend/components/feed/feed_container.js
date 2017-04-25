import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux';
import { fetchUserSongs, fetchSongs } from '../../actions/song_index_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  currentSong: state.currentSong.current_song
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserSongs: userId => dispatch(fetchUserSongs(userId)),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
