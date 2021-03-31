import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Header from 'components/Header/Header';
import MainHome from 'components/MainHome/MainHome';
import Footer from 'components/Footer/Footer';
import { connect } from 'react-redux';
import { getNowPlaying } from 'redux/actions/movie/nowPlaying';

Home.propTypes = {
    
};

function Home(props) {
    useEffect(() => {
        async function getNowPlayingMovies() {
            await props.getNowPlaying(1);
            console.log(props.movies);
        }
        getNowPlayingMovies();
    }, [])
    return (
        <div>
            <Header />
            <MainHome />
            <Footer />
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    getNowPlaying: (page) => dispatch(getNowPlaying(page))
});

export default connect(null, mapDispatchToProps)(Home);