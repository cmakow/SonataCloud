import React from 'react';
import AuthForm from './auth_form';
import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return ({
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
