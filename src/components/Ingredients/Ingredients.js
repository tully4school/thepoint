import React, { Component } from "react";
import { thisExpression } from "@babel/types";
class Ingredients extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log(this.props);

		return (
			<div>
				{this.props.data.map(ingredients => (
					<span>{ingredients + " "}</span>
				))}
			</div>
		);
	}
}
export default Ingredients;
