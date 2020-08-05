import React from 'react';
// import PropTypes from 'prop-types';

import './RadioButton.css';

const RadioButton = ({ options, handleChange, id, selectedPlanet, ...rest}) => {

    return (
        <>
            {options.map((spaceShip, index) => 
                <React.Fragment key={index}>
                    <div className="radio">
                        <input 
                            type="radio" 
                            id={id} 
                            name={id} 
                            value={spaceShip.name} 
                            onChange={handleChange}
                            disabled={!(spaceShip.total_no) || 
                                spaceShip.max_distance < selectedPlanet.distance
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