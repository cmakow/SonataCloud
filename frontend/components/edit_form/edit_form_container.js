import React from 'react';
import { connect } from 'react-redux';
import EditForm from './edit_form';
import { updateSong, fetchSong } from '../../actions/edit_song_actions';

const mapStateToProps = state => {
  return {
    editedSong: state.edit.editedSong
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSong: song => dispatch(updateSong(song)),
  clearErrors: () => dispatch(receiveErrors([])),
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
