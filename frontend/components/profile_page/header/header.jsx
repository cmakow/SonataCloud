import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const user = this.props.user;
    let location;
    let bio;
    let profilePictureButton;
    let headerUpdate;
    if(this.props.currentUser && user){
      if(user.id === this.props.currentUser.id) {
        location = user.location || <Link to='/profile-edit'>Add location!</Link>;
        bio = user.bio || <Link to='/profile-edit'>Add bio!</Link>;
        profilePictureButton = <Link to='/profile-edit' className='profilePicEdit'><i className="fa fa-camera" aria-hidden="true"></i> Update Profile Picture</Link>;
        headerUpdate = <div className='updateHeader'><Link to='/profile-edit' className='profilePicEdit'><i className="fa fa-camera" aria-hidden="true"></i> Update Header</Link></div>;
      } else {
        location = user.location;
        bio = user.bio;
      }
      return (
        <div className="profileHeader">
          <div className="backgroundGradient__buffer"></div>
          <div className="profileInfo">
            <div className='leftSideHeader'>
              <div className="profilePicture">
                <img src={user.prof_pic} className="profilePicture" />
                {profilePictureButton}
              </div>
              <div className="userInfo">
                <h3 className="userUsername">
                  {user.username}
                </h3>
                <br />
                <h3 className="userSubInfo">
                  {bio}
                </h3>
                <br />
                <h3 className="userSubInfo">
                  {location}
                </h3>
              </div>
            </div>
            {headerUpdate}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Header;
