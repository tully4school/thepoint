import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Ingredients/Measures";
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
						<h2>{item.drinkName}</h2>
						<img src={item.drinkThumb} />

						<ul className='categoryData'>
							<li>Alcohol:{" " + item.alcohol}</li>
							<li>Served in:{" " + item.drinkGlass}</li>
							<li>
								Ingredients:
								<span>
									<Ingredients data={item.drinkIngredients} />
								</span>
							</li>
							<li>
								Measures: <Measures data={item.drinkMeasures} />
							</li>
						</ul>
					</div>
				))}
			</div>
		);
	}
}
export default Category;
