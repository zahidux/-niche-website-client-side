import { Button } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import LatestBikes from '../LatestBikes/LatestBikes';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LatestBikes></LatestBikes>
            <News></News>
            <Button variant="contained">Contained</Button>
            <Footer></Footer>
        </div>
    );
};

export default Home;