// In JSX with react components
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Hello World!!!'
            )
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
