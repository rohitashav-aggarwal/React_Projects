class TimeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: null, timer: null };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      console.log("Inside the timer interval.");
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({ timeLeft: timeLeft });
    }, 1000);
    console.log("Outside the timer interval.");
    return this.setState({ timeLeft: timeLeft, timer: timer });
  }

  render() {
    return React.createElement(
      "div",
      { className: "row-fluid" },
      React.createElement(
        "h2",
        null,
        "Timer"
      ),
      React.createElement(
        "div",
        { className: "btn-group", role: "group" },
        React.createElement(Button, { time: "5", startTimer: this.startTimer }),
        React.createElement(Button, { time: "10", startTimer: this.startTimer }),
        React.createElement(Button, { time: "15", startTimer: this.startTimer })
      ),
      React.createElement(TimerLabel, { time: this.state.timeLeft }),
      React.createElement(
        "audio",
        { id: "end-of-time", src: "flute_c_long_01.wav", preload: "auto" },
        " "
      )
    );
  }
}

class TimerLabel extends React.Component {
  render() {
    if (this.props.time == 0) {
      document.getElementById("end-of-time").play();
    }
    if (this.props.time == null || this.props.time == 0) return React.createElement("div", null);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Time left: ",
        this.props.time
      )
    );
  }
}

class Button extends React.Component {
  handleStartTimer(event) {
    return this.props.startTimer(this.props.time);
  }
  render() {
    return React.createElement(
      "button",
      {
        type: "button",
        className: "btn-default btn",
        onClick: this.handleStartTimer.bind(this)
      },
      this.props.time,
      " seconds"
    );
  }
}

ReactDOM.render(React.createElement(TimeWrapper, null), document.getElementById("content"));
