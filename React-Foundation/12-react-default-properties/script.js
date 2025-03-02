class CustomButton extends React.Component {
    render() {
        return React.createElement(
            "button",
            { className: "btn" },
            this.props.buttonLabel
        );
    }
}

CustomButton.defaultProps = { buttonLabel: "Submit" };

class Content extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(CustomButton, { buttonLabel: 'Start' }),
            React.createElement(CustomButton, null),
            React.createElement(CustomButton, null)
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("content"));
