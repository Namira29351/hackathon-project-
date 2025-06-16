import React, { useEffect, useState } from 'react';
import './Finished.css';

import bookwormIcon from '../pictures/bookworm.png';
import { Link } from 'react-router-dom';


function Finished() {

//state var(list of books), setbooks(tool to update that list)
// [] = don't run again unless component is destroyed & reloaded
const [books, setBooks] = useState([]);

useEffect(() => {
    fetch("http://localhost:3006/api/v1/finished")
    .then((res) => res.json())
    .then((data) => {
        setBooks(data);
    })
    .catch((err) => {
        console.error("Failed to fetch books from database:", err);
    });
}, []);






// handleDelete removes the book at the given position from your list and updates the list to show the change.
//takes index(tells it which book to remove), then create new list (setbooks = new list)
    const handleDelete = (indexToDelete) => {
        const bookToDelete = books[indexToDelete];

        fetch(`http://localhost:3006/api/v1/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: bookToDelete.Title}),
        })
        .then((res) => {
            if (!res.ok) throw new Error("failed to delete your book");
            const updatedBooks = books.filter((_, index) => index !== indexToDelete);
            setBooks(updatedBooks);
            alert("Book Deleted");
        })
        .catch((err) => {
            console.error("Error for deleting book:", err);
            alert("couldn't delete book");
        });
  
    };


    return (
        <div className="finished-container">

<div className="title-row">
<Link to="/" className='home-link'>
            <button className='home-button'>Back to Home Page 🏠</button>
            </Link>

        <div className='title-group'>
        <h1 className="title-text">
            <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
            <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
        </h1>
            <img src={bookwormIcon} alt="Bookworm Icon" className="title-image" />
        </div>
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
                            <td>{book.Genre}</td>
                            <td>{book.Title}</td>
                            <td>{book.Author}</td>
                            <td>{book.Rating}</td>
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