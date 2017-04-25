import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchSongs } from '../../actions/song_index_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    songs: state.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    fetchSongs: () => dispatch(fetchSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
