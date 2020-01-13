import React, { Component } from "react";
import Navbar from "../nav/Navbar";
import SearchBar from "../Search/SearchBar";
import Results from "../Results/Results";
import Modal from "../Modal/Modal";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import AddDrink from "../AddDrink/AddDrink";
import UpdateDrink from "../UpdateDrink/UpdateDrink";
import DeleteDrink from "../DeleteDrink/DeleteDrink";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";
import Contact from "../Contact/Contact";
import About from "../About/About";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
const url = "https://cocktail-recipes-tully4school.herokuapp.com/drinks";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: true
		};
	}
	componentDidMount() {
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res, loading: false });
			})
			.catch(err => {
				console.log("there has been an error...", err);
			});
	}
	render() {
		console.log(this.state.data);
		return (
			<div className='main-container'>
				<nav>
					<Navbar data={this.state.data} />
				</nav>
				<main>
					<Route
						path='/'
						exact
						render={() => <Home data={this.state.data} />}
					/>
					<Route
						path='/drinks'
						render={() => <Drinks data={this.state.data} />}
					/>
					<Route
						path='/search'
						render={() => <SearchBar data={this.state.data} />}
					/>
					<Route path='/results' component={Results} />
					<Route
						path='/categories'
						exact
						render={() => <Categories data={this.state.data} />}
					/>
					<Route
						path='/modal'
						render={() => <Modal data={this.state.data} />}
					/>
					<Route path='/add' component={AddDrink} />
					<Route path='/update' component={UpdateDrink} />
					<Route path='/delete' component={DeleteDrink} />
					<Route path='/about' component={About} />
					<Route path='/categories/:drinkCategory' exact component={Category} />
					<Route path='/contact' component={Contact} />
				</main>
			</div>
		);
	}
}
export default App;
