import React from 'react';
import ProfileEdit from './profile_edit';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
