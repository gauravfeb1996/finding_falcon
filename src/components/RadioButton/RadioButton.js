import React from 'react';
// import PropTypes from 'prop-types';

import './RadioButton.css';

const RadioButton = ({ options, handleChange, id, selectedPlanets, selectedSpaceShips,...rest}) => {

    return (
        <>
            {options.map((spaceShip, index) => 
                <React.Fragment key={index}>
                    <div className="radio-wrapper">
                        <input 
                            className="radio-button"
                            type="radio" 
                            id={id} 
                            name={id} 
                            value={spaceShip.name} 
                            onChange={() => handleChange(spaceShip)}
                            disabled={!(spaceShip.total_no) || 
                                spaceShip.max_distance < selectedPlanets[id].distance ||
                                selectedPlanets[id+1]
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

}

RadioButton.defaultProps = {
}


export default RadioButton;