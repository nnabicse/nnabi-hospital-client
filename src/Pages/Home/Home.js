import React from 'react';
import Banner from './Banner';
import BannerSecond from './BannerSecond';
import './Home.css';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerSecond></BannerSecond>
        </div>
    );
};

export default Home;