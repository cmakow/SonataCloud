import React from 'react';
import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { fetchSongComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    comments: state.comment.comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSongComments: songId => dispatch(fetchSongComments(songId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
