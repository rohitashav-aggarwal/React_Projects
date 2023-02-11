class CustomButton extends React.Component {
  render() {
    return <button className="btn">{this.props.buttonLabel}</button>;
  }
}

//This feature of property types doesn’t enforce data types on property values
//and instead gives you a warning in your browser console.
CustomButton.propTypes = {
    buttonLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

// In this example we provided array in third button label, if we check in console
// we will see the warning saying, "expected string or number" as defined above with prop types
class Content extends React.Component {
  render() {
    return (
      <div>
        <CustomButton buttonLabel={"Start"} />
        <CustomButton buttonLabel={"Start" + 2} />
        <CustomButton buttonLabel={["Start3"]} />
      </div>
    );
  }
}

ReactDOM.render(<Content/>, document.getElementById("content"));
