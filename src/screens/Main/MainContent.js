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


class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            planets: new Array(noPlanetsCanSelected),
            spaceShips: new Array(noPlanetsCanSelected),
            showResultPage: false
        };
    }

    handlePlanetSelectChange = (index, e) => {
        const { selectedPlanetUpdate } = this.props;
        let value = e.target.value;
        this.setState(update(this.state, {
            planets: {
                [index]: {
                    $set: value
                }
            }
        }));
        selectedPlanetUpdate(index, value)
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

    submit = () => {
       console.log("Final submit");
       this.setState({showResultPage: true});
    }

    render() {
        const { planets, spaceShips, selectedPlanets} = this.props; 
        const iterationArray = new Array(noPlanetsCanSelected).fill(0,0,noPlanetsCanSelected);

        return (
            <>
            {this.state.showResultPage ? (
                <>
                    <span>Going to be final page</span>
                </>
            ): (
                <>
                    {planets && spaceShips &&
                        <>
                            <div className="drop-down-area">
                            {iterationArray.map((value, index) => 
                                <div key={index} className="drop-down-grid">
                                    <div className="drop-down-wrapper">
                                            <DropDown 
                                                options={planets}
                                                id={index}
                                                handleChange={(e)=> this.handlePlanetSelectChange(index, e)}
                                                disabled={index!==0 && !this.state.spaceShips[index-1]}
                                            />
                                    </div>
                                    <div className="radio-button-wrapper">
                                        {this.state.planets[index] && 
                                            <RadioButton 
                                                options={spaceShips}
                                                id={index}
                                                handleChange={(e)=> this.handleSpaceShipSelectChange(index, e)}
                                                selectedPlanet={selectedPlanets[index]}
                                            />
                                        }
                                    </div>
                                </div>
                            )}
                            </div>
                            <div className="total-time-wrapper" >
                                <span className="total-time-text" >Total Time: </span>
                            </div>
                            <div className="button-wrapper">
                                <Button 
                                    handleClick={() => this.submit()}
                                />
                            </div>
                        </>

                    }
                </>
            )}
            </>
        );
    }
}


const mapStateToProps = state => ({
    planets: state.planets.planets,
    selectedPlanets: state.planets.selectedPlanet,
    spaceShips: state.spaceShips.spaceShips
})
  
const mapDispatchToProps = dispatch => ({
    requestShipCountUpdate: (prevSelected, newSelected) => dispatch(updateShipCountRequest(prevSelected, newSelected)),
    selectedPlanetUpdate: (index, selectedPlanet) => dispatch(updateSelectedPlanet(index, selectedPlanet))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);