import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Ingredients/Measures";
import "./Results.css";
import "../Categories/Category.css";

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resultData: this.props.location.state.results
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			resultData: nextProps.location.state.results
		});
	}
	render() {
		return (
			<div>
				<h1>Drinks Served!</h1>
				{this.state.resultData.map(drink => (
					<div className='category-drinks' key={drink._id}>
						<h2>{drink.drinkName}</h2>
						<img src={drink.drinkThumb} alt={drink.drinkName} />

						<ul className='categoryData'>
							<li>Alcohol:{" " + drink.alcohol}</li>
							<li>Served in:{" " + drink.drinkGlass}</li>
							<li>
								Ingredients:
								<span>
									<Ingredients data={drink.drinkIngredients} />
								</span>
							</li>
							<li>
								Measures: <Measures data={drink.drinkMeasures} />
							</li>
						</ul>
					</div>
				))}
			</div>
		);
	}
}
export default Results;
