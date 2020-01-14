import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css";
import $ from "jquery";

class MultiCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		$("#recipeCarousel").carousel({
			interval: 2000
		});

		$(".carousel .carousel-item").each(function() {
			let next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(":first");
			}
			next
				.children(":first-child")
				.clone()
				.appendTo($(this));

			for (let i = 0; i < 2; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(":first");
				}

				next
					.children(":first-child")
					.clone()
					.appendTo($(this));
			}
		});
	}
	render() {
		return (
			<div class='container text-center my-3'>
				<h2>Our Certifications</h2>
				<div class='row mx-auto my-auto'>
					<div
						id='recipeCarousel'
						class='carousel slide w-100'
						data-ride='carousel'
					>
						<div class='carousel-inner w-100' role='listbox'>
							<div class='carousel-item active'>
								<img
									width='900'
									height='1200'
									class='d-block col-3 img-fluid'
									src='https://cdn.shopify.com/s/files/1/2304/9095/files/NMSDC.png?10873'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block col-3 img-fluid'
									src='https://cdn.shopify.com/s/files/1/2304/9095/files/DBE-ACDBE-logo.png?10873'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block col-3 img-fluid'
									src='https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block col-3 img-fluid'
									src='https://cdn.shopify.com/s/files/1/2304/9095/files/2018_WBENC_logo_text_gray.png?10873'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block col-3 img-fluid'
									src='http://novel-mg.com/assets/cert_logo.png'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block col-3 img-fluid'
									src='https://www.kriaanet.com/wp-content/uploads/2019/02/300ppi-feat-logo_feat_logo-EDWOSB.png'
								/>
							</div>
						</div>
						<a
							class='carousel-control-prev'
							href='#recipeCarousel'
							role='button'
							data-slide='prev'
						>
							<span
								class='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span class='sr-only'>Previous</span>
						</a>
						<a
							class='carousel-control-next'
							href='#recipeCarousel'
							role='button'
							data-slide='next'
						>
							<span
								class='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span class='sr-only'>Next</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default MultiCarousel;
