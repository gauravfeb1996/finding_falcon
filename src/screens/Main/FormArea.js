import React from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import DropDown from '../../components/DropDown/DropDown';
import RadioButton from '../../components/RadioButton/RadioButton';
import Button from '../../components/Button/Button';
import './Main.css'

import { noPlanetsCanSelected } from '../../utils/constants';
import { updateShipCountRequest } from '../../store/actions/updateShipCount/upadateShipCount';
import { updateSelectedPlanet } from '../../store/actions/planets/planets';
import { updateTotalTimeRequest } from '../../store/actions/totalTIme/totalTime';


class FormArea extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            planets: new Array(noPlanetsCanSelected),
            spaceShips: new Array(noPlanetsCanSelected),
        };
    }

    handlePlanetSelectChange = (index, e) => {
        const { selectedPlanetUpdate, requestShipCountUpdate, totalTimeUpdate } = this.props;
        let value = e.target.value;
        this.setState(update(this.state, {
            planets: {
                [index]: {
                    $set: value
                }
            }
        }));
        selectedPlanetUpdate(index, value);
        if(this.state.planets[index] && this.state.spaceShips[index]){
            let spaceShipsRadio = document.getElementById("radio"+index+this.state.spaceShips[index]);
            spaceShipsRadio.value = null;
            spaceShipsRadio.checked = false;
            requestShipCountUpdate(this.state.spaceShips[index], null, index);
            this.setState(update(this.state, {
                spaceShips: {
                    [index]: {
                        $set: undefined
                    }
                }
            }));
            totalTimeUpdate(index, 0);
        }
    }

    handleSpaceShipSelectChange = (index, spaceShip) => {
        const { requestShipCountUpdate, selectedPlanets, totalTimeUpdate } = this.props;
        let value = spaceShip.name;
        let selectedSpaceShipsSpeed = spaceShip.speed;
        let selectedPlanetDistance = selectedPlanets[index].distance;
        let timeTaken = selectedPlanetDistance/selectedSpaceShipsSpeed;

        requestShipCountUpdate(this.state.spaceShips[index], value, index);
        totalTimeUpdate(index, timeTaken);
        this.setState(update(this.state, {
            spaceShips: {
                [index]: {
                    $set: value
                }
            }
        }));
    }

    render() {
        const { planets, spaceShips, selectedPlanets, handleSubmit, totalTime, selectedSpaceShips } = this.props; 
        const iterationArray = new Array(noPlanetsCanSelected).fill(0,0,noPlanetsCanSelected);

        return (
            <>
                {planets && spaceShips &&
                    <>
                        <div className="drop-down-area">
                        {iterationArray.map((value, index) => 
                            <div key={index} className="drop-down-grid">
                                <div className="drop-down-wrapper">
                                        <div className="title">
                                            <span> Destination {index+1}</span>
                                        </div>
                                        <DropDown 
                                            options={planets}
                                            id={index}
                                            handleChange={(e)=> this.handlePlanetSelectChange(index, e)}
                                            selectedPlanets = {this.state.planets}
                                        />
                                </div>
                                <div className="radio-button-wrapper">
                                    {this.state.planets[index] &&  (
                                        <>
                                            <div className="title">
                                                <span> Select Vehicle : </span>
                                            </div>
                                            <RadioButton 
                                                options={spaceShips}
                                                id={index}
                                                handleChange={(spaceShip)=> this.handleSpaceShipSelectChange(index, spaceShip)}
                                                selectedPlanets={selectedPlanets}
                                                selectedSpaceShips = {selectedSpaceShips[index]}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        </div>
                        <div className="total-time-wrapper" >
                            <span className="total-time-text" >Total Time: {totalTime}</span>
                        </div>
                        <div className="button-wrapper">
                            {(!this.state.spaceShips.includes(undefined)) && (
                                <Button 
                                    handleClick={() => handleSubmit(this.state.planets, this.state.spaceShips)}
                                    text="FIND FALCON"
                                />
                            )}
                        </div>
                    </>

                }
            </>
        );
    }
}


const mapStateToProps = state => ({
    planets: state.planets.planets,
    selectedPlanets: state.planets.selectedPlanet,
    spaceShips: state.spaceShips.spaceShips,
    selectedSpaceShips: state.spaceShips.selectedSpaceShips,
    totalTime: state.totalTime.totalTime
})
  
const mapDispatchToProps = dispatch => ({
    requestShipCountUpdate: (prevSelected, newSelected, index) => dispatch(updateShipCountRequest(prevSelected, newSelected, index)),
    selectedPlanetUpdate: (index, selectedPlanet) => dispatch(updateSelectedPlanet(index, selectedPlanet)),
    totalTimeUpdate: (index, timeTaken) => dispatch(updateTotalTimeRequest(index, timeTaken))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormArea);