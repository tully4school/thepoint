import React, { Component } from "react";
import "./Images.css";
import BoozeHound from "../images/boozehound.jpg";
class HomeHeader extends Component {
	render() {
		return (
			<div className='homeHeader'>
				<h1>BoozeHound</h1>
				<h5>Sniff Out Your Favorite Drink Recipes</h5>
			</div>
		);
	}
}
export default HomeHeader;
