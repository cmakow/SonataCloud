import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <HeaderContainer />
        {/* feed container? sidebar? */}
      </div>
    );
  }
}

export default ProfilePage;
