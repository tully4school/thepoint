import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Searchbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faStyles from "font-awesome/css/font-awesome.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHamburger, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
// library.add(faHamburger, faPizzaSlice);

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
	componentDidUpdate() {
		if (this.state.submitted) {
			this.setState({
				submitted: false,
				results: []
			});
		}
	}
	render() {
		if (this.state.submitted) {
			return (
				<Redirect
					to={{
						pathname: "/results",
						state: { results: this.state.results }
					}}
					data={this.state.results}
				/>
			);
		}

		const { drinkName } = this.state;

		return (
			<div className='searchbar d-none d-md-flex' onSubmit={this.handleSubmit}>
				<form>
					<input
						placeholder='Name of Drink'
						type='text'
						value={drinkName}
						name='searchBar'
						className='searchbar'
						onChange={this.handleChange}
					></input>
					<button type='submit'>Search</button>
				</form>
			</div>
		);
	}
}
export default Searchbar;
