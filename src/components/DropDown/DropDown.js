import React from 'react';
// import PropTypes from 'prop-types';

import './DropDown.css';

const DropDown = ({ options, handleChange, disabled, id, selectedPlanets, ...rest}) => {
    return (
        <>
            <div className="root">
                <label className="title" htmlFor={"planet"+id} >Destination {id+1}</label>
                <select 
                    name="planets" 
                    id={"planet"+id} 
                    className="drop-down"
                    onChange={handleChange}
                    disabled={disabled}
                    defaultValue={'DEFAULT'}
                >
                <option  value='DEFAULT' disabled/>
                {options.map((planet, index) => 
                    <option 
                        key={index} 
                        value={planet.name}
                        disabled={selectedPlanets.indexOf(planet.name)>-1}
                    > 
                        {planet.name} 
                    </option>
                )}
                </select>
            </div>
        </>
    )
}


DropDown.propTypes = {

}

DropDown.defaultProps = {
}


export default DropDown;