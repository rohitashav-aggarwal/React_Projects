var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// LoadWebsite Higher Order Component
//Defining an HOC, it’s only a function. You declare it with a fat arrow:
const LoadWebsite = Component => {
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
            var iFrame = document.getElementById("frame").src = this.getUrl();
        }

        render() {
            return React.createElement(Component, _extends({}, this.state, this.props));
        }
    }
    return _LoadWebsite;
};

class Button extends React.Component {
    render() {
        return React.createElement(
            "button",
            { className: "btn btn-primary", onClick: this.props.handleClick },
            this.props.label
        );
    }
}

class Link extends React.Component {
    render() {
        return React.createElement(
            "a",
            { onClick: this.props.handleClick, href: "#" },
            this.props.label
        );
    }
}

class Logo extends React.Component {
    render() {
        return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "logo.png", href: "#" });
    }
}

// Extra functionality from LoadWebsite HOC to individual components
const EnhancesButton = LoadWebsite(Button);
const EnhancesLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(EnhancesButton, null),
            React.createElement("br", null),
            React.createElement(EnhancesLink, null),
            React.createElement("br", null),
            React.createElement(EnhancedLogo, null),
            React.createElement("br", null),
            React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("content"));
