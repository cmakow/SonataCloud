import React from 'react';
import ProfilePage from './profile_page';
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
)(ProfilePage);
