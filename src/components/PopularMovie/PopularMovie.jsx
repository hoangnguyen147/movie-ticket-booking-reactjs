import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as movie from 'api/TMDB/movie';


PopularMovie.propTypes = {
    
};


function PopularMovie(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const res = await movie.getPopularMovie(1);
            console.log(res);
            setList(res.results)
        }
        getMovies();
    }, [])
    return (
        <div>
            <p>list movie here</p>
            {
                list ? {
                    
                } : {

                }
            }
        </div>
    );
}

export default PopularMovie;