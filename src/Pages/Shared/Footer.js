import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} class="p-10 text-neutral">
            <div className='footer sm:justify-center md:justify-between lg:justify-between'>
                <div>
                    <span class="footer-title">Emergency Checkup</span>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span class="footer-title">Our Adress</span>
                    <p>263, NYC-1200 South Mad</p>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;