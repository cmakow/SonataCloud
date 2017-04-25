import React from 'react';
import Upload from './upload';
import { connect } from 'react-redux';
import { createSong } from '../../actions/upload_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.upload.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSong: song => dispatch(createSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
