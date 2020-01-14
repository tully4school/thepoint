import React from "react";
import "./Logo.css";
import logo from "../images/C.svg";
function Logo() {
	return (
		<>
			<div className='logo d-flex'>
				<img className='img-fluid rotation mx-auto' src={logo} alt='logo'></img>
				<div className='logo-inner d-flex'>
					<img
						className='img-fluid rotation-opp mx-auto'
						src={logo}
						alt='logo'
					></img>
				</div>
			</div>
		</>
	);
}

export default Logo;
