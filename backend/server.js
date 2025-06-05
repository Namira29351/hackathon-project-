import express from "express";

import "dotenv/config";

const requestHandler = express();


const port = process.env.PORT;
requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


requestHandler.get("/api/v1/get-template", (req, res) => {
    res.send("Hello World!");
  });