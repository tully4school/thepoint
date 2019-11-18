import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "../Search/SearchBar";
// import NavLink from "./Link.js";
const url = "http://localhost:8080/drinks";

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
		return (
			<ul>
				<li>
					<Link to='/'>Home</Link>
					<Link to='/categories/Cocktails'>Cocktails</Link>
					<Link to='/categories/Beer'>Beer</Link>
					<Link to='/categories/Shots'>Shots</Link>
					<Link to='/categories'>Categories</Link>
					<Link to='/add'>Add A Drink</Link>
					<Link to='/about'>About</Link>
					<Link to='/Contact'>Contact</Link>
					<Searchbar />
				</li>
			</ul>
		);
	}
}
export default Navbar;
//for (let i = 0; i < this.state.data.length; i++) {
// 	this.state.newData.push(this.state.data[i].drinkCategory);
// }
// let filteredData = [...new Set(this.state.newData)];
// return (
// 	<div>
// 		<ul>
// 			<NavLink data={filteredData} />
// 		</ul>
// 	</div>
// );
