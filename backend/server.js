import express from "express";

import "dotenv/config";
import * as db from "./db/index.js";

const requestHandler = express();


const port = process.env.PORT;
requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


requestHandler.get("/api/v1/finished", async (req, res) => {
    const dbResponse = await db.query("SELECT * FROM books WHERE finished = true");
    res.send(dbResponse);
  });