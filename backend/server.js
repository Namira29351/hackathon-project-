import express from "express";
import * as db from "./db/index.js";
import "dotenv/config";
import booksRoutes from "./routes/books.js"

const requestHandler = express();

const port = process.env.PORT;
requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


requestHandler.use("/api/v1", booksRoutes);

requestHandler.post("/api/v1/add", async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("INSERT INTO books (genre, title, author, rating) values ($1, $2, $3, $4) returning *", [req.body.Genre, req.body.Title, req.body.Author, req.body.Rating]);
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