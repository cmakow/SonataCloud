import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux';
import { fetchUserSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserSongs: userId => dispatch(fetchUserSongs(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
