import React, { Component } from "react";
// import Category from "./Category";
import { Link } from "react-router-dom";
const url = "http://localhost:8080/drinks";

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			categoryData: [],
			filteredData: []
		};
	}
	componentDidMount() {
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
			})
			.catch(err => {
				console.error(err);
			});
	}
	render() {
		// console.log(this.state.data);
		this.state.data.map(item =>
			this.state.categoryData.push(item.drinkCategory)
		);
		let filteredData = [...new Set(this.state.categoryData)];
		return (
			<div>
				{filteredData.map(item => (
					<h1 key={item}>
						<Link to={`/categories/${item}`} data={this.filteredData}>
							{item}
						</Link>
					</h1>
				))}
			</div>
		);
	}
}
export default Categories;
