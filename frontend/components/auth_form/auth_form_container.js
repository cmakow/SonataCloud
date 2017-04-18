import React from 'react';
import AuthForm from './auth_form';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);
  const processForm = formType === 'login' ? login : signup;
  return ({
    processForm: user => dispatch(processForm(user)),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
