import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    debugger
		e.preventDefault();
		this.props.processForm(this.state);
    this.props.router.push("/");
	}

  render() {
    const actionText = this.props.route.path.slice(1) === "login" ? "Sign in" : "Sign up";
    return (
      <div className="AuthForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email Address:
            <br/>
            <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input"/>
          </label>
          <br/>
          <label>
            Password:
            <br/>
            <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input"/>
          </label>
          <br/>
          <input type="submit" value={actionText} />
        </form>
      </div>
    );
  }
}

export default AuthForm;
