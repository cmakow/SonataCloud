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
      track_num: null,
      uploading: false
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
    if(this.state.cover_art) {
      formData.append('song[cover_art]', this.state.cover_art);
    }

    this.props.createSong(formData);
    this.setState({uploading: true});
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return(
        <h3 className='errorHeader'>Oops, something went wrong! Please make sure you are uploading an mp3 file!</h3>
      );
    } else {
      return null;
    }
	}

  componentWillReceiveProps(newProps) {
    if(this.props.errors !== newProps.errors) {
      this.setState({uploading: false})
    }
  }

  render() {
    let opts = {}
    if(this.state.data && this.state.title.length > 0) {
      opts['disabled'] = '';
    } else {
      opts['disabled'] = 'disabled';
    }
    if(this.state.uploading) {
      opts['disabled'] = 'disabled';
    }
    let loader = <div></div>;
    debugger
    if(this.state.uploading) {
      loader = (<div className="loader">Loading...</div>);
    }
    return(
      <div className='uploadFormContainer'>
        <h2>Upload to SonataCloud</h2>
        {this.renderErrors()}
        <form className='uploadForm'>
          <div className='coverArtSection'>
            <label>Cover Art:<br />
              <input type='file' className='imageInput' onChange={this.updateImage} />
            </label>
            <img src={this.state.cover_art_url} className='coverImagePreview'/>
          </div>
          <div className='songInfoSection'>
            <label>Title:<br/>
              <input type='text' value={this.state.title} onChange={this.update('title')} />
            </label>
            <br />
            <label>Song File:<br />
              <input type='file' className='fileInput' onChange={this.updateFile} />
            </label>
            <br />
            <button onClick={this.handleSubmit} className='uploadSubmit' {...opts}>Upload Song</button>
            { loader }
          </div>
        </form>
      </div>
    );
  }

}

export default Upload;
