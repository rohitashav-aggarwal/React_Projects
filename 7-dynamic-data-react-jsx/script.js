// In JSX with react components
class CurrentDateTime extends React.Component {
    render() {
        let dateTime = new Date().toLocaleString();
        // return React.createElement(
        //     'span',
        //     null,
        //     `Current date time is ${dateTime}`
        // )

        // OR in JSX
        return React.createElement(
            'span',
            null,
            'Current date time is ',
            dateTime
        );
    }
}

ReactDOM.render(React.createElement(CurrentDateTime, null), document.getElementById('content'));
