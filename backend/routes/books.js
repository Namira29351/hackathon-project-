import express from "express";
import { getFinished, getUnfinished, deleteBook } from "../controllers/booksController.js";
// Import the route handler functions from our controller.

const router = express.Router();
// Creating a new instance of our express router.


// Routes for HTTP GET requests to /finished and /unfinished endpoints. The getFinished and getUnfinished funtioncs handle the requests from the client.
router.get("/finished", getFinished);
router.get("/unfinished", getUnfinished); 

// Route for HTTP DELETE request to /delete endpoint. When frontend requests /delete, the deleteBook function handles the request. 
router.delete("/delete", deleteBook);


export default router;
// Exporting the router so it can be used in the main server file.