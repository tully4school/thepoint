import React from "react";
import "./Modal.css";
const Modal = props => (
	<div className='modal'>
		<header className='modal-header'>
			<h1>{props.drinkName}</h1>
		</header>
		<section className='modal-content'>{props.children}</section>
		<section className='modal-actions'>
			<button onClick={props.close}>Close</button>
		</section>
	</div>
);

export default Modal;
