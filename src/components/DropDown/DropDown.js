import React from 'react';
import PropTypes from 'prop-types';

import './DropDown.css';

const DropDown = ({ options, ...rest}) => {
    return (
        <select className="drop-down">
            {options.map((planet, index) => 
                <option value="volvo">{planet.name}</option>
            )}
        </select>
    )
}


DropDown.propTypes = {

}

DropDown.defaultProps = {
}


export default DropDown;