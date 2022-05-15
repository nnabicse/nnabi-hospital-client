import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary text-2xl font-bold">{name}</h2>
                <p>{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try Another Date</span>
                }</p>
                <p>{slots.length} {slots.length ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                    <label disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} for="booking-modal" class="btn modal-button btn-secondary uppercase text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;