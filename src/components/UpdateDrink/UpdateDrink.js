import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import "../AddDrink/AddDrink.css";
class UpdateDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: "",
			drinkName: "",
			alcohol: "",
			drinkCategory: "",
			drinkGlass: "",
			drinkIngredients: "",
			drinkMeasures: "",
			drinkThumb: ""
		};
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.put(
				`https://cocktail-recipes-tully4school.herokuapp.com/drinks/${this.state._id}`,
				this.state
			)
			.then(res => {
				console.log(res);
			})
			.then(err => {
				console.log(err);
			});
	};
	render() {
		const {
			_id,
			drinkName,
			alcohol,
			drinkCategory,
			drinkGlass,
			drinkIngredients,
			drinkMeasures,
			drinkThumb
		} = this.state;
		return (
			<form className='addDrink' onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='_id'
					placeholder='ID of the drink to be Updated'
					value={_id}
					onChange={this.handleChange}
				></input>
				<input
					type='text'
					name='drinkName'
					placeholder='Drink Name'
					value={drinkName}
					onChange={this.handleChange}
				></input>
				<input
					type='text'
					name='alcohol'
					value={alcohol}
					onChange={this.handleChange}
					placeholder='Does it have alcohol? True or False'
				></input>
				<input
					type='text'
					name='drinkCategory'
					value={drinkCategory}
					onChange={this.handleChange}
					placeholder='Drink Category'
				></input>
				<input
					type='text'
					name='drinkGlass'
					placeholder='What Type of Glass'
					value={drinkGlass}
					onChange={this.handleChange}
				></input>
				<input
					type='text'
					name='drinkIngredients'
					placeholder='Ingredients seperated by comma'
					value={drinkIngredients}
					onChange={this.handleChange}
				></input>
				<input
					type='text'
					name='drinkMeasures'
					placeholder='Measurements seperated by comma'
					value={drinkMeasures}
					onChange={this.handleChange}
				></input>
				<input
					type='text'
					name='drinkThumb'
					value={drinkThumb}
					onChange={this.handleChange}
					placeholder='Thumbail link'
				></input>
				<button type='submit'>Update This Drink!</button>
			</form>
		);
	}
}
export default UpdateDrink;