import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import logo from 'images/netflix-logo.png';
import bg from 'images/bg-header.jpg';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header" style={ { backgroundImage: `url(${bg})` }} >
            <div className="header__container">
                <a className="header__container-logo">
                    <img src={logo} alt="logo" width="100px" />
                </a>
            </div>
        </header>
    );
}

export default Header;