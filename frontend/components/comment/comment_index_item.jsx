import React from 'react';
import { Link } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const author = this.props.comment.author;
    const comment = this.props.comment;
    if(this.props.comment) {
      return (
        <li className='commentLi'>
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
        </li>
      );
    } else {
      return null;
    }
  }
}

export default CommentIndexItem;
