// LoadWebsite Higher Order Component
//Defining an HOC, it’s only a function. You declare it with a fat arrow:
const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = { label: "Embed in Iframe" };
            this.state.handleClick = this.handleClick.bind(this);
        }

        getUrl() {
            return "https://facebook.github.io/react/docs/top-level-api.html";
        }

        handleClick(event) {
            var iFrame = document.getElementById("frame").src =
                this.getUrl();
        }

        render() {
            return <Component {...this.state} {...this.props} />;
        }
    }
    return _LoadWebsite;
}

class Button extends React.Component {
    render() {
        return (
        <button className="btn btn-primary" onClick={this.props.handleClick}>
            {this.props.label}
        </button>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <a onClick={this.props.handleClick} href="#">
                {this.props.label}
            </a>
        );
    }
}

class Logo extends React.Component {
    render() {
        return <img onClick={this.props.handleClick} width="40" src="logo.png" href="#" />
    }
}

// Extra functionality from LoadWebsite HOC to individual components
const EnhancesButton = LoadWebsite(Button);
const EnhancesLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends React.Component {
    render() {
        return (
          <div>
            <EnhancesButton />
            <br />
            <EnhancesLink />
            <br />
            <EnhancedLogo />
            <br />
            <iframe id="frame" src="" width="600" height="500" />
          </div>
        );
    }
}

ReactDOM.render(<Content/>, document.getElementById("content"));