import React, { Component } from 'react';

export default class LoggedIn extends Component {
  start() {
    const minutes = this.refs.minutes.value;
    this.props.turnOnLight(minutes);
  }

  render() {
    return (
      <div>
        <h2>Logged in</h2>

        <input type="text" 
          ref="minutes" 
          className="form-control" 
          placeholder="25" />

        <button type="submit"
          onClick={::this.start}
          className="btn btn-form btn-primary">Start working</button>
      </div>
    );
  }
}
