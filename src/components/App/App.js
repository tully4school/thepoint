import React, { Component } from "react";
import Navbar from "../nav/Navbar";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import AddDrink from "../AddDrink/AddDrink";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";
import Contact from "../Contact/Contact";
import Drink from "../Categories/Drink";
import About from "../About/About";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
// const url = "http://cocktail-recipes-tully4school.herokuapp.com/drinks";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='main-container'>
				<nav>
					<Navbar />
				</nav>
				<main>
					<Route path='/' exact component={Home} />
					<Route path='/drinks' component={Drinks} />
					<Route path='/categories' exact component={Categories} />
					<Route path='/add' component={AddDrink} />
					<Route path='/about' component={About} />
					<Route path='/categories/:drinkCategory' exact component={Category} />
					<Route path='/contact' component={Contact} />
				</main>
			</div>
		);
	}
}
export default App;
