import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import logo from 'images/netflix-logo.png';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__container-logo">
                    <img src={logo} alt="logo" width="100px" />
                </a>
            </div>
        </header>
    );
}

export default Header;