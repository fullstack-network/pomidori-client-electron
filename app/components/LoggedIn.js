import React, { Component } from 'react';

export default class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workingState: "work",
      minutes: "1",
      seconds: "00",
    }
  }

  start() {
    this.props.turnOnLight(this.state.minutes, this.state.workingState);

    let time = this.state.minutes * 60 * 1000;

    setInterval(() => {
      time = time - 1000;

      let minutes = Math.floor(time / (60 * 1000));
      let seconds = Math.floor((time - (minutes * 60 * 1000)) / 1000);

      seconds = `0${seconds}`.slice(-2);

      this.setState({
        minutes,
        seconds,
      })

    }, 1000);
  }

  activeWhen(activeState) {
    if(this.state.workingState === activeState) {
      return "active";
    }

    return "";
  }

  changeTick(direction) {
    const minutes = parseInt(this.state.minutes);
    let newMinutes

    if (direction === "up") {
      newMinutes = minutes + 1;
    } else {
      newMinutes = minutes - 1;
    }

    this.setState({
      minutes: newMinutes
    })
  }

  changeState(newState) {
    this.setState({
      workingState: newState,
    });
  }

  render() {
    return (
      <div className={`timer ${this.state.workingState}`}>
        <div className="clock" onClick={::this.start}>
          <div className="display">
            <div className="minutes">{this.state.minutes}</div>
            <div className="seconds">{this.state.seconds}</div>
          </div>
        </div>
        <div className="buttons">
          <div className="tick minus" onClick={ () => this.changeTick("down") }>
            <span className="icon icon-down-open-big">
            </span>
          </div>

          <div className={`button ${this.activeWhen('work')}`} onClick={() => ::this.changeState('work')}>
            WORK
          </div>

          <div className={`button ${this.activeWhen('break')}`} onClick={() => ::this.changeState('break')}>
            BREAK
          </div>

          <div className="tick plus" onClick={ () => this.changeTick("up") }>
            <span className="icon icon-up-open-big">
            </span>
          </div>
        </div>
      </div>
    );
  }
}
