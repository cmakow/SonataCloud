import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
