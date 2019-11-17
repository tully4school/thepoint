import React, { Component } from "react";
import "./Navbar.css";
import NavLink from "./Link.js";
const url = "http://localhost:8080/drinks";
// import { Link } from "react-router-dom";
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			newData: []
		};
	}
	componentDidMount() {
		fetch(url)
			.then(response => response.json())
			.then(response => {
				this.setState({ data: response });
				// console.log(data);
				// this.setState({ cocktails: data });
				// this.setState({ address: data.addresses[0] });
			})
			.catch(err => {
				console.error(err);
			});
	}
	render() {
		for (let i = 0; i < this.state.data.length; i++) {
			this.state.newData.push(this.state.data[i].drinkCategory);
		}
		let filteredData = [...new Set(this.state.newData)];
		// console.log(this.props.data);
		// let navItem = this.props.data.map(item => {
		// 	return (
		// 		// <ul className='list' key={item}>
		// 		<li>
		// 			<Link to={item.replace(" / ", "")}>{item}</Link>
		// 		</li>
		// 		// </ul>
		// 	);
		// });
		return (
			<div>
				<ul>
					<NavLink data={filteredData} />
				</ul>
			</div>
		);
	}
}
export default Navbar;
