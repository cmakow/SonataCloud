import React from 'react';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { receiveSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSongs: songs => dispatch(receiveSongs(songs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
