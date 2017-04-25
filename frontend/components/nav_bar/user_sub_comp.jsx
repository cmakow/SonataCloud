import React from 'react';
import { Link, withRouter } from 'react-router';

class userSubComp extends React.Component {
  constructor(props) {
    super(props);

    this.sendToLogin = this.sendToLogin.bind(this);
    this.sendToSignUp = this.sendToSignUp.bind(this);
  }

  sendToLogin() {
    this.props.router.push('/login');
  }

  sendToSignUp() {
    this.props.router.push('/signup');
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='userSubSection'>
          <Link to='/profile' className="navBarLink">
            <li className="profile-link">
              {this.props.currentUser.username}
            </li>
          </Link>
          <li id='logoutButtonLi'>
            <button onClick={this.props.logout} className='logoutButton'>Log Out</button>
          </li>
        </div>
      );
    } else {
      return (
        <li className="login-links">
          <button onClick={this.sendToLogin}>Sign in</button>
          <button onClick={this.sendToSignUp}>Create account</button>
        </li>
      );
    }
  }
}

export default withRouter(userSubComp);
