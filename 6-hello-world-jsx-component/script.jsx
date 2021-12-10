// In JSX with react components
class HelloWorld extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World!!!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)