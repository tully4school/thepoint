import React, { Component } from "react";
import "./Navbar.css";
import NavLink from "./Link.js";
import { Link } from "react-router-dom";
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log(this.props.data);
		let navItem = this.props.data.map(item => {
			return (
				<ul className='list' key={item}>
					<li>
						<Link to={item.replace(" / ", "")}>{item}</Link>
					</li>
				</ul>
			);
		});
		return <div>{navItem}</div>;
	}
}
export default Navbar;
// this.props.data.forEach(item, i), => {
// 		return (
//             <div className="link" key>

// 						return <div>{item}</div>;
