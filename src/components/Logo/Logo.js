import React from "react";
import burgerLogo from "../../assets/imgs/burger-logo.png";
import "./Logo.css";

const logo = props => (
	<div className="Logo" style={{ height: props.height }}>
		{/* Hard coding src path is not going to work after bundling */}
		<img src={burgerLogo} alt="MyBurger" />
	</div>
);

export default logo;
