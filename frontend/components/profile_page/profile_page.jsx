import React from 'react';
import { Link, hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';
import FeedContainer from '../feed/feed_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.profileUserId);
  }

  componentWillReceiveProps(newProps) {
    // if(this.props.user !== newProps.user) {
    //   this.props.fetchUser(newProps.user.id);
    // }
    // infinitely looping!
  }

  render () {
    return (
      <div>
        <HeaderContainer user={this.props.user}/>
        <FeedContainer />
      </div>
    );
  }
}

export default ProfilePage;
