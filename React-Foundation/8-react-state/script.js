class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log("Updating time every 1 sec...");
      // updating states
      // setState() triggers render()
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return React.createElement("div", null, this.state.currentTime);
  }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById("content"));