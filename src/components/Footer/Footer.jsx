import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer>
            <div className="footer">
                <div className="footer__content">
                    <p>Power by</p>
                    <h4>Nguyễn Huy Hoàng</h4>
                </div>
            </div>
        </footer>
    );
}

export default Footer;