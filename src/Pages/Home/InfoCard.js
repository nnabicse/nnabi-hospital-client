import React from 'react';

const InfoCard = (props) => {
    const { img, cardTitle, cardDesc, bgClass } = props
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDesc}</p>
            </div>
        </div>
    );
};

export default InfoCard;