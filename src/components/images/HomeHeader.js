import React, { Component } from "react";
import "./Images.css";

class HomeHeader extends Component {
	render() {
		return (
			<div className='homeHeader d-flex flex-column'>
				<h1>Cocktail Creator</h1>
				<h5>Find Your Favorite Drink Recipes</h5>
			</div>
		);
	}
}
export default HomeHeader;
