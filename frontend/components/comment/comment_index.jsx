import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from './comment_form/comment_form_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongComments(this.props.song.id);
  }

  componentWillReceiveProps(newProps) {
    // if(this.props.comments.length !== newProps.comments.length) {
    //   this.props.fetchSongComments(this.props.song.id);
    // }
  }

  render() {
    let comments;
    if(Object.keys(this.props.comments).length > 0) {
      comments = Object.keys(this.props.comments).map(id => this.props.comments[id]).sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        }
      }).map((comment, i) => (
        <CommentIndexItem
          key={i}
          comment={comment}
          currentUser={this.props.currentUser}
          deleteComment={this.props.deleteComment}
          />
      ));
    } else {
      comments = (<p className='fillerText'>Nothing here! Be the first to comment!</p>);
    }
    return (
      <div>
        <CommentFormContainer />
        <ul className='commentIndex'>
          { comments }
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
