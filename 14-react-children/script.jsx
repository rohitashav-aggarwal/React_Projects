// Rendering children using this.props.children gives your component power to become
// universal enough to accept any children passed to it.
class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Content>
    <div>
      <h1>Try out: </h1>
      <a href="https://chat.openai.com/" target="_blank">
        ChatGPT
      </a>
    </div>
  </Content>,
  document.getElementById("content")
);
