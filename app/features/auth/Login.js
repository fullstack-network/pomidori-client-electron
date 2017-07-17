import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginMessage: "LOGIN",
      registerMessage: "OR create an account",
      loginState: "login",
    }
  }

  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  handleStateChange() {
    if (this.state.loginState === "login") {
      this.setState({
        loginMessage: "REGISTER",
        registerMessage: "back to login",
        loginState: "register",
      })
      return
    }

    this.setState({
      loginMessage: "LOGIN",
      registerMessage: "OR create an account",
      loginState: "login"
    })
  }

  handleLogin() {
    const { onLogin } = this.props;

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    onLogin(email, password, this.state.loginState);
  }

  render() {
    return (
      <div className="padded-more">
        <div className="logoContainer">
          <img src="features/auth/assets/logo.png" className="logo" />
        </div>
        <form>
          <div className="form-group">
            <input type="email" ref="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" ref="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-actions">
            <button type="submit"
              onClick={::this.handleLogin}
              className="btn btn-form btn-primary loginButton">{ this.state.loginMessage }</button>
          </div>
          <div className="form-actions create-account">
            <p className="title">
              <a href="#" onClick={ ::this.handleStateChange }>{ this.state.registerMessage }</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
