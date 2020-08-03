import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.css';

const RadioButton = ({ options, ...rest}) => {
    return (
        <>
            {options.map((spaceShip) => 
                <React.Fragment>
                    <div className="radio">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">{spaceShip.name} ({spaceShip.total_no})</label>
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