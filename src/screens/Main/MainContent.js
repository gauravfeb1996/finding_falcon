import React from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import DropDown from '../../components/DropDown/DropDown';
import RadioButton from '../../components/RadioButton/RadioButton';
import './Main.css'

import { noPlanetsCanSelected } from '../../utils/constants';
import { updateShipCountRequest } from '../../store/actions/updateShipCount/upadateShipCount'

class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            planets: new Array(noPlanetsCanSelected),
            spaceShips: new Array(noPlanetsCanSelected)
        };
    }

    handlePlanetSelectChange = (index, e) => {
        this.setState(update(this.state, {
            planets: {
                [index]: {
                    $set: e.target.value
                }
            }
        }));
    }

    handleSpaceShipSelectChange = (index, e) => {
        const { requestShipCountUpdate } = this.props;
        let value = e.target.value;
        requestShipCountUpdate(this.state.spaceShips[index], value)
        this.setState(update(this.state, {
            spaceShips: {
                [index]: {
                    $set: value
                }
            }
        }));
    }

    render() {
        const { planets, spaceShips } = this.props; 
        const iterationArray = new Array(noPlanetsCanSelected).fill(0,0,noPlanetsCanSelected);
        return (
            <div className="drop-down-area">
                {planets && spaceShips && 
                    <>
                        {iterationArray.map((value, index) => 
                            <div key={index} className="drop-down-grid">
                                <div className="drop-down-wrapper">
                                        <DropDown 
                                            options={planets}
                                            id={index}
                                            handleChange={(e)=> this.handlePlanetSelectChange(index, e)}
                                            disabled={index!==0 && !this.state.planets[index-1]}
                                        />
                                </div>
                                <div className="radio-button-wrapper">
                                    {this.state.planets[index] && 
                                        <RadioButton 
                                            options={spaceShips}
                                            id={index}
                                            handleChange={(e)=> this.handleSpaceShipSelectChange(index, e)}
                                        />
                                    }
                                </div>
                            </div>
                        )}
                    </>
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    planets: state.planets.planets,
    spaceShips: state.spaceShips.spaceShips
})
  
const mapDispatchToProps = dispatch => ({
    requestShipCountUpdate: (prevSelected, newSelected) => dispatch(updateShipCountRequest(prevSelected, newSelected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);