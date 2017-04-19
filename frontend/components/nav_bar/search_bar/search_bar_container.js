import React from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // get songs index?
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // do I need anything here?
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
