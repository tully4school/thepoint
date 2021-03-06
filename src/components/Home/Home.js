import React, { Component } from "react";
import "./Home.css";
import HomeHeader from "../images/HomeHeader";
import Carousel from "../Carousel/Carousel";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	render() {
		console.log(this.props.data);
		return (
			<div>
				<div className='row'>
					<div className='d-none col-md-12'>
						<HomeHeader />
					</div>
				</div>
				<div className='row mt-5 mb-3 carousel-row'>
					<div className='d-flex col-md-12 flex-column justify-content-center'>
						<h2 className='new-cocktails'>Recent Additions</h2>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Carousel data={this.props.data} />
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
