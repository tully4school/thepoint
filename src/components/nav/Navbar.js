import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Searchbar from "../Search/SearchBar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
const url = "http://cocktail-recipes-tully4school.herokuapp.com/drinks/";

class MainNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			newData: [],
			filteredData: []
		};
		this.handleLink = this.handleLink.bind(this);
	}
	handleLink(path) {
		this.props.history.push(path);
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
		this.props.data.map(item => this.state.newData.push(item.drinkCategory));
		let filteredData = [...new Set(this.state.newData)];
		return (
			<Navbar bg='light' expand='lg'>
				<LinkContainer to='/'>
					<Navbar.Brand className='mx-0'>
						<Logo />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Categories' id='basic-nav-dropdown'>
							{filteredData.map(item => (
								<LinkContainer
									to={`/categories/${item}`}
									data={this.filteredData}
								>
									<NavDropdown.Item componentClass={Link}>
										{item}
									</NavDropdown.Item>
								</LinkContainer>
							))}
						</NavDropdown>
						<LinkContainer to='/add'>
							<Nav.Link>Add A Drink</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/update'>
							<Nav.Link>Update A Drink</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/delete'>
							<Nav.Link>Remove A Drink</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/contact'>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</Nav>
					<Searchbar data={this.props.data} />
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
export default MainNavbar;
