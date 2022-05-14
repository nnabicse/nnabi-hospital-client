import React from 'react';
import './Banner.css'
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nam nulla. Ad fuga minus debitis impedit unde maxime animi, dolorem labore praesentium et doloremque nulla aut cumque aliquid assumenda hic possimus beatae, alias vero enim ex reiciendis maiores facere corporis! Earum odit autem optio adipisci quae voluptatem necessitatibus, sed deleniti?</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;