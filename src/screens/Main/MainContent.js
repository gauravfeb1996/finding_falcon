import React from 'react';
import { connect } from 'react-redux';
import './Main.css'

import FormArea from './FormArea';

import Button from '../../components/Button/Button';

import { findFalconRequest } from '../../store/actions/findFalcon/findFalcon';


class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showResultPage: false
        };
    }

    submit = (selectedPlanets, selectedShips) => {
        const { token, requestFindFalcone } = this.props;

        let requestData = {
            token: token,
            planet_names: selectedPlanets,
            vehicle_names: selectedShips
        }

        return new Promise((resolve,reject)=>
        {
            requestFindFalcone(requestData, resolve, reject);
        }).then(
            success=>{
                this.setState({showResultPage: true});
            }
        ).catch(
            fail=>{
                alert("Some error occurred. Please try again later");
            }
        )
    }

    startAgain = () => {
        window.location.reload();
    }

    render() {
        const { result, totalTime } = this.props;
        return (
            <>
                {this.state.showResultPage ? (
                    <div>
                        {result.status === 'success' ? (
                            <div>
                                <div className="result-messages-wrapper">
                                    <span>Success! Congratulations on finding falcon. King Shan might be pleased.</span>
                                </div>
                                <div className="result-messages-wrapper">
                                    <span>Total Time: {totalTime}</span>
                                </div>
                                <div className="result-messages-wrapper">
                                    <span>Planet found: {result.planet_name}</span>
                                </div>
                            </div>
                        ): (
                            <div className="result-messages-wrapper">
                                    <span>Oops! You failed in the quest. Better luck next time!</span>
                            </div>
                        )}
                        <div className='try-again-btn-wrapper'>
                            <Button 
                                handleClick={() => this.startAgain()}
                                text='TRY AGAIN'
                            />
                        </div>
                    </div>
                ): (    
                    <FormArea 
                        handleSubmit={(selectedPlanets, selectedShips) => this.submit(selectedPlanets, selectedShips)}
                    />
                )}
            </>
        );
    }
}


const mapStateToProps = state => ({
    token: state.token.token,
    result: state.result.result,
    totalTime: state.totalTime.totalTime
})
  
const mapDispatchToProps = dispatch => ({
    requestFindFalcone: (requestData, resolve, reject) => dispatch(findFalconRequest(requestData, resolve, reject))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);