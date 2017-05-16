import React from 'react';
import { Link, hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';
import FeedContainer from '../feed/feed_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.user_id !== newProps.params.user_id) {
      this.props.fetchUser(newProps.params.user_id);
    }
  }

  render () {
    return (
      <div>
        <HeaderContainer currentUser={this.props.currentUser}/>
        <FeedContainer user_id={this.props.params.user_id} />
      </div>
    );
  }
}

export default ProfilePage;
