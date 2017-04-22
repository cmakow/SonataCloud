import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import FeedContainer from '../feed/feed_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <HeaderContainer />
        <FeedContainer />
      </div>
    );
  }
}

export default ProfilePage;
