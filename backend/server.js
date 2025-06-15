import express from "express";
// The Express for building web APIs.
import cors from "cors";
// Middleware to allow cross-origin resource sharing.
import * as db from "./db/index.js";
// Custom database module for running SQL queries using Postgres and pg.
import "dotenv/config";
// Loads the environtment variables (database credentials and port numbers) front the .env file.
import booksRoutes from "./routes/books.js";
// Our router for our endpoints.


// The main Express application object.
const requestHandler = express();

// The port number the backend needs to listen on.
const port = process.env.PORT;

//important right here to allow cross-origin requests(without cors, browsers block that connection)
requestHandler.use(cors());

// Parses incoming JSON requests into JavaScript objects.
requestHandler.use(express.json());

// Starts the server on our 3006 port and then sends a message to our console.
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

// Mounts all routes defined in booksRoutes under the /api/v1 path. The routes define our endpoints so /api/v1 can turn into something like /api/v1/finished.
requestHandler.use("/api/v1", booksRoutes);


// This function handles the HTTP POST request to the endpoint of /api/v1/add. A new book is inserted into the dtabase using the info from the request the body (the info the user put into the frontend). Returns the new insert with a success message. The catch block only logs the error.
requestHandler.post("/api/v1/add", async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query(
            "INSERT INTO books (genre, title, author, rating, finished) values ($1, $2, $3, $4, $5) RETURNING *",
            [req.body.Genre, req.body.Title, req.body.Author, req.body.Rating, req.body.Finished]
        );
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                books: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// This function handles the HTTP DELETE request to /ap1/v1/delete. A book is deleted from the database based of the title in the request body. A succes message is shown if the book was able to be deleted.
requestHandler.delete("/api/v1/delete", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM books WHERE title = $1", [req.body.title]);
    res.status(200).json({message: "Book deleted"});
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({error: "Couldnt delete book"});
  }
});