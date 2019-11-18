import React, { Component } from "react";
import Navbar from "../nav/Navbar";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";
import Drink from "../Categories/Drink";
import About from "../About/About";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
// const url = "http://localhost:8080/drinks";
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
					<Route path='/about' component={About} />
					<Route path='/categories/:drinkCategory' exact component={Category} />
				</main>
			</div>
		);
	}
}
export default App;
