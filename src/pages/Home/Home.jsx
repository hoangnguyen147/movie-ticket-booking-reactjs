import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Header from 'components/Header/Header';
import MainHome from 'components/MainHome/MainHome';
import Footer from 'components/Footer/Footer';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            <Header />
            <MainHome />
            <Footer />
        </div>
    );
}

export default Home;