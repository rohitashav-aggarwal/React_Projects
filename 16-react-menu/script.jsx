class Menu extends React.Component {
    render() {
        let menuItems = [
          "Home",
          "About",
          "Services",
          "Portfolio",
          "Contact Us",
        ];
        return <div>
            {menuItems.map((v, k) => {
                return <div key={k}><Link label={v}/></div>
            })}
        </div>
    }
}

class Link extends React.Component {
    render() {
        const url = '/' +
            this.props.label
                .toLowerCase()
                .trim()
                .replace(' ', '-');
        return <div>
            <a href={url}>{this.props.label}</a>
            <br/>
        </div>
    }
}

ReactDOM.render(<Menu/>, document.getElementById("content"));