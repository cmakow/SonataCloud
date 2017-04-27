import React from 'react';
import { Link } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const author = this.props.comment.author;
    const comment = this.props.comment;
    let delete_button = null;
    if(this.props.currentUser.id === author.id) {
      delete_button = <button className='deleteButton' onClick={this.handleSubmit}>Remove Comment</button>;
    }
    if(this.props.comment) {
      return (
        <li className='commentLi'>
          <div className='commentInfo'>
            <div className='commentProfPic'>
              <Link to={`/profile/${author.id}`}>
                <img src={author.prof_pic} className='commentProfPicIcon'/>
              </Link>
            </div>
            <div className='commentItem'>
              <div className='commentUsername'>
                <Link to={`/profile/${author.id}`}>{author.username}</Link>
              </div>
              <div className='commentBody'>
                {comment.body}
              </div>
            </div>
          </div>
          <div>
            { delete_button }
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default CommentIndexItem;
