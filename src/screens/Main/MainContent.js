import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../components/DropDown/DropDown';
import RadioButton from '../../components/RadioButton/RadioButton';
import './Main.css'

class MainContent extends React.Component{

    render() {
        const { planets, spaceShips } = this.props; 
   
        return (
            <div className="drop-down-area">
                {planets && spaceShips && 
                    <>
                        <div className="drop-down-grid">
                            <div className="drop-down-wrapper">
                                    <DropDown 
                                        options={planets}
                                    />
                            </div>
                            <div className="radio-button-wrapper">
                                <RadioButton 
                                    options={spaceShips}
                                />
                            </div>
                        </div>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);