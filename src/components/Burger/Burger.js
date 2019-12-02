import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
	// Produce burgerIngredient components
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			// Length of the array corresponds to the number of specific ingredient
			return [...Array(props.ingredients[igKey])].map((_, index) => (
				<BurgerIngredient key={igKey + index} type={igKey} />
			));
		})
		// Reduce the result into a single array
		.reduce((arr, el) => {
			// concat() merges two arrays and return a new array
			return arr.concat(el);
		}, []);

    // If there is no ingredients
	if (transformedIngredients.length === 0) {
		transformedIngredients = (
			<p style={{ textAlign: "center" }}>
				Please start adding ingredients!
			</p>
		);
	}

	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
