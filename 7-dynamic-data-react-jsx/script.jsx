// In JSX with react components
class CurrentDateTime extends React.Component {
    render () {
        let dateTime = new Date().toLocaleString()
        // return React.createElement(
        //     'span',
        //     null,
        //     `Current date time is ${dateTime}`
        // )
        
        // OR in JSX
        return <span>Current date time is {dateTime}</span>
    }
}

ReactDOM.render(
    <CurrentDateTime/>,
    document.getElementById('content')
)