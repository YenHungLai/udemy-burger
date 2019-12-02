// Aux component vs React.Fragment ???

// PropType Validation
import PropTypes from "prop-types";

class BurgerIngredient {...}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

// Syntax
// An array of length 3 inside the array
[Array(3)]  // Array of length 1

// Spread three arrays inside the array
[...Array(3)] // Array of length 3

// Disabled property on <button> element
<button disabled={true or false}>Less</button>

// toFixed() method
// Fixed decimal places

// Pass CSS value via props
<Logo height="11%" />
style={{height: props.height}}

// CSS modules????

// This allows you to modify your configuration
"eject": "react-scripts eject"