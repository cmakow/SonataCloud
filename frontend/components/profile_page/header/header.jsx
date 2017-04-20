import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const currentUser = this.props.currentUser;
    return (
      <div className="profileHeader">
        <div className="backgroundGradient__buffer"></div>
        <h1>Hello {currentUser.username}</h1>
        <div className="profileInfo">
          <img src={window.defaultUserImg} className="profilePicture" />
        </div>
      </div>
    );
  }
}

export default Header;
