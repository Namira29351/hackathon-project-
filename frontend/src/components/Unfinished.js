import React, {useEffect, useState } from 'react';
import './Finished.css'; //To reuse the table and buttons etc
import bookwormIcon from '../assets/bookworm.png';
import { Link } from 'react-router-dom';

function Unfinished() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3006/api/v1/unfinished")
        .then((res) => res.json())
        .then((data) => {
            setBooks(data);
        })
        .catch((err) => {
            console.error("Failed to fetch the data for unfinished books:", err);
        });
    }, []);

    return (
        <div className="finished-container">
           <div className='title-row'>
            <Link to="/" className='home-link'>
                <button className='home-button'>Home 🏠 </button>
            </Link>

            <h1 className="title-text">
                <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
                <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
            </h1>

            <img src={bookwormIcon} alt="Bookworm Icon" className='title-image'   />
           </div>


           <h1 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center'}}>Unfinished Books</h1>

           <div className='table-wrapper'>
            <table className='books-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Genre</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating ⭐</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.Genre}</td>
                            <td>{book.Title}</td>
                            <td>{book.Author}</td>
                            <td>{book.Rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
        </div>
    );
}

export default Unfinished;