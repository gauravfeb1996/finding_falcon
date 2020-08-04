import React from 'react';
// import PropTypes from 'prop-types';

import './DropDown.css';

const DropDown = ({ options, handleChange, disabled, id, ...rest}) => {

    return (
        <>
            <input 
                list={id} 
                name="planets" 
                id="planets" 
                className="drop-down"
                onChange={handleChange}
                disabled={disabled}
            />    
            <datalist id={id}>
                {options.map((planet, index) => 
                    <option key={index} value={planet.name} > {planet.name} </option>
                )}
            </datalist>
        </>
    )
}


DropDown.propTypes = {

}

DropDown.defaultProps = {
}


export default DropDown;