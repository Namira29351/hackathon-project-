import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './AddBook.css';

import bookwormIcon from '../assets/bookworm.png';

function AddBook() {
    const [formData, setFormData] = useState({
        genre: '',
        title: '',
        author: '',
        rating: '',
        finished: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3006/api/v1/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                Genre: formData.genre,
                Title: formData.title,
                Author: formData.author,
                Rating: formData.rating,
                Finished: formData.finished,
            }),
        })
        .then((res) => {
            if (!res.ok) throw new Error("Failed to add a new book");
            alert('Book added successfully!  📚  Happy Reading! ');
            navigate('/finished');
        })
        .catch((err) => {
            console.error(err);
            alert("Error: Couldn't add a book");
        });

    };

    return (
        <div className='add-book-container'>
<div className="title-row">
        <h1 className="title-text">
            <span style={{ fontWeight: 'normal', fontFamily: 'Times New Roman, serif', fontSize: '5rem'}}>Book</span>
            <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '5rem'}}>Worm</span>
        </h1>
            <img src={bookwormIcon} alt="Bookworm Icon" className="title-image" />
        </div>
            
            <h1>Add a Book! 📖 </h1>
            <form onSubmit={handleSubmit} className='add-book-form'>
                <label>
                    Genre:
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
                </label>

                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>

                <label>
                    Author:
                    <input type="text" name="author" value={formData.author} onChange={handleChange} required />
                </label>

                <label>
                    Rating:
                    <input type="text" name="rating" value={formData.rating} onChange={handleChange} required />
                </label>

                <button type="submit" className='submit-button'>Submit</button>
                <label>
                    Finished:
                    <input
                        type="checkbox"
                        name='finished'
                        checked={formData.finished}
                        onChange={(e) =>
                            setFormData({...formData, finished: e.target.checked})
                        }
                        />
                </label>
            </form>

        </div>
    );
}

export default AddBook;