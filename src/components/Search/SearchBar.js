import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Searchbar.css";

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBar: "",
			results: [],
			submitted: false
		};
	}
	handleChange = e => {
		this.setState({ searchBar: e.target.value.toLowerCase() });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.data.map(item => {
			if (item.drinkName.toLowerCase().includes(this.state.searchBar)) {
				return this.state.results.push(item);
			} else {
				return null;
			}
		});
		this.setState({ submitted: true });
	};
	render() {
		if (this.state.submitted) {
			return (
				<Redirect
					to={{ pathname: "/results", state: { results: this.state.results } }}
				/>
			);
		}
		const { drinkName } = this.state;
		return (
			<div className='searchbar' onSubmit={this.handleSubmit}>
				<form>
					<input
						placeholder='Sniff Out Your Drink!'
						type='text'
						value={drinkName}
						name='searchBar'
						className='searchbar'
						onChange={this.handleChange}
					></input>
					<button type='submit'>Sniff Sniff</button>
				</form>
			</div>
		);
	}
}
export default Searchbar;
