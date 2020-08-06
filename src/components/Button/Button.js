import React from 'react';
// import PropTypes from 'prop-types';

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

}

Button.defaultProps = {
}


export default Button;