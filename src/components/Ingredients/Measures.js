import React, { Component } from "react";
import { thisExpression } from "@babel/types";
class Measures extends Component {
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
export default Measures;
