import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/profile_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.profile.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
