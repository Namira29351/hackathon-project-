import express from "express";
import cors from "cors";
import * as db from "./db/index.js";
import "dotenv/config";
import booksRoutes from "./routes/books.js";


const requestHandler = express();

const port = process.env.PORT;


//important right here to allow cross-origin requests(without cors, browsers block that connection)
requestHandler.use(cors());



requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


requestHandler.use("/api/v1", booksRoutes);

requestHandler.post("/api/v1/add", async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query(
            "INSERT INTO books (genre, title, author, rating, finished) values ($1, $2, $3, $4, $5) returning *",
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