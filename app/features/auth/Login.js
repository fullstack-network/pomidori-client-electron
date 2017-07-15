import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  handleLogin() {
    const { onLogin } = this.props;

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    onLogin(email, password);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" ref="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" ref="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-actions">
            <button type="submit"
              className="btn btn-form btn-default">Cancel</button>
            <button type="submit"
              onClick={::this.handleLogin}
              className="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    );
  }
}
