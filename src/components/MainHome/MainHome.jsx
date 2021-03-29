import React from 'react';
import PropTypes from 'prop-types';
import * as movie from 'api/TMDB/movie';
import PopularMovie from 'components/PopularMovie/PopularMovie';

MainHome.propTypes = {
    
};

function MainHome(props) {
    
    return (
        <div className="main">
            <p>content</p>
            <PopularMovie />
        </div>
    );
}

export default MainHome;