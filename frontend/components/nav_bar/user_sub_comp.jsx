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
        <li className="profile-link">
          <Link to='/profile' className="navBarLink">{this.props.currentUser.username}</Link>
          <button onClick={this.props.logout}>Log Out</button>
        </li>
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
