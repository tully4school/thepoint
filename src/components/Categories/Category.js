import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Ingredients/Measures";
import "./Category.css";
import Modal from "../Modal/Modal";

const url =
	"https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/";
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			openModal: null
		};
	}
	componentDidMount() {
		const value = this.props.match.params.drinkCategory;
		console.log(value);
		fetch(`${url}${value}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
				console.log(res);
			})
			.catch(err => {
				console.log("there was an error...", err);
			});
	}
	render() {
		console.log(this.state.data);
		// console.log(this.state.data);
		// let ingredients = this.state.data.map(i => {
		// 	return i.drinkIngredients;
		// });
		// let measures = this.state.data.map(i => {
		// 	return i.drinkMeasures;
		// });
		// console.log(measures);
		// let total = measures.reduce((total, field, index) => {
		// 	total[ingredients[index]] = field;
		// 	return total;
		// }, {});
		// console.log(total);

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h1>{this.props.match.params.drinkCategory}</h1>
						{this.state.data.map(item => (
							<Modal
								img={
									<img
										src={item.drinkThumb}
										className='modal-img'
										alt={item.drinkName}
									/>
								}
								src={item.drinkThumb}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
// <React.Fragment>
// 	{this.state.openModal && <Backdrop />}
// 	<div>
// 		<h1>{this.props.match.params.drinkCategory}</h1>
// 		{this.state.data.map((item, i) => (
// 			<div className='category-drinks' key={item._id}>
// 				<h2 className='modal-header'>{item.drinkName}</h2>
// 				<img
// 					src={item.drinkThumb}
// 					alt={item.drinkName}
// 					onClick={this.openModalHandler}
// 				/>
// 			</div>
// 		))}
// 		{this.state.openModal && (
// 			<Modal
// 				title='Cocktail'
// 				openModal={this.state.openModalHandler}
// 				close={this.closeModalHandler}
// 			>
// 				<h2 className='modal-header'>{this.state.data.drinkName}</h2>
// 			</Modal>
// 		)}
// 	</div>
// </React.Fragment>

export default Category;
{
	/* <ul className='categoryData'>
							<li>Alcohol:{" " + item.alcohol}</li>
							<li>Served in:{" " + item.drinkGlass}</li>
							<li>
								Ingredients:
								<span>
									<Ingredients data={item.drinkIngredients} />
								</span>
							</li>
							<li>
								Measures: <Measures data={item.drinkMeasures} />
							</li>
						</ul> */
}
