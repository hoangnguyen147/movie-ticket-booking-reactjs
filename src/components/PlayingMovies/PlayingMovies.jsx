import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as movie from 'api/TMDB/movie';
import './PlayingMovies.scss'
import MovieCard from 'components/MovieCard/MovieCard';


PlayingMovies.propTypes = {

};


function PlayingMovies(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getPlayingMovies() {
            const res = await movie.getPlayingMovies(1);
            console.log(res);
            setData(res);
        }
        getPlayingMovies();
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

export default PlayingMovies;