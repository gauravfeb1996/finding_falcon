import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <span className="header-title">
                    Header
                </span>
            </div>
        );
    }
}

export default Header;