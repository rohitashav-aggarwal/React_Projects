// Rendering children using this.props.children gives your component power to become
// universal enough to accept any children passed to it.
class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      this.props.children
    );
  }
}

ReactDOM.render(React.createElement(
  Content,
  null,
  React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Try out: "
    ),
    React.createElement(
      "a",
      { href: "https://chat.openai.com/", target: "_blank" },
      "ChatGPT"
    )
  )
), document.getElementById("content"));
