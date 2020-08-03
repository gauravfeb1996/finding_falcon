import React from 'react';
import { connect } from 'react-redux';
import './Main.css';

import MainContent from '../Main/MainContent';

import falcon from '../../assets/falcon.svg';

import { getTokenRequest } from '../../store/actions/tokenAction/getToken';
import { getPlanetsRequest } from '../../store/actions/planets/getPlanets';
import { getSpaceShipsRequest } from '../../store/actions/spaceShips/getSpaceShips';

class Main extends React.Component {

    componentDidMount() {
        const { requestToken, requestPlanet, requestSpaceShips } = this.props;
        requestToken();
        requestPlanet();
        requestSpaceShips();
    }

    render() {

        return (
            <React.Fragment>
                <div className="image-area">
                    <div className="image-wrapper">
                        <img src={falcon} alt="falcon"/>
                    </div>
                </div>
                <div className="main-content-area">
                    <MainContent />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = dispatch => ({
    requestToken: () => dispatch(getTokenRequest()),
    requestPlanet: () => dispatch(getPlanetsRequest()),
    requestSpaceShips: () => dispatch(getSpaceShipsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);