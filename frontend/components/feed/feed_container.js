import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // get songs index?
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
