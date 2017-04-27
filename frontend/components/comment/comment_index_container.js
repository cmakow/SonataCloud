import React from 'react';
import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { fetchSongComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    comments: state.comment.comments,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSongComments: songId => dispatch(fetchSongComments(songId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
