class Menu extends React.Component {
    render() {
        let menuItems = ["Home", "About", "Services", "Portfolio", "Contact Us"];
        return React.createElement(
            "div",
            null,
            menuItems.map((v, k) => {
                return React.createElement(
                    "div",
                    { key: k },
                    React.createElement(Link, { label: v })
                );
            })
        );
    }
}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: url },
                this.props.label
            ),
            React.createElement("br", null)
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById("content"));
