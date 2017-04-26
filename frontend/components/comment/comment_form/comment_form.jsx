import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    debugger
    formData.append('comment[body]', this.state.body);
  }

  render() {
    return (
      <div className='commentFormContainer'>
        <div className='commentFormPadder'>
          <div className='commentFormWrapper'>
            <form className='commentForm'>
              <img src={this.props.currentUser.prof_pic} className='commentThumb'/>
              <input type='text' className='commentBodyInput' onChange={this.updateBody} value={this.state.body} placeholder='Write a comment!'/>
              <input type='submit' onClick={this.handleSubmit} value='Post Comment' className='commentSubmitButton'/>
            </form>
          </div>
        </div>    
      </div>
    );
  }
}

export default CommentForm;
