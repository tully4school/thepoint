import React, { Component } from "react";
import "./Category.css";
import { Link } from "react-router-dom";

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryData: this.props.data
		};
	}
	render() {
		this.props.data.map(item =>
			this.state.categoryData.push(item.drinkCategory)
		);
		let filteredData = [...new Set(this.state.categoryData)];
		console.log(filteredData);
		return (
			<div>
				{filteredData.map(item => (
					<div className='category' key={item}>
						<h4 key={item}>
							<Link to={`/categories/${item}`} data={this.filteredData}>
								{item}
							</Link>
						</h4>
					</div>
				))}
			</div>
		);
	}
}
export default Categories;
