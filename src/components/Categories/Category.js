import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import "./Category.css";

const url = "http://localhost:8080/drinks/category/";
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		const value = this.props.match.params.drinkCategory;
		console.log(this.props.match.params.drinkCategory);
		fetch(`${url}${value}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
				console.log(res);
			});
	}
	render() {
		console.log(this.state.data);
		return (
			<div>
				<h1>{this.props.match.params.drinkCategory}</h1>
				{this.state.data.map((item, i) => (
					<div className='category-drinks' key={item._id}>
						<img src={item.drinkThumb} />
						<h4>{item.drinkName}</h4>
						<ul>
							<li>Alcohol:{item.alcohol}</li>
							<li>Served in:{item.drinkGlass}</li>
							<Ingredients data={item.drinkIngredients} />
						</ul>
					</div>
				))}
			</div>
		);
	}
}
export default Category;
