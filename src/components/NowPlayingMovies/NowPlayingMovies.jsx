import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NowPlayingMovies.scss'
import MovieCard from 'components/MovieCard/MovieCard';


NowPlayingMovies.propTypes = {

};


function NowPlayingMovies(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getNowPlayingMovies() {
            const res = await movie.getNowPlayingMovies(1);
            console.log(res);
            setData(res);
        }
        getNowPlayingMovies();
    }, [])
    if (data) {
        console.log(data);
        const movies = data.results || [];
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

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingMovies);


