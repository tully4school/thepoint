import React, { Component } from "react";
import "./Searchbar.css";
import axios from "../../../node_modules/axios";
let url = "http://localhost:8080/drinks";

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			searchBar: ""
		};
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(url, this.state)
			.then(res => {
				console.log(res);
			})
			.then(err => {
				console.log(err);
			});
	};

	render() {
		const { drinkName } = this.state;
		return (
			<div className='searchbar'>
				<form>
					<input
						placeholder='Sniff Out Your Drink!'
						type='text'
						value={drinkName}
						name='searchBar'
						class='searchbar'
						onChange={this.handleChange}
					></input>
					<button type='submit'>Sniff Sniff</button>
				</form>
			</div>
		);
	}
}
export default Searchbar;
