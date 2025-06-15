import * as db from "../db/index.js";

// These route handlers use the imported db to run queries in our database. The db is responsible for running the actual queries. The route handlers use Express send a JSON response back to teh frontend.

// The database gets all the books that have their "finished" column set to true. An SQL query is ran to select all the finished books and each each row is mapped to a new object. The rating field is formatted to be rounded up to one decimal point. The response is sent back as JSON object.

export const getFinished = async (req, res) => {
    try {
      const dbResponse = await db.query("SELECT * FROM books WHERE finished = true");
      const result = dbResponse.rows.map ((row) => (
        {Genre: row.genre, Title: row.title, Author: row.author, Rating: parseFloat(row.rating.toFixed(1)),
        
        }));
      res.json(result);
    } catch (error) {
      console.error("Could not show data:", error);
      res.status(500).json({ error:"Server error" });
    }
  };

// The database gets all the books that have their "finished" column set to false. An SQL query is ran to select all the unfinished books and each each row is mapped to a new object. The rating field is formatted to be rounded up to one decimal point. The response is sent back as JSON object.

export const getUnfinished = async (req, res ) => {
    try {
        const dbResponse = await db.query("SELECT * FROM books WHERE finished = false");
        const result = dbResponse.rows.map((row) => ({
            Genre: row.genre,
            Title: row.title,
            Author: row.author,
            Rating: parseFloat(row.rating.toFixed(1)),
        }));
        res.json(result);
    } catch (error) {
        console.error("couldn't show data:", error);
        res.status(500).json({ error: "Server error"})
    }
};

// This function runs an SQL query to delete the book that has the same title as the one from the request body. (when the user clicks the delete button, the title of the book is in the request body that is sent to the backend)

export const deleteBook = async (req, res) => {
  try {
    const {title} = req.body;
    await db.query("DELETE FROM books WHERE title = $1", [title]);
    res.status(200).json({message: "Book deleted"});
  } catch (error) {
    console.error("Error in deleting book:", error);
    res.status(500).json({error: "Failed to delete book"});
  }
};

