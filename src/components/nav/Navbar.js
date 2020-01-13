import React, { Component } from "react";
import "./Navbar.css";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Searchbar from "../Search/SearchBar";
// import NavLink from "./Link.js";
const url = "http://cocktail-recipes-tully4school.herokuapp.com/drinks/";

class MainNavbar extends Component {
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
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link tag={Link} to='/categories'>
							Categories
						</Nav.Link>
						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Searchbar data={this.props.data} />
				</Navbar.Collapse>
			</Navbar>
			// <ul className='m-0'>
			// 	<li>
			// 		<li>
			// 			<Link to='/'>Home</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/categories'>Categories</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/add'>Add A Drink</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/update'>Update A Drink</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/delete'>Remove A Drink</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/about'>About</Link>
			// 		</li>
			// 		<li>
			// 			<Link to='/Contact'>Contact</Link>
			// 		</li>
			// 		<li>
			// 			<Searchbar data={this.props.data} />
			// 		</li>
			// 	</li>
			// </ul>
		);
	}
}
export default MainNavbar;
