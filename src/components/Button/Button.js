import React from 'react';
// import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ handleClick, ...rest}) => {

    return (
        <>
            <button className="button"
                onClick={handleClick}
            >
                SEARCH
            </button>  
        </>
    )
}


Button.propTypes = {

}

Button.defaultProps = {
}


export default Button;