import React, { Component } from "react";

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
						<li key={item.toString()}>{item + " "}</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Measures;
