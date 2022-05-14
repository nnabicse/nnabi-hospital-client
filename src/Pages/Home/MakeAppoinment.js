import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center w-full'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, facere natus magnam dolor reprehenderit minima eos quisquam? Animi culpa possimus tenetur unde accusantium inventore laudantium voluptas ducimus autem doloremque minus, eius labore facilis, dolore neque, sed atque cupiditate id totam.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppoinment;