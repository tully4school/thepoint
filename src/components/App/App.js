import React, { Component } from "react";
import Navbar from "../nav/Navbar";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
const url = "http://localhost:8080/drinks";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			newData: []
		};
		// this.setData = this.setPrice.bind(this);
	}
	componentDidMount() {
		fetch(url)
			.then(response => response.json())
			.then(response => {
				this.setState({ data: response });
				// console.log(data);
				// this.setState({ cocktails: data });
				// this.setState({ address: data.addresses[0] });
			})
			.catch(err => {
				console.error(err);
			});
	}
	render() {
		for (let i = 0; i < this.state.data.length; i++) {
			this.state.newData.push(this.state.data[i].drinkCategory);
		}
		let filteredData = [...new Set(this.state.newData)];
		console.log(filteredData);
		return (
			<div className='main-container'>
				<nav>
					<Navbar data={filteredData} />
				</nav>

				<main>
					<Route
						path={filteredData}
						render={routerProps => (
							<Link
								data={this.state.data.drinkCategory}
								{...routerProps}
								{...this.state}
							/>
						)}
					/>
				</main>
			</div>
		);
	}
}

export default App;
{
	/* <Route path="/" exact render={props => <Parks {...this.state} />} />
          <Route
            path="/ParkPage/:id"
            exact
            render={routerProps => (
              <ParkPage {...this.state} {...routerProps} />
            )}
          /> */
}
