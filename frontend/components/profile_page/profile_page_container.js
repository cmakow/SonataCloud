import React from 'react';
import ProfilePage from './profile_page';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    profileUserId: ownProps.params.user_id,
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
)(ProfilePage);
