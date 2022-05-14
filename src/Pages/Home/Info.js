import React from 'react';
import './Info.css'
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard
                img={clock}
                cardTitle="Opening Hours"
                cardDesc="Open 24 hours"
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>
            <InfoCard
                img={marker}
                cardTitle="Our Locations"
                cardDesc="House # 25, 25 Road No. 2"
                bgClass="bg-accent"
            ></InfoCard>
            <InfoCard
                img={phone}
                cardTitle="Contact Us"
                cardDesc="Phone: 017xxxxxxxx"
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>
        </div>
    );
};

export default Info;