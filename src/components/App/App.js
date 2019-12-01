import React, { Component } from "react";
import Navbar from "../nav/Navbar";
import SearchBar from "../Search/SearchBar";
import Results from "../Results/Results";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import AddDrink from "../AddDrink/AddDrink";
import UpdateDrink from "../UpdateDrink/UpdateDrink";
import DeleteDrink from "../DeleteDrink/DeleteDrink";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";
import Contact from "../Contact/Contact";
import Drink from "../Categories/Drink";
import About from "../About/About";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
const url = "https://cocktail-recipes-tully4school.herokuapp.com/drinks";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
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
					<Route path='/' exact component={Home} />
					<Route path='/drinks' component={Drinks} />
					<Route
						path='/search'
						render={() => <SearchBar data={this.state.data} />}
					/>
					<Route path='/results' component={Results} />
					<Route path='/categories' exact component={Categories} />
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
