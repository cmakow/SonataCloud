import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      cover_art: null,
      cover_art_url: null,
      data: null,
      artist_id: this.props.currentUser.id,
      track_num: null
    };

    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateFile(e) {
    this.setState({data: e.currentTarget.files[0]});
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

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[data]', this.state.data);
    formData.append('song[cover_art]', this.state.cover_art);

    this.props.createSong(formData);
  }

  render() {
    return(
      <div className='uploadFormContainer'>
        <h2>Upload to SonataCloud</h2>
        <form className='uploadForm'>
          <label>Title:<br/>
            <input type='text' value={this.state.title} onChange={this.update('title')} />
          </label>
          <br />
          <label>Song File:<br />
            <input type='file' className='fileInput' onChange={this.updateFile} />
          </label>
          <br />
          <label>Cover Art:<br />
            <input type='file' className='fileInput' onChange={this.updateImage} />
          </label>
          <br />
          <label>Cover Art Preview:<br />
            <img src={this.state.cover_art_url} className='coverImagePreview'/>
          </label>
          <br />
          <button onClick={this.handleSubmit}>Upload Song</button>
        </form>
      </div>
    );
  }

}

export default Upload;
