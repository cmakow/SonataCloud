import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const currentUser = this.props.currentUser;
    const location = currentUser.location || "test, United States";
    const bio = currentUser.bio || "test";
    return (
      <div className="profileHeader">
        <div className="backgroundGradient__buffer"></div>
        <h1>Hello {currentUser.username}</h1>
        <div className="profileInfo">
          <div className="profilePicture">
            <img src={window.defaultUserImg} className="profilePicture" />
          </div>
          <div className="userInfo">
            <h3 className="userUsername">
              {currentUser.username}
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
      </div>
    );
  }
}

export default Header;
