import React from 'react';
import PropTypes from 'prop-types';

MovieCard.propTypes = {
    id: PropTypes.number,
    adult: PropTypes.bool,
    originalLanguege: PropTypes.string,
    originalTitle: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
};

MovieCard.defaultProps = {
    adult: false,
    originalLanguege: "en",
    originalTitle: "",
    overview: "",
    popularity: 0,
    posterPath: "/5KYaB1CTAklQHm846mHTFkozgDN.jpg",
    releaseDate: "",
    title: "",
    video: false,
    voteAverage: 0,
    voteCount: 0,
}

const baseImageUrl = process.env.REACT_APP_IMAGE_TMDB_URL;

function MovieCard(props) {
    const posterUrl = baseImageUrl + props.posterPath;
    console.log(posterUrl);
    return (
        <div className="card" style={{ backgroundImage: `url(${posterUrl})`}}>
            
        </div>
    );
}

export default MovieCard;