import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ handleClick, disabled, text, ...rest}) => {

    return (
        <>
            <button className="button"
                disabled={disabled}
                onClick={handleClick}
            >
                {text}
            </button>  
        </>
    )
}


Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
    text: "Button"
}


export default Button;