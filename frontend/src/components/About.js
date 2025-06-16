import React from 'react';
import './Home.css';
import bookWorm from'../pictures/bookworm.png';
import guy from '../pictures/Guy2.png';
import './About.css';

import { Link } from 'react-router-dom';


function About() {
    return (
        <div className='home-container'>
           <div className='title-row'>

            <Link to="/" className='home-link'>
                <button className='home-button'>Back to Home 🏠</button>
            </Link>

            <div className='title-group'>
            <h1 className='about-title'>
                About the <span className='bold-word'>developers</span>
            </h1>

            <img src={bookWorm} alt="Book" className='about-book-image' />
           </div>
           </div>


           <div className='guy-images'>
            <img src={guy} alt="Developer Left" className='guy-image left' />
            <img src={guy} alt="Developer Right" className='guy-image Right' />
           </div>


           <div className='about-text-box'>
            <h2>Welcome to BookWorm!</h2>
            <h3>
                We're just two guys with a crazy idea, readers, and coders who believe that every story matters.
                What if we could help others better track and enjoy their reading journey?

            </h3>
            <h2>
                Who We Are
            </h2>

            <h3> BookWorm was built with passion and collaboration through GitHub and Visual Studio Code. Inspired by books, legos and roblox to give  every reader a structured and fun way to explore books.</h3>

           </div>
        </div>
    );
}

export default About;