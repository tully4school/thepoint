import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class NavLink extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		// console.log(this.props.data);
		let navItem = this.props.data.map(item => {
			return (
				<li key={item}>
					<Link to={item.replace(" / ", "")}>{item}</Link>
				</li>
			);
		});
		// console.log(this.props.data);
		return <div>{navItem}</div>;
	}
}

export default NavLink;
