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
    formData.append('user[bio]', this.state.bio);
    formData.append('user[location]', this.state.location);
    formData.append('user[profile_picture]', this.state.profile_picture);
    formData.append('user[header_image]', this.state.header_image);

    this.props.updateUser(formData);
    this.setState({updating: true});
  }

  render() {

  }
}
