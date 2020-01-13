import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "../Search/SearchBar";
// import NavLink from "./Link.js";
const url = "http://cocktail-recipes-tully4school.herokuapp.com/drinks/";

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
			})
			.catch(err => {
				console.error(err);
			});
	}
	render() {
		return (
			<ul className='m-0'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/categories'>Categories</Link>
				</li>
				<li>
					<Link to='/add'>Add A Drink</Link>
				</li>
				<li>
					<Link to='/update'>Update A Drink</Link>
				</li>
				<li>
					<Link to='/delete'>Remove A Drink</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/Contact'>Contact</Link>
				</li>
				<li>
					<Searchbar data={this.props.data} />
				</li>
			</ul>
		);
	}
}
export default Navbar;
