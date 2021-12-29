class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
  }
  render() {
    return <div>{this.state.currentTime}</div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById("content"));
