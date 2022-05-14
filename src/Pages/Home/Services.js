import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluride Treatment',
            img: fluoride,
            serviceDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            serviceDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            serviceDesc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center'>
                {
                    services.map(service => <Service
                        key={service._id}
                        name={service.name}
                        img={service.img}
                        serviceDesc={service.serviceDesc}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;