import React from 'react';
import { hashHistory } from 'react-router';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      cover_art: null,
      cover_art_url: null
    };

    if(this.props.editedSong) {
      this.state.title = this.props.editedSong.title;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    if(!this.props.editedSong) {
      this.props.fetchSong(this.props.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if(!this.props.editedSong && newProps.editedSong) {
      this.setState({title: newProps.editedSong.title});
      this.setState({id: newProps.editedSong.id});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('song[id]', this.props.params.id);
    formData.append('song[title]', this.state.title);
    if (this.state.cover_art) {
      formData.append('song[cover_art]', this.state.cover_art);
    }
    this.props.updateSong(formData).then(() => hashHistory.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateImage(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({cover_art: image, cover_art_url: fileReader.result});
    }.bind(this);
    if(image) {
      fileReader.readAsDataURL(image);
    }
  }

  render() {
    return (
      <div className='editFormContainer'>
        <h2>Edit Your Song</h2>
        <form className='editForm'>
          <label>Title:<br/>
            <input type='text' value={this.state.title} onChange={this.update('title')} />
          </label>
          <br />
          <label>Cover Art:<br />
            <input type='file' className='coverArtInput' onChange={this.updateImage} />
          </label>
          <br />
          <label>Cover Art Preview:<br />
            <img src={this.state.cover_art_url} className='coverImagePreview'/>
          </label>
          <br />
          <button onClick={this.handleSubmit}>Update Song</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
