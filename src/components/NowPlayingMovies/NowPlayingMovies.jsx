import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NowPlayingMovies.scss'
import MovieCard from 'components/MovieCard/MovieCard';
import { connect } from 'react-redux';
import { getNowPlaying } from 'redux/actions/movie/nowPlaying';


NowPlayingMovies.propTypes = {

};


function NowPlayingMovies({movies, ...props}) {
    useEffect(() => {
        async function getNowPlayingMovies() {
            await props.getNowPlaying(1);
            console.log(props.movies);
        }
        getNowPlayingMovies();
    }, [])
    if (movies) {
        console.log(movies);
        return (
            <div className="list">
                <ul>
                    {movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <li
                                key={movie.id}
                            >
                                <p>{movie.title}</p>
                                <MovieCard
                                    id={movie.id}
                                    adult={movie.adult}
                                    backdropPath={movie.backdrop_path}
                                    originalLanguage={movie.original_language}
                                    originalTitle={movie.original_title}
                                    overview={movie.overview}
                                    popularity={movie.popularity}
                                    posterPath={movie.posterPath}
                                    releaseDate={movie.release_date}
                                    title={movie.title}
                                    video={movie.video}
                                    voteAverage={movie.vote_average}
                                    voteCount={movie.vote_count}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Chưa có hoặc đang tải dữ liệu</p>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.nowPlaying.movies
});

const mapDispatchToProps = (dispatch) => ({
    getNowPlaying: (page) => dispatch(getNowPlaying(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingMovies);


