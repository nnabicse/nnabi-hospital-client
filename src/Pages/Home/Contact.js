import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import contact from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${contact})`
        }}>
            <div className='p-5'>
                <div className='text-center mb-8'>
                    <h5 className='text-xl text-primary font-bold'>Contact Us</h5>
                    <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;