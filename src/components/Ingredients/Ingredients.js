import React, { Component } from "react";

class Ingredients extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log(this.props);
		let ingredients = this.props.data.map(i => {
			return i.drinkIngredients;
		});
		console.log(ingredients);
		let measures = this.props.data.map(i => {
			return i.drinkMeasures;
		});
		console.log(measures);
		let total = measures.reduce((total, field, index) => {
			total[ingredients[index]] = field;
			return total;
		}, {});
		console.log(total);
		return (
			<div>
				<ul>
					{this.props.data.map(item => (
						<li key={item.toString()}>{item + " "}</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Ingredients;
