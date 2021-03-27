import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/home-banner.gif'
import './Header.scss';

Header.propTypes = {

};

function Header(props) {
    return (
        <header>
            <div className="header">
                <a className="header__logo">
                    <img src="https://www.heyuguys.com/images/2020/03/netflix-logo.png" alt="logo" width="100px" />
                </a>
            </div>
        </header>
    );
}

export default Header;