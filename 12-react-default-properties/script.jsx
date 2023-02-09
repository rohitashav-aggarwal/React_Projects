class CustomButton extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>;
    }
}

CustomButton.defaultProps = { buttonLabel: "Submit" };

class Content extends React.Component {
    render() {
        return (
          <div>
            <CustomButton buttonLabel={ 'Start' } />
            <CustomButton />
            <CustomButton />
          </div>
        );
    }
}

ReactDOM.render(<Content />, document.getElementById("content"));