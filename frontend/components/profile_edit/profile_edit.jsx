import React from 'react';
import { hashHistory } from 'react-router';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: this.props.currentUser.bio,
      location: this.props.currentUser.location,
      profile_picture: null,
      profile_picture_url: null,
      header_image: null,
      header_image_url: null,
      updating: false
    };

    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    debugger
    this.props.updateUser(formData).then(({ user }) => hashHistory.push(`/profile/${user.id}`));
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
      <div className='editProfile'>
        <h2>Edit Your Profile</h2>
        <form className='editProfileForm'>
          <div className='profileFlex'>
            <div className='profilePicSection'>
              <label><h3>Profile Picture:</h3><br />
                <input type='file' className='profileImageInput' onChange={this.updateImage('profile_picture')} />
              </label>
              <img src={profilePicPreview} className='profilePicPreview'/>
            </div>
            <div className='profileEditFormInfo'>
              <label><h3>Location:</h3><br/>
                <input type='text' value={this.state.location} onChange={this.update('location')} />
              </label>
              <br />
              <label><h3>Bio:</h3><br/>
            <textarea className='bioText' placeholder='Tell the world about yourself.' onChange={this.update('bio')} value={this.state.bio}></textarea>
              </label>
            </div>
          </div>
          <div className='headerUpload'>
            <label><h3>Header Image: </h3><br/>
              <input type='file' className='headerImageInput' onChange={this.updateImage('header_image')} />
            </label>
            <img src={headerPreview} className='headerImgPreview'/>
          </div>
          <button onClick={this.handleSubmit} className='editSubmit profileSubmit'>Update Profile</button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
