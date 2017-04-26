import React from 'react';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: "",
      location: "",
      profile_picture: null,
      profile_picture_url: null,
      header_image: null,
      header_image_url: null,
      updating: false
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateImage(field) {
    return (e) => {
      const image = e.currentTarget.files[0];
      const fileReader = new FileReader();
      const url_text = field + '_url';
      fileReader.onloadend = function () {
        this.setState({[field]: image, [url_text]: fileReader.result});
      }.bind(this);
      if(image) {
        fileReader.readAsDataURL(image);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('user[id]', this.props.currentUser.id);
    if(this.state.bio) {
      formData.append('user[bio]', this.state.bio);
    }
    if(this.state.location) {
      formData.append('user[location]', this.state.location);
    }
    if(this.state.profile_picture) {
      formData.append('user[profile_picture]', this.state.profile_picture);
    }
    if(this.state.header_image) {
      formData.append('user[header_image]', this.state.header_image);
    }
    this.props.updateUser(formData);
    this.setState({updating: true});
  }

  render() {
    let profilePicPreview;
    if(this.props.currentUser.prof_pic) {
      profilePicPreview = this.state.profile_picture_url ? this.state.profile_picture_url : this.props.currentUser.prof_pic;
    }
    let headerPreview;
    if(this.props.currentUser.header) {
      headerPreview = this.state.header_image_url ? this.state.header_image_url : this.props.currentUser.header;
    }
    return (
      <div>
        <h2>Edit Your Profile</h2>
        <form className='editProfileForm'>
          <div className='profilePicSection'>
            <label>Profile Picture:<br />
              <input type='file' className='imageInput' onChange={this.updateImage('profile_picture')} />
            </label>
            <img src={profilePicPreview} className='profilePicPreview'/>
          </div>
          <div className='profileEditFormInfo'>
            <label>Location:<br/>
              <input type='text' value={this.state.location} onChange={this.update('location')} />
            </label>
            <br />
            <label>Bio:<br/>
              <textarea className='bioText'></textarea>
            </label>
          </div>
          <div className='headerUpload'>
            <label>Header Image: <br/>
              <input type='file' className='imageInput' onChange={this.updateImage('header_image')} />
            </label>
            <img src={headerPreview} className='headerImgPreview'/>
          </div>
          <button onClick={this.handleSubmit} className='editSubmit'>Update Song</button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
