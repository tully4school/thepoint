import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

class HomeCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
		// this.props.data.push(this.state.data);
		// console.log(this.state.data);
	}

	render() {
		let newDrinks = this.props.data.slice(
			Math.max(this.props.data.length - 20, 1)
		);
		console.log(newDrinks);

		return (
			<Carousel className='mb-5'>
				{newDrinks.map(item => (
					<Carousel.Item>
						<div
							className='carousel-background d-none d-md-flex'
							style={{
								backgroundImage: `url(${item.drinkThumb})`
							}}
						></div>
						<img
							className='carousel-img img-fluid d-flex align-items-center mt-md-3 w-sm-100'
							src={item.drinkThumb}
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>{item.drinkName}</h3>
							<p>{item.drinkIngredients}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		);
	}
}
export default HomeCarousel;
