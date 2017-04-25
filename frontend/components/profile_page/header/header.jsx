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
    if(user) {
      location = user.location || "test, United States";
      bio = user.bio || "test";
    }
    if(user){
      return (
        <div className="profileHeader">
          <div className="backgroundGradient__buffer"></div>
          <div className="profileInfo">
            <div className="profilePicture">
              <img src={window.defaultUserImg} className="profilePicture" />
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
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default Header;
