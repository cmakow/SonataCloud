import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from './comment_form/comment_form_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentFormContainer />
        {/* map comments to comment index items */}
      </div>
    );
  }
}

export default CommentIndex;
