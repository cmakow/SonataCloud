import React from 'react';
import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { postComment } from '../../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: comment => dispatch(postComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
