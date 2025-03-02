// In order to execute JSX in browser, you need to convert it to regular JavaScript code.
// This process is called transpilation. We will setup JSX transpiler with Babel

// In JSX
// ReactDOM.render(
//     <h1>Hello World!!!</h1>,
//     document.getElementById('content')
// )

// OR Store objects created with JSX syntax in variables
let jsxSyntaxHelloWorld = React.createElement(
    'h1',
    null,
    'Hello World!!!'
);
ReactDOM.render(jsxSyntaxHelloWorld, document.getElementById('content'));
