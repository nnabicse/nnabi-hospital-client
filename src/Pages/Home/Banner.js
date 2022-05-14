import React from 'react';
import './Banner.css'
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nam nulla. Ad fuga minus debitis impedit unde maxime animi, dolorem labore praesentium et doloremque nulla aut cumque aliquid assumenda hic possimus beatae, alias vero enim ex reiciendis maiores facere corporis! Earum odit autem optio adipisci quae voluptatem necessitatibus, sed deleniti?</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;