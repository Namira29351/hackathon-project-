import React, {useEffect, useState } from 'react';
import './Finished.css'; //To reuse the table and buttons etc
import bookwormIcon from '../pictures/bookworm.png';
import { Link } from 'react-router-dom';

function Unfinished() {



//fetches the list of unfini. books from backend Api 
// the data is then stored in the books state var., if fails catch err
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





// deletes a book from backend database, sending delete req. with book title
//indexToDelete: the index of the book in the local list/ then bookTitle (title of book thats to be deleted)
const handleDelete = (indexToDelete, bookTitle) => {
    fetch(`http://localhost:3006/api/v1/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: bookTitle}),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Failed to delete da book');
        }


//This part removes the deleted book from da local 'books' state to then update da UI.
// also filters out the book at the specified index then update the state
        const updatedBooks = books.filter((_, index) => index !== indexToDelete);
        setBooks(updatedBooks);
    })
    .catch((err) => {
        console.error('Error deleting da book:', err);
        alert('Couldnt delete book from database');
    });
};


    return (
        <div className="finished-container">
           <div className='title-row'>
            <Link to="/" className='home-link'>
                <button className='home-button'>Back to Home Page 🏠 </button>
            </Link>




<div className='title-group'>
            <h1 className="title-text">
                <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
                <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
            </h1>
            




            <img src={bookwormIcon} alt="Bookworm Icon" className='title-image'   />
           </div>
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
                        <th>Delete ❌</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {books.map((book, index) => (
//renders a table row for each book in da 'books' array. 
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.Genre}</td>
                            <td>{book.Title}</td>
                            <td>{book.Author}</td>

                        <td>
                            <button
                            className="delete-button"
                            onClick={() => handleDelete(index, book.Title)}>
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

export default Unfinished;