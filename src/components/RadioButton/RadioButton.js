import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.css';

const RadioButton = ({ 
    options, 
    handleChange, 
    id, 
    disabled, 
    selectedPlanets, 
    selectedSpaceShips, 
    ...rest
    }) => {

    return (
        <>
            {options.map((spaceShip, index) => 
                <React.Fragment key={index}>
                    <div className="radio-wrapper">
                        <input 
                            className="radio-button"
                            type="radio" 
                            id={"radio"+id+spaceShip.name} 
                            name={id} 
                            value={spaceShip.name} 
                            onChange={() => handleChange(spaceShip)}
                            disabled={disabled || (!(spaceShip.total_no) || 
                                spaceShip.max_distance < selectedPlanets[id].distance)
                            }
                        />
                        <label htmlFor={id} >{spaceShip.name} ({spaceShip.total_no})</label>
                    </div>
                </React.Fragment>
            )}
        </>
    )
}


RadioButton.propTypes = {
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    selectedPlanets: PropTypes.array,
    id: PropTypes.number.isRequired
}

RadioButton.defaultProps = {
    disabled: false,
    selectedPlanets: []
}


export default RadioButton;