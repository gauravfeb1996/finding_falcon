import React from 'react';
import { connect } from 'react-redux';
import './Main.css';

import falcon from '../assets/falcon.svg';

import { getTokenRequest } from '../store/actions/tokenAction/getToken';
import { getPlanetsRequest } from '../store/actions/planets/getPlanets';
import { getSpaceShipsRequest } from '../store/actions/spaceShips/getSpaceShips';

class Main extends React.Component {

    componentDidMount() {
        const { requestToken, requestPlanet, requestSpaceShips } = this.props;
        requestToken();
        requestPlanet();
        requestSpaceShips();
    }

    render() {
        const { 
            token
        } = this.props;
        return (
            <div className="image-area">
                <div className="image-wrapper">
                    <img src={falcon} alt="falcon"/>
                </div>
                {token && 
                    <span>
                       {token}
                    </span>
                }
            </div>
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