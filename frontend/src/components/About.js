import React from 'react';
import './Home.css';
import bookWorm from'../assets/bookworm.png';
import guy from '../assets/Guy2.png';
import './About.css';

import { Link } from 'react-router-dom';


function About() {
    return (
        <div className='home-container'>
           <div className='title-row'>

            <Link to="/" className='home-link'>
                <button className='home-button'>Back to Home 🏠</button>
            </Link>


            <h1 className='about-title'>
                About the <span className='bold-word'>developers</span>
            </h1>

            <img src={bookWorm} alt="Book" className='about-book-image' />
           </div>

           <div className='guy-images'>
            <img src={guy} alt="Developer Left" className='guy-image left' />
            <img src={guy} alt="Developer Right" className='guy-image Right' />
           </div>


           <div className='about-text-box'>
            <h3>Welcome to BookWorm!</h3>
            <p>
                We're just two guys with a crazy idea, readers, and coders who believe that every story matters.
                What if we could help others better track and enjoy their reading journey?

            </p>
            <h3>
                Who We Are
            </h3>

            <p> BookWorm was built with passion and collaboration through GitHub and vsCode. Inspired by books, legos and roblox to give  every reader a structured and fun way to explore books.</p>

           </div>
        </div>
    );
}

export default About;