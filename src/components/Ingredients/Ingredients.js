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
				<ul>
					{this.props.data.map(item => (
						<li>{item + " "}</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Ingredients;
