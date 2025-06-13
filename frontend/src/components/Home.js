import React from 'react';
import bookImage from'../assets/book.png';
import bookwormIcon from '../assets/bookworm.png';
import './Home.css';
import {Link} from 'react-router-dom';



// home page includess css from home.css to make it look pretty
function Home() {
  return (
    <div className="home-container">

        <div className="title-row">
            <Link to="/about" className='about-link'>
            <button className='about-button'>About the Developers 👥</button>
            </Link>

        <div className='title-group'>
        <h1 className="title-text">
            <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
            <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
        </h1>
            <img src={bookwormIcon} alt="Bookworm Icon" className="title-image" />
        </div>
        </div>

        <img src={bookImage} alt="Book" style={{ width: '250px', marginTop: '5x'}} />

        <h1 style={{ fontFamily: 'Lato, sans-serif'}}>What kind of journey are we on today?</h1>

        <div className='button-group'>
            <Link to="/finished">
                <button className="nav-button">Finished Books</button>
            </Link>
            <Link to="/unfinished">
                <button className="nav-button">Unfinished Books</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;