import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/feed");
		}
	}

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    const currentForm = this.props.location.pathname.slice(1);
    const newForm = newProps.location.pathname.slice(1);
    if (currentForm !== newForm) {
      this.props.clearErrors();
    }
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="login-error">
              {error}
            </li>
          ))}
          <br />
        </ul>
      );
    } else {
      return null;
    }
	}

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state).then(() => this.props.router.push("/"), errors => null);
	}

  guestLogin(e) {
    e.preventDefault();
    this.props.login({ email: "demo@demo.com", username: "demo", password: "password" }).then(() => this.props.router.push("/"));
  }

  render() {
    const action = this.props.route.path.slice(1);
    const actionText = action === "login" ? "Sign in" : "Sign up";
    const usernameInput = () => {
      if (action === "login") {
        return null;
      } else {
        return (
          <div>
            <label>Username:
              <br />
            <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input" placeholder="Username"/>
            </label>
            <br />
          </div>
        );
      }
    };
    return (
      <div className="authForm">
        <h1>SonataCloud</h1>
        {this.renderErrors()}
        <form>
          <label>
            Email Address:
            <br/>
            <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input" placeholder="Email"/>
          </label>
          <br/>
          {usernameInput()}
          <label>
            Password:
            <br/>
            <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" placeholder="Password"/>
          </label>
          <br/>
          <input type="submit" value={actionText} className="login-submit" onClick={this.handleSubmit}/>
          <input type="submit" value="Guest Login" className="login-submit" onClick={this.guestLogin}/>
        </form>
      </div>
    );
  }
}

export default AuthForm;
