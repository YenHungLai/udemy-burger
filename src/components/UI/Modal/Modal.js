import React from "react";
import "./Modal.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const modal = props => {
	return (
		<React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className="Modal"
				style={{
					// translateY(-100vh) moves the element outside of the screen
					transform: props.show
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.show ? "1" : "0"
				}}
			>
				{props.children}
			</div>
		</React.Fragment>
	);
};

export default modal;
