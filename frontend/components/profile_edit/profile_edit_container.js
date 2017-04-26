import React from 'react';
import ProfileEdit from './profile_edit';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/profile_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
