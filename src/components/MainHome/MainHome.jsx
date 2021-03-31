import React from 'react';
import PropTypes from 'prop-types';
import * as movie from 'api/TMDB/movie';
import NowPlayingMovies from 'components/NowPlayingMovies/NowPlayingMovies';

MainHome.propTypes = {
    
};

function MainHome(props) {
    
    return (
        <div className="main">
            <NowPlayingMovies />
        </div>
    );
}

export default MainHome;