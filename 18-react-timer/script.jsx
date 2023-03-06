class TimeWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null }
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
        return (
          <div className="row-fluid">
            <h2>Timer</h2>
            <div className="btn-group" role="group">
              <Button time="5" startTimer={this.startTimer} />
              <Button time="10" startTimer={this.startTimer} />
              <Button time="15" startTimer={this.startTimer} />
            </div>
            <TimerLabel time={this.state.timeLeft} />
            <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto">
              {" "}
            </audio>
          </div>
        );
    }
}

class TimerLabel extends React.Component {
    render() {
        if (this.props.time == 0) {
            document.getElementById("end-of-time").play();
        }
        if (this.props.time == null || this.props.time == 0)
            return <div />
        return (
          <div>
            <h1>Time left: {this.props.time}</h1>
          </div>
        );
    }
}

class Button extends React.Component {
  handleStartTimer(event) {
    return this.props.startTimer(this.props.time);
  }
  render() {
    return (
      <button
        type="button"
        className="btn-default btn"
        onClick={this.handleStartTimer.bind(this)}
      >
        {this.props.time} seconds
      </button>
    );
  }
}

ReactDOM.render(<TimeWrapper/>, document.getElementById("content"));