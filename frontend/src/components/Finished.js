import React, { useState } from 'react';
import './Finished.css';

import bookwormIcon from '../assets/bookworm.png';
import { Link } from 'react-router-dom';


function Finished() {

//Dummy DATA FOR TABLE
    const [books, setBooks] = useState(() => {
        const stored = localStorage.getItem('books');
        return stored ? JSON.parse(stored) : [];
});


// handleDelete removes the book at the given position from your list and updates the list to show the change.
//takes index(tells it which book to remove), then create new list (setbook = new list)
    const handleDelete = (indexToDelete) => {

        const updatedBooks = books.filter((_, index) => index !== indexToDelete);
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };


    return (
        <div className="finished-container">

<div className="title-row">
<Link to="/" className='home-link'>
            <button className='home-button'>Back to Home</button>
            </Link>


        <h1 className="title-text">
            <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
            <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
        </h1>
            <img src={bookwormIcon} alt="Bookworm Icon" className="title-image" />
        </div>


        <h1 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center'}}>Finished Books</h1>


        <div className="table-wrapper">
            


            <Link to="/add">
                <button className="add-button">+ Add More Books!</button>
            </Link>
            <table className="books-table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Genre</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Rating ⭐</th>
                    <th>Delete ❌</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.genre}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.rating}</td>
                            <td>
                                <button className='delete-button' onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Finished;