import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import "../AddDrink/AddDrink.css";
class DeleteDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: ""
		};
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.delete(
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
		const { _id } = this.state;
		return (
			<form className='addDrink' onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='_id'
					placeholder='ID of the drink to be deleted'
					value={_id}
					onChange={this.handleChange}
				></input>
				<button type='submit'>Remove This Drink!</button>
			</form>
		);
	}
}
export default DeleteDrink;
