import React from 'react';
import PropTypes from 'prop-types';
import * as movie from 'api/TMDB/movie';
import PlayingMovies from 'components/NowPlayingMovies/PlayingMovies';

MainHome.propTypes = {
    
};

function MainHome(props) {
    
    return (
        <div className="main">
            <p>content</p>
            <PlayingMovies />
        </div>
    );
}

export default MainHome;